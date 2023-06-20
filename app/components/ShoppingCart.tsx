import { Fragment, useEffect, memo } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import useShoppingCart from "~/stores/cartStore";
import { v4 } from 'uuid';
import MiniCartItem from './cart/MiniCartItem';
import MiniCartUpSell from './cart/MiniCartUpSell';
import MiniCartTools from './cart/MiniCartTools';
import i18next from 'i18next';
import FormatCurrency, { FormatCurrency2 } from '~/utils/FormatCurrency';
import MiniCartItemLoader from './cart/MiniCartItemLoader';


const ShoppingCart = () => {

  const { closeCart, cartItems, removeFromCart, openCart, decreaseCartQuantity, addToCart, isOpen, totalPrice } = useShoppingCart();
  // console.log('isOpen>', isOpen);
  // useEffect(() => {
  //   setTimeout(() => {
  //     closeCart();
  //   }, 10);
  // }, []);
  const isClientRender = typeof window !== 'undefined';
  useEffect(() => {
    if (isClientRender) {
      // Hydrate the cart on the client side after rendering
      closeCart();
      // You can perform any necessary client-side initialization here
    }
  }, [isClientRender]);
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeCart}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex md:max-w-[600px] pointer-events-none">
                <Transition.Child

                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  // enterFrom="-translate-x-full"
                  enterFrom={`${i18next.language === 'en' ? 'translate-x-full' : '-translate-x-full'}`}
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo={`${i18next.language === 'en' ? 'translate-x-full' : '-translate-x-full'}`}
                >
                  <Dialog.Panel className="w-screen h-full max-w-[600px] pointer-events-auto">
                    <div className="relative flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1  py-5 overflow-y-auto">
                        <div className="flex items-start justify-between px-5 pb-5 border-b border-[#C6C6C6]">
                          {cartItems.length > 0 && (
                            <Dialog.Title className="t text-3xl font-bold text-black">سلة التسوق</Dialog.Title>
                          )}
                          <div className="flex items-center ml-3 h-7">
                            <button
                              type="button"
                              className="p-2 -m-2 text-gray-400 outline-none hover:text-gray-500 rounded-100 border-2 border-gray-400"
                              onClick={closeCart}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        {cartItems.length > 0 ? (
                          <div className="mt-8 md:px-10 px-4">
                            <div className="flow-root">
                              <ul role="list" className="-my-6 ">
                                {cartItems.map((item) => (
                                  <li key={v4()} className="flex py-6">

                                    <MiniCartItem
                                      id={item.id}
                                      price={item.price}
                                      quantity={item.quantity}
                                      // color={item.color} 
                                      // size={item.size} 
                                      slug={item.slug}
                                      thumbnail={item.thumbnail}
                                      removeFromCart={removeFromCart}
                                      decreaseCartQuantity={decreaseCartQuantity}
                                      addToCart={addToCart}
                                    />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <div className='flex mt-auto items-center justify-center h-[90%]'>
                            <p className="mt-0.5 text text-slate-500">Your cart is currently empty.</p>
                          </div>
                        )}
                        {cartItems.length > 0 && (
                          <>
                            <MiniCartTools />
                            <MiniCartUpSell />
                          </>
                        )}
                      </div>
                      {cartItems.length > 0 && (
                        <div className="px-10 py-10 border-t border-gray-200 top-shadow">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p className=' text-base text-gray-50 font-semibold'>مصاريف التوصيل</p>
                            <p className=' text-xl  font-bold text-black'>{FormatCurrency2(totalPrice)}</p>
                          </div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p className=' text-base text-gray-50 font-semibold'>الإجمالي </p>
                            <p className=' text-xl  font-bold text-black'>{FormatCurrency2(totalPrice)}</p>
                          </div>
                          <div className="mt-4">
                            <Link
                              to="/checkout"
                              onClick={closeCart}
                              className="flex items-center justify-center px-6 py-3 md:text-xl text-base font-semibold text-white border border-transparent rounded-100 shadow-sm bg-green-200  hover:bg-green-400"
                            >
                              أطلب الآن
                            </Link>
                          </div>
                          <div className="flex justify-center mt-4 text-center">
                            <p className='w-full'>
                              {/* or */}
                              <Link
                                to="/cart"
                                className=" bg-green-300 text-black text-xl font-semibold py-4 rounded-100 w-full block"
                                onClick={closeCart}
                              >
                                عرض السلة
                                {/* <span aria-hidden="true"> &rarr;</span> */}
                              </Link>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className='pointer-events-auto visible opacity-100 pointer-events-none invisible opacity-0 fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 transition-all duration-300 ease-linear'
      ></div>
    </div>
  )
}
export default memo(ShoppingCart)