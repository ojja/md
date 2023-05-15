import { TrashIcon } from "@heroicons/react/24/outline"
import { Link } from "@remix-run/react";
import { v4 } from "uuid";
import useShoppingCart from "~/stores/cartStore";
import MiniCartItem from "../MiniCartItem";

const products = [
    {
        id: 1,
        title: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Black',
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    // More products...
]

export default function CartSummary({ thanks }: any) {
    const { cartItems } = useShoppingCart();

    return (
        <div className={`mt-10 ml-0 md:mt-0 md:ml-5 w-full ${thanks ? 'md:w-[500px]' : 'md:w-[380px]'}`}>
            {/* Order summary */}
            <div className={`${thanks ? 'min-w-[500px]' : 'min-w-[380px]'}`}>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <h2 className="pt-6 pl-4 text-lg font-medium text-gray-900 sm:pl-6">
                        {thanks ?
                            'Order summary'
                            :
                            'Order Number #36543'
                        }
                    </h2>
                    <ul role="list" className="divide-y divide-gray-200">
                        {cartItems.map((item) => (
                            <li key={v4()} className="flex px-4 py-6 sm:px-6">
                                <MiniCartItem
                                    id={item.id}
                                    quantity={item.quantity}
                                    color={item.color}
                                    size={item.size}
                                    slug={item.slug}
                                    thumbnail={item.thumbnail}
                                    removeFromCart=''
                                />
                            </li>
                        ))}
                    </ul>
                    <dl className="px-4 py-6 space-y-6 border-t border-gray-200 sm:px-6">
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Subtotal</dt>
                            <dd className="text-sm font-medium text-gray-900">$64.00</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Shipping</dt>
                            <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Taxes</dt>
                            <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                        </div>
                        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                            <dt className="text-base font-medium">Total</dt>
                            <dd className="text-base font-medium text-gray-900">$75.52</dd>
                        </div>
                        {thanks ?
                            <div>
                                <p>You have earn <strong className="text-green-500">48</strong> Points!</p>
                                {/* <Link to="/track-order" className="block px-4 py-3 mt-2 font-semibold text-center text-white rounded-lg whitespace-nowrap bg-slate-900 hover:bg-slate-700">Track you order</Link> */}
                            </div>
                            : ''}
                    </dl>
                </div>
            </div>
        </div>
    )
}
