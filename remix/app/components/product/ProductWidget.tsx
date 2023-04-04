import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { useShoppingCart } from "../../context/cartContext";
import FormatCurrency from "../../utils/FormatCurrency";
import AddToCart from "../AddToCart";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "@remix-run/react";
import Quickview from "../Quickview";

type ProductWidgetProps = {
    id: number,
    name: string,
    price: number,
    thumbnail: string
}

export function ProductWidget({ product }: ProductWidgetProps) {
    const [isOpenCart, setIsOpenCart] = useState(false);

    let [openQuick, setOpenQuick] = useState(false)
    function openModal() {
        setOpenQuick(!openQuick)
    }

    let productTitle =
        product.name.length > 35
            ? product.name.slice(0, 35).concat("...")
            : product.name;

    return (
        <>
            <div key={product.id} className="relative flex flex-col group">
                <div className="relative z-10 w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-4 aspect-h-3 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    {/* <img
                        src={product.image}
                        alt={product.name}
                        className="absolute top-0 bottom-0 left-0 right-0 self-center object-cover object-center w-full h-full m-auto lg:h-full lg:w-full"
                    /> */}
                    <Link to={`${product.id}`} prefetch="intent">
                        <LazyLoadImage
                            alt={product.name}
                            // effect="blur"
                            src={product.main_image}
                            // placeholderSrc={product.image_small}
                            wrapperClassName="h-full w-full block absolute z-1"
                            className="absolute top-0 bottom-0 left-0 right-0 self-center object-cover object-center w-full h-full m-auto lg:h-full lg:w-full"
                        />
                    </Link>
                    <div className="flex items-end h-full p-4">
                        <button
                            onClick={openModal} 
                            type="button" className="relative w-full px-4 py-2 text-sm text-gray-900 bg-white bg-opacity-75 rounded-md opacity-0 focus:opacity-100 group-hover:opacity-100">
                            Quick View
                        </button>
                    </div>
                </div>
                <div className="flex justify-between mt-4 mb-4">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <Link to={`${product.id}`} prefetch="intent">
                                <span aria-hidden="true" className="absolute inset-0 z-1" />
                                {productTitle}
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{FormatCurrency(product.price)}</p>
                </div>
                <div className="relative mt-auto z-1">
                    <AddToCart
                        setIsOpenCart={setIsOpenCart}
                        classNames="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full"
                    // id={product.id}
                    />
                </div>
                <Quickview openQuick={openQuick} openModal={openModal} product={product}/>
            </div>
        </>
    )

}