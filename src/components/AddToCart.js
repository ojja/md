import React from "react";
import { useShoppingCart } from "../context/cartContext";

export default function AddToCart({ setIsOpenCart, classNames, id }) {

    const {
        getItemQuantity,
        increaseCartQuantity
    } = useShoppingCart();
    const quantity = getItemQuantity(id);

    return (
        <button
            type="submit"
            onClick={() => increaseCartQuantity(id)}
            className={classNames}
        >
            {quantity === 0 ? (
                "Add to Bag"
            ) : (
                "Added"
            )}
        </button>
    );
}
