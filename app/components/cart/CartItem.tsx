import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react'
import { getProductBySlug } from '~/api/products';
import FormatCurrency, { FormatCurrency2 } from '~/utils/FormatCurrency';
import CartItemLoader from './CartItemLoader';

interface CartItemProps {
    title: string;
    id: number;
    quantity: number;
    color?: any;
    size?: any;
    slug: any;
    type: any;
    price: any;
    thumbnail: any;
    name: string;
    main_image: string;
    main_image_small: string;
    category: string;
    removeFromCart: (itemId: number) => void;
    // decreaseCartQuantity: (itemId: number) => void;
}
const CartItem = ({ id, quantity, slug, thumbnail, removeFromCart, decreaseCartQuantity, addToCart }: CartItemProps) => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const handleRemoveClick = () => {
        removeFromCart(id);
    };
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const product = await getProductBySlug(slug);
            setProduct(product);
            setLoading(false);
        };
        fetchProduct();
    }, [slug]);



    const title = product.title;
    const variationId = id;
    const variation = product?.variations?.find(variation => variation.id === variationId);

    let salePrice = null;
    let productPrice = null;
    let color = null;
    let size = null;
    if (variation) {
        productPrice = variation.price;
        salePrice = variation.sale_price;
        color = variation.attributes?.attribute_pa_color
        size = variation.attributes?.attribute_pa_size
    } else {
        productPrice = product.price;
        salePrice = product.sale_price;
    }
    const productData = {
        id: id,
        thumbnail: product.main_img,
        slug: product.slug,
        price: salePrice,
    }

    const handleDecrease = () => {
        decreaseCartQuantity(productData);
    };
    const handleAddToCart = () => {
        addToCart(productData);
    };
    return (
        <>
            {loading ?
                <CartItemLoader />
                :
                <div className="flex items-start justify-between pb-6 mb-6 border-b border-black-300">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <div>
                            <Link to={`/products/${slug}`} className="flex items-center justify-center md:w-[120px] md:h-[120px] mr-9 rounded-xl overflow-hidden w-[60px] h-[60px]">
                                <img src={thumbnail} alt={slug} />
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <span className=" text-xl font-semibold text-gray-900 md:text-md">{title}</span>
                                {variation ?
                                    <p className=" text-gray-50 text-base font-semibold">{color} - {size}</p>
                                    :
                                    ""
                                }
                            </div>

                            <div className="flex justify-start items-center">

                                <button
                                    // type="button"
                                    className={`w-10 h-10 border-2 border-gray-400  rounded-full cursor-pointer flex items-center justify-center ${quantity! > 9 ? "pointer-events-none" : ''}`}
                                    type="button"
                                    onClick={handleAddToCart}
                                >
                                    <PlusIcon className="w-6 h-6 text-green-200" aria-hidden="true" />
                                </button>
                                <input type="text" className=" w-10 p-0 text-xl  border-none font-semibold text-center text-green-200  select-none focus:outline-none" value={quantity!} readOnly />
                                <button
                                    onClick={handleDecrease}
                                    type="button"
                                    className="w-10 h-10 border-2 border-gray-400  rounded-full cursor-pointer flex items-center justify-center"
                                >

                                    <MinusIcon className="w-6 h-6 text-green-200" aria-hidden="true" />
                                </button>

                            </div>
                            {/* <span className="text-sm font-light text-slate-400">Categories-1</span> */}
                        </div>

                    </div>
                    <div className="flex items-start justify-center ml-auto">

                        <div className="pr-4 text-right">
                            {/* <span className="text-sm font-medium">{FormatCurrency(productPrice)}</span> */}
                            {salePrice !== null && salePrice != productPrice ? (
                                <>
                                    <p className="ml-4 text-gray-400 text-sm line-through text-end">{FormatCurrency2(productPrice * quantity)}</p>
                                    <p className="ml-4  w-fit bg-yellow-910 rounded h-[18px] flex rtl:flex-row-reverse gap-x-[2px] px-1 text-5xl">{FormatCurrency(salePrice * quantity, 'EGP', ["text-sm font-normal", "text-2xl font-semibold ltr:-ml-0.5 rtl:-mr-0.5", "text-sm font-normal"])}</p>
                                </>
                            ) : (
                                <p className="ml-4  w-fit bg-yellow-910 rounded h-[18px] flex rtl:flex-row-reverse gap-x-[2px] px-1 text-5xl">{FormatCurrency(productPrice, 'EGP', ["text-sm font-normal", "text-2xl font-semibold ltr:-ml-0.5 rtl:-mr-0.5", "text-sm font-normal"])}</p>

                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="button"
                            onClick={handleRemoveClick}
                            className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">remove item</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            }

        </>
    );
};
export default CartItem;