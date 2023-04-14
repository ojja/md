import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { Link } from '@remix-run/react'

const product2 = {
  name: 'Basic Tee 6-Pack',
  title: 'Basic Tee 6-Pack',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Quickview({ openQuick, openModal, product }) {

  // const nearestNumberRating = Math.round(product.rating)
  const nearestNumberRating = 2
  const [selectedColor, setSelectedColor] = useState(product2.colors[0])
  const [selectedSize, setSelectedSize] = useState(product2.sizes[2])

  return (
    <div className="overview">
    <Transition show={openQuick} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={openModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden transition-opacity bg-gray-500 bg-opacity-75 md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-stretch justify-center min-h-full text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full text-base text-left transition transform md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex items-center w-full px-4 pb-8 overflow-hidden bg-white shadow-2xl pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute text-gray-400 right-4 top-4 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={openModal}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>

                  <div className="grid items-start w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="overflow-hidden bg-gray-100 rounded-lg aspect-h-3 aspect-w-2 sm:col-span-4 lg:col-span-5">
                      <img src={product.thumbnail} alt={product.title} className="object-cover object-center" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.title}</h2>
                      <h3 className="text-xl font-bold text-gray-900 sm:pr-12">{product.category}</h3>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">{product.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                          <h3 className="sr-only">Reviews</h3>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {Array(5).fill(0).map((_, idx) => (
                                <svg key={idx} className={`h-5 w-5 flex-shrink-0 ${idx < nearestNumberRating ? "text-gray-900" : "text-gray-200"}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                              ))}
                            </div>
                            <p className="sr-only">{nearestNumberRating} out of 5 stars</p>
                          </div>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-10">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          {/* Colors */}
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Color</h4>

                            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                              <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                              <span className="flex items-center space-x-3">
                                {product2.colors.map((color) => (
                                  <RadioGroup.Option
                                    key={color.name}
                                    value={color}
                                    className={({ active, checked }) =>
                                      classNames(
                                        color.selectedClass,
                                        active && checked ? 'ring ring-offset-1' : '',
                                        !active && checked ? 'ring-2' : '',
                                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                      )
                                    }
                                  >
                                    <RadioGroup.Label as="span" className="sr-only">
                                      {' '}
                                      {color.name}{' '}
                                    </RadioGroup.Label>
                                    <span
                                      aria-hidden="true"
                                      className={classNames(
                                        color.class,
                                        'h-8 w-8 rounded-full border border-black border-opacity-10'
                                      )}
                                    />
                                  </RadioGroup.Option>
                                ))}
                              </span>
                            </RadioGroup>
                          </div>

                          {/* Sizes */}
                          <div className="mt-10">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900">Size</h4>
                              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Size guide
                              </a>
                            </div>

                            <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                              <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                              <div className="grid grid-cols-4 gap-4">
                                {product2.sizes.map((size) => (
                                  <RadioGroup.Option
                                    key={size.name}
                                    value={size}
                                    disabled={!size.inStock}
                                    className={({ active }) =>
                                      classNames(
                                        size.inStock
                                          ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                          : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                        active ? 'ring-2 ring-indigo-500' : '',
                                        'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                      )
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                        {size.inStock ? (
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

                          <Link to={`/products/${product.slug}`}
                            className="flex items-center justify-center w-full px-8 py-3 mt-6 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            View Product
                          </Link>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    </div>
  )
}
