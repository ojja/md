import Gallery from "~/components/Gallery";
import { MetaFunction } from "remix";
import { Dialog, Disclosure, RadioGroup, Tab, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import React, { Fragment, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/cloudflare";
import invariant from 'tiny-invariant';
import { getProductBySlug, Product } from "~/api/products";
import { useLoaderData } from "@remix-run/react";
import AddToCartSimple from "~/components/AddToCartSimple";
import { v4 } from 'uuid';
import ProductSpecifications from "~/components/ProductSpecifications";
import Tabs from "~/components/product/Tabs";
import SizeGuide from "~/components/SizeGuide";
import ExtraProducts from "~/components/ExtraProducts";
import Breadcrumbs from "~/components/Breadcrumbs";
import Stars from "~/components/Stars";
import SelectColor from "~/components/product/SelectColor";
import SelectSize from "~/components/product/SelectSize";
import FormatCurrency from "~/utils/FormatCurrency";
import Frequently from "~/components/Frequently";
import useRecentView from "~/stores/wishtList";
import RecentlyViewedProducts from "~/components/RecentlyViewedProducts";

interface Feature {
    name: string;
    description: string;
}
const features: Feature[] = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    // { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

const breadcrumbs = {
    pages: [
        { name: 'Home', href: '/' },
        { name: 'Woman', href: '#' },
        { name: 'Parent Category', href: '#' },
        { name: 'all-clothing', href: '#' }
    ]
}

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.productSlug, 'expected params.productId');

    const product = await getProductBySlug(params.productSlug!);
    return json(product);
};


export const meta: MetaFunction = ({ data }: any) => {
    return {
        title: `Single | ${data.title}`,
        description: `${data.description}`,
        'og:title': data.title,
        'og:description': data.description,
        'og:image': data.main_img,
    }
}


export default function ProductSingle() {
    const product = useLoaderData<typeof loader>();
    const nearestNumberRating = 12

    const [selectedSize, setSelectedSize] = useState(product.attributes?.pa_size[0] || '');
    const [selectedColor, setSelectedColor] = useState(product.attributes?.pa_color[0] || '');

    let variation = product?.variations?.find((variation: any) =>
        variation.attributes.attribute_pa_size === selectedSize &&
        variation.attributes.attribute_pa_color === selectedColor
    );
    let variationPrice = variation ? variation.price : null;
    let variationSalePrice = variation ? variation.sale_price : null;


    useEffect(() => {
        setSelectedSize(product?.attributes?.pa_size[0] || '');
        setSelectedColor(product?.attributes?.pa_color[0] || '');
        addToRecent(product)
    }, [product]);
    //   console.log('product>>',product)


    const {
        addToRecent,
    } = useRecentView();

    return (
        <div>
            <section className="pt-12 pb-24 overflow-hidden rounded-b-10xl">

                {/* Product Intro */}
                <div className="bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4 mb-2">
                                <Breadcrumbs breadcrumbs={breadcrumbs.pages} className="pb-4 border-b border-gray-200" />
                            </div>
                            <div className="w-full px-4 mb-16 lg:w-1/2 lg:mb-0">
                                <Gallery galleryImages={product.images} />
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <div className="pt-2 mb-6">
                                    <span className="hidden bg-orange-500 bg-purple-500 bg-pink-500 bg-of-white-500 bg-olive-500 bg-golden-500 bg-navy-500"></span>
                                    <span className="text-xs tracking-wider text-gray-400">NEED CATEGORY </span>
                                    <span className="text-xs tracking-wider text-gray-400">{product.availability}</span>
                                    <h1 className="mt-2 mb-4 text-5xl font-medium md:text-4xl font-heading">{product.title}</h1>
                                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.category}</h2>
                                    <h3 id="information-heading" className="sr-only">
                                        Product information
                                    </h3>
                                    {variationSalePrice !== null && variationSalePrice != variationPrice ? (
                                        <p className="text-2xl text-gray-900">
                                            <span className="align-middle">{FormatCurrency(variationSalePrice)}</span>
                                            <del className="ml-2 text-base text-red-400 line-through align-middle">{FormatCurrency(variationPrice)}</del>
                                        </p>
                                    ) : (
                                        <p className="text-2xl text-gray-900">
                                            {FormatCurrency(variationPrice)}
                                        </p>
                                    )}
                                </div>
                                {/* Reviews */}
                                <Stars nearestNumberRating={nearestNumberRating} />
                                <div className="mt-6">
                                    <div className="leading-relaxed text-gray-500" dangerouslySetInnerHTML={{ __html: product.description }} />
                                </div>
                                <div className="mt-10">

                                    {product.attributes?.pa_color ? (
                                        <SelectColor
                                            colors={product.attributes?.pa_color || []}
                                            selectedColor={selectedColor}
                                            onSelectedColorChange={setSelectedColor}

                                        />
                                    ) : ('')}

                                    {/* Sizes */}
                                    {product.attributes?.pa_size ? (
                                        <SelectSize
                                            sizes={product.attributes?.pa_size || []}
                                            selectedSize={selectedSize}
                                            onSelectedSizeChange={setSelectedSize}
                                        />
                                    ) : ('')}
                                    <span className="pt-3 text-xs">{`${selectedSize} - ${selectedColor}`}</span>
                                    <div className="flex mt-10 space-x-4">
                                        <AddToCartSimple
                                            className="inline-flex justify-center w-full px-8 py-3 text-base font-medium text-white border-2 border-solid rounded-lg bg-slate-900 border-slate-900 hover:bg-slate-700 hover:border-slate-700"
                                            product={
                                                {
                                                    id: product.id,
                                                    thumbnail: product.main_img,
                                                    size: selectedSize,
                                                    color: selectedColor,
                                                    slug: product.slug,
                                                    price: variationSalePrice,
                                                }
                                            }
                                            // disabled={!Boolean(selectedSize.inStock)}
                                            disabled={variationSalePrice === null}
                                        />
                                        <button
                                            type="submit"
                                            className="items-center justify-center w-1/2 px-8 py-3 text-base font-medium capitalize border-2 border-solid rounded-md border-slate-600 text-slate hover:bg-slate-600 hover:text-white focus:outline-none"
                                        >
                                            Direct checkout
                                        </button>
                                    </div>
                                </div>


                                <div>
                                    <div className="w-full mt-8">
                                        <div className="w-full mx-auto bg-white rounded-2xl">
                                            <Disclosure as="div">
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                                            <span>What is your refund policy?</span>
                                                            <ChevronUpIcon
                                                                className={`${open ? 'rotate-180 transform' : ''
                                                                    } h-5 w-5 text-gray-500`}
                                                            />
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                            If you're unhappy with your purchase for any reason, email us
                                                            within 90 days and we'll refund you in full, no questions asked.
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                            <Disclosure as="div" className="mt-2">
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                                            <span>Do you offer technical support?</span>
                                                            <ChevronUpIcon
                                                                className={`${open ? 'rotate-180 transform' : ''
                                                                    } h-5 w-5 text-gray-500`}
                                                            />
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                            No.
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <Frequently />
                            </div>
                        </div>
                    </div>
                </div>

                <Tabs product={{ description: product.description }} />


                <ProductSpecifications
                    // @ts-ignore
                    features={features}
                />
                <ExtraProducts categorySlug="skirt" pageNumber={1} title="Same Category" />
                <RecentlyViewedProducts />
            </section>
        </div>
    )
}
