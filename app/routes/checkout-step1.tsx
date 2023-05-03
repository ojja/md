
import { Link } from "@remix-run/react";
import Button from "~/components/Button";
import CartSummary from "~/components/checkout/CartSummary";
import ShippingInfo from "~/components/checkout/ShippingInfo";
import ShippingOptions from "~/components/ShippingOptions";
import TimeSlot from '~/components/TimeSlot';


export default function Checkout() {

    return (
        <div className="p-8 mx-auto bg-white">
            <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="pb-10">
                    <h1 className="text-4xl font-semibold">Checkout</h1>
                </div>
                <div>
                    <nav className="flex justify-center mb-5">
                        <ol role="list" className="flex flex-wrap items-center text-gray-400 gap-y-2 gap-x-2 sm:gap-y-0">
                            <li>
                                <div className="-m-1">
                                    <Link to="/cart" className="flex items-center p-1 leading-3">
                                        Cart
                                        <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-sm font-bold text-white bg-gray-500 rounded-full"> 4 </span>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                    <div className="-m-1">
                                        <a href="#" className="p-1 ml-2 font-semibold text-gray-700"> Personal Information </a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                    <div className="-m-1">
                                        <a href="#" className="p-1 ml-2"> Payment Method </a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                    <div className="-m-1">
                                        <a href="#" className="p-1 ml-2" aria-current="page"> Confirmation </a>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className="flex flex-col-reverse items-start md:flex-row">
                        <CartSummary/>
                        <div className="w-full max-w-4xl p-4 m-auto bg-white border rounded-md">
                            <div className="">
                                <h2 className="mb-5 text-lg font-medium text-gray-900">Shipping Information</h2>
                                <ShippingInfo/>

                                <h2 className="pt-5 mt-5 mb-5 text-lg font-medium text-gray-900 border-t-2">Choose Order Date</h2>
                                <TimeSlot/>

                                <h2 className="pt-5 mt-5 mb-5 text-lg font-medium text-gray-900 border-t-2">Shipping Method</h2>
                                <ShippingOptions/>

                                <Button
                                    name="Next Step"
                                    width="full"
                                    href="/checkout-step2"
                                    extraclass="mt-5 leading-5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
