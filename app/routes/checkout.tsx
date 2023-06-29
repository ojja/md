import { Link } from "@remix-run/react";
import Button from "~/components/Button";
import CartSummary from "~/components/checkout/CartSummary";
import ShippingInfo from "~/components/checkout/ShippingInfo";
import ShippingOptions from "~/components/ShippingOptions";
import TimeSlot from '~/components/TimeSlot';
import { MetaFunction } from "@remix-run/node";
import { API_ENDPOINT, Site_Title } from "~/config";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PaymentMethod from "~/components/PaymentMethod";
import Loader from "~/components/Loader";
import { useShoppingCart } from "~/stores/cartStore";
import ThreedsChallengeRedirectComponent from "~/components/payments/ThreedsChallengeRedirectComponent";
import Popup from "~/components/Popup";
import { useForm } from "react-hook-form";
import Nav from "~/components/checkout/Nav";

export default function Checkout() {
  const { t, i18n } = useTranslation();
  const { cartItems, cartQuantity, resetCart } = useShoppingCart();
  const { register, handleSubmit, watch, setValue, trigger, reset, formState: { errors } } = useForm();

  const [stepOne, setStepOne] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [responseCreditCard, setResponseCreditCard] = useState<any>(null);
  const [isOTP, setIsOTP] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const items = Object.values(cartItems).map((item) => ({
    itemID: item.id,
    qty: item.quantity,
  }));

  const formData = watch();
  //   const isStepOne = Object.values(formData).every((value) => value !== "");
  // console.log(formData);
  // console.log(formErrors);
  console.log("errors>>", errors);

  const handleClick = async () => {
    console.log('errors  nefore in CLICK', errors)

    const output = await trigger([
      'first_name',
      'last_name',
      'email',
      'phone',
      'order_date',
      'shipping_method',
      'full_address',
      'area_id',
      'gov_id',
      'country',
      'building_no',
      'floor',
      'apartment',
      'building_number',
      'pick_from_branch'
    ]);
    console.log('output', output)
    if (output == true) {
      setStepOne(false);
    }
  };

  const onSubmit = async (formData) => {
    console.log("formData:", formData); // Access form data here
    setIsLoading(true);

    if (Object.keys(errors).length === 0) {
      const apiUrl = `${API_ENDPOINT}/checkout.php`;
      const requestBody = {
        billing: {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          address_1: formData.full_address,
          area: formData.area_id,
          gov: formData.gov_id,
          country: formData.country,
          building_no: formData.building_no,
          floor: formData.floor,
          building_number: formData.building_number,
          apartment: formData.apartment,
          property_type: formData.property_type,
          shipping_method: formData.shipping_method,
          pick_from_branch: formData.pick_from_branch,
        },
        items,
        shipping: {
          rate: formData.shipping_fee,
        },
        order: {
          customerID: 0,
        },
      };

      if (formData.payment_method === "COD") {
        requestBody.payment = {
          method: "COD",
          orderformData: {
            amount: 150,
            currency: "EGP",
          },
        };
      } else if (formData.payment_method === "CC") {
        requestBody.payment = {
          method: "CC",
          orderData: {
            amount: 150,
            currency: "EGP",
          },
          sessionID: formData.sessionId,
        };
      }

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify(requestBody),
        });

        if (response.ok) {
          const responseData: any = await response.json();
          console.log("responseData", responseData);
          console.log("API call successful");
          if (
            responseData.status === "success" &&
            responseData.code === "200"
          ) {
            const orderID = responseData.order_id;
            console.log("API 200");
            const thanksURL = `/thanks?orderID=${orderID}`;
            setTimeout(() => {
              resetCart();
              window.location.href = thanksURL;
            }, 2000);
          } else if (
            responseData.status === "success" &&
            responseData.hasOwnProperty("html")
          ) {
            setIsOTP(true);
            setResponseCreditCard(responseData);
          } else {
            console.log("API call failed");
          }
        } else {
          console.log("API call failed");
        }
      } catch (error) {
        console.log("An error occurred", error);
      }
    } else {
      console.log("Form is invalid");
      console.log("formData >> ", formData);
    }

    setIsLoading(false);
  };

  let isStepOne = true;
  console.log('isStepOne', isStepOne)
  console.log('watch formData> ', formData)
  // const handleClick = () => {
  //   // setIsLoading(true);
  //   console.log("formData:", formData);
  //   setTimeout(() => {
  //     if (!isStepOne && !watch('terms')) {
  //       console.log('Terms not accepted');
  //       setIsLoading(false);
  //       return;
  //     }
  //     // setIsLoading(false);
  //   }, 2000);
  // };
  useEffect(() => {
    setTimeout(() => {
      console.log('Effect set load')
      setIsLoading(false);
      // console.log('data', formData)
    }, 1000);
  }, []);

  return (
    <div className="p-8 mx-auto bg-white">
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="pb-10">
          <h1 className="text-4xl font-semibold">{t('checkout.checkout')}</h1>
        </div>
        <div className="relative">
          {cartItems?.length > 0 ? (
            <>
              <Nav stepOne={stepOne} setStepOne={setStepOne} handleClick={handleClick}/>
              <div className="flex flex-col-reverse items-start md:flex-row">
                <div className="relative w-full max-w-4xl p-4 bg-white border rounded-md">
                  <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
                    {stepOne ?
                      <div className="relative step-one">
                        {isLoading ? (
                          <div className="absolute z-20 flex items-start justify-center pt-20 bg-gray-200 bg-opacity-75 -inset-4">
                            <Loader />
                          </div>
                        ) : ('')}
                        <h2 className="mb-5 text-lg font-medium text-gray-900">{t('checkout.shipping_information')}</h2>

                        <ShippingInfo register={register} errors={errors} />

                        <h2 className="pt-5 mt-5 mb-5 text-lg font-medium text-gray-900 border-t-2">{t('checkout.choose_order_date')}</h2>
                        <TimeSlot register={register} errors={errors} setValue={setValue} watch={watch} />

                        <h2 className="pt-5 mt-5 mb-5 text-lg font-medium text-gray-900 border-t-2">{t('checkout.shipping_method')}</h2>
                        <ShippingOptions register={register} errors={errors} setValue={setValue} watch={watch} />
                        <Button
                          name={t('common.next_step')}
                          width="full"
                          extraclass="mt-5 leading-5"
                          onClick={handleClick}
                        />
                        {errorMessage &&
                          <p className="text-red-500">{errorMessage}</p>
                        }
                      </div>
                      :
                      <div className="step-two">
                        {isOTP && (
                          <Popup isOpen={isOTP}>
                            <ThreedsChallengeRedirectComponent response={responseCreditCard} />
                          </Popup>
                        )}
                        <PaymentMethod register={register} errors={errors} setValue={setValue} watch={watch} handleSubmit={handleSubmit} />
                        <div className="flex items-center pt-3 mt-3 border-t-2">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded ${errors.terms && 'border-red-500'}`}
                            {...register('terms', {
                              required: { value: true, message: t('fields.terms_required') }
                            })}
                          />
                          <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">{t('checkout.terms')}</label>
                        </div>
                        {errors.terms && errors.terms.type === "required" && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.terms.message}
                          </p>
                        )}
                        <Button
                          name={t('common.submit')}
                          width="full"
                          extraclass="mt-5 leading-5"
                          type="submit"
                        />
                      </div>
                    }

                  </form>
                </div>
                <CartSummary rate={watch('shipping_fee')} />
              </div>
            </>
          ) : (
            <div className='flex mt-auto items-center justify-center min-h-[400px] flex-col'>
              <p className="text-lg text-slate-500">Your cart is currently empty.</p>
              <Link to='/products' className="inline-flex justify-center px-4 py-2 mt-5 text-sm font-semibold text-white capitalize rounded-lg bg-slate-900 hover:bg-slate-700">continue shopping</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export const meta: MetaFunction = () => {
  return {
    title: `Checkout - ${Site_Title}`
  }
}