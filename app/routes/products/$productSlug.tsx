import Gallery from "~/components/Gallery";
import { Dialog, Disclosure, RadioGroup, Tab, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import React, { Fragment, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ActionFunction, json, LoaderFunction, MetaFunction, redirect } from "@remix-run/cloudflare";
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

// export const action: ActionFunction = async ({ request, params }) => {
//     invariant(params.productId, 'expected params.productId');
//     const body = await request.formData();

//     const errors = { name: '', message: '' };

//     if (errors.name || errors.message) {
//         const values = Object.fromEntries(body);
//         return { errors, values };
//     }
//     return redirect(`/products/${params.productId}`);
// }


// export const meta: MetaFunction = ({ data }) => {
//     return { title: data.title, description: data.description };
// };

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.productSlug, 'expected params.productId');
    // console.log('params... -->', params.productSlug);


    const product = await getProductBySlug(params.productSlug!);
    // console.log('fetching product... -->', product.id);
    // console.log('fetching product... -->', product.title);

    return json(product);
    // return json({
    //     product: await product,
    //     // faqRes: await faqRes.json()
    //   });
};

export default function ProductSingle() {
    const product = useLoaderData<typeof loader>();
    console.log("product", product)
    // const nearestNumberRating = Math.round(product.rating)
    const nearestNumberRating = 12
    // const [selectedColor, setSelectedColor] = useState(product2.colors[0])
    // const [selectedSize, setSelectedSize] = useState(product2.sizes[2])

    // const [selectedSize, setSelectedSize] = useState(product.attributes?.pa_size[0]);
    // const [selectedColor, setSelectedColor] = useState(product.attributes?.Color[0]);
    const selectedSize = false;
    const selectedColor = false;

    // const variations = product.variations?.filter((variation: any) => {
    //     return (
    //         (!selectedSize || variation.attributes.attribute_size === selectedSize) &&
    //         (!selectedColor || variation.attributes.attribute_color === selectedColor)
    //     );
    // });

    // const [isOpenCart, setIsOpenCart] = useState(false);



    const checkSize = { inStock: true }
    const checkColor = { inStock: true }
    return (
        <div>
            <section className="pt-12 pb-24 overflow-hidden rounded-b-10xl">

                {/* Product Intro */}
                <div className="bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4">
                                <Breadcrumbs breadcrumbs={breadcrumbs.pages} className="pb-4 border-b border-gray-200" />
                            </div>
                            <div className="w-full px-4 mb-16 lg:w-1/2 lg:mb-0">
                                {/* <Gallery galleryImages={product.images}/> */}
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <div className="pt-2 mb-6">
                                    <span className="text-xs tracking-wider text-gray-400">NEED CATEGORY </span>
                                    <span className="text-xs tracking-wider text-gray-400">{product.availability}</span>
                                    <h1 className="mt-2 mb-4 text-5xl font-medium md:text-4xl font-heading">{product.title}</h1>
                                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.category}</h2>
                                    <h3 id="information-heading" className="sr-only">
                                        Product information
                                    </h3>
                                    <p className="text-2xl text-gray-900">{product.price}</p>
                                </div>
                                {/* Reviews */}
                                <Stars nearestNumberRating={nearestNumberRating}/>
                                <div className="mt-6">
                                    <div className="leading-relaxed text-gray-500" dangerouslySetInnerHTML={{ __html: product.description }} />
                                </div>
                                <div className="mt-10">

                                    {product.attributes?.Color?(
                                    <div>
                                        {/* Colors */}
                                        <h3 className="text-sm font-medium text-gray-900">Color</h3>
                                        <span className={`bg-green-500 bg-yellow-500 bg-orange-500 bg-red-500 bg-purple-500 bg-black bg-white`}></span>
                                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                            <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                                            <div className="flex items-center space-x-3">
                                                {product.attributes?.Color.map((color) => (
                                                    <RadioGroup.Option
                                                        key={v4()}
                                                        value={color}
                                                        className={({ active, checked }) =>
                                                            classNames(
                                                                `bg-${color.toLowerCase()}-500`,
                                                                active && checked ? 'ring ring-offset-1' : '',
                                                                !active && checked ? 'ring-2' : '',
                                                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                                            )
                                                        }
                                                    >
                                                        <RadioGroup.Label as="span" className="sr-only">
                                                            {' '}
                                                            {color}{' '}
                                                        </RadioGroup.Label>
                                                        <span
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                `bg-${color.toLowerCase()}-500`,
                                                                color == 'Black' ? 'bg-black' : '',
                                                                color == 'White' ? 'bg-white' : '',
                                                                'h-8 w-8 rounded-full border border-black border-opacity-10'
                                                            )}
                                                        />
                                                    </RadioGroup.Option>
                                                ))}
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    ):('')}
                                    {/* Sizes */}
                                    {product.attributes?.Color?(
                                    <div className="mt-10">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                            <SizeGuide/>
                                        </div>

                                        <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                            <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                                {product.attributes?.pa_size.map((size: any) => (
                                                    <RadioGroup.Option
                                                        key={v4()}
                                                        value={size}
                                                        // disabled={!size.inStock}
                                                        className={({ active }) =>
                                                            classNames(
                                                                checkSize.inStock
                                                                    ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                    : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                                active ? 'ring-2 ring-indigo-500' : '',
                                                                'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                            )
                                                        }
                                                    >
                                                        {({ active, checked }) => (
                                                            <>
                                                                <RadioGroup.Label as="span">{size}</RadioGroup.Label>
                                                                {checkSize.inStock ? (
                                                                    <span
                                                                        className={classNames(
                                                                            active ? 'border' : 'border-2',
                                                                            checked ? 'border-indigo-500' : 'border-transparent',
                                                                            'pointer-events-none absolute -inset-px rounded-md'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                                                                    >
                                                                        <svg
                                                                            className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                                                            viewBox="0 0 100 100"
                                                                            preserveAspectRatio="none"
                                                                            stroke="currentColor"
                                                                        >
                                                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </>
                                                        )}
                                                    </RadioGroup.Option>
                                                ))}
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    ):('')}
                                    {/* <span className="pt-3 text-xs">{`${selectedSize} - ${selectedColor}`}</span> */}
                                    <div className="flex mt-10 space-x-4">
                                        <AddToCartSimple
                                            className="inline-flex justify-center w-full px-8 py-3 text-base font-medium text-white border-2 border-solid rounded-lg bg-slate-900 border-slate-900 hover:bg-slate-700 hover:border-slate-700"
                                            product={
                                                {
                                                    id: product.id,
                                                    thumbnail: product.main_img,
                                                    // size: selectedSize,
                                                    // color: selectedColor,
                                                    slug: product.slug
                                                }
                                            }
                                        // disabled={!Boolean(selectedSize.inStock)}
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
                        </div>
                    </div>
                </div>

                <Tabs product={{description:product.description}}/>

            
                <ProductSpecifications
                    // @ts-ignore
                    features={features}
                />
                <ExtraProducts categorySlug="all-clothing" pageNumber={1} title="Frequency both together"/>
                <ExtraProducts categorySlug="all-clothing" pageNumber={1} title="Recently viewed products"/>
            </section>
        </div>
    )
}
