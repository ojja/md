import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Link } from "@remix-run/react";
import ExtraProducts from "~/components/ExtraProducts";

export default function Cart() {
    return (
        <div className="p-8 mx-auto bg-white">
            <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="pb-10">
                    <h1 className="text-4xl font-semibold">Shoping Cart</h1>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <div className="col-span-2">
                        <div className="pt-6 border-t border-black-300">
                            {/* Cart Item */}
                            <div className="flex items-start justify-between pb-6 mb-6 border-b border-black-300">
                                <div className="flex items-start">
                                    <div className="flex items-center justify-center w-48 h-48 mr-5 bg-gray-100 rounded-md">
                                        <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2020-12/csm-220-web-1.jpg" className="max-w-[80%] max-h-[80%]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-base font-medium text-gray-900 md:text-md">Product -1</span>
                                        <span className="flex my-1 text-xs font-light text-gray-400">
                                            <span>Black</span>
                                            <span className="w-px mx-3 bg-gray-300"></span>
                                            <span>Large</span>
                                        </span>
                                        <span className="text-sm font-light text-slate-400">Categories-1</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ml-auto">
                                    <div className="flex pr-8">
                                        <button
                                            type="button"
                                            className="p-2 -m-2 text-gray-400 cursor-pointer hover:text-gray-500"
                                        >
                                            <MinusIcon className="w-4 h-4" aria-hidden="true" />
                                        </button>
                                        <input type="text" className="w-8 h-6 mx-2 text-xs text-center text-gray-600 bg-gray-100 border rounded focus:outline-none" defaultValue="1" />

                                        <button
                                            type="button"
                                            className="p-2 -m-2 text-gray-400 cursor-pointer hover:text-gray-500"
                                        >
                                            <PlusIcon className="w-4 h-4" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="pr-8">
                                        <span className="text-sm font-medium">$10.50</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        type="button"
                                        className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">remove item</span>
                                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            {/* Cart Item */}
                            <div className="flex items-start justify-between pb-6 mb-6 border-b border-black-300">
                                <div className="flex items-start">
                                    <div className="flex items-center justify-center w-48 h-48 mr-5 bg-gray-100 rounded-md">
                                        <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2020-12/csm-220-web-1.jpg" className="max-w-[80%] max-h-[80%]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-base font-medium text-gray-900 md:text-md">Product -1</span>
                                        <span className="flex my-1 text-xs font-light text-gray-400">
                                            <span>Black</span>
                                            <span className="w-px mx-3 bg-gray-300"></span>
                                            <span>Large</span>
                                        </span>
                                        <span className="text-sm font-light text-slate-400">Categories-1</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ml-auto">
                                    <div className="flex pr-8">
                                        <button
                                            type="button"
                                            className="p-2 -m-2 text-gray-400 cursor-pointer hover:text-gray-500"
                                        >
                                            <MinusIcon className="w-4 h-4" aria-hidden="true" />
                                        </button>
                                        <input type="text" className="w-8 h-6 mx-2 text-xs text-center text-gray-600 bg-gray-100 border rounded focus:outline-none" defaultValue="1" />

                                        <button
                                            type="button"
                                            className="p-2 -m-2 text-gray-400 cursor-pointer hover:text-gray-500"
                                        >
                                            <PlusIcon className="w-4 h-4" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="pr-8">
                                        <span className="text-sm font-medium">$10.50</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        type="button"
                                        className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">remove item</span>
                                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            {/* Cart Item */}
                            <div className="flex items-start justify-between pb-6 mb-6 border-b border-black-300">
                                <div className="flex items-start">
                                    <div className="flex items-center justify-center w-48 h-48 mr-5 bg-gray-100 rounded-md">
                                        <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2020-12/csm-220-web-1.jpg" className="max-w-[80%] max-h-[80%]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-base font-medium text-gray-900 md:text-md">Product -1</span>
                                        <span className="flex my-1 text-xs font-light text-gray-400">
                                            <span>Black</span>
                                            <span className="w-px mx-3 bg-gray-300"></span>
                                            <span>Large</span>
                                        </span>
                                        <span className="text-sm font-light text-slate-400">Categories-1</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ml-auto">
                                    <div className="flex pr-8">
                                        <button
                                            type="button"
                                            className="p-2 -m-2 text-gray-400 cursor-pointer hover:text-gray-500"
                                        >
                                            <MinusIcon className="w-4 h-4" aria-hidden="true" />
                                        </button>
                                        <input type="text" className="w-8 h-6 mx-2 text-xs text-center text-gray-600 bg-gray-100 border rounded focus:outline-none" defaultValue="1" />

                                        <button
                                            type="button"
                                            className="p-2 -m-2 text-gray-400 cursor-pointer hover:text-gray-500"
                                        >
                                            <PlusIcon className="w-4 h-4" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="pr-8">
                                        <span className="text-sm font-medium">$10.50</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        type="button"
                                        className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">remove item</span>
                                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            {/* Cart Item */}
                            <div className="flex items-start justify-between pb-6 mb-6 border-b border-black-300">
                                <div className="flex items-start">
                                    <div className="flex items-center justify-center w-48 h-48 mr-5 bg-gray-100 rounded-md">
                                        <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2020-12/csm-220-web-1.jpg" className="max-w-[80%] max-h-[80%]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-base font-medium text-gray-900 md:text-md">Product -1</span>
                                        <span className="flex my-1 text-xs font-light text-gray-400">
                                            <span>Black</span>
                                            <span className="w-px mx-3 bg-gray-300"></span>
                                            <span>Large</span>
                                        </span>
                                        <span className="text-sm font-light text-slate-400">Categories-1</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ml-auto">
                                    <div className="flex pr-8">
                                        <button
                                            type="button"
                                            className="p-2 -m-2 text-gray-400 cursor-pointer hover:text-gray-500"
                                        >
                                            <MinusIcon className="w-4 h-4" aria-hidden="true" />
                                        </button>
                                        <input type="text" className="w-8 h-6 mx-2 text-xs text-center text-gray-600 bg-gray-100 border rounded focus:outline-none" defaultValue="1" />

                                        <button
                                            type="button"
                                            className="p-2 -m-2 text-gray-400 cursor-pointer hover:text-gray-500"
                                        >
                                            <PlusIcon className="w-4 h-4" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="pr-8">
                                        <span className="text-sm font-medium">$10.50</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        type="button"
                                        className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">remove item</span>
                                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 pl-5 sm:col-span-1">
                        <div className="p-5 bg-gray-100">
                            <h2 className="text-xl font-semibold capitalize">Order summary</h2>
                            <div className="flex flex-col">
                                <div className="flex justify-between py-3 border-b border-black-300">
                                    <span className="font-light text-gray-600">Subtotal</span>
                                    <span className="text-gray-600">99.00 EGP</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-black-300">
                                    <span className="font-light text-gray-600">Shipping estimate</span>
                                    <span className="text-gray-600">25.00 EGP</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-black-300">
                                    <span className="font-light text-gray-600">Tax estimate</span>
                                    <span className="text-gray-600">10.00 EGP</span>
                                </div>
                                <div className="flex flex-wrap justify-between py-3 border-b border-black-300">
                                    <span className="font-light text-blue-500 underline cursor-pointer">Do you have a discount coupon?</span>
                                    <form action="" method="post" className="flex flex-wrap w-full">
                                        <button
                                            type="button"
                                            className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                                        // onClick={closeCart}
                                        >
                                            <span className="sr-only">Close coupon</span>
                                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                        </button>
                                        <div className="flex w-full mt-2 coupon">
                                            <input type="text" name="coupon_code" className="p-2 border border-gray-300 rounded-l outline-none bg-gray-50" id="coupon_code" value="" placeholder="Enter Coupon Code" />
                                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r text-sm w-full sm:w-auto px-5 py-2.5 text-center " name="apply_coupon" value="Apply coupon">Apply</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex justify-between py-5">
                                    <span className="font-bold text-gray-900 font-lg">Order Total</span>
                                    <span className="font-bold text-gray-600">10.00 EGP</span>
                                </div>
                                <Link to="/checkout" className="px-3 py-2 text-lg text-center text-white bg-primary-600 rounded-md pointer-events-auto hover:bg-primary-500">Checkout</Link>
                                <Link to="/checkout-step1" className="px-3 py-2 text-lg text-center text-white bg-primary-600 rounded-md pointer-events-auto hover:bg-primary-500">Checkout2</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ExtraProducts categorySlug="oriental-sweets" pageNumber={1} title=""/>
            </div>
        </div>
    )
}
