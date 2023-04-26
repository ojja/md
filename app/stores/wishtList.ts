import { persistentAtom } from '@nanostores/persistent';
import { useStore } from '@nanostores/react';
// import { createAtom } from 'nanostores';

// Create a Nanostores atom to manage the recent products list
const recentProductsAtom = persistentAtom<Item[]>('recent-products', [], {
    listen: true,
    encode: JSON.stringify,
    decode: JSON.parse,
})

// Export the recent products atom
// export default recentProductsAtom;


export type Item = {
    id: number;
    quantity: number;
    name: string;
    slug?: string;
    thumbnail?: string;
    price?: string;
};

export const useRecentView = () => {
    if (typeof window === "undefined") {
        return {
            addToRecent: () => null,
            recentItems: [],
        };
    }
    const recentStore = useStore(recentProductsAtom);

    const addToRecent = (product: Item) => {
        const itemIndex = recentStore.findIndex((item:any) =>
            item.id === product.id &&
            item.slug === product.slug &&
            item.name === product.name &&
            item.thumbnail === product.main_img);

        if (itemIndex !== -1) {
            const newRecentItems = [...recentStore];
            newRecentItems[itemIndex].quantity++;
            recentProductsAtom.set(newRecentItems);
        } else {
            recentProductsAtom.set([...recentStore, {
                id: product.id,
                slug: product.slug,
                name: product.name,
                thumbnail: product.main_img
            }]);
        }
        return;
    }

    return {
        recentItems: recentStore ?? [],
        addToRecent,
    };
};

export default useRecentView;
