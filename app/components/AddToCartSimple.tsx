import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { trackAddToCart } from "~/fb-pixel";
import useShoppingCart, { CartItem } from "~/stores/cartStore";
// import { TrashIcon } from "@heroicons/24/outline";



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
export default function AddToCartSimple({ className, product, disabled }: {
    className?: string;
    product: CartItem;
    disabled: boolean;
}) {
    const {
        getItemQuantity,
        addToCart,
        decreaseCartQuantity,
    } = useShoppingCart();
    const quantity = getItemQuantity(product) ?? 0;
    //  quantity = getItemQuantity(product);

    return (
        <button
            disabled={disabled}
            type="submit"
            onClick={() => {
                addToCart(product);
                trackAddToCart('EGP', product.price);
            }}
            className={classNames(
                disabled ? 'cursor-not-allowed' : '',
                className ?? ''
            )}
        >
            {quantity === 0 ? (
                <div className=" py-2.5 px-4 font-semibold text-white bg-green-200 text-xl rounded-100 w-full flex items-center justify-between">
                    <p> Add to Bag
                    </p>
                    <PlusIcon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>

            )


                : (
                    <div className="flex justify-start items-center">
                        <span
                            // type="button"
                            className="w-12 h-12 border-2 border-gray-400  rounded-full cursor-pointer flex items-center justify-center"
                            onClick={(e) => { decreaseCartQuantity(product); e.stopPropagation() }}
                        >
                            {/* {quantity! === 1 ? 
                            <TrashIcon className="w-4 h-4 text-gray-500" /> 
                            :  */}
                            <MinusIcon className="w-6 h-6 text-green-200" aria-hidden="true" />
                            {/* } */}
                        </span>
                        <input type="text" className="w-8 w-8 p-0  mx-7 text-xl  border-none font-semibold text-center text-green-200  select-none focus:outline-none" value={quantity!} readOnly />
                        <span
                            // type="button"
                            className={`flex items-center text-white justify-center w-12 h-12 bg-green-200 rounded-full cursor-pointer ${quantity! > 9 ? "pointer-events-none" : ''}`}
                            onClick={(e) => { addToCart(product); e.stopPropagation() }}
                        >
                            <PlusIcon className="w-6 h-6 text-white" aria-hidden="true" />
                        </span>
                    </div>
                )
            }
        </button >
    );
}
