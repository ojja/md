import { json, LoaderFunction } from "@remix-run/cloudflare"
import { Outlet, useLoaderData, useParams } from "@remix-run/react";
import { getCategoryProducts } from "~/models/category.server";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon, ViewColumnsIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from "react";
import { v4 } from 'uuid';
import Breadcrumbs from "~/components/Breadcrumbs";
import { ProductWidget } from "~/components/product/ProductWidget";



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type LoaderData = {
  data: Awaited<ReturnType<typeof getCategoryProducts>>;
};

export const loader = async ({ params }:any) => {
  const categorySlug = params.catSlug
  const pageNumber = 1
  return json({
    products: await getCategoryProducts(categorySlug, pageNumber),
    categorySlug,
    pageNumber,
  });
};

export default function CategorySlug() {
  const { products, categorySlug, pageNumber } = useLoaderData();

  // const handleLoadMore = async () => {
  //   const nextPageNumber = pageNumber + 1;
  //   const moreProducts = await getCategoryProducts(categorySlug, nextPageNumber);
  //   // append the newly fetched products to the existing products array
  //   const updatedProducts = [...products, ...moreProducts];

  //   // return the updated products array along with the updated page number
  //   return json({
  //     products: updatedProducts,
  //     categorySlug,
  //     pageNumber: nextPageNumber,
  //   });
  // };
  // console.log('params Base childD>', data)
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
  const cat = 'Category';
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
  return (
    <div className="bg-white">
      <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className='pt-5 '>
          <div className="flex items-baseline justify-between pt-2 pb-6 mb-4 border-b border-gray-200">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals in {categorySlug}</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left z-20">
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
              <div className="lg:col-span-3 relative z-10">
                <div className={classNames(
                  grid ? 'sm:grid-cols-1 lg:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4',
                  'grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 mt-6'
                )}
                >

                  {products.map((productData:any) => (
                    <ProductWidget product={productData} key={v4()} />
                  ))}
                </div>
                  <div className="flex items-center justify-center mt-10 loadmore">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center justify-center whitespace-nowrap">
                      Load More
                    </button>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center justify-center whitespace-nowrap">
                      <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                      </svg>
                      Loading...
                    </button>
                  </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
