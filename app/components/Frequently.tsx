import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import FormatCurrency, { FormatCurrency2 } from "~/utils/FormatCurrency";
import { v4 } from 'uuid';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { getSelectedCurrency } from "~/utils/currencyUtils";

export default function Frequently() {
    const { t } = useTranslation();
    const [selectedProducts, setSelectedProducts] = useState([
        { title: "Product Title 1", price: 20, selected: true, sale_price: 30.2 },
        { title: "Product 2 Title", price: 10, selected: true, sale_price: 30.2 },
        { title: "Product 3 Title", price: 90, selected: true, sale_price: 30.2 }
    ]);

    const handleCheckboxChange = (index) => {
        setSelectedProducts((prevProducts) => {
            const updatedProducts = [...prevProducts];
            updatedProducts[index].selected = !updatedProducts[index].selected;
            return updatedProducts;
        });
    };

    const totalSelectedPrice = selectedProducts.reduce(
        (total, product) => (product.selected ? total + product.price : total),
        0
    );

    const totalOriginalPrice = selectedProducts.reduce(
        (total, product) => total + product.price,
        0
    );
    const areItemsSelected = selectedProducts.some((product) => product.selected);

    return (
        <div className="pt-12 border-t-2 border-gray-100  mt-12">
            <h2 className=" mb-12 md:text-3xl  font-bold  text-black">
                {i18next.language === "ar" ?
                    'عادة ما يتم شراؤه معًا: أضف هذه العناصر' : 'Usually Bought Together: Add These Items'
                }
            </h2>
            <div className="flex">
                <div className="flex items-center justify-center mr-5">
                    {selectedProducts.map((product, index) => (
                        <React.Fragment key={v4()}>
                            <div className={`w-20 p-5 border-2 rounded-[10px] ${product.selected ? '' : 'opacity-50'}`}>
                                <img src="https://www.lecollezioni-eg.com/wp-content/uploads/2021/06/thumb-MR7161718-gray.jpg" alt={product.title} />
                            </div>
                            {index !== selectedProducts.length - 1 && <PlusIcon className="w-6 h-6" />}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex flex-col">
                    <div className="mb-3 font-medium">
                        <p className=" text-gray-50 text-base font-semibold">Total price: </p>
                        <div className="flex items-center gap-x-2">
                            <p className="text-black text-2xl font-bold">
                                {FormatCurrency2(totalSelectedPrice)}{" "}
                            </p>
                            <del className="text-gray-400 text-sm line-through">
                                {FormatCurrency2(totalOriginalPrice)}
                            </del>
                        </div>

                    </div>
                    {areItemsSelected ? (
                        <button className="items-center flex justify-between px-5  py-2.5 text-sm font-semibold capitalize border-2 border-solid rounded-100  whitespace-nowrap border-gray-400 focus:outline-none">
                            Add Selected to Cart
                            <PlusIcon className=" w-4 h-4 text-green-500" aria-hidden="true" />

                        </button>
                    ) : (
                        <p className={`flex p-2 text-sm rounded-lg w-full mt-2 text-red-800 bg-red-100`}>
                            Choose items to buy together.
                        </p>
                    )}
                </div>
            </div>
            <div>
                <ul className=" mt-14">
                    {selectedProducts.map((product, index) => (
                        <li key={v4()} className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                name={`product-${index}`}
                                id={`product-${index}`}
                                checked={product.selected}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            <div className="md:ml-4">
                                <label htmlFor={`product-${index}`} className=" text-base font-semibold">
                                    {product.title}{" "}

                                </label>
                                <div className="price flex gap-x-3 ">
                                    <p className=" w-fit bg-yellow-910 rounded h-[18px] flex rtl:flex-row-reverse gap-x-[2px] px-1">
                                        {FormatCurrency(product.price , getSelectedCurrency(),["text-sm font-normal" , "text-2xl font-semibold ltr:-ml-0.5 rtl:-mr-0.5" , "text-sm font-normal"])}
                                    </p>
                                    <p className="text-gray-400 text-sm line-through">
                                        {FormatCurrency2(product.sale_price)}
                                    </p>
                                </div>

                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
