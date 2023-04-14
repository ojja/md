import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import useShoppingCart, { CartItem } from "~/stores/cartStore";

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
    const quantity = getItemQuantity(product);

    return (
        <button
            disabled={disabled}
            type="submit"
            onClick={() => addToCart(product)}
            className={className ?? ""}
        >
            {quantity === 0 ? (
                "Add to Bag"
            ) : (
                <div className="flex">
                    <button
                        type="button"
                        className="p-2 -m-2 text-gray-400 cursor-pointer hover:text-gray-500"
                        onClick={(e) => { decreaseCartQuantity(product); e.stopPropagation() }}
                    >
                        {quantity === 1 ? <TrashIcon className="w-4 h-4" aria-hidden="true" /> : <MinusIcon className="w-4 h-4" aria-hidden="true" />}
                    </button>
                    <input type="text" className="w-8 h-6 mx-2 text-xs text-center text-gray-600 bg-gray-100 border rounded select-none focus:outline-none" value={quantity} readOnly />
                    <button
                        type="button"
                        className={`-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer ${quantity > 9 ? "pointer-events-none" : ''}`}
                        onClick={(e) => { addToCart(product); e.stopPropagation() }}
                    >
                        <PlusIcon className="w-4 h-4" aria-hidden="true" />
                    </button>
                </div>
            )}
        </button>
    );
}