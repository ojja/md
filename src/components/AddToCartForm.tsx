import { ReactNode } from "react";
import useShoppingCart from "../cartStore";
import { CartItem } from "../cartStore";

type Props = {
	item: CartItem;
	children: ReactNode;
};

export default function AddToCartForm({ item, children }: Props) {
	const { addToCart, openCart } = useShoppingCart();
	function $addToCart(e: SubmitEvent) {
		e.preventDefault();
		openCart();
		addToCart(item);
	}

	return <form onSubmit={$addToCart}>{children}</form>;
}
