import CartSummary from "~/components/checkout/CartSummary"


import { MetaFunction } from "@remix-run/node";
import { Site_Title } from "~/config";
import { Link } from "react-router-dom";
import ExtraProducts from "~/components/ExtraProducts";
import TrackingSteps from "~/components/TrackingSteps";
export const meta: MetaFunction = () => {
    return {
        title: `Thank You - ${Site_Title}`
    }
}

/* This example requires Tailwind CSS v2.0+ */
const products = [
    {
        id: 1,
        name: 'Cold Brew Bottle',
        description:
            'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
        href: '#',
        quantity: 1,
        price: '$32.00',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
        imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
    },
]

export default function Thanks() {
    return (
        <div className="bg-white">
            <section className="bg-[#F4F7FF]">
                <div className="container px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:px-8">
                    <div className="mb-5">
                        <h1 className="mb-2 text-4xl font-semibold tracking-wide uppercase text-primary-600">Thank you!</h1>
                        <h3 className="text-base font-semibold tracking-wide text-gray-900">Your request has been submitted successfully</h3>
                        <p className="mt-2 text-base text-gray-500 max-w-[500px]">If you have questions about your order, you can email us at info@comapny.com or call us at 16689</p>
                    </div>
                    <div className="mb-10">
                        <TrackingSteps step={2}/>
                    </div>
                    <div className="flex flex-col-reverse items-start md:flex-row ">
                        <div className="w-full mx-auto">

                            <div className="border border-gray-200 bg-gray-50">
                                <div className="px-10 py-10">
                                    <h2 className="text-xl font-medium text-gray-900">Customer Details</h2>
                                    <dl className="py-5 text-sm">
                                        <dd className="mt-2 text-gray-700">
                                            <div className="inline-block w-1/2 mb-2">
                                                <label className="text-sm text-gray-500">First Name</label>
                                                <span className="block text-base font-bold">Ahmed Khaled</span>
                                            </div>
                                            <div className="inline-block w-1/2 mb-2">
                                                <label className="text-sm text-gray-500">Last Name</label>
                                                <span className="block text-base font-bold">Ahmed Khaled</span>
                                            </div>
                                            <div className="block mb-2">
                                                <label className="text-sm text-gray-500">E-mail</label>
                                                <span className="block text-base font-bold">AhmedKhaled@gamail.com</span>
                                            </div>
                                            <div className="block mb-2">
                                                <label className="text-sm text-gray-500">Phone Number</label>
                                                <span className="block text-base font-bold">012764326754</span>
                                            </div>
                                        </dd>
                                    </dl>
                                    <h2 className="pt-10 text-xl font-medium text-gray-900 border-t border-gray-200">Shipping Details</h2>
                                    <dl className="py-5 text-sm">
                                        <dd className="mt-2 space-y-2 text-gray-700">
                                            <div className="block w-1/3 mb-2">
                                                <label className="text-sm text-gray-500">Delivery Expected</label>
                                                <span className="block text-base font-bold">23rd March 2023</span>
                                            </div>
                                            <div className="inline-block w-1/3 mb-2">
                                                <label className="text-sm text-gray-500">City</label>
                                                <span className="block text-base font-bold">Cairo</span>
                                            </div>
                                            <div className="inline-block w-1/3 mb-2">
                                                <label className="text-sm text-gray-500">Neighborhood</label>
                                                <span className="block text-base font-bold">Heliopolis</span>
                                            </div>
                                            <div className="inline-block w-1/3 mb-2">
                                                <label className="text-sm text-gray-500">Area</label>
                                                <span className="block text-base font-bold">Korba</span>
                                            </div>
                                            <div className="block mb-2">
                                                <label className="text-sm text-gray-500">Property number and street</label>
                                                <span className="block text-base font-bold">Street 9, Building No. 4</span>
                                            </div>
                                            <div className="inline-block w-1/2 mb-2">
                                                <label className="text-sm text-gray-500">Floor</label>
                                                <span className="block text-base font-bold">9</span>
                                            </div>
                                            <div className="inline-block w-1/2 mb-2">
                                                <label className="text-sm text-gray-500">Flat</label>
                                                <span className="block text-base font-bold">94</span>
                                            </div>
                                        </dd>
                                    </dl>
                                    <div className="pt-10 border-t border-gray-200">
                                        <Link to="/my-account/orders/single" className="inline-block px-4 py-2 text-sm font-semibold text-center text-white rounded-lg whitespace-nowrap bg-slate-900 hover:bg-slate-700">Order Details</Link>
                                    </div>
                                </div>
                                <h2 className="sr-only">Your order</h2>

                                <h3 className="sr-only">Items</h3>
                                <div className="hidden">
                                    {products.map((product) => (
                                        <div key={product.id} className="flex py-10 space-x-6 border-b border-gray-200">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="flex-none object-cover object-center w-20 h-20 bg-gray-100 rounded-lg sm:w-40 sm:h-40"
                                            />
                                            <div className="flex flex-col flex-auto">
                                                <div>
                                                    <h4 className="font-medium text-gray-900">
                                                        <a href={product.href}>{product.name}</a>
                                                    </h4>
                                                    <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                                                </div>
                                                <div className="flex items-end flex-1 mt-6">
                                                    <dl className="flex space-x-4 text-sm divide-x divide-gray-200 sm:space-x-6">
                                                        <div className="flex">
                                                            <dt className="font-medium text-gray-900">Quantity</dt>
                                                            <dd className="ml-2 text-gray-700">{product.quantity}</dd>
                                                        </div>
                                                        <div className="flex pl-4 sm:pl-6">
                                                            <dt className="font-medium text-gray-900">Price</dt>
                                                            <dd className="ml-2 text-gray-700">{product.price}</dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="sm:ml-40 sm:pl-6">
                                        <h3 className="sr-only">Your information</h3>

                                        <h4 className="sr-only">Addresses</h4>
                                        <dl className="grid grid-cols-2 py-10 text-sm gap-x-6">
                                            <div>
                                                <dt className="font-medium text-gray-900">Shipping address</dt>
                                                <dd className="mt-2 text-gray-700">
                                                    <address className="not-italic">
                                                        <span className="block">Kristin Watson</span>
                                                        <span className="block">7363 Cynthia Pass</span>
                                                        <span className="block">Toronto, ON N3Y 4H8</span>
                                                    </address>
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="font-medium text-gray-900">Billing address</dt>
                                                <dd className="mt-2 text-gray-700">
                                                    <address className="not-italic">
                                                        <span className="block">Kristin Watson</span>
                                                        <span className="block">7363 Cynthia Pass</span>
                                                        <span className="block">Toronto, ON N3Y 4H8</span>
                                                    </address>
                                                </dd>
                                            </div>
                                        </dl>

                                        <h4 className="sr-only">Payment</h4>
                                        <dl className="grid grid-cols-2 py-10 text-sm border-t border-gray-200 gap-x-6">
                                            <div>
                                                <dt className="font-medium text-gray-900">Payment method</dt>
                                                <dd className="mt-2 text-gray-700">
                                                    <p>Apple Pay</p>
                                                    <p>Mastercard</p>
                                                    <p>
                                                        <span aria-hidden="true">•••• </span>
                                                        <span className="sr-only">Ending in </span>1545
                                                    </p>
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="font-medium text-gray-900">Shipping method</dt>
                                                <dd className="mt-2 text-gray-700">
                                                    <p>DHL</p>
                                                    <p>Takes up to 3 working days</p>
                                                </dd>
                                            </div>
                                        </dl>

                                        <h3 className="sr-only">Summary</h3>

                                        <dl className="pt-10 space-y-6 text-sm border-t border-gray-200">
                                            <div className="flex justify-between">
                                                <dt className="font-medium text-gray-900">Subtotal</dt>
                                                <dd className="text-gray-700">$36.00</dd>
                                            </div>
                                            <div className="flex justify-between">
                                                <dt className="flex font-medium text-gray-900">
                                                    Discount
                                                    <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2">STUDENT50</span>
                                                </dt>
                                                <dd className="text-gray-700">-$18.00 (50%)</dd>
                                            </div>
                                            <div className="flex justify-between">
                                                <dt className="font-medium text-gray-900">Shipping</dt>
                                                <dd className="text-gray-700">$5.00</dd>
                                            </div>
                                            <div className="flex justify-between">
                                                <dt className="font-medium text-gray-900">Total</dt>
                                                <dd className="text-gray-900">$23.00</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CartSummary thanks />
                    </div>
                    <ExtraProducts categorySlug="skirt" pageNumber={1} title="Shop More" />

                </div>
            </section>
        </div>
    )
}