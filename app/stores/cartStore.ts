import { persistentAtom } from '@nanostores/persistent';
import { useStore } from '@nanostores/react';
type CartItem = {
    id: number;
    quantity: number;
    size?: string;
    color?: string;
};

const shoppingCart = persistentAtom<CartItem[]>('cart', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
})

const isShoppingCartOpen = persistentAtom<boolean>('isShoppingCartOpen', false, {
    listen: true,
    encode: (value) => String(value),
    decode: (value) => Boolean(value),
});


export const useShoppingCart = () => {
    const cartStore = useStore(shoppingCart);
    const isOpen = useStore(isShoppingCartOpen);
    const addToCart = (product: CartItem) => {
        const itemIndex = cartStore.findIndex((item) => item.id === product.id && item.size === product.size && item.color === product.color);

        if (itemIndex !== -1) {
            const newCartItems = [...cartStore];
            newCartItems[itemIndex].quantity++;
            shoppingCart.set(newCartItems);
        } else {
            shoppingCart.set([...cartStore, { id: product.id, size: product.size, color: product.color, quantity: product.quantity ?? 1 }]);
        }
        return;
    }

    const decreaseCartQuantity = (product: CartItem) => {
        const itemIndex = cartStore.findIndex((item) => item.id === product.id && item.size === product.size && item.color === product.color);

        if (itemIndex !== -1) {
            const newCartItems = [...cartStore];
            if (newCartItems[itemIndex].quantity <= 1) {
                return removeFromCart(product.id);
            } else {
                newCartItems[itemIndex].quantity--;
                shoppingCart.set(newCartItems);
                return;
            }
        }
    }

    const removeFromCart = (itemId: number) => {
        const itemIndex = cartStore.findIndex((item) => item.id === itemId);

        if (itemIndex !== -1) {
            const newCartItems = [...cartStore];
            newCartItems.splice(itemIndex, 1);
            shoppingCart.set(newCartItems);
        }
        return;
    }

    const getItemQuantity = (product: CartItem) => {
        return cartStore.find((item) => item.id === product.id && item.size === product.size && item.color === product.color)?.quantity ?? 0;

    };

    const openCart = () => isShoppingCartOpen.set(true);

    const closeCart = () => isShoppingCartOpen.set(false);

    return {
        getItemQuantity,
        cartQuantity: cartStore?.length ?? 0,
        cartItems: cartStore ?? [],
        isOpen,
        addToCart,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
    };
};

export default useShoppingCart;
