
import Datepicker from "react-tailwindcss-datepicker";
import moment from 'moment';
import useShoppingCart from "~/stores/cartStore";
import { getProductBySlug } from "~/api/products";
import { useEffect, useState } from "react";
import PaymentMethod from "~/components/PaymentMethod";
import { Link } from "@remix-run/react";
import FormatCurrency from "~/utils/FormatCurrency";
import MiniCartItem from "~/components/MiniCartItem";
import { v4 } from 'uuid';
import Button from "~/components/Button";


export default function Checkout() {

    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
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
                                        <Link to="/checkout-step1" className="p-1 ml-2"> Personal Information </Link>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                    <div className="-m-1">
                                        <a href="#" className="p-1 ml-2 font-semibold text-gray-700"> Payment Method </a>
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
                    <div className="max-w-4xl p-4 m-auto bg-white border rounded-md">
                        <div className="">
                            <PaymentMethod />
                            <div className="flex items-center pt-3 mt-3 border-t-2">
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I’ve read and accepted all Terms & Conditions</label>
                            </div>
                            <Button
                                name="Place Order"
                                width="full"
                                href="/thanks"
                                extraclass="mt-5 leading-8 text-2xl uppercase"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}