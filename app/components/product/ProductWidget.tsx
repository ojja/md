// import { useState, useEffect } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import useShoppingCart from "~/stores/cartStore";
// import FormatCurrency from "../../utils/FormatCurrency";
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import { Link } from "@remix-run/react";
// import Quickview from "../Quickview";
// import AddToCartSimple from "../AddToCartSimple";
// import { useTranslation } from "react-i18next";
// import React from "react";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useShoppingCart from "~/stores/cartStore";
import FormatCurrency, { FormatCurrency2} from "../../utils/FormatCurrency";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "@remix-run/react";
import Quickview from "../Quickview";
import AddToCartSimple from "../AddToCartSimple";
import { useTranslation } from "react-i18next";

type Product = {
    [x: string]: string;
    id: string,
    name: string,
    price: number,
    main_image: string,
    thumbnail: string,
    slug: string
    sale_price: number
}

type ProductWidgetProps = {
    product: Product,
    key: any
}





export function ProductWidget({ product }: ProductWidgetProps) {
    const { t } = useTranslation();
    const [isOpenCart, setIsOpenCart] = useState(false);

    let [openQuick, setOpenQuick] = useState(false)
    function openModal() {
        setOpenQuick(!openQuick)
    }
   

    let productTitle =
        // product?.name.length > 35
        //     ? product.name.slice(0, 35).concat("...")
        //     : 
        product.name;

   
    let imageSrc = product.main_image ? product.main_image : product.thumbnail

    console.log('product', product)
    return (
        <>
            <div className="relative flex flex-col group border-2 border-gray-100 rounded-3xl overflow-hidden pb-5">
                <div className="relative z-10 w-full overflow-hidden bg-gray-200 rounded-md min-h-80 group-hover:opacity-75 ">
                    {/* <img
                        src={product.image}
                        alt={product.name}
                        className="absolute top-0 bottom-0 left-0 right-0 self-center object-cover object-center w-full h-full m-auto lg:h-full lg:w-full"
                    /> */}
                    {/* <span>{product.slug}</span> */}
                    <Link to={`/products/${product.slug}`} className={`block aspect-w-4 aspect-h-3 lg:h-80 ${product.slug ? product.slug : 'pointer-events-none'}`}>
                        {imageSrc ?
                            <LazyLoadImage
                                alt={product.name}
                                // effect="blur"
                                src={imageSrc}
                                // placeholderSrc={product.image_small}
                                wrapperClassName="z-1"
                                className="self-center object-cover object-center w-full h-full m-auto lg:h-full lg:w-full"
                            />
                            :
                            ''
                        }
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 flex items-end">
                        <button
                            onClick={openModal}
                            type="button" className="relative w-full px-4 py-2 text-sm text-gray-900 bg-white bg-opacity-75 opacity-0 focus:opacity-100 group-hover:opacity-100">
                            {t('common.quick_view')}
                        </button>
                    </div>
                </div>
                <div className=" justify-between mt-4 mb-4 px-5">
                    <div className=" mb-5">
                        <h3 className=" text-xl text-black">
                            <Link to={`/products/${product.slug}`} prefetch="intent">
                                <span aria-hidden="true" className={`absolute inset-0 z-1 ${product.slug ? '' : 'pointer-events-none'}`} />
                                {productTitle}
                            </Link>
                            <span className="block text-base font-semibold text-gray-50">250gm</span>
                        </h3>
                        {/* <p className="mt-1 text-sm text-gray-500">{product.category}</p> */}
                        {/* <p className="mt-1 text-sm text-gray-500">{product.id}</p> */}
                    </div>
                    
                    {(product.sale_price ? (
                        <div className="flex items-center gap-x-3">
                            <p className=" bg-yellow-910 px-1 h-[18px] w-fit flex rounded-sm">{FormatCurrency(product.sale_price)}</p>
                            <del className=" text-sm text-gray-50 font-normal w-fit">{FormatCurrency2(product.price)}</del>
                        </div>
                    ) :   <p className=" bg-yellow-910 px-1 h-[18px] w-fit flex  rounded-sm">{FormatCurrency(product.price)}</p>

                    )}
                </div>
                <div className="relative z-1 mx-5">
                    {product.type != 'variable' ?

                        <AddToCartSimple
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700"
                            // id={product.id}
                            product={
                                {
                                    id: product.id,
                                    thumbnail: imageSrc,
                                    // size: selectedSize,
                                    // color: selectedColor,
                                    slug: product.slug
                                }
                            }
                        />
                        :
                        <button onClick={openModal} className="inline-flex justify-center w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700">{t('common.quick_view')}</button>
                    }
                </div>
                {openQuick ?
                    <Quickview openQuick={openQuick} openModal={openModal} product={product} />
                    : ''
                }
            </div>
        </>
    )

}