import useShoppingCart from '../cartStore';

export default function CartFlyoutToggle() {
	const { isOpen, openCart, closeCart } = useShoppingCart();
	return <button onClick={() => isOpen ? openCart() : closeCart()}>Cart</button>;
}
