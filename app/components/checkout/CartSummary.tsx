import { TrashIcon } from "@heroicons/react/24/outline"

const products = [
    {
      id: 1,
      title: 'Basic Tee',
      href: '#',
      price: '$32.00',
      color: 'Black',
      size: 'Large',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
    },
    // More products...
  ]
  
export default function CartSummary() {
    return (
        <div className="mt-10 mr-0 md:mt-0 md:mr-5 w-full md:w-[380px]">
            {/* Order summary */}
            <div className="min-w-[380px]">

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <h2 className="pt-6 pl-4 text-lg font-medium text-gray-900 sm:pl-6">Order summary</h2>
                    <ul role="list" className="divide-y divide-gray-200">
                        {products.map((product) => (
                            <li key={product.id} className="flex px-4 py-6 sm:px-6">
                                <div className="flex-shrink-0">
                                    <img src={product.imageSrc} alt={product.imageAlt} className="w-20 rounded-md" />
                                </div>

                                <div className="flex flex-col flex-1 ml-6">
                                    <div className="flex">
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm">
                                                <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                                                    {product.title}
                                                </a>
                                            </h4>
                                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                            <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                                        </div>

                                        <div className="flex-shrink-0 flow-root ml-4">
                                            <button
                                                type="button"
                                                className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                                            >
                                                <span className="sr-only">Remove</span>
                                                <TrashIcon className="w-5 h-5" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-end justify-between flex-1 pt-2">
                                        <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>

                                        <div className="ml-4">
                                            <label htmlFor="quantity" className="sr-only">
                                                Quantity
                                            </label>
                                            <select
                                                id="quantity"
                                                name="quantity"
                                                className="text-base font-medium text-left text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option>
                                                <option value={7}>7</option>
                                                <option value={8}>8</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <dl className="px-4 py-6 space-y-6 border-t border-gray-200 sm:px-6">
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Subtotal</dt>
                            <dd className="text-sm font-medium text-gray-900">$64.00</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Shipping</dt>
                            <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Taxes</dt>
                            <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                        </div>
                        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                            <dt className="text-base font-medium">Total</dt>
                            <dd className="text-base font-medium text-gray-900">$75.52</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}
