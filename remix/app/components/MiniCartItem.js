import React from 'react'
import { useShoppingCart } from '../context/cartContext';
import storeItems from '../data/items.json';
import FormatCurrency from '../utils/FormatCurrency';

// export default function CartItem({ id, quantity }) {
// const { removeFromCart } = useShoppingCart();
const MiniCartItem = ({ id, quantity, removeFromCart }) => {

    const item = storeItems.find((i) => i.id === id);
    if (item == null) return null;



    return (
        <>
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={item.image}
                    alt={item.imageAlt ? item.imageAlt : item.title}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href={item.href}>{item.title}</a>
                        </h3>
                        <p className="ml-4">{FormatCurrency(item.price * quantity)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex flex-col">
                        <p className="text-gray-500">{FormatCurrency(item.price)}</p>
                        <p className="text-gray-500">Quantity: {quantity}</p>
                    </div>
                    <div className="flex">
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MiniCartItem;