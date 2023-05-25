import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { MetaFunction } from "remix";
import CartItem from "~/components/CartItem";
import ExtraProducts from "~/components/ExtraProducts";
import { Site_Title } from "~/config";
import useShoppingCart from "~/stores/cartStore";
import FormatCurrency from "~/utils/FormatCurrency";



export const meta: MetaFunction = () => {
    return {
        title: `Cart - ${Site_Title}`
    }
}
export default function Cart() {
    const { cartItems, removeFromCart, decreaseCartQuantity, addToCart, totalPrice } = useShoppingCart();
    // console.log('cartItems', cartItems)
    const [openCoupon, setOpenCoupon] = useState(false);
    return (
        <div className="p-8 mx-auto bg-white">
            <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="pb-10">
                    <h1 className="text-4xl font-semibold">Shoping Cart</h1>
                </div>
                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <div className="col-span-2">
                            <div className="pt-6 border-t border-black-300">
                                {cartItems.map((item, index) => (
                                    <CartItem
                                        key={index}
                                        title={''}
                                        id={item.id}
                                        quantity={item.quantity}
                                        color={item.color}
                                        size={item.size}
                                        slug={item.slug}
                                        thumbnail={item.thumbnail}
                                        removeFromCart={removeFromCart}
                                        decreaseCartQuantity={decreaseCartQuantity}
                                        addToCart={addToCart}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-span-2 pl-5 sm:col-span-1">
                            <div className="p-5 bg-gray-100">
                                <h2 className="text-xl font-semibold capitalize">Order summary</h2>
                                <div className="flex flex-col">
                                    <div className="flex justify-between py-3 border-b border-black-300">
                                        <span className="font-light text-gray-600">Subtotal</span>
                                        <span className="text-gray-600">{FormatCurrency(totalPrice)}</span>
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
                                        {openCoupon?
                                        <span className="font-light text-blue-500 underline cursor-pointer" onClick={() => setOpenCoupon(true)}>Do you have a discount coupon?</span>
                                        :
                                        <form action="" method="post" className="flex flex-wrap w-full">
                                            <button
                                                type="button"
                                                className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                                                onClick={() => setOpenCoupon(false)}
                                            >
                                                <span className="sr-only">Close coupon</span>
                                                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                            </button>
                                            <div className="flex w-full mt-2 coupon">
                                                <input type="text" name="coupon_code" className="p-2 border border-gray-300 rounded-l outline-none bg-gray-50" id="coupon_code" value="" placeholder="Enter Coupon Code" />
                                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r text-sm w-full sm:w-auto px-5 py-2.5 text-center " name="apply_coupon" value="Apply coupon">Apply</button>
                                            </div>
                                        </form>
                                        }
                                    </div>
                                    <div className="flex justify-between py-5">
                                        <span className="font-bold text-gray-900 font-lg">Order Total</span>
                                        <span className="font-bold text-gray-600">10.00 EGP</span>
                                    </div>
                                    <Link to="/checkout" className="px-3 py-2 text-lg text-center text-white rounded-md pointer-events-auto bg-primary-600 hover:bg-primary-500">Checkout</Link>
                                    <Link to="/checkout-step1" className="px-3 py-2 text-lg text-center text-white rounded-md pointer-events-auto bg-primary-600 hover:bg-primary-500">Checkout2</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex mt-auto items-center justify-center min-h-[400px] flex-col'>
                        <p className="text-lg text-slate-500">Your cart is currently empty.</p>
                        <Link to='/products' className="inline-flex justify-center px-4 py-2 mt-5 text-sm font-semibold text-white capitalize rounded-lg bg-slate-900 hover:bg-slate-700">continue shopping</Link>
                    </div>
                )}
                <ExtraProducts categorySlug="oriental-sweets" pageNumber={1} title="" />
            </div>
        </div>
    )
}
