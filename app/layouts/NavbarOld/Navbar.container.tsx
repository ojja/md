import { fetchData } from "../../lib/axiosData";
import { Fragment, useState, useEffect } from "react";
import { addHeaderData } from "./header-slice";
import NavBar from "./NavBar.component";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import useShoppingCart from "~/stores/cartStore";
import { v4 } from 'uuid';

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
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
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
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
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBarContainer = ({ location }) => {
  console.log('location::', location);
  const [open, setOpen] = useState(false)
  const data = useSelector((state) => state.header);
  const dispatch = useDispatch();
  //const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [page_items,setPage_items] = useState([]);
  useEffect(() => {
    fetchData("MitchAPI/header-api.php").then((resp) => {
      //setData(resp);
      //console.log(resp);
      setIsLoading(false);
      dispatch(addHeaderData(resp.data))
    });
  }, [dispatch]);
  //const data = useSelector((state) => state.header);
  // console.log(data ? data.headerData : "s");
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <>
      {isLoading && (
        <div>
          <h2>Loading brdo....</h2>
        </div>
      )}
      {!isLoading && data !== undefined && <>
        <div className="sticky top-0 z-10 bg-white drop-shadow">
          {/* Mobile menu */}
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
              <Transition.Child
                as={Fragment}
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
                  as={Fragment}
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
                        className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
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
                                  selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                  'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                )
                              }
                            >
                              {category.name}
                            </Tab>
                          ))}
                        </Tab.List>
                      </div>
                      <Tab.Panels as={Fragment}>
                        {navigation.categories.map((category) => (
                          <Tab.Panel key={v4()} className="px-4 pt-10 pb-8 space-y-10">
                            <div className="grid grid-cols-2 gap-x-4">
                              {category.featured.map((item) => (
                                <div key={v4()} className="relative text-sm group">
                                  <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75">
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
                          width={20} height={15}
                        />
                        <span className="block ml-3 text-base font-medium text-gray-900">CAD</span>
                        <span className="sr-only">, change currency</span>
                      </a>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
          <header className="relative z-10 bg-white">
            <p className="flex items-center justify-center h-10 px-4 text-sm font-medium text-black bg-yellow-400 sm:px-6 lg:px-8">
              Get free delivery on orders over $100
            </p>

            <nav aria-label="Top" className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
              <div className="">
                <div className="flex items-center h-16">
                  {location !== 'checked' ?
                    <button
                      type="button"
                      className="p-2 text-gray-400 bg-white rounded-md lg:hidden"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    </button>
                    :
                    ""
                  }

                  {/* Logo */}
                  <div className="flex ml-4 lg:ml-0">
                    <Link to="/">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="w-auto h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                        width={38} height={32}
                      />
                    </Link>
                  </div>

                  {/* Flyout menus */}
                  {location === 'checkout' ? "" :
                    <Popover.Group className="hidden capitalize lg:ml-8 lg:block lg:self-stretch">
                      <div className="flex h-full space-x-8">

                        {data.headerData.main_level_item.map((nav_item) => (

                          nav_item.has_mega ? (
                            <Popover key={v4()} className="flex">
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? 'border-indigo-600 text-indigo-600'
                                      : 'border-transparent text-gray-700 hover:text-gray-800',
                                    'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-none'
                                  )}
                                >
                                  {nav_item.main_category_title}
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="self-center w-4 h-4 ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Panel className="absolute inset-x-0 text-sm text-gray-500 top-full">

                                  <div className="absolute inset-0 bg-white shadow top-1/2" aria-hidden="true" />

                                  <div className="relative bg-white">
                                    <div className="px-8 mx-auto max-w-7xl">
                                      <div className="grid grid-cols-2 py-16 gap-y-10 gap-x-8">
                                        <div className="grid grid-cols-3 row-start-1 text-sm gap-y-10 gap-x-8">
                                          <ul
                                            role="list"
                                            className="space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {nav_item.mega_group.mega_repeater.map((group_item, index) => (
                                              <li key={v4()} id={`${group_item.mega_item_title}-heading`} className="font-medium text-gray-900">
                                                <Link to={'/cat' + group_item.mega_item_route} className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-800">{group_item.mega_item_title}</Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </Popover>
                          ) : (
                            <Link key={v4()} to={'/cat' + nav_item.main_category_route} className="flex items-center text-sm font-medium text-green-500 hover:text-gray-800">{nav_item.main_category_title}</Link>
                          )

                        ))}
                      </div>
                    </Popover.Group>
                  }


                  <div className="flex items-center ml-auto">
                    {location === 'checkout' ? "" :
                      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                          Sign in
                        </a>
                        <span className="w-px h-6 bg-gray-200" aria-hidden="true" />
                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                          Create account
                        </a>
                      </div>
                    }

                    {location === 'checkout' ? "" :
                      <div className="hidden lg:ml-8 lg:flex">
                        <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                          <img
                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                            alt=""
                            className="flex-shrink-0 block w-5 h-auto"
                          />
                          <span className="block ml-3 text-sm font-medium">CAD</span>
                          <span className="sr-only">, change currency</span>
                        </a>
                      </div>
                    }

                    {/* Search */}
                    {location === 'checkout' ? "" :
                      <div className="flex lg:ml-6">
                        <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Search</span>
                          <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
                        </a>
                      </div>
                    }

                    {/* Cart */}
                    {location === 'checkout' ?
                      <Link to="/cart" className="flex items-center p-2 group">
                        <ShoppingBagIcon
                          className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartQuantity}</span>
                        <span className="sr-only">items in cart, view bag</span>
                      </Link>
                      :
                      <div className="flow-root ml-4 lg:ml-6">
                        <button className="flex items-center p-2 -m-2 group" onClick={() => openCart()}>
                          <ShoppingBagIcon
                            className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartQuantity}</span>
                          <span className="sr-only">items in cart, view bag</span>
                        </button>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </nav>
          </header>
          {/* <img src={data.headerData.main_level_item[0].mega_group.image} width="100" height="100"></img>
          <NavBar nav_items={data.headerData.main_level_item} /> */}
        </div>
      </>}
    </>
  );
};
export default NavBarContainer;