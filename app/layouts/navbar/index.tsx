import React, { Fragment, useEffect, useState } from 'react';

import { Dialog, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import useShoppingCart from '~/stores/cartStore';
import ShoppingCart from '~/components/ShoppingCart';
import { Link, useLocation, useNavigate, useSearchParams } from '@remix-run/react';
import { v4 } from 'uuid';
import ChangeCountry from '~/components/ChangeCountry';
import Search from '~/components/Search';
import LanguageSwitcher from '~/components/LanguageSwitcher';
import ChangeLanguage from '~/components/ChangeLanguage';
import { useTranslation } from 'react-i18next';
import NoInternetConnection from '~/components/NoInternetConnection';
import { useStickyBox } from "react-sticky-box";
import StickyDiv from '~/components/StickyDiv';


const navigation = {
  categories: [
    {
      id: 'Clothing',
      name: 'Category 1',
      slug: 'juices',
      featured: [
        {
          name: 'Category 1 > 2',
          href: 'pants',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Category 3 > 2',
          href: 'polo',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        }
      ],

      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Category 2', href: 'food' },
            { name: 'Category 3', href: 'coffee' },
            { name: 'Category 4', href: 'espresso' },
            { name: 'Category Trousers', href: 'trousers' },
            // { name: 'Shirts', href: 'shirts' },
            // { name: 'Tees', href: 'tees' },
            // { name: 'Jackets', href: 'jackets' },
            // { name: 'Browse All', href: 'clothing' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories X',
          items: [
            { name: 'Watches X', href: 'top' },
            { name: 'Fitness Equipment X', href: 'vest' },
            { name: 'Bags X', href: 'bags' },
            { name: 'Erin Recommends X', href: 'shoes' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands X',
          items: [
            { name: 'Full Nelson X', href: '#' },
            { name: 'My Way X', href: '#' },
            { name: 'Re-Arranged X', href: '#' },
            { name: 'Counterfeit X', href: '#' },
            { name: 'Significant Other X', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'About', href: 'about' },
    { name: 'Blog', href: 'blog' },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export default function NavBar({ }) {
  const [open, setOpen] = useState(false);
  const { cartQuantityTotal, openCart, refreshCart } = useShoppingCart();

  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout-step1" || location.pathname === "/checkout-step2" || location.pathname === "/checkout";
  const isLocalhost = false;


  const { t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    setIsAnimating(true);
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 820); // Duration of the shake animation in milliseconds

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [cartQuantityTotal]); // Run the effect whenever cartQuantityTotal changes

  return (
    <>
      <div className="bg-white">
        <NoInternetConnection />
        <React.Fragment>
          {/* Mobile menu */}
          <Transition show={open} >
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
              <Transition.Child

                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child

                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
                    <div className="flex px-4 pt-5 pb-2">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 -m-2  text-white rounded-md"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Links */}
                    <Tab.Group as="div" className="mt-2">
                      <div className="border-b border-gray-200">
                        <Tab.List className="flex px-4 -mb-px space-x-8">
                          {navigation.categories.map((category) => (
                            <Tab
                              key={v4()}
                              className={({ selected }) =>
                                classNames(
                                  selected ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-900',
                                  'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                )
                              }
                            >
                              {category.name}
                            </Tab>
                          ))}
                        </Tab.List>
                      </div>
                      <Tab.Panels >
                        {navigation.categories.map((category) => (
                          <Tab.Panel key={v4()} className="px-4 pt-10 pb-8 space-y-10">
                            <div className="grid grid-cols-2 gap-x-4">
                              {category.featured.map((item) => (
                                <div key={v4()} className="relative text-sm group">
                                  <div className="overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1 group-hover:opacity-75">
                                    <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                  </div>
                                  <a href={item.href} className="block mt-6 font-medium text-gray-900">
                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                    {item.name}
                                  </a>
                                  <p aria-hidden="true" className="mt-1">
                                    Shop now
                                  </p>
                                </div>
                              ))}
                            </div>
                            {category.sections.map((section) => (
                              <div key={v4()}>
                                <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                  className="flex flex-col mt-6 space-y-6"
                                >
                                  {section.items.map((item) => (
                                    <li key={v4()} className="flow-root">
                                      <a href={item.href} className="block p-2 -m-2 text-gray-500">
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>

                    <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                      {navigation.pages.map((page) => (
                        <div key={v4()} className="flow-root">
                          <a href={page.href} className="block p-2 -m-2 font-medium text-gray-900">
                            {page.name}
                          </a>
                        </div>
                      ))}
                    </div>

                    <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                      <div className="flow-root">
                        <a href="#" className="block p-2 -m-2 font-medium text-gray-900">
                          Sign in
                        </a>
                      </div>
                      <div className="flow-root">
                        <a href="#" className="block p-2 -m-2 font-medium text-gray-900">
                          Create account
                        </a>
                      </div>
                    </div>

                    <div className="px-4 py-6 border-t border-gray-200">
                      <a href="#" className="flex items-center p-2 -m-2">
                        <img
                          src="https://tailwindui.com/img/flags/flag-canada.svg"
                          alt=""
                          className="flex-shrink-0 block w-5 h-auto"
                        />
                        <span className="block ml-3 text-base font-medium text-gray-900">CAD</span>
                        <span className="sr-only">, change currency</span>
                      </a>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </React.Fragment>

        <div>
          {isCheckoutPage ? null : (
            typeof window !== 'undefined' && <ShoppingCart />
          )}
        </div>
        <header className="relative z-[11] bg-white">
          {isCheckoutPage ? null : (
            // <p className="flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-offwhite-500 sm:px-6 lg:px-8">
            //   {t('common.topBannerText')}
            //   {/* <LanguageSwitcher
            //   /> */}
            // </p>
            <div className=' bg-offwhite-500 py-15 '>
              <div className="details flex lg:justify-between justify-center container m-auto px-4">
                <div className="menu flex gap-x-7">
                  <ChangeLanguage />
                  {/* Change Currncy */}
                  {isCheckoutPage ? null : (
                    <div className="hidden lg:flex">
                      <Menu as="div" className="relative z-[] inline-block text-left">
                        <div>
                          <Menu.Button className="flex items-center justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                            <img
                              src="/images/en.svg"
                              alt=""
                              className="flex-shrink-0 block w-5 h-auto"
                            />
                            <span className="block ml-3 text-sm font-medium">USD</span>
                            <span className="sr-only">, change currency</span>
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
                              <Menu.Item key={v4()}>
                                {({ active }) => (
                                  <div className='flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100'>
                                    <img
                                      src="/images/en.svg"
                                      alt=""
                                      className="flex-shrink-0 block w-5 h-auto"
                                    />
                                    <span className="block ml-3">USD</span>
                                  </div>
                                )}
                              </Menu.Item>
                              <Menu.Item key={v4()}>
                                {({ active }) => (
                                  <div
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'flex justify-center px-4 py-2 text-sm font-medium text-gray-900 w-full cursor-pointer'
                                    )}
                                  >
                                    <img
                                      src="/images/eg.svg"
                                      alt=""
                                      className="flex-shrink-0 block w-5 h-auto"
                                    />
                                    <span className="block ml-3">EGP</span>
                                  </div>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  )}

                  {navigation.pages.map((page) => (
                    <Link
                      key={v4()}
                      // to={page.href}
                      to={`/${page.href}`}
                      className="hidden lg:flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}



                </div>
                <div className="image hidden lg:block">
                  <img src="/images/paymentmethods.png" alt="" />
                </div>
                <div className="message">
                  <p className=' text-brown-500 md:text-base text-xs'>  {t('common.topBannerText')}</p>
                </div>




              </div>

            </div>
          )}
          <div className=" bg-green-900 px-4">
            <nav aria-label="Top" className="container mx-auto">
              <div className="border-b border-green-100">
                <div className="flex items-center h-16">
                  <button
                    type="button"
                    className="p-2  text-white rounded-md lg:hidden"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                  </button>

                  {/* Logo */}
                  <div className="flex ml-4 lg:ml-0 items-center gap-x-2">
                    <Link to="/">
                      <img
                        className="w-auto"
                        src="/images/logo.png"
                        alt=""
                      />
                    </Link>
                    {/* Change Country */}
                    {isCheckoutPage ? null : (
                      <div className="hidden lg:flex">
                        <ChangeCountry />
                      </div>
                    )}

                  </div>

                  <div className="flex items-center ml-auto">
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <Link to="/login" className="text-sm font-medium text-white hover:text-gray-800">
                        {t('common.login')}
                      </Link>
                      {/* <span className="w-px h-6 bg-gray-200" aria-hidden="true" /> */}
                      <Link to="/my-account" className="text-sm font-medium text-white hover:text-gray-800">
                        {t('common.my_account')}
                      </Link>
                    </div>

                    {/* Change language */}





                    {/* Search */}
                    {isCheckoutPage ? null : (
                      <div className="flex lg:ml-6">
                        <Search />
                      </div>
                    )}

                    {/* Cart */}
                    {/* <div className="flex items-center justify-center ml-4 lg:ml-6 bg-yellow-400 rounded-full relative w-10 h-10">
                      {isCheckoutPage ? (
                        <Link to="/cart" className="flex items-center p-2 -m-2 group">
                          <ShoppingBagIcon
                            className="flex-shrink-0 w-6 h-6  text-white group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <svg className=' w-6 h-6' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clipRule="evenodd" d="M34.3785 4.22593L27.0655 10.6906H35V16.223C35 18.0585 33.9168 19.6344 32.3551 20.2746L31.3405 30.0934C31.1125 32.3194 29.3254 34 27.184 34H8.78243C6.6411 34 4.85839 32.3194 4.63031 30.0934L3.62809 20.2737C2.06643 19.6335 1 18.0585 1 16.223V10.6906H19.295C18.0966 11.7051 17.8474 11.9346 17.4614 12.2902C17.1822 12.5474 16.8314 12.8705 15.9981 13.6043H3.78689V16.223C3.78689 16.9705 4.32102 17.5882 5.0411 17.6592L6.16594 17.7715L7.39663 29.7827C7.47282 30.5248 8.06882 31.0863 8.78243 31.0863H27.1841C27.8977 31.0863 28.4957 30.5248 28.5719 29.7827L29.8047 17.7706L30.9421 17.6588C31.6623 17.5876 32.2131 16.9705 32.2131 16.223V13.6043H23.7689C22.7128 14.5375 21.8758 15.2832 21.207 15.8789L21.2066 15.8793C18.9571 17.8833 18.6112 18.1914 18.2327 18.2388C18.164 18.2474 18.0941 18.2474 18.0116 18.2473H18.0034C17.0792 18.2473 16.4064 17.3212 16.6651 16.3837L16.668 16.3732L16.668 16.3732C16.6863 16.3068 16.7019 16.2501 16.7226 16.1953C16.8435 15.8746 17.1358 15.6186 19.1382 13.8649L19.1382 13.8649L19.1385 13.8647C19.8498 13.2418 20.7768 12.4299 21.9886 11.359L21.9885 11.3591L24.512 9.12899C25.927 7.87856 27.8359 6.19179 32.5789 2L34.3785 4.22593ZM16.6065 20.597H19.3934V28.7553H16.6065V20.597ZM22.1803 20.597V28.7553H24.9672V20.597H22.1803ZM13.8197 20.597V28.7553H11.0328V20.597H13.8197Z" fill="#163300" />
                          </svg>

                          <span className="ml-2 text-sm font-medium text-black bg-white  group-hover:text-gray-800 absolute rounded-full w-5 h-5 -top-1">{cartQuantityTotal}</span>
                        </Link>
                      ) : (
                        <button
                          className=""
                          onClick={openCart}
                        >
                          <svg className=' w-6 h-6' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clipRule="evenodd" d="M34.3785 4.22593L27.0655 10.6906H35V16.223C35 18.0585 33.9168 19.6344 32.3551 20.2746L31.3405 30.0934C31.1125 32.3194 29.3254 34 27.184 34H8.78243C6.6411 34 4.85839 32.3194 4.63031 30.0934L3.62809 20.2737C2.06643 19.6335 1 18.0585 1 16.223V10.6906H19.295C18.0966 11.7051 17.8474 11.9346 17.4614 12.2902C17.1822 12.5474 16.8314 12.8705 15.9981 13.6043H3.78689V16.223C3.78689 16.9705 4.32102 17.5882 5.0411 17.6592L6.16594 17.7715L7.39663 29.7827C7.47282 30.5248 8.06882 31.0863 8.78243 31.0863H27.1841C27.8977 31.0863 28.4957 30.5248 28.5719 29.7827L29.8047 17.7706L30.9421 17.6588C31.6623 17.5876 32.2131 16.9705 32.2131 16.223V13.6043H23.7689C22.7128 14.5375 21.8758 15.2832 21.207 15.8789L21.2066 15.8793C18.9571 17.8833 18.6112 18.1914 18.2327 18.2388C18.164 18.2474 18.0941 18.2474 18.0116 18.2473H18.0034C17.0792 18.2473 16.4064 17.3212 16.6651 16.3837L16.668 16.3732L16.668 16.3732C16.6863 16.3068 16.7019 16.2501 16.7226 16.1953C16.8435 15.8746 17.1358 15.6186 19.1382 13.8649L19.1382 13.8649L19.1385 13.8647C19.8498 13.2418 20.7768 12.4299 21.9886 11.359L21.9885 11.3591L24.512 9.12899C25.927 7.87856 27.8359 6.19179 32.5789 2L34.3785 4.22593ZM16.6065 20.597H19.3934V28.7553H16.6065V20.597ZM22.1803 20.597V28.7553H24.9672V20.597H22.1803ZM13.8197 20.597V28.7553H11.0328V20.597H13.8197Z" fill="#163300" />
                          </svg>
                          <span className="ml-2 text-sm font-medium text-black bg-white  group-hover:text-gray-800 absolute -top-1 w-5 h-5 rounded-full
                          ">{cartQuantityTotal}</span>
                          <span className="sr-only">items in cart, view bag</span>
                        </button>
                      )}
                    </div> */}
                    {/* Cart */}
                    <div className="">
                      {isCheckoutPage ? (
                        <Link to="/cart" className="flex items-center p-2 -m-2 group">
                          {/* <ShoppingBagIcon
                            className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          /> */}
                          <svg className=' w-6 h-6' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clipRule="evenodd" d="M34.3785 4.22593L27.0655 10.6906H35V16.223C35 18.0585 33.9168 19.6344 32.3551 20.2746L31.3405 30.0934C31.1125 32.3194 29.3254 34 27.184 34H8.78243C6.6411 34 4.85839 32.3194 4.63031 30.0934L3.62809 20.2737C2.06643 19.6335 1 18.0585 1 16.223V10.6906H19.295C18.0966 11.7051 17.8474 11.9346 17.4614 12.2902C17.1822 12.5474 16.8314 12.8705 15.9981 13.6043H3.78689V16.223C3.78689 16.9705 4.32102 17.5882 5.0411 17.6592L6.16594 17.7715L7.39663 29.7827C7.47282 30.5248 8.06882 31.0863 8.78243 31.0863H27.1841C27.8977 31.0863 28.4957 30.5248 28.5719 29.7827L29.8047 17.7706L30.9421 17.6588C31.6623 17.5876 32.2131 16.9705 32.2131 16.223V13.6043H23.7689C22.7128 14.5375 21.8758 15.2832 21.207 15.8789L21.2066 15.8793C18.9571 17.8833 18.6112 18.1914 18.2327 18.2388C18.164 18.2474 18.0941 18.2474 18.0116 18.2473H18.0034C17.0792 18.2473 16.4064 17.3212 16.6651 16.3837L16.668 16.3732L16.668 16.3732C16.6863 16.3068 16.7019 16.2501 16.7226 16.1953C16.8435 15.8746 17.1358 15.6186 19.1382 13.8649L19.1382 13.8649L19.1385 13.8647C19.8498 13.2418 20.7768 12.4299 21.9886 11.359L21.9885 11.3591L24.512 9.12899C25.927 7.87856 27.8359 6.19179 32.5789 2L34.3785 4.22593ZM16.6065 20.597H19.3934V28.7553H16.6065V20.597ZM22.1803 20.597V28.7553H24.9672V20.597H22.1803ZM13.8197 20.597V28.7553H11.0328V20.597H13.8197Z" fill="#163300" />
                          </svg>
                          <span className="ml-2 text-sm font-medium text-black bg-white  group-hover:text-gray-800 absolute rounded-full w-5 h-5 -top-1">{cartQuantityTotal}</span>
                        </Link>
                        
                      ) : (
                        
                        <StickyDiv>
                          <button
                            className={` flex items-center justify-center ml-4 lg:ml-6 bg-yellow-400 rounded-full relative w-10 h-10 ${isAnimating ? 'shake-animation' : ''}`} style={{ boxShadow: '0px 5px 10px rgba(135, 109, 14, 0.3)' }}
                            onClick={openCart}
                          >
                            <svg className=' w-6 h-6' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clipRule="evenodd" d="M34.3785 4.22593L27.0655 10.6906H35V16.223C35 18.0585 33.9168 19.6344 32.3551 20.2746L31.3405 30.0934C31.1125 32.3194 29.3254 34 27.184 34H8.78243C6.6411 34 4.85839 32.3194 4.63031 30.0934L3.62809 20.2737C2.06643 19.6335 1 18.0585 1 16.223V10.6906H19.295C18.0966 11.7051 17.8474 11.9346 17.4614 12.2902C17.1822 12.5474 16.8314 12.8705 15.9981 13.6043H3.78689V16.223C3.78689 16.9705 4.32102 17.5882 5.0411 17.6592L6.16594 17.7715L7.39663 29.7827C7.47282 30.5248 8.06882 31.0863 8.78243 31.0863H27.1841C27.8977 31.0863 28.4957 30.5248 28.5719 29.7827L29.8047 17.7706L30.9421 17.6588C31.6623 17.5876 32.2131 16.9705 32.2131 16.223V13.6043H23.7689C22.7128 14.5375 21.8758 15.2832 21.207 15.8789L21.2066 15.8793C18.9571 17.8833 18.6112 18.1914 18.2327 18.2388C18.164 18.2474 18.0941 18.2474 18.0116 18.2473H18.0034C17.0792 18.2473 16.4064 17.3212 16.6651 16.3837L16.668 16.3732L16.668 16.3732C16.6863 16.3068 16.7019 16.2501 16.7226 16.1953C16.8435 15.8746 17.1358 15.6186 19.1382 13.8649L19.1382 13.8649L19.1385 13.8647C19.8498 13.2418 20.7768 12.4299 21.9886 11.359L21.9885 11.3591L24.512 9.12899C25.927 7.87856 27.8359 6.19179 32.5789 2L34.3785 4.22593ZM16.6065 20.597H19.3934V28.7553H16.6065V20.597ZM22.1803 20.597V28.7553H24.9672V20.597H22.1803ZM13.8197 20.597V28.7553H11.0328V20.597H13.8197Z" fill="#163300" />
                            </svg>
                            <span className="ml-2 text-sm font-medium text-black bg-white  group-hover:text-gray-800 absolute rounded-full w-5 h-5 -top-1 rtl:-left-2 ltr:-right-2">{cartQuantityTotal}</span>
                            <span className="sr-only">items in cart, view bag</span>
                          </button>
                        </StickyDiv>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <nav aria-label="Bottom" className="container mx-auto py-4">
              <div className="">
                <div className="flex items-center">
                  {/* Flyout menus */}
                  {isCheckoutPage ? null : (
                    <Popover.Group className="hidden lg:block lg:self-stretch">
                      <div className="flex h-full space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={v4()} className="flex">
                            {({ open, close }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? 'border-primary-600 text-primary-600'
                                        : 'border-transparent text-white hover:text-gray-800',
                                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-none'
                                    )}
                                  >
                                    {category.name}
                                  </Popover.Button>
                                </div>

                                <Transition

                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute inset-x-0 text-sm text-gray-500 top-full">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div className="absolute inset-0 bg-white shadow top-1/2" aria-hidden="true" />

                                    <div className="relative bg-white">
                                      <div className="px-8 mx-auto max-w-7xl">
                                        <div className="grid grid-cols-2 py-16 gap-x-8 gap-y-10">
                                          <div className="grid grid-cols-2 col-start-2 gap-x-8">
                                            {category.featured.map((item) => (
                                              <div key={v4()} className="relative text-base group sm:text-sm">
                                                <div className="overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1 group-hover:opacity-75">
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-cover object-center"
                                                  />
                                                </div>
                                                <Link to={`/category/${item.href}`} onClick={() => { close() }} className="block mt-6 font-medium text-gray-900">
                                                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                  {item.name}
                                                </Link>
                                                <p aria-hidden="true" className="mt-1">
                                                  Shop now
                                                </p>
                                              </div>
                                            ))}
                                          </div>
                                          <div className="grid grid-cols-3 row-start-1 text-sm gap-x-8 gap-y-10">
                                            {category.sections.map((section) => (
                                              <div key={v4()}>
                                                <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                  {section.name}
                                                </p>
                                                <ul
                                                  role="list"
                                                  aria-labelledby={`${section.name}-heading`}
                                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                >
                                                  {section.items.map((item) => (
                                                    <li key={v4()} className="flex">
                                                      <Link to={`/category/${item.href}`} className="hover:text-gray-800" onClick={() => { close() }}>
                                                        {item.name}
                                                      </Link>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {/* {navigation.pages.map((page) => (
                          <Link
                            key={v4()}
                            // to={page.href}
                            to={`/${page.href}`}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </Link>
                        ))} */}
                      </div>
                    </Popover.Group>
                  )}
                  <div className="flex items-center ml-auto">
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      {isLocalhost && (
                        <span className="text-sm font-medium text-gray-700 hover:text-gray-800" onClick={refreshCart}>
                          refreshCart
                        </span>
                      )}
                      <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        Login
                      </Link>
                      <span className="w-px h-6 bg-gray-200" aria-hidden="true" />
                      <Link to="/my-account" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        {t('common.my_account')}
                      </Link>
                    </div>

                    {/* Change language */}
                    <ChangeLanguage />


                    {/* Change Currncy */}
                    {isCheckoutPage ? null : (
                      <div className="hidden lg:ml-8 lg:flex">
                        <Menu as="div" className="relative z-[] inline-block text-left">
                          <div>
                            <Menu.Button className="inline-flex items-center justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                              <img
                                src="/images/en.svg"
                                alt=""
                                className="flex-shrink-0 block w-5 h-auto"
                              />
                              <span className="block ml-3 text-sm font-medium">USD</span>
                              <span className="sr-only">, change currency</span>
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
                                <Menu.Item key={v4()}>
                                  {({ active }) => (
                                    <div className='flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100'>
                                      <img
                                        src="/images/en.svg"
                                        alt=""
                                        className="flex-shrink-0 block w-5 h-auto"
                                      />
                                      <span className="block ml-3">USD</span>
                                    </div>
                                  )}
                                </Menu.Item>
                                <Menu.Item key={v4()}>
                                  {({ active }) => (
                                    <div
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'flex justify-center px-4 py-2 text-sm font-medium text-gray-900 w-full cursor-pointer'
                                      )}
                                    >
                                      <img
                                        src="/images/eg.svg"
                                        alt=""
                                        className="flex-shrink-0 block w-5 h-auto"
                                      />
                                      <span className="block ml-3">EGP</span>
                                    </div>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    )}

                    {/* Change Country */}
                    {isCheckoutPage ? null : (
                      <div className="hidden lg:ml-8 lg:flex">
                        <ChangeCountry />
                      </div>
                    )}

                    {/* Search */}
                    {isCheckoutPage ? null : (
                      <div className="flex lg:ml-6">
                        <Search />
                      </div>
                    )}


                  </div>
                </div>
              </div>
            </nav>
          </div>

        </header>
      </div>
    </>
  )
}
