import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { MetaFunction } from "remix";
import CartItem from "~/components/cart/CartItem";
import CouponForm from "~/components/CouponForm";
import ExtraProducts from "~/components/ExtraProducts";
import { Site_Title } from "~/config";
import useShoppingCart from "~/stores/cartStore";
import FormatCurrency from "~/utils/FormatCurrency";



export const meta: MetaFunction = () => {
    return {
        title: `Cart - ${Site_Title}`
    }
}
export default function Cart() {
    const { cartItems, removeFromCart, decreaseCartQuantity, addToCart, totalPrice, addCoupon, totalAPI, totalDiscountAPI } = useShoppingCart();
    // console.log('cartItems', cartItems)
    // console.log('totalAPI', totalAPI)
    // console.log('totalDiscountAPI', totalDiscountAPI)
    const [openCoupon, setOpenCoupon] = useState(false);

    return (
        <div className="p-8 mx-auto bg-white">
            <div className="container px-4 mx-auto max-w-[1400px] sm:px-6 lg:px-8">
                <div className="pb-10">
                    <h1 className="text-4xl font-semibold">سلة التسوق</h1>
                    {/* <span>totalAPI{totalAPI}</span>
                    <span>totalDiscountAPI{totalDiscountAPI}</span> */}
                </div>
                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <div className="col-span-2 pr-16">
                            <div className="pt-6">
                                {cartItems.map((item, index) => (
                                    <CartItem
                                        key={index}
                                        title={''}
                                        id={item.id}
                                        quantity={item.quantity}
                                        color={item.color}
                                        size={item.size}
                                        slug={item.slug}
                                        thumbnail={item.thumbnail}
                                        removeFromCart={removeFromCart}
                                        decreaseCartQuantity={decreaseCartQuantity}
                                        addToCart={addToCart}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-span-2  sm:col-span-1">
                            <div className=" py-8 bg-white rounded-[32px]" style={{ boxShadow: ' 0px 20px 66px rgba(0, 0, 0, 0.2)' }}>
                                <h2 className=" text-[32px] font-bold capitalize px-10 pb-6 border-b border-grayy-100">ملخص السلة</h2>
                                <div className="flex flex-col mt-10 px-10">
                                    <div className="flex justify-between">
                                        <span className=" font-semibold text-gray-50 text-base">مصاريف التوصيل</span>
                                        <span className="text-black text-xl font-bold">{FormatCurrency(0)}</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-black-300">
                                        <span className=" font-semibold text-gray-50 text-base">المبلغ</span>
                                        <span className="text-black text-xl font-bold">{FormatCurrency(totalAPI + totalDiscountAPI)}</span>
                                    </div>
                                </div>
                                <div>
                                    {/* <div className="flex justify-between py-3 border-b border-black-300">
                                        <span className="font-light text-gray-600">Tax estimate</span>
                                        <span className="text-gray-600">10.00 EGP</span>
                                    </div> */}
                                    {totalDiscountAPI > 0 ?
                                        <div className="flex justify-between py-3 border-b border-black-300">
                                            <span className="font-light text-red-400">Discount</span>
                                            <span className="text-red-400">-{FormatCurrency(totalDiscountAPI)}</span>
                                        </div>
                                        :
                                        <div className="flex flex-wrap justify-between py-3 px-10">
                                            {openCoupon ?
                                                <div className="w-full">
                                                    <button
                                                        type="button"
                                                        className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => setOpenCoupon(false)}
                                                    >
                                                        <span className="sr-only">Close coupon</span>
                                                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                                    </button>
                                                    <CouponForm />
                                                </div>

                                                :
                                                <span className=" font-semibold text-gray-50 underline cursor-pointer flex gap-x-3" onClick={() => setOpenCoupon(true)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6971 1.90216C12.7598 0.964904 11.2402 0.964904 10.3029 1.90216L9.66066 2.54444C8.98553 3.21957 8.06986 3.59886 7.11508 3.59886H6C4.67451 3.59886 3.6 4.67337 3.6 5.99886V7.11394C3.6 8.06872 3.22071 8.98439 2.54558 9.65952L1.90294 10.3022C0.965682 11.2394 0.965683 12.759 1.90294 13.6963L2.54558 14.3389C3.22071 15.014 3.6 15.9297 3.6 16.8845V17.9989C3.6 19.3243 4.67451 20.3989 6 20.3989H7.11435C8.06913 20.3989 8.98481 20.7781 9.65994 21.4533L10.3029 22.0963C11.2402 23.0335 12.7598 23.0335 13.6971 22.0963L14.3401 21.4533C15.0152 20.7781 15.9309 20.3989 16.8856 20.3989H18C19.3255 20.3989 20.4 19.3243 20.4 17.9989V16.8845C20.4 15.9297 20.7793 15.014 21.4544 14.3389L22.097 13.6963C23.0343 12.759 23.0343 11.2394 22.097 10.3022L21.4544 9.65952C20.7793 8.98439 20.4 8.06872 20.4 7.11394V5.99886C20.4 4.67337 19.3255 3.59886 18 3.59886H16.8849C15.9301 3.59886 15.0145 3.21957 14.3393 2.54444L13.6971 1.90216ZM15.3985 9.06486C15.7661 8.51342 15.6171 7.76838 15.0656 7.40076C14.5142 7.03313 13.7692 7.18214 13.4015 7.73358L8.60154 14.9336C8.23391 15.485 8.38292 16.2301 8.93436 16.5977C9.48579 16.9653 10.2308 16.8163 10.5985 16.2649L15.3985 9.06486ZM7.8 10.7992C8.79411 10.7992 9.6 9.99333 9.6 8.99922C9.6 8.00511 8.79411 7.19922 7.8 7.19922C6.80588 7.19922 6 8.00511 6 8.99922C6 9.99333 6.80588 10.7992 7.8 10.7992ZM18 14.9992C18 15.9933 17.1941 16.7992 16.2 16.7992C15.2059 16.7992 14.4 15.9933 14.4 14.9992C14.4 14.0051 15.2059 13.1992 16.2 13.1992C17.1941 13.1992 18 14.0051 18 14.9992Z" fill="black" />
                                                </svg>
                                                    هل لديك برومو كود؟</span>
                                            }
                                        </div>
                                    }


                                    <div className="flex justify-between px-10 items-center">
                                        <span className="font-semibold text-gray-50 text-base">الإجمالي </span>
                                        <span className=" text-[32px] text-black font-bold">{FormatCurrency(totalAPI)}</span>
                                    </div>
                                    <div className="points flex items-center bg-yellow-910 py-4 px-10 justify-between mt-10">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.9865 11.0194C27.9974 10.465 27.8482 9.1722 26.163 8.72203L9.239 5.33398C7.99869 5.33398 6.99002 6.34263 6.99002 7.58297V10.5981L6.24036 10.5962C5.00454 10.6014 4 11.6071 4 12.8444V24.8345C4 26.0748 5.00867 27.0835 6.24898 27.0835H25.751C26.9914 27.0835 28 26.0748 28 24.8345L27.9865 11.0194ZM8.48932 7.58294C8.48932 7.19124 8.79106 6.86929 9.17376 6.8363L25.7131 10.1835C25.7191 10.1865 25.5902 10.6037 24.9897 10.5958H8.48932V7.58294ZM26.501 24.8349C26.501 25.2487 26.1652 25.5846 25.7513 25.5846H6.24893C5.83512 25.5846 5.49927 25.2487 5.49927 24.8349V12.8445C5.49927 12.4306 5.83512 12.0948 6.24893 12.0948H24.9919C25.7277 12.0948 26.5006 11.844 26.5006 11.3478V24.8349H26.501ZM8.49941 17.345C7.67141 17.345 7.00009 18.0164 7.00009 18.8444C7.00009 19.6724 7.67141 20.3437 8.49941 20.3437C9.32741 20.3437 9.99874 19.6724 9.99874 18.8444C9.99874 18.0164 9.32741 17.345 8.49941 17.345Z" fill="black" />
                                        </svg>
                                        <p className=" text-base w-1/2 font-semibold  text-black">لديك 120 نقطة في محفظتك و يمكنك خصم 12 EGP</p>
                                        <button className="bg-white rounded-100 text-base font-semibold  text-black py-2.5 px-5">خصم المبلغ</button>
                                    </div>
                                    <Link to="/checkout" className="px-3 py-4 text-xl text-center text-white rounded-100 pointer-events-auto mx-10 mt-10 bg-green-200 block ">أطلب الآن</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex mt-auto items-center justify-center min-h-[400px] flex-col'>
                        <p className="text-lg text-slate-500">Your cart is currently empty.</p>
                        <Link to='/products' className="inline-flex justify-center px-4 py-2 mt-5 text-sm font-semibold text-white capitalize rounded-lg bg-slate-900 hover:bg-slate-700">continue shopping</Link>
                    </div>
                )}
                <ExtraProducts categorySlug="dress" count={5} title="Up Selling" />
            </div>
        </div >
    )
}
