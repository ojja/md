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
import useShoppingCart from "~/stores/cartStore";

export default function Checkout() {
    const { t, i18n } = useTranslation();
    const { cartItems, cartQuantity, resetCart, cartQuantityTotal } = useShoppingCart();

    const [stepOne, setStepOne] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const products = Object.values(cartItems).map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
    }));
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        street: '',
        city: 'egy',
        neighborhood: '',
        area: '',
        building_no: '',
        floor_no: '',
        apartment_no: '',
        property_type: 'apartment',
        terms: '',
        shipping_method: 'delivery',
        pick_from_branch: '',
        order_date: '',
        shipping_fee: 0,
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        street: '',
        city: '',
        neighborhood: '',
        area: '',
        building_no: '',
        floor_no: '',
        apartment_no: '',
        property_type: '',
        terms: '',
        order_date: '',
    });
    const isValidEmail = (email: any) => {
        const trimmedEmail = email.trim();
        if (trimmedEmail === '') {
            return false;
        }
        const parts = trimmedEmail.split('@');
        if (parts.length !== 2) {
            return false;
        }
        const [localPart, domainPart] = parts;
        if (localPart === '' || domainPart === '') {
            return false;
        }
        if (!domainPart.includes('.')) {
            return false;
        }
        return true;
    };
    const isValidPhoneNumber = (phoneNumber: any) => {
        const digitsOnly = phoneNumber.replace(/\D/g, '');
        return digitsOnly.startsWith('0') && digitsOnly.length === 11;
    };
    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            emailAddress: '',
            street: '',
            city: '',
            neighborhood: '',
            area: '',
            building_no: '',
            floor_no: '',
            apartment_no: '',
            property_type: '',
            terms: '',
            pick_from_branch: '',
            order_date: '',
        };

        if (formData.firstName.trim() === '') {
            newErrors.firstName = i18n.language === 'ar' ? 'يجب ادخال الاسم الأول' : 'First name is required';
            isValid = false;
        }

        if (formData.lastName.trim() === '') {
            newErrors.lastName = i18n.language === 'ar' ? 'يجب ادخال اسم العائلة' : 'Last name is required';
            isValid = false;
        }

        if (formData.phoneNumber.trim() === '') {
            newErrors.phoneNumber = i18n.language === 'ar' ? 'يجب ادخال رقم الهاتف' : 'Phone number is required';
            isValid = false;
        } else if (!isValidPhoneNumber(formData.phoneNumber)) {
            newErrors.phoneNumber = i18n.language === 'ar' ? 'صيغة رقم الهاتف غير صحيحة' : 'Invalid phone number format';
            isValid = false;
        }

        if (formData.emailAddress.trim() === '') {
            newErrors.emailAddress = i18n.language === 'ar' ? 'يجب ادخال البريد الإلكتروني' : 'Email address is required';
            isValid = false;
        } else if (!isValidEmail(formData.emailAddress)) {
            newErrors.emailAddress = i18n.language === 'ar' ? 'صيغة البريد الإلكتروني غير صحيحة' : 'Invalid email address format';
            isValid = false;
        }
        if (formData.order_date.trim() === '') {
            newErrors.order_date = i18n.language === 'ar' ? 'يجب ادخال تاريخ التوصيل' : 'Order Date is required';
            isValid = false;
        }
        if (formData.shipping_method === 'delivery') {
            if (formData.street.trim() === '') {
                newErrors.street = i18n.language === 'ar' ? 'يجب ادخال اسم الشارع' : 'Street is required';
                isValid = false;
            }
            if (formData.city.trim() === '') {
                newErrors.city = i18n.language === 'ar' ? 'يجب ادخال المدينة' : 'City is required';
                isValid = false;
            }
            if (formData.neighborhood.trim() === '') {
                newErrors.neighborhood = i18n.language === 'ar' ? 'يجب ادخال الحي' : 'Neighborhood is required';
                isValid = false;
            }
            if (formData.area.trim() === '') {
                newErrors.area = i18n.language === 'ar' ? 'يجب ادخال المنطقة' : 'Area is required';
                isValid = false;
            }
            if (formData.building_no.trim() === '') {
                newErrors.building_no = i18n.language === 'ar' ? 'يجب ادخال رقم المبنى' : 'Building No. is required';
                isValid = false;
            }
            if (formData.floor_no.trim() === '') {
                newErrors.floor_no = i18n.language === 'ar' ? 'يجب ادخال رقم الطابق' : 'Floor is required';
                isValid = false;
            }
            if (formData.apartment_no.trim() === '') {
                newErrors.apartment_no = i18n.language === 'ar' ? 'يجب ادخال رقم الشقة' : 'Apartment is required';
                isValid = false;
            }
        } else {
            if (formData.pick_from_branch.trim() === '') {
                newErrors.pick_from_branch = i18n.language === 'ar' ? 'يجب اختيار الفرع' : 'Choose Branch is required';
                isValid = false;
            }
        }
        if (!formData.terms && !stepOne) {
            newErrors.terms = 'Please accept the Terms & Conditions';
            isValid = false;
        }
        setErrors(newErrors);
        scrollToFirst();
        console.log('calling validateForm');
        return isValid;
    };

    const handleChange = (e: any, inputType: string) => {
        let value = e.target.value;

        if (inputType === 'checkbox') {
            value = e.target.checked;
        }

        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: value,
        }));
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const apiUrl = `${API_ENDPOINT}/checkout.php`;
        const requestBody = {
            api_key: 'r@U*uQ@R5%3#4Rm4uR09x6uvax%l',
            api_secret: 'z7IrTvl$O*C57UHI4J#vrJ02A7nL',
            billing_address: [
                {
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.emailAddress,
                    phone: formData.phoneNumber,
                    address: formData.street,
                    city: formData.area,
                    state: formData.neighborhood,
                    building_no: formData.building_no,
                    floor_no: formData.floor_no,
                    apartment_no: formData.apartment_no,
                    property_type: formData.property_type,
                    shipping_method: formData.shipping_method,
                },
            ],
            products,
            shipping_fees: formData.shipping_fee,
            coupon_code: 'mitchcoupon',
        };
        if (validateForm()) {
            try {
                setIsLoading(true);
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    body: JSON.stringify(requestBody),
                });

                if (response.ok) {
                    const responseData: any = await response.json();
                    console.log('responseData', responseData)
                    console.log('API call successful');
                    if (responseData.status === 'success' && responseData.code === '200') {
                        const orderID = responseData.order_id;
                        console.log('API 200');
                        const thanksURL = `/thanks?orderID=${orderID}`;
                        setTimeout(() => {
                            resetCart();
                            window.location.href = thanksURL;
                        }, 2000);
                    } else {
                        console.log('API call failed');
                    }
                } else {
                    console.log('API call failed');
                }
            } catch (error) {
                console.log('An error occurred', error);
            }
        } else {
            console.log('Form is invalid');
            // setIsLoading(false);
        }
    };

    const scrollToFirst = () => {
        setTimeout(() => {
            const element = document.querySelector('.border-red-500') as HTMLElement;
            if (element) {
                const rect = element.getBoundingClientRect();
                const offset = window.pageYOffset + rect.top - 100;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            } else {
                const parent = document.querySelector('.checkout-form') as HTMLElement;
                const rect = parent.getBoundingClientRect();
                const offset = window.pageYOffset + rect.top - 100;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        }, 500);
    }
    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            if (!stepOne && !formData.terms) {
                console.log('Terms not accepted');
                setIsLoading(false);
                return;
            }

            const isValid = validateForm();

            if (isValid) {
                setStepOne(false);
            } else {
                console.log('Form is invalid');
            }
            setIsLoading(false);
        }, 2000);
    };

    useEffect(() => {
        setTimeout(() => {
            console.log('EFfext set load')
            setIsLoading(false);
        }, 1000);
    }, []);
    return (

        <div className=" mx-auto">
            {cartItems?.length > 0 ? (
                <>
                    <div className="bg-white md:hidden w-full py-4 px-5 relative block">
                        <div className=" pb-3">
                            <h1 className=" text-2xl font-semibold">{t('checkout.checkout')}</h1>
                        </div>
                        <nav className="flex">
                            <ol role="list" className="flex flex-wrap items-center text-gray-400 gap-y-2 gap-x-2 sm:gap-y-0">
                                <li>
                                    <div className="-m-1">
                                        <Link to="/cart" className="flex items-center p-1 leading-3">
                                            سلة التسوق
                                            <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-sm font-bold text-white bg-gray-400 rounded-full pt-[3px]">{cartQuantityTotal}</span>
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.94278 7.5153C4.88865 7.56691 4.84556 7.62897 4.81611 7.69773C4.78667 7.76648 4.77148 7.8405 4.77148 7.9153C4.77148 7.99009 4.78667 8.06411 4.81611 8.13286C4.84556 8.20162 4.88865 8.26368 4.94278 8.3153L10.6568 14.0293L11.4568 13.2293L6.14278 7.9153L11.4568 2.60063L10.6568 1.80063L4.94278 7.5153Z" fill="#777777" />
                                        </svg>

                                        <div className="-m-1">
                                            <span className={`p-1 ml-2 cursor-pointer ${stepOne ? 'font-semibold text-black' : ''}`} onClick={() => setStepOne(true)}> بيانات العميل </span>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.94278 7.5153C4.88865 7.56691 4.84556 7.62897 4.81611 7.69773C4.78667 7.76648 4.77148 7.8405 4.77148 7.9153C4.77148 7.99009 4.78667 8.06411 4.81611 8.13286C4.84556 8.20162 4.88865 8.26368 4.94278 8.3153L10.6568 14.0293L11.4568 13.2293L6.14278 7.9153L11.4568 2.60063L10.6568 1.80063L4.94278 7.5153Z" fill="#777777" />
                                        </svg>

                                        <div className="-m-1">
                                            <span className={`p-1 ml-2 cursor-pointer ${!stepOne ? 'font-semibold text-black' : ''}`} onClick={handleClick}> طريقة الدفع </span>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row">

                        <div className="first bg-white md:w-[66%] w-full md:pt-12 pt-4 px-4 md:px-0  pb-10 relative">
                            <div className=" max-w-[700px] m-auto">
                                <div className="pb-10 md:block hidden">
                                    <h1 className="text-4xl font-semibold">{t('checkout.checkout')}</h1>
                                </div>
                                <nav className="mb-10 md:flex hidden">
                                    <ol role="list" className="flex flex-wrap items-center text-gray-400 gap-y-2 gap-x-2 sm:gap-y-0">
                                        <li>
                                            <div className="-m-1">
                                                <Link to="/cart" className="flex items-center p-1 leading-3">
                                                    سلة التسوق
                                                    <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-sm font-bold text-white bg-gray-400 rounded-full pt-[3px]">{cartQuantityTotal}</span>
                                                </Link>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="flex items-center">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.94278 7.5153C4.88865 7.56691 4.84556 7.62897 4.81611 7.69773C4.78667 7.76648 4.77148 7.8405 4.77148 7.9153C4.77148 7.99009 4.78667 8.06411 4.81611 8.13286C4.84556 8.20162 4.88865 8.26368 4.94278 8.3153L10.6568 14.0293L11.4568 13.2293L6.14278 7.9153L11.4568 2.60063L10.6568 1.80063L4.94278 7.5153Z" fill="#777777" />
                                                </svg>

                                                <div className="-m-1">
                                                    <span className={`p-1 ml-2 cursor-pointer ${stepOne ? 'font-semibold text-black' : ''}`} onClick={() => setStepOne(true)}> بيانات العميل </span>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="flex items-center">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.94278 7.5153C4.88865 7.56691 4.84556 7.62897 4.81611 7.69773C4.78667 7.76648 4.77148 7.8405 4.77148 7.9153C4.77148 7.99009 4.78667 8.06411 4.81611 8.13286C4.84556 8.20162 4.88865 8.26368 4.94278 8.3153L10.6568 14.0293L11.4568 13.2293L6.14278 7.9153L11.4568 2.60063L10.6568 1.80063L4.94278 7.5153Z" fill="#777777" />
                                                </svg>

                                                <div className="-m-1">
                                                    <span className={`p-1 ml-2 cursor-pointer ${!stepOne ? 'font-semibold text-black' : ''}`} onClick={handleClick}> طريقة الدفع </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                                <div className=" w-full">
                                    <form onSubmit={handleSubmit} className="checkout-form">
                                        {stepOne ?
                                            <div className=" step-one">
                                                {isLoading ? (
                                                    <div className="absolute z-20 flex items-start justify-center pt-20 bg-gray-200 bg-opacity-75 -inset-4">
                                                        <Loader />
                                                    </div>
                                                ) : ('')}

                                                <h2 className="mb-5 flex justify-between items-center md:text-2xl text-base font-bold pb-4 border-b border-[#D1D1D1] text-black">{t('checkout.shipping_information')}
                                                    <span className=" md:text-base text-sm text-gray-50 font-semibold flex flex-row-reverse gap-x-1">  <Link to='' className=" text-green-400 underline">تسجيل الدخول</Link>هل لديك حساب بالفعل؟ </span>

                                                </h2>

                                                <ShippingInfo formData={formData} handleChange={handleChange} errors={errors} />

                                                <h2 className="pt-5 mt-5 pb-4 border-b border-[#D1D1D1] mb-5 md:text-2xl text-base font-bold text-black ">{t('checkout.choose_order_date')}</h2>
                                                <TimeSlot formData={formData} handleChange={handleChange} errors={errors} />

                                                <h2 className="pt-5 mt-5 mb-5 md:text-2xl text-base pb-4 border-b border-[#D1D1D1] font-bold text-black ">{t('checkout.shipping_method')}</h2>
                                                <ShippingOptions formData={formData} handleChange={handleChange} errors={errors} />
                                                <hr className="w-full h-[1px] bg-[#C6C6C6] absolute left-0 right-0" />
                                                <Button
                                                    name={t('common.next_step')}
                                                    width="full"
                                                    extraclass=" mt-[140px] leading-5"
                                                    onClick={handleClick}
                                                />
                                            </div>
                                            :
                                            <div className="step-two">
                                                <PaymentMethod />
                                                <div className="flex items-center mt-7 mb-16">
                                                    <input
                                                        id="default-checkbox"
                                                        type="checkbox"
                                                        value={formData.terms}
                                                        className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded ${errors.terms && 'border-red-500'}`}
                                                        name="terms"
                                                        onChange={(e) => handleChange(e, 'checkbox')}

                                                    />
                                                    <label htmlFor="default-checkbox" className="ml-2 text-xl font-semibold text-black">{t('checkout.terms')}</label>
                                                </div>
                                                {errors.terms && <p className="mt-1 text-xs text-red-500">{errors.terms}</p>}

                                                <hr className="w-full h-[1px] bg-[#C6C6C6] absolute left-0 right-0" />
                                                <Button
                                                    name='اتمام الطلب'
                                                    width="full"
                                                    extraclass=" mt-[110px] leading-5"
                                                    type="submit"
                                                />
                                            </div>
                                        }

                                    </form>
                                </div>
                            </div>

                        </div>
                        <div className="second bg-green-300 md:w-[44%] w-full md:py-36 md:px-0 py-6 px-4 flex justify-center">
                            <CartSummary rate={formData.shipping_fee} />
                        </div>
                    </div>
                </>

            ) : (
                <div className='flex mt-auto items-center justify-center min-h-[400px] flex-col'>
                    <p className="text-lg text-slate-500">Your cart is currently empty.</p>
                    <Link to='/products' className="inline-flex justify-center px-4 py-2 mt-5 text-sm font-semibold text-white capitalize rounded-lg bg-slate-900 hover:bg-slate-700">continue shopping</Link>
                </div>
            )}

        </div>
    );
}


export const meta: MetaFunction = () => {
    return {
        title: `Checkout - ${Site_Title}`
    }
}