import { useState } from "react";
import { RiRadioButtonLine, RiCheckboxBlankCircleLine } from "react-icons/ri";
import PaymentForm from "./PaymentForm";

export default function PaymentMethod({ formData, handleChange, register, setValue, errors, handleSubmit, watch }: any) {
    // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("COD");

    // const handlePaymentMethodChange = (event) => {
    //     const paymentMethod = event.target.value;
    //     // setSelectedPaymentMethod(paymentMethod);
    //     handleChange(event);
    //     setValue("payment_method", paymentMethod); // Use setValue to update the form value
    // };
    const selectedPaymentMethod = watch("payment_method");
    console.log('selectedPaymentMethod:',selectedPaymentMethod)
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
                                // checked={selectedPaymentMethod === "CC"}
                                // onChange={handlePaymentMethodChange}
                                {...register("payment_method")}
                            />
                            <div className='invisible peer-checked:visible absolute left-0 top-1 mt-0.5'>
                                <RiRadioButtonLine className='peer-checked:bg-gray-700' />
                            </div>
                            <div className='visible peer-checked:invisible absolute left-0 top-1 mt-0.5'>
                                <RiCheckboxBlankCircleLine className='peer-checked:bg-gray-700' />
                            </div>
                            <span className='block ml-2 text-sm font-medium'>Credit Card</span>
                            <div className="grid h-0 grid-cols-2 gap-4 overflow-hidden peer-checked:h-auto peer-checked:p-2">
                                {selectedPaymentMethod === "CC" && (
                                    <PaymentForm handleChange={handleChange} handleSubmit={handleSubmit} register={register} setValue={setValue} errors={errors}/>
                                )}
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
                                // checked={selectedPaymentMethod === "COD"}
                                // onChange={handlePaymentMethodChange}
                                {...register("payment_method")}
                            />
                            <div className='invisible peer-checked:visible absolute left-0 top-1 mt-0.5'>
                                <RiRadioButtonLine className='peer-checked:bg-gray-700' />
                            </div>
                            <div className='visible peer-checked:invisible absolute left-0 top-1 mt-0.5'>
                                <RiCheckboxBlankCircleLine className='peer-checked:bg-gray-700' />
                            </div>
                            <span className='ml-2 text-sm font-medium'>Cash on delivery</span>
                        </div>
                    </label>
                </li>
            </ul>
        </>
    );
}
