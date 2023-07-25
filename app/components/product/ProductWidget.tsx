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
import React, { memo, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useShoppingCart from "~/stores/cartStore";
// import FormatCurrency, { FormatCurrency2 } from "../../utils/FormatCurrency";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "@remix-run/react";
import Quickview from "../Quickview";
import AddToCartSimple from "../AddToCartSimple";
import { useTranslation } from "react-i18next";
import { HeartIcon } from "@heroicons/react/20/solid";
// import Heart from "../icons/Heart";
// import { useRecentView } from "~/stores/allstores";
import WishListProducts from "../AddWishList";
import wishlist from "~/routes/my-account/wishlist";
// import FavoriteHeart from "../icons/favorite-icon";
// import useFavoriteIcon from "~/stores/wishList";

import FormatCurrency from "~/utils/FormatCurrency";
import ProgressiveImage from "../ProgressiveImage";
import useRecentView from "~/stores/wishtList";
import FavoriteHeart from "../icons/favorite-icon";
import Heart from "../icons/Heart";
import WishlistBtn from "../WishlistBtn";


type Product = {
  [x: string]: string;
  id: string,
  name: string,
  price: string,
  main_image: string,
  thumbnail: string,
  slug: string,
  sale_price: string;
  main_image_small: string;
  category: string;
  type: string;
}

type ProductWidgetProps = {
  product: Product,
  key: any
  wishlist?: any;
  isItemInWishlist: boolean; // Add prop for isItemInWishlist
  // width:any,

}
const ProductWidget = ({ product, wishlist }: ProductWidgetProps) => {
  const { t } = useTranslation();
  const [isOpenCart, setIsOpenCart] = useState(false);

  let [openQuick, setOpenQuick] = useState(false);
  function openModal() {
    setOpenQuick(!openQuick);
  }

  const productTitle = product?.name ? product?.name : product?.title;
  // const imageSrc = product?.main_image ? product.main_image.replace('/uploads/', '/uploads-webpc/uploads/').concat('.webp') : product?.thumbnail;
  const imageSrc = product?.main_image ? product.main_image : product?.thumbnail;
  // const imageSrcSmall = product?.main_image_small ? product.main_image_small.replace('/uploads/', '/uploads-webpc/uploads/').concat('.webp') : product?.thumbnail;
  const imageSrcSmall = imageSrc;

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };
  const handleQuickviewToggle = () => {
    setOpenQuick(!openQuick);
  };

  let itemID;
  let salePrice = null;
  let productPrice = null;
  if (product?.type === "simple") {
    itemID = product.id;
    productPrice = product.price;
    salePrice = product.sale_price;
  } else if (product?.type === "variable") {
    itemID = product.id;
    productPrice = product.price;
    salePrice = product.sale_price;
  }
  return (
    <>
      <div className={`relative flex flex-col group border-2 border-gray-100 rounded-3xl overflow-hidden pb-5 h-full`}>
        <div className="relative z-10 w-full overflow-hidden bg-green-300 min-h-80 group-hover:opacity-75 ">
          <Link to={
            `/products/${product?.slug
            }`
          }
            onClick={handleLinkClick}
            className={
              `block aspect-w-4 aspect-h-3 lg:h-80 ${product?.slug ? product.slug : "pointer-events-none"
              }`
            }>
            {
              imageSrc ? (
                <ProgressiveImage src={imageSrc} placeholder={imageSrcSmall} alt={product?.name} className="self-center object-cover object-center max-w-75 max-h-75 m-auto" />
              ) : (
                <span className="flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                </span>
              )
            } </Link>
        </div>
        <div className="py-4 px-5">
          <div>
            <h3 className="md:text-xl text-sm text-black">
              <Link to={
                `/products/${product?.slug
                }`
              }
                prefetch="intent">
                <span aria-hidden="true"
                  className={
                    `absolute inset-0 z-1 ${product?.slug ? "" : "pointer-events-none"
                    }`
                  } /> {productTitle} </Link>
            </h3>
          </div>
          <div className="flex items-end gap-x-3">
            <p className=" w-fit bg-yellow-910 rounded h-[18px] flex rtl:flex-row-reverse gap-x-[2px] px-1 mt-5">
              {
                // FormatCurrency(product?.price ? product.price : 0)
              }
              <FormatCurrency value={product?.price ? product.price : 0} />
            </p>

            <p className=" text-gray-400 text-sm line-through ">
              {
                // FormatCurrency2(product?.sale_price ? product.sale_price : 0)
              }
              <FormatCurrency value={product?.sale_price ? product.sale_price : 0} />
            </p>
          </div>
        </div>
        <div className="flex justify-between px-5 items-center gap-x-3 mt-auto">
          <div className="relative z-1 md:w-4/5">
            {
              product?.type != "variable" ? (
                <AddToCartSimple className="inline-flex justify-center w-full text-sm font-semibold text-white rounded-lg"
                  product={
                    {
                      id: itemID,
                      thumbnail: imageSrc,
                      slug: product.slug,
                      price: salePrice,
                    }
                  }
                  disabled={salePrice === null}
                />
              )
                : (
                  <button onClick={openModal}
                    className="inline-flex justify-center w-full text-sm font-semibold text-white rounded-lg">
                    {
                      t("quick_view")
                    } </button>

                )
            }
          </div>
          <div className="absolute md:top-0 top-2 md:rtl:right-0 md:ltr:left-0 rtl:right-2 ltr:left-2 z-10 md:relative w-1/5">
            <WishlistBtn product={product} inWishlistPage={wishlist} />
          </div>
          {openQuick && <Quickview openQuick={openQuick} openModal={handleQuickviewToggle} product={product} />}
        </div>
      </div>
    </>
  );
}

export default memo(ProductWidget);