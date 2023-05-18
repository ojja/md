import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTranslation } from 'react-i18next';

import FormatCurrency from "~/utils/FormatCurrency";


export default function ChangeCountry() {
    const { t, i18n } = useTranslation();

    let [isOpenSize, setIsOpenSize] = useState(false)

    function closeModal() {
        setIsOpenSize(false)
    }

    function openModal() {
        setIsOpenSize(true)
    }
    const [currency, setCurrency] = useState("USD");

    const handleCurrencyChange = (newCurrency) => {
        setCurrency(newCurrency);
    };

    const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
        currency: currency,
        style: "currency",
    });

    return (
        <>
            <button type="button" className="text-sm font-medium text-white hover:text-primary-500" onClick={openModal}>
               {t('common.change_country')}
            </button>
            <Transition appear show={isOpenSize} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <div className="mt-2">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 whitespace-nowrap">
                                            <span
                                                className="grid w-full min-w-[7rem] transform cursor-pointer  rounded-xl border border-gray-100 px-3 py-2 transition-all scale-105 bg-blue-500 bg-opacity-25"
                                                onClick={closeModal}
                                            >
                                                <div className="p-2.5">
                                                    <h4 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-center text-gray-900">Egypt</h4>
                                                </div>
                                            </span>
                                            <span
                                                className="grid w-full min-w-[7rem] transform cursor-pointer  rounded-xl border border-gray-500 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-gray-100 hover:bg-gray-500 hover:bg-opacity-25"
                                                onClick={closeModal}
                                            >
                                                <div className="p-2.5">
                                                    <h4 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-center text-gray-900">Qatar</h4>
                                                </div>
                                            </span>
                                            <span
                                                className="grid w-full min-w-[7rem] transform cursor-pointer  rounded-xl border border-gray-500 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-gray-100 hover:bg-gray-500 hover:bg-opacity-25"
                                                onClick={closeModal}
                                            >
                                                <div className="p-2.5">
                                                    <h4 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-center text-gray-900">Saudi Arabia</h4>
                                                </div>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="block" onClick={() => handleCurrencyChange("EGP")}>
                                                Egypt
                                            </h4>
                                            <h4 className="block" onClick={() => handleCurrencyChange("QAR")}>
                                                Qatar
                                            </h4>
                                            <h4 className="block" onClick={() => handleCurrencyChange("SAR")}>
                                                Saudi Arabia
                                            </h4>

                                            <div>{FormatCurrency(872)}</div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
