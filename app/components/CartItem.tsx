import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { json, LoaderFunction } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';
import React, { useEffect, useState } from 'react'
import invariant from 'tiny-invariant';
import { getProductBySlug } from '~/api/products';
import useShoppingCart from "~/stores/cartStore";
import storeItems from '../data/items.json';
import FormatCurrency from '../utils/FormatCurrency';

// export default function CartItem({ id, quantity }) {
// const { removeFromCart } = useShoppingCart();

// interface CartItemProps {
//     id: string;
//     quantity: number;
//     color: string;
//     size: string;
//     slug: string;
//     thumbnail: string;
//     removeFromCart: () => void;
//   }


// interface Product {
//     id: number;
//     title: string;
//     price: number;
//     // Other properties of the product
// }

interface CartItemProps {
    title: string;
    // product: Product;
    id: number;
    quantity: number;
    color?: any;
    size?: any;
    slug: any;
    type: any;
    thumbnail: any;
    removeFromCart: (itemId: number) => void;
    // decreaseCartQuantity: (itemId: number) => void;
}
const CartItem = ({ id, quantity, slug, thumbnail, removeFromCart, decreaseCartQuantity, addToCart }: CartItemProps) => {

    const [product, setProduct] = useState({});
    const handleRemoveClick = () => {
        removeFromCart(id);
    };
    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProductBySlug(slug);
            setProduct(product);
        };
        fetchProduct();
    }, [slug]);



    const title = product.title;
    // const price = product.variations ? getPriceForAttributes(product.variations, size, color) : product.price ;

    // const priceV = product.variations ? getPriceForAttributes(product.variations, size, color) : null;
    // console.log("product", product);

    const variationId = id;
    const variation = product?.variations?.find(variation => variation.id === variationId);

    let salePrice = null;
    let productPrice = null;
    let color = null;
    let size = null;
    if (variation) {
        productPrice = variation.price;
        salePrice = variation.sale_price;
        color = variation.attributes?.attribute_pa_color
        size = variation.attributes?.attribute_pa_size
    }
    const productData = {
        id: id,
        thumbnail: product.main_img,
        // size: size,
        // color: color,
        slug: product.slug,
        price: salePrice,
    }

    const handleDecrease = () => {
        decreaseCartQuantity(productData);
    };
    const handleAddToCart = () => {
        addToCart(productData);
    };
    return (
        <>
            <div className="flex items-start justify-between pb-6 mb-6 border-b border-black-300">
                <div className="flex items-start">
                    <div>
                        <Link to={`/products/${slug}`} className="flex items-center justify-center w-48 h-48 mr-5 bg-gray-100 rounded-md">
                            <img src={thumbnail} className="max-w-[80%] max-h-[80%]" alt={slug} />
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 md:text-md">{title}</span>
                        <span className="flex my-1 text-xs font-light text-gray-400 capitalize">
                            <span>{color}</span>
                            <span className="w-px mx-3 bg-gray-300"></span>
                            <span>{size}</span>
                        </span>
                        {/* <span className="text-sm font-light text-slate-400">Categories-1</span> */}
                    </div>
                </div>
                <div className="flex items-start justify-center ml-auto">
                    <div className="flex pr-8">
                        <button
                            type="button"
                            onClick={handleDecrease}
                            className="p-2 -m-2 text-gray-400 cursor-pointer hover:text-gray-500"
                        >
                            <MinusIcon className="w-4 h-4" aria-hidden="true" />
                        </button>
                        <input type="text" className="w-8 h-6 px-0 mx-2 text-xs text-center text-gray-600 bg-gray-100 border rounded focus:outline-none" value={quantity!} readOnly />
                        {/* <span className="w-8 h-6 mx-2 text-xs leading-6 text-center text-gray-600 bg-gray-100 border rounded focus:outline-none" >{quantity}</span> */}

                        <button
                            type="button"
                            onClick={handleAddToCart}
                            className="p-2 -m-2 text-gray-400 cursor-pointer hover:text-gray-500"
                        >
                            <PlusIcon className="w-4 h-4" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="pr-4 text-right">
                        {/* <span className="text-sm font-medium">{FormatCurrency(productPrice)}</span> */}
                        {salePrice !== null && salePrice != productPrice ? (
                            <p className="flex flex-col-reverse text-xl text-gray-900">
                                <span className="align-middle">{FormatCurrency(salePrice)}</span>
                                <del className="ml-2 text-base text-red-400 line-through align-middle">{FormatCurrency(productPrice)}</del>
                            </p>
                        ) : (
                            <p className="text-xl text-gray-900">
                                {FormatCurrency(productPrice)}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="button"
                        onClick={handleRemoveClick}
                        className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">remove item</span>
                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </>
    );
};
export default CartItem;