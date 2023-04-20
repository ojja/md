import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function ChangeCountry() {
    let [isOpenSize, setIsOpenSize] = useState(false)

    function closeModal() {
        setIsOpenSize(false)
    }

    function openModal() {
        setIsOpenSize(true)
    }
    return (
        <>
            <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500" onClick={openModal}>
                Change Country
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
                                    {/* <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-center text-gray-900"
                                    >
                                        Change Country
                                    </Dialog.Title> */}
                                    <div className="mt-2">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 whitespace-nowrap">
                                            <a 
                                                className="grid w-full min-w-[7rem] transform cursor-pointer  rounded-xl border border-blue-gray-500 px-3 py-2 transition-all scale-105 border-blue-gray-100 bg-blue-500 bg-opacity-25"
                                                onClick={closeModal}
                                            >
                                                <div className="p-2.5">
                                                    <h4 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-center text-blue-gray-900">Egypt</h4>
                                                    {/* <p className="block font-sans text-sm antialiased font-light leading-normal text-gray-700">Learn more about props definition and types of select components.</p> */}
                                                </div>
                                            </a>
                                            <a 
                                                className="grid w-full min-w-[7rem] transform cursor-pointer  rounded-xl border border-blue-gray-500 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-500 hover:bg-opacity-25"
                                                onClick={closeModal}
                                            >
                                                <div className="p-2.5">
                                                    <h4 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-center text-blue-gray-900">Qatar</h4>
                                                    {/* <p className="block font-sans text-sm antialiased font-light leading-normal text-gray-700">Learn more about props definition and types of select components.</p> */}
                                                </div>
                                            </a>
                                            <a 
                                                className="grid w-full min-w-[7rem] transform cursor-pointer  rounded-xl border border-blue-gray-500 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-500 hover:bg-opacity-25" 
                                                onClick={closeModal}
                                            >
                                                <div className="p-2.5">
                                                    <h4 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-center text-blue-gray-900">Saudi Arabia</h4>
                                                    {/* <p className="block font-sans text-sm antialiased font-light leading-normal text-gray-700">Learn how to customize the theme and styles for select components.</p> */}
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    {/* <div className="mt-4">
                                        <button
                                            type="button"
                                            className="block px-4 py-2 m-auto text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div> */}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
