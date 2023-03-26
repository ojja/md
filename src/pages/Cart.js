import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/cartContext";
import FormatCurrency from "../utils/FormatCurrency";
import storeItems from '../data/items.json'

export default function Cart({ }) {
    const {
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart();
    
    const subTotal = cartItems.reduce((total, cartItem) => {
        const item = storeItems.find((i) => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    const shippingFees = 10;
    const taxFees = Math.round((subTotal * 14) / 100)
    const grandTotal = subTotal + taxFees + shippingFees
    return (
        <div className="p-8 mx-auto bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="pb-10">
                    <h1 className="text-4xl font-semibold">Shoping Cart</h1>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <div className="pt-6 border-t border-black-300">

                            {cartItems.map((item) => (
                                <li key={item.id} className="flex py-6 flex-col">
                                    <CartItem {...item} removeFromCart={removeFromCart} increaseCartQuantity={increaseCartQuantity} decreaseCartQuantity={decreaseCartQuantity} getItemQuantity={getItemQuantity} />
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 pl-5">
                        <div className="bg-gray-100 p-5">
                            <h2 className="text-xl capitalize font-semibold">Order summary</h2>
                            <div className="flex flex-col">
                                <div className="flex justify-between py-3 border-b border-black-300">
                                    <span className="font-light text-gray-600">Subtotal</span>
                                    <span className="text-gray-600">{FormatCurrency(subTotal)}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-black-300">
                                    <span className="font-light text-gray-600">Shipping estimate</span>
                                    <span className="text-gray-600">{shippingFees>0?FormatCurrency(shippingFees):'Free'}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-black-300">
                                    <span className="font-light text-gray-600">Tax estimate</span>
                                    <span className="text-gray-600">{FormatCurrency(taxFees)}</span>
                                </div>
                                <div className="flex justify-between py-5">
                                    <span className="font-bold font-lg text-gray-900">Order Total</span>
                                    <span className="font-bold text-gray-600">{FormatCurrency(grandTotal)}</span>
                                </div>
                                <Link to='/checkout' className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-lg text-center text-white hover:bg-indigo-500">Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
