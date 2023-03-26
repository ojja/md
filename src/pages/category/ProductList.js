import React, { Fragment, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs'
import Filters from '../../components/Filters';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import ProductLoader from '../../components/ProductLoader';
import storeItems from '../../data/items.json';
import { ProductWidget } from '../../components/product/ProductWidget';
import { v4 } from 'uuid';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductList() {
    const { cat } = useParams();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
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
    const products = [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '35',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Mens Casual Premium Slim Fit T-Shirts ',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '37',
            color: 'Black',
        },
        {
            id: 3,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '59',
            color: 'Black',
        },
        {
            id: 4,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '59',
            color: 'Black',
        },
        {
            id: 5,
            name: 'Mens Casual Slim Fit',
            href: '#',
            imageSrc: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '59',
            color: 'White',
        },
        {
            id: 6,
            name: 'Mens Casual Slim Fit 6',
            href: '#',
            imageSrc: 'https://api.lorem.space/image/shoes?w=640&h=480&r=919',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '59',
            color: 'White',
        },
        {
            id: 7,
            name: 'Recycled Steel Hat',
            href: '#',
            imageSrc: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1394',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '59',
            color: 'White',
        },
        {
            id: 8,
            name: 'Handmade Frozen Computer',
            href: '#',
            imageSrc: 'https://api.lorem.space/image/shoes?w=640&h=480&r=134',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '59',
            color: 'White',
        },
        {
            id: 9,
            name: 'Mens Casual Slim Fit 6',
            href: '#',
            imageSrc: 'https://api.lorem.space/image/shoes?w=640&h=480&r=394',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '59',
            color: 'White',
        },
        {
            id: 10,
            name: 'Mens Casual Slim Fit 6',
            href: '#',
            imageSrc: 'https://api.lorem.space/image/shoes?w=640&h=480&r=134',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '59',
            color: 'White',
        },
    ]
    return (
        <div className="bg-white">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className=' pt-5'>
                    <div className="flex items-baseline justify-between border-b border-gray-200 pt-2 pb-6 mb-4">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
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
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
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

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <Breadcrumbs breadcrumbs={breadcrumbs.pages} className="border-b border-gray-200 pb-4" />
                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6">
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
                                    <Disclosure as="div" key={v4()} className="border-b border-gray-200 py-6">
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                            ) : (
                                                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
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
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
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
                                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                    
                                    <ProductLoader/>
                                    <ProductLoader/>
                                    {storeItems.map((product) => (
                                        <ProductWidget product={product} key={v4()}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
