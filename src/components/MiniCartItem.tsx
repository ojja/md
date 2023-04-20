import React, { useEffect, useState } from 'react'
// import { getProductBySlug } from '~/api/products';
import FormatCurrency from '../utils/FormatCurrency';

// export default function CartItem({ id, quantity }) {
// const { removeFromCart } = useShoppingCart();

// interface MiniCartItemProps {
//     id: string;
//     quantity: number;
//     color: string;
//     size: string;
//     slug: string;
//     thumbnail: string;
//     removeFromCart: () => void;
//   }


interface Product {
    id: number;
    title: string;
    price: number;
    // Other properties of the product
}

interface MiniCartItemProps {
    title: string;
    product: Product;
    id: number;
    quantity: number;
    color: string;
    size: string;
    slug: string;
    thumbnail: string;
    removeFromCart: () => void;
}

const getPriceForAttributes = (variations, size, color) => {
    for (const variation of variations) {
        const { attributes, price, sale_price } = variation;
        if (attributes.attribute_size === size && attributes.attribute_color === color) {
            return sale_price;
        }
    }
    return null; // or some default value if the combination of attributes is not found
};

const MiniCartItem = ({ id, quantity, color, size, slug, thumbnail, removeFromCart }: MiniCartItemProps) => {

    const [product, setProduct] = useState({});
    useEffect(() => {
        const fetchProduct = async () => {
            // const product = await getProductBySlug(slug);
            setProduct(product);
        };
        fetchProduct();
    }, [slug]);

    console.log('product>>>>>>>>>>', product)
    const item = {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://picsum.photos/202/320?random=1",
        "image_small": "https://picsum.photos/20/30?random=1",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }


    const title = product.title;
    const price = product.variations ? getPriceForAttributes(product.variations, size, color) : product.price;

    // const priceV = product.variations ? getPriceForAttributes(product.variations, size, color) : null;
    // console.log("priceV",priceV);

    return (
        <>
            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                <img
                    src={thumbnail}
                    alt={slug}
                    className="object-cover object-center w-full h-full"
                />
            </div>

            <div className="flex flex-col flex-1 ml-4">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href={`/products/${slug}`}>{title}</a>

                        </h3>
                        <p className="ml-4">{FormatCurrency(price * quantity)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{color} - {size}</p>
                </div>
                <div className="flex items-end justify-between flex-1 text-sm">
                    <div className="flex flex-col">
                        <p className="text-gray-500">{FormatCurrency(price)}</p>
                        <p className="text-gray-500">Quantity: {quantity}</p>
                    </div>
                    <div className="flex">
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => removeFromCart(id)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MiniCartItem;