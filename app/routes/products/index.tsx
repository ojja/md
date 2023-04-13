import { LoaderFunction } from "@remix-run/cloudflare"
import { Form, useLoaderData } from "@remix-run/react";
import { ProductWidget } from "~/components/product/ProductWidget";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon, ViewColumnsIcon } from '@heroicons/react/20/solid';
import { v4 } from 'uuid';
import { getProducts, Product } from "~/api/products";
import { Fragment, useState } from "react";
import Breadcrumbs from "~/components/Breadcrumbs";


function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ')
}

export const loader: LoaderFunction = async () => {
    return getProducts();
};

export default function shop() {
    const products = useLoaderData<Product[]>();

    // const { cat } = useParams();
    const { cat } = 'Category';
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [grid, setGrid] = useState(false);
    const sortOptions = [
        { name: 'Most Popular', href: '#', current: true },
        { name: 'Best Rating', href: '#', current: false },
        { name: 'Newest', href: '#', current: false },
        { name: 'Price: Low to High', href: '#', current: false },
        { name: 'Price: High to Low', href: '#', current: false },
    ]
    const subCategories = [
        { name: 'Totes', href: '#', current: false },
        { name: 'Backpacks', href: '#', current: true },
        { name: 'Travel Bags', href: '#', current: false },
        { name: 'Hip Bags', href: '#', current: false },
        { name: 'Laptop Sleeves', href: '#', current: false },
    ]
    const breadcrumbs = {
        pages: [
            { name: 'Home', href: '/' },
            { name: 'Woman', href: '#' },
            { name: 'Parent Category', href: '#' },
            { name: cat, href: '#' }
        ]
    }
    const filters = [
        {
            id: 'color',
            name: 'Color',
            options: [
                { value: 'white', label: 'White', checked: false },
                { value: 'beige', label: 'Beige', checked: false },
                { value: 'blue', label: 'Blue', checked: true },
                { value: 'brown', label: 'Brown', checked: false },
                { value: 'green', label: 'Green', checked: false },
                { value: 'purple', label: 'Purple', checked: false },
            ],
        },
        {
            id: 'category',
            name: 'Category',
            options: [
                { value: 'new-arrivals', label: 'New Arrivals', checked: false },
                { value: 'sale', label: 'Sale', checked: false },
                { value: 'travel', label: 'Travel', checked: true },
                { value: 'organization', label: 'Organization', checked: false },
                { value: 'accessories', label: 'Accessories', checked: false },
            ],
        },
        {
            id: 'size',
            name: 'Size',
            options: [
                { value: '2l', label: '2L', checked: false },
                { value: '6l', label: '6L', checked: false },
                { value: '12l', label: '12L', checked: false },
                { value: '18l', label: '18L', checked: false },
                { value: '20l', label: '20L', checked: false },
                { value: '40l', label: '40L', checked: true },
            ],
        },
    ]
    console.log('conseeeee222',products)
    return (
        <>
            <div className="bg-white">
                <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='pt-5 '>
                        <div className="flex items-baseline justify-between pt-2 pb-6 mb-4 border-b border-gray-200">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

                            <div className="flex items-center">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                                            Sort
                                            <ChevronDownIcon
                                                className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                {sortOptions.map((option) => (
                                                    <Menu.Item key={v4()}>
                                                        {({ active }) => (
                                                            <a
                                                                href={option.href}
                                                                className={classNames(
                                                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                {option.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                                <button type="button" className={classNames(
                                    grid ? 'text-gray-500' : 'text-gray-400',
                                    "-m-2 ml-2 p-2 hover:text-gray-500"
                                )} onClick={() => setGrid(true)}>
                                    <span className="sr-only">View grid</span>
                                    <Squares2X2Icon className="w-5 h-5" aria-hidden="true" />
                                </button>
                                <button type="button" className={classNames(
                                    grid ? 'text-gray-400' : 'text-gray-500',
                                    "-m-2 ml-2 p-2 hover:text-gray-500"
                                )} onClick={() => setGrid(false)}>
                                    <span className="sr-only">View Columns</span>
                                    <ViewColumnsIcon className="w-5 h-5" aria-hidden="true" />
                                </button>
                                <button
                                    type="button"
                                    className="p-2 ml-4 -m-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                    onClick={() => setMobileFiltersOpen(true)}
                                >
                                    <span className="sr-only">Filters</span>
                                    <FunnelIcon className="w-5 h-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <Breadcrumbs breadcrumbs={breadcrumbs.pages} className="pb-4 border-b border-gray-200" />
                        <section aria-labelledby="products-heading" className="pt-6 pb-24">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                {/* Filters */}
                                <form className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="pb-6 space-y-4 border-b border-gray-200">
                                        {subCategories.map((category) => (
                                            <li key={v4()}>
                                                <a href={category.href} className={classNames(
                                                    category.current ? 'text-blue-600' : 'text-gray-500',
                                                    'font-medium text-base'
                                                )}>{category.name}</a>
                                            </li>
                                        ))}
                                    </ul>

                                    {filters.map((section) => (
                                        <Disclosure as="div" key={v4()} className="py-6 border-b border-gray-200">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="flow-root -my-3">
                                                        <Disclosure.Button className="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">{section.name}</span>
                                                            <span className="flex items-center ml-6">
                                                                {open ? (
                                                                    <MinusIcon className="w-5 h-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="w-5 h-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-4">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={v4()} className="flex items-center">
                                                                    <input
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={option.value}
                                                                        type="checkbox"
                                                                        defaultChecked={option.checked}
                                                                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded cursor-pointer focus:ring-indigo-500"
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                        className="ml-3 text-sm text-gray-600 cursor-pointer"
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>

                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    <div className={classNames(
                                        grid ? 'sm:grid-cols-1 lg:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4',
                                        'grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 mt-6'
                                    )}
                                    >

                                        {products.map((productData) => (
                                            <ProductWidget product={productData} key={v4()} />
                                        ))}
                                        {/* <ProductLoader />
                                    <ProductLoader /> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
        // <div className="lg:col-span-3">
        //     <Form reloadDocument method="get">
        //         <label>
        //             <input type="text" name="title" className="border-2"/>
        //         </label>
        //         <button type="submit">Search</button>
        //     </Form>
        //     <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        //         {products.map((product) => (
        //             <ProductWidget product={product} key={v4()} />
        //         ))}
        //     </div>
        // </div>
    )
}
