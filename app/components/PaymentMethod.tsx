import { memo, useEffect, useState } from "react";
import { RiRadioButtonLine, RiCheckboxBlankCircleLine } from "react-icons/ri";
import PaymentForm from "./PaymentForm";

const PaymentMethod = ({ formData, handleChange, register, setValue, errors, onSubmit, watch }: any) => {
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [renderCount, setRenderCount] = useState(0);

    // const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const paymentMethod = event.target.value;
    //     setShowPaymentForm(paymentMethod === "CC");
    // };
    console.log('OJJA 1');
    // useEffect(() => {
    //     setRenderCount((prevCount) => prevCount + 1);
    // }, []);

    // console.log("PaymentMethod render count:", renderCount);
    const payment_method = watch("payment_method");
    console.log("payment_method:", payment_method);
    return (
        <>
            <h3 className='mb-2 text-lg font-medium text-gray-900'>
                Payment Method
            </h3>
            <ul className=''>
                <li className='py-2'>
                    <label htmlFor="Credit_Card" className='block text-gray-900 peer-checked:text-blue-600'>
                        <div className="relative flex flex-col py-1 pl-3">
                            <input
                                type="radio"
                                name="payment_method"
                                id="Credit_Card"
                                className="hidden peer"
                                value="CC"
                                {...register("payment_method")}
                            />
                            <div className='invisible peer-checked:visible absolute left-0 top-1 mt-0.5'>
                                <RiRadioButtonLine className='peer-checked:bg-gray-700' />
                            </div>
                            <div className='visible peer-checked:invisible absolute left-0 top-1 mt-0.5'>
                                <RiCheckboxBlankCircleLine className='peer-checked:bg-gray-700' />
                            </div>
                            <span className='block ml-2 text-sm font-medium'>Credit Card</span>
                            <div className="h-0 overflow-hidden peer-checked:h-auto peer-checked:p-2">
                                <PaymentForm handleChange={handleChange} onSubmit={onSubmit} register={register} setValue={setValue} errors={errors} />
                            </div>
                        </div>
                    </label>
                </li>
                <li className='py-2 border-t-2 border-dashed'>
                    <label htmlFor="COD" className='block text-gray-900 peer-checked:text-blue-600'>
                        <div className='relative flex items-center py-1 pl-3'>
                            <input
                                type="radio"
                                name="payment_method"
                                id="COD"
                                className="hidden peer"
                                value="COD"
                                defaultChecked
                                {...register("payment_method")}
                            />
                            <div className='invisible peer-checked:visible absolute left-0 top-1 mt-0.5'>
                                <RiRadioButtonLine className='peer-checked:bg-gray-700' />
                            </div>
                            <div className='visible peer-checked:invisible absolute left-0 top-1 mt-0.5'>
                                <RiCheckboxBlankCircleLine className='peer-checked:bg-gray-700' />
                            </div>
                            <span className='ml-2 text-sm font-medium'>Cash on Delivery</span>
                        </div>
                    </label>
                </li>
            </ul>
        </>
    );
}

export default memo(PaymentMethod)