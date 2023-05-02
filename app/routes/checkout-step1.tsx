
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

    const handleValueChange = (newValue:any) => {
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
                    <div className="max-w-4xl p-4 m-auto bg-white border rounded-md">
                        <div className="">
                            <h2 className="mb-5 text-lg font-medium text-gray-900">Shipping Information</h2>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> First name </label>
                                    <div className="mt-1">
                                        <input type="text" placeholder="" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Last name </label>
                                    <div className="mt-1">
                                        <input type="text" placeholder="" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Phone number </label>
                                    <div className="mt-1">
                                        <input type="text" placeholder="" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Address </label>
                                    <div className="mt-1">
                                        <textarea placeholder="" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> City </label>
                                    <div className="mt-1">
                                        <select className="block w-full py-2 pl-3 pr-20 text-gray-900 border-0 rounded-md form-select ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                            <option value="">Cairo</option>
                                            <option value="">Giza</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> City </label>
                                    <div className="mt-1">
                                        <input type="text" placeholder="Nasr City" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>

                            <h2 className="pt-5 mt-5 mb-5 text-lg font-medium text-gray-900 border-t-2">Choose Order Date</h2>
                            <ul className="grid w-full gap-6 md:grid-cols-3">
                                <li>
                                    <input type="radio" id="deliver_today" name="hosting" value="deliver_today" className="hidden peer" required />
                                    <label htmlFor="deliver_today" className="inline-flex items-center justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">Today</div>
                                            <div className="w-full">Within 60min</div>
                                        </div>
                                        <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="deliver_date" name="hosting" value="deliver_date" className="hidden peer" />
                                    <label htmlFor="deliver_date" className="inline-flex items-center justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">Specific Date</div>
                                            <Datepicker
                                                useRange={false}
                                                asSingle={true}
                                                value={value}
                                                onChange={handleValueChange}
                                            />
                                        </div>
                                        <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </label>
                                </li>
                            </ul>

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
    );
}
