import { EyeIcon } from "@heroicons/react/20/solid";
import Tooltip from "./Tooltip";
import Flickity from "react-flickity-component";
import Quickview from "./Quickview";
import { useState } from "react";
import FormatCurrency from "./../utils/FormatCurrency";
import { v4 } from 'uuid';


export default function MiniCartUpSell() {
    const flickityOptions = {
        initialIndex: 2
    }
    const products = [
        {
            "id": 25100,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-27",
            "price": "2400",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-LW119328410-navy.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-LW119328410-navy-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-LW119328410-navy-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-LW119328410-navy-2.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-LW119328410-navy-3.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-LW119328410-navy-4.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 23112,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-15",
            "price": "2950",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3KEA133J3WZ-golden.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3KEA133J3WZ-golden-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3KEA133J3WZ-golden-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3KEA133J3WZ-golden-2.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 22955,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-9",
            "price": "4650",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3K3A223N4DZ-fantasia.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3K3A223N4DZ-fantasia-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A223N4DZ-fantasia-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A223N4DZ-fantasia-2.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A223N4DZ-fantasia-3.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A223N4DZ-fantasia-4.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A223N4DZ-fantasia-5.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 20071,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-48",
            "price": "5050",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/04\/thumb-6H3A113J3MZ-black.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/04\/thumb-6H3A113J3MZ-black-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/04\/gall-6H3A113J3MZ-black-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/04\/gall-6H3A113J3MZ-black-2.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/04\/gall-6H3A113J3MZ-black-3.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/07\/gall-6H3A113J3MZ-black-4.jpg"
            ],
            "type": "variable"
        }
    ];
    let [openQuick, setOpenQuick] = useState(false)
    function openModal() {
        setOpenQuick(!openQuick)
    }
    return (
        <div className="pt-4 mt-4 border-t border-gray-500 parent">
            <div className="overflow-hidden rounded-lg shadow-md mini_cart_upsell">
                <h4 className="p-3 font-semibold text-center bg-gray-200">You may also like</h4>
                <div className="mini_cart_upsell_items">
                    {/* <Flickity options={flickityOptions} className={'flex flex-wrap'}>
                        {products.map((product) => (
                            <div key={v4()} className="flex items-center w-full p-4 border-b border-gray-300">
                                <div className="flex-shrink-0 w-24 h-24 overflow-hidden">
                                    <div className="rounded upsell_item_img">
                                        <img src={product.main_image} />
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 ml-4">
                                    <a className="">{product.title}</a>
                                    <span className="text-gray-500">{FormatCurrency(product.price)}</span>
                                </div>
                                <div className="">
                                    <span onClick={openModal} className="flex items-center justify-center w-10 h-10 p-1 text-white bg-indigo-500 rounded-md">
                                        <EyeIcon className="w-6 h-6" />
                                    </span>
                                    <Quickview openQuick={openQuick} openModal={openModal} product={product} />
                                </div>
                            </div>
                        ))}
                    </Flickity> */}
                </div>
            </div>
        </div>
    )
}
