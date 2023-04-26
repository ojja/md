import { PlusIcon } from "@heroicons/react/24/outline";
import FormatCurrency from "~/utils/FormatCurrency";

export default function Frequently() {
  return (
    <div className="pt-20">
        <h2 className="mb-5 text-2xl font-bold tracking-tight text-gray-900">Don't Miss Out: Add These Items</h2>
        <div className="flex">
            <div className="flex items-center justify-center mb-4 mr-5">
                <div className="w-20 p-3 border">
                    <img src="https://www.lecollezioni-eg.com/wp-content/uploads/2021/06/thumb-MR7161718-gray.jpg" alt="alt" />
                </div>
                <PlusIcon className="w-6 h-6"/>
                <div className="w-20 p-3 border">
                    <img src="https://www.lecollezioni-eg.com/wp-content/uploads/2021/06/thumb-MR7161718-gray.jpg" alt="alt" />
                </div>
                <PlusIcon className="w-6 h-6"/>
                <div className="w-20 p-3 border">
                    <img src="https://www.lecollezioni-eg.com/wp-content/uploads/2021/06/thumb-MR7161718-gray.jpg" alt="alt" />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="mb-4 font-medium">Total price: {FormatCurrency(468.95)} <del className="text-base text-red-400 line-through align-middle">{FormatCurrency(614.95)}</del></div>
                <button className="items-center justify-center px-8 py-3 text-base font-medium capitalize border-2 border-solid rounded-md whitespace-nowrap border-slate-600 text-slate hover:bg-slate-600 hover:text-white focus:outline-none">
                    Add Selected to Cart
                </button>
            </div>
        </div>   
        <div>
            <ul>
                <li>
                    <input type="checkbox" name="first" id="first" defaultChecked/>
                    <label htmlFor="first" className="pl-2">
                        This item: (Product Title)
                    </label>
                </li>
                <li>
                    <input type="checkbox" name="second" id="second"  defaultChecked/>
                    <label htmlFor="second" className="pl-2">
                        Product 2 Title <span className="font-bold text-red-400 price">{FormatCurrency(10)}</span>
                    </label>
                </li>
                <li>
                    <input type="checkbox" name="third" id="third"  defaultChecked/>
                    <label htmlFor="third" className="pl-2">
                        Product 3 Title <span className="font-bold text-red-400 price">{FormatCurrency(90)}</span>
                    </label>
                </li>
            </ul>
        </div>   
    </div>
  )
}
