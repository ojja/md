import Gallery from "~/components/Gallery";
import { MetaFunction, useRequest } from "remix";
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
import FormatCurrency, { FormatCurrency2 } from "~/utils/FormatCurrency";
import Frequently from "~/components/Frequently";
import { useRecentView } from "~/stores/allstores";
import RecentlyViewedProducts from "~/components/RecentlyViewedProducts";
import Accordion from "~/components/Accordion";
import { getSelectedCurrency } from "~/utils/currencyUtils";
import FavoriteHeart from "~/components/icons/favorite-icon";
import Heart from "~/components/icons/Heart";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import TabsNew from "~/components/product/TabsNew";


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
    const { t } = useTranslation();

    // debugger;
    const product = useLoaderData<typeof loader>();
    const nearestNumberRating = 12
    const [selectedSize, setSelectedSize] = useState(product.attributes?.pa_size?.[0] || '');
    const [selectedColor, setSelectedColor] = useState(product.attributes?.pa_color?.[0] || '');

    let variation = product?.variations?.find((variation: any) =>
        variation.attributes.attribute_pa_size === selectedSize &&
        variation.attributes.attribute_pa_color === selectedColor
    );
    // let variationPrice = variation ? variation.price : null;
    // let variationSalePrice = variation ? variation.sale_price : null;

    console.log('Selected currency:', getSelectedCurrency());

    useEffect(() => {
        setSelectedSize(product?.attributes?.pa_size?.[0] || '');
        setSelectedColor(product?.attributes?.pa_color?.[0] || '');
        addToRecent(product)
    }, [product]);
    let itemID;
    let salePrice = null;
    let productPrice = null;
    let color = null;
    let size = null;

    if (product.type === "simple") {
        itemID = product.id;
        productPrice = product.price;
        salePrice = product.sale_price;
    } else if (product.type === "variable") {
        productPrice = variation.price;
        // productPrice = 212;
        salePrice = variation.sale_price;
        // salePrice = 200;
        color = variation.attributes?.attribute_pa_color
        size = variation.attributes?.attribute_pa_size
        itemID = variation.id
    }


    const {
        addToRecent,
        addToWishlist,
        wishlistItems
    } = useRecentView();
    const isWishlist = wishlistItems?.some((item) => item.id === product.id);

    const handleWishlistClick = () => {
        addToWishlist(product);
    };
    const breadcrumbs = {
        pages: [
            { name: 'Home', href: '/' },
            { name: product.gender ? product.gender : 'All Products', href: '/products' },
            { name: product.category_name, href: `/category/${product.category_slug}` },
            { name: product.title, href: '#' }
        ]
    }

    // Generate the JSON-LD structured data
    const generateStructuredData = () => {
        // Define the schema data for the single product
        const schemaData = {
            '@context': 'http://schema.org',
            '@type': 'Product',
            name: product.title,
            image: product.main_img,
            description: product.description,
            sku: product.sku,
            cat: product.category,
            condition: 'new',
            gender: product.gender,
            brand: {
                '@type': 'Brand',
                name: 'LA',
            },
            offers: {
                '@type': 'Offer',
                price: 90,
                priceCurrency: 'EGP',
                availability: product.availability,
                // url: currentUrl,
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: 4.5,
                reviewCount: 89,
            },
        };

        return JSON.stringify(schemaData);
    };

    // console.log('product>>', product)
    // console.log('itemID', itemID);
    // console.log('productPrice', productPrice)
    // console.log('salePrice', salePrice)
    // console.log('variationId',variationId)
    // console.log('variation',variation)
    return (
        <div>
            <section className="pt-12 pb-24 overflow-hidden rounded-b-10xl">
                {/* Add the JSON-LD script tag with the structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: generateStructuredData() }}
                />
                {/* Product Intro */}
                <div className="bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-4 md:ltr:pr-28 md:rtl:pl-28">
                            <div className="w-full px-4 mb-2">
                                <Breadcrumbs breadcrumbs={breadcrumbs.pages} className="pb-4 " />
                            </div>
                            <div className="w-full  md:ltr:pr-16 md:rtl:pl-16 mb-16 lg:w-1/2 lg:mb-0">
                                <Gallery galleryImages={product.images} />
                                <Frequently />
                            </div>
                            <div className="relative w-full px-9 lg:w-1/2 bg-white shadow-lg rounded-3xl " style={{ boxShadow: '0px 20px 66px rgba(0, 0, 0, 0.2)' }}>

                                <button
                                    className={`w-8 h-8 rounded-full bg-primary-400 absolute top-9 right-9 z-10 flex justify-center items-center`}
                                    onClick={handleWishlistClick}>
                                    <span>
                                        {(isWishlist ?
                                            <FavoriteHeart />
                                            :
                                            <Heart />

                                        )}
                                    </span>
                                </button>
                                <div className=" pt-9 mb-6">
                                    <span className="hidden h-full min-h-full bg-orange-500 bg-purple-500 bg-pink-500 bg-center bg-cover bg-of-white-500 bg-olive-500 bg-golden-500 bg-navy-500 sm:bg-center"></span>
                                    <span className="text-xs tracking-wider text-gray-50">{product.sku}</span>
                                    <span className=" text-xl tracking-wider text-gray-50">{product.category_name}</span>

                                    <h1 className="mt-2 mb-4 text-5xl font-medium capitalize md:text-5xl font-heading">{product.title}</h1>
                                    {/* <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.category}</h2> */}
                                    {/* Reviews */}
                                    <Stars nearestNumberRating={nearestNumberRating} />
                                    <div className="mt-6">
                                        <div className="text-[#999999] text-xl" dangerouslySetInnerHTML={{ __html: product.description }} />
                                    </div>
                                    <h3 id="information-heading" className="sr-only ">
                                        Product information
                                    </h3>
                                    {salePrice && salePrice !== productPrice ? (
                                        <p className="flex items-end  gap-x-3">
                                            <span className=" w-fit bg-yellow-910 rounded h-[26px] flex rtl:flex-row-reverse gap-x-[2px] px-1 mt-5 text-5xl">{FormatCurrency(salePrice, getSelectedCurrency(), ["text-xl font-normal", " text-5xl font-semibold ltr:-ml-0.5 rtl:-mr-0.5", "text-xl font-normal"])}</span>
                                            <del className="text-gray-400 text-sm line-through ">{FormatCurrency2(productPrice, getSelectedCurrency())}</del>
                                        </p>
                                    ) : (
                                        <p className=" w-fit bg-yellow-910 rounded h-[26px] flex rtl:flex-row-reverse gap-x-[2px] px-1 mt-5 text-5xl">{FormatCurrency(salePrice, getSelectedCurrency(), ["text-xl font-normal", " text-5xl font-semibold ltr:-ml-0.5 rtl:-mr-0.5", "text-xl font-normal"])}</p>

                                    )}
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
                                    <span className="pt-3 text-xs">{`${selectedSize} - ${selectedColor} - ID ${itemID}`}</span>
                                    <span className="block text-xs tracking-wider text-gray-400">{product.availability}</span>
                                    <div className=" mt-10 ">
                                        <AddToCartSimple
                                            className="inline-flex justify-center w-full py-3 text-center text-xl font-medium text-white "
                                            product={
                                                {
                                                    id: itemID,
                                                    thumbnail: product.main_img,
                                                    // size: selectedSize,
                                                    // color: selectedColor,
                                                    slug: product.slug,
                                                    price: salePrice,
                                                }
                                            }
                                            // disabled={!Boolean(selectedSize.inStock)}
                                            disabled={salePrice === null}
                                            singleProductView={true}
                                        />


                                        <button
                                            type="submit"
                                            disabled
                                            className="items-center justify-center w-full py-3 text-center text-xl font-medium capitalize border-2 border-solid rounded-100 w-full border-green-500 text-slate focus:outline-none cursor-pointer"
                                        >

                                            {i18next.language === "ar" ?
                                                ' أشتري حالاً ' : ' Direct checkout '
                                            }
                                        </button>
                                    </div>
                                </div>


                                <div>
                                    <div className="w-full">
                                        {/* <div className="w-full mx-auto bg-white rounded-2xl">
                                            <Accordion
                                                title="What is your refund policy?"
                                                description="If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
                                            />
                                            <div className="mt-2">
                                                <Accordion
                                                    title="Do you offer technical support?"
                                                    description="No."
                                                />
                                            </div>
                                        </div> */}
                                        <TabsNew product={{ description: product.description }}/>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                            </div>
                        </div>
                    </div>
                </div>

                <Tabs product={{ description: product.description }} />

                <ExtraProducts categorySlug="skirt" count={5} title="Same Category" />
                <RecentlyViewedProducts />

                <ProductSpecifications
                    // @ts-ignore
                    features={features}
                />
            </section>
        </div>
    )
}
