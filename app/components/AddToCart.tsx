import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import useShoppingCart from "~/stores/cartStore";

export default function AddToCart({ className, product, disabled }: {
    className?: string;
    product: {
        id: number;
        size: string;
        color: string;
    };
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
                <div className="pr-8 flex">
                    <button
                        type="button"
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                        onClick={(e) => { decreaseCartQuantity(product); e.stopPropagation() }}
                    >
                        {quantity === 1 ? <TrashIcon className="h-4 w-4" aria-hidden="true" /> : <MinusIcon className="h-4 w-4" aria-hidden="true" />}
                    </button>
                    <input type="number" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-xs mx-2 text-center text-gray-600 select-none" value={quantity} readOnly />
                    <button
                        type="button"
                        className={`-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer ${quantity > 9 ? "pointer-events-none" : ''}`}
                        onClick={(e) => { addToCart(product); e.stopPropagation() }}
                    >
                        <PlusIcon className="h-4 w-4" aria-hidden="true" />
                    </button>
                </div>
            )}
        </button>
    );
}
