import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react'
import storeItems from '../data/items.json';
import FormatCurrency from '../utils/FormatCurrency';

const CartItem = ({ id, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, view = 'cart' }) => {

    const quantity = getItemQuantity(id);
    const item = storeItems.find((i) => i.id === id);
    if (item == null) return null;

    console.log('id', id)
    console.log('view', view)
    return (
        <>
            {view === 'cart' ? (
                <div className="flex justify-between items-start mb-6 pb-6 border-b border-black-300">
                    <>
                        <div className="flex items-start max-w-[80%]">
                            <div className="bg-gray-100 w-48 h-48 flex items-center justify-center rounded-md mr-5">
                                <img src={item.image} className="max-w-[80%] max-h-[80%]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="md:text-md text-base font-medium text-gray-900">{item.title}</span>
                                <span className="text-xs font-light text-gray-400 flex my-1">
                                    <span>Black</span>
                                    <span className="w-px mx-3 bg-gray-300"></span>
                                    <span>Large</span>
                                </span>
                                <span className="text-sm font-light text-slate-400 capitalize">{item.category}</span>
                                <span className="text-sm font-light text-slate-400">{FormatCurrency(item.price)}</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center ml-auto">
                            <div className="pr-8 flex">
                                <button
                                    type="button"
                                    className={`-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer ${quantity === 1 ? "pointer-events-none" : ''}`}
                                    onClick={() => decreaseCartQuantity(id)}
                                >
                                    <MinusIcon className="h-4 w-4" aria-hidden="true" />
                                </button>
                                <input type="number" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-xs mx-2 text-center text-gray-600 select-none" value={quantity} readOnly />
                                <button
                                    type="button"
                                    className={`-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer ${quantity > 9 ? "pointer-events-none" : ''}`}
                                    onClick={() => increaseCartQuantity(id)}
                                >
                                    <PlusIcon className="h-4 w-4" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="pr-8">
                                <span className="text-sm font-medium">{FormatCurrency(item.price * quantity)}</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button
                                type="button"
                                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <span className="sr-only">remove item</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </>
                </div>
            ) : (
                <div className="flex justify-between items-start py-3 border-b border-black-300">
                    <div className='flex'>
                        <div className="bg-gray-100 w-20 h-20 flex items-center justify-center rounded-md mr-5">
                            <img src={item.image} className="max-w-[80%] max-h-[80%]" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="md:text-md text-base font-medium text-gray-900">{item.title}</span>
                        <span className="text-xs font-light text-gray-400 flex my-1">
                            <span>Black</span>
                            <span className="w-px mx-3 bg-gray-300"></span>
                            <span>Large</span>
                            <span className="w-px mx-3 bg-gray-300"></span>
                            <span>Qty: {quantity}</span>
                        </span>
                        <span className="text-sm font-light text-slate-400">{FormatCurrency(item.price * quantity)}</span>
                    </div>
                </div>
            )}
        </>
    );
};
export default CartItem;