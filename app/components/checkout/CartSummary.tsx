import { memo } from 'react';
import { v4 } from "uuid";
import useShoppingCart from "~/stores/cartStore";
import FormatCurrency from "~/utils/FormatCurrency";
import MiniCartItem from "../cart/MiniCartItem";
import { Link } from 'react-router-dom';

const CartSummary = ({ thanks, rate }: any) => {
    const { cartItems, totalAPI, totalDiscountAPI, totalPrice } = useShoppingCart();
    console.log('totalPrice', totalPrice)
    const checkoutTotal = totalAPI === 0 ? totalPrice : totalAPI
    const shippingFees = parseFloat(rate);
    const totalSubTotal = checkoutTotal + totalDiscountAPI;
    const totalAmount = checkoutTotal + shippingFees;
    return (
        <div className={`mt-10 ml-0 md:mt-0 md:ml-5 w-full ${thanks ? 'md:w-[500px]' : 'md:w-[470px]'}`}>
            {/* Order summary */}
            <div className={`${thanks ? 'min-w-[500px]' : 'min-w-[470px]'}`} >

                <div className="bg-white shadow-sm  py-8  rounded-[32px]" style={{ boxShadow: ' 0px 20px 66px rgba(0, 0, 0, 0.2)' }}>
                    <h2 className=" text-[32px] font-bold capitalize px-10 pb-6 border-b border-grayy-100 flex justify-between">
                        <>ملخص السلة {thanks ? `#${thanks}` : ''}</>
                        {thanks ? '' :
                            <Link to="/cart" className="flex items-center p-2 -m-2 group">
                                تعديل
                            </Link>
                        }

                    </h2>
                    <ul role="list" className="divide-y divide-gray-200">
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex px-4 py-6 sm:px-6">
                                <MiniCartItem
                                    id={item.id}
                                    price={item.price}
                                    quantity={item.quantity}
                                    slug={item.slug}
                                    thumbnail={item.thumbnail}
                                    removeFromCart=''
                                />
                            </li>
                        ))}
                    </ul>
                    <dl className="px-4 py-6 space-y-6 border-t border-gray-200 sm:px-6">
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Subtotal</dt>
                            <dd className="text-sm font-medium text-gray-900">{FormatCurrency(totalSubTotal)}</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Shipping</dt>
                            <dd className="text-sm font-medium text-gray-900">{shippingFees !== 0 ? FormatCurrency(shippingFees) : 'Free'}</dd>
                        </div>
                        {/* <div className="flex items-center justify-between">
                            <dt className="text-sm">Taxes</dt>
                            <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                        </div> */}
                        {totalDiscountAPI > 0 ?
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-red-400">Discount</dt>
                                <dd className="text-sm font-medium text-red-400">-{FormatCurrency(totalDiscountAPI)}</dd>
                            </div>
                            :
                            ''
                        }
                        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                            <dt className="text-base font-medium">Total</dt>
                            <dd className="text-base font-medium text-gray-900">{FormatCurrency(totalAmount)}</dd>
                        </div>
                        {thanks ?
                            <div>
                                <p>You have earn <strong className="text-green-500">48</strong> Points!</p>
                            </div>
                            : ''}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default memo(CartSummary);