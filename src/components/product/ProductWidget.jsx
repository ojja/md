import { useState } from "react";
import { Link } from "react-router-dom"
import { useShoppingCart } from "../../context/cartContext";
import FormatCurrency from "../../utils/FormatCurrency";
import AddToCart from "../AddToCart";

type ProductWidgetProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function ProductWidget({ product }: ProductWidgetProps) {
    const [isOpenCart, setIsOpenCart] = useState(false);
    let productTitle =
        product.title.length > 35
            ? product.title.slice(0, 35).concat("...")
            : product.title;

    return (
        <>
            <div key={product.id} className="group relative flex flex-col">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 relative">
                    <img
                        src={product.image}
                        alt={'sd'}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full self-center absolute right-0 left-0 bottom-0 top-0 m-auto"
                    />
                </div>
                <div className="mt-4 flex justify-between mb-4">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <Link to='/product'>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {productTitle}
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{FormatCurrency(product.price)}</p>
                </div>
                <div className="mt-auto relative z-1">
                    <AddToCart
                        setIsOpenCart={setIsOpenCart}
                        classNames="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full" 
                        id={product.id}
                    />
                </div>
            </div>
        </>
    )

}