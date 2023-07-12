
import { RiRadioButtonLine, RiCheckboxBlankCircleLine } from "react-icons/ri";
import PaymentForm from "./PaymentForm";


export default function PaymentMethod() {

    return (
        <>
            <h3 className='mb-5 flex justify-between items-center text-2xl font-bold pb-4 border-b border-[#D1D1D1] text-black'>
                طريقة الدفع
            </h3>
            <ul className=''>
                <li className='py-2'>
                    <label htmlFor="Credit_Card" className='block text-gray-900 peer-checked:text-blue-600'>
                        <div className="relative flex flex-col py-1 pl-3">
                            <input type="radio" name="payment_method" id="Credit_Card" className='hidden peer opacity-0' />
                                <div className='invisible peer-checked:visible absolute left-6 m-auto top-9 bottom-auto w-f h-fit'>
                                    <RiRadioButtonLine className='peer-checked:bg-gray-700' />
                                </div>
                                <div className='visible peer-checked:invisible absolute left-6 m-auto top-0 bottom-0 w-f h-fit'>
                                    <RiCheckboxBlankCircleLine className='peer-checked:bg-gray-700' />
                                </div>
                                <span className='flex justify-between -ml-4 text-xl font-semibold py-6 pr-6 pl-20 peer-checked:border-[3px] border-2 peer-checked:border-green-200 border-gray-400 rounded-[20px]'>Credit Card <svg width="73" height="24" viewBox="0 0 73 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="33.5" height="23" rx="3.5" fill="white" stroke="#D9D9D9" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.4733 16.2582H8.38327L6.816 10.1924C6.74161 9.91334 6.58366 9.66667 6.35132 9.5504C5.7715 9.25823 5.13256 9.0257 4.43555 8.90843V8.6749H7.80242C8.2671 8.6749 8.61561 9.0257 8.67369 9.43313L9.48688 13.8086L11.5759 8.6749H13.6078L10.4733 16.2582ZM14.7695 16.2582H12.7957L14.421 8.6749H16.3949L14.7695 16.2582ZM18.9486 10.7757C19.0067 10.3673 19.3552 10.1337 19.7618 10.1337C20.4007 10.0751 21.0967 10.1924 21.6775 10.4835L22.0261 8.85081C21.4452 8.61727 20.8063 8.5 20.2264 8.5C18.3107 8.5 16.9166 9.55041 16.9166 11.0082C16.9166 12.1173 17.9041 12.6996 18.6011 13.0504C19.3552 13.4002 19.6456 13.6338 19.5875 13.9835C19.5875 14.5082 19.0067 14.7418 18.4268 14.7418C17.7298 14.7418 17.0328 14.5669 16.3949 14.2747L16.0464 15.9085C16.7434 16.1996 17.4975 16.3169 18.1945 16.3169C20.3426 16.3745 21.6775 15.3251 21.6775 13.75C21.6775 11.7665 18.9486 11.6502 18.9486 10.7757ZM28.5855 16.2582L27.0183 8.6749H25.3348C24.9863 8.6749 24.6378 8.90843 24.5217 9.25823L21.6195 16.2582H23.6514L24.057 15.1502H26.5536L26.7859 16.2582H28.5855ZM25.6253 10.7171L26.2051 13.5751H24.5797L25.6253 10.7171Z" fill="#172B85" />
                                    <rect x="39" y="0.5" width="33.5" height="23" rx="3.5" fill="white" stroke="#D9D9D9" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M55.9965 17.1569C54.822 18.1852 53.2984 18.806 51.6335 18.806C47.9187 18.806 44.9072 15.7154 44.9072 11.903C44.9072 8.09057 47.9187 5 51.6335 5C53.2984 5 54.822 5.62075 55.9965 6.64903C57.1711 5.62075 58.6947 5 60.3595 5C64.0743 5 67.0858 8.09057 67.0858 11.903C67.0858 15.7154 64.0743 18.806 60.3595 18.806C58.6947 18.806 57.1711 18.1852 55.9965 17.1569Z" fill="#ED0006" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M55.9966 17.1569C57.4428 15.8908 58.3599 14.0068 58.3599 11.903C58.3599 9.79917 57.4428 7.91517 55.9966 6.64903C57.1711 5.62075 58.6947 5 60.3596 5C64.0744 5 67.0859 8.09057 67.0859 11.903C67.0859 15.7154 64.0744 18.806 60.3596 18.806C58.6947 18.806 57.1711 18.1852 55.9966 17.1569Z" fill="#F9A000" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M55.9966 6.64844C57.4428 7.91457 58.3598 9.79856 58.3598 11.9024C58.3598 14.0062 57.4428 15.8902 55.9966 17.1563C54.5503 15.8902 53.6333 14.0062 53.6333 11.9024C53.6333 9.79856 54.5503 7.91457 55.9966 6.64844Z" fill="#FF5E00" />
                                </svg>
                                </span>
                            <div className=" h-0 overflow-hidden peer-checked:h-auto peer-checked:p-2">

                                <PaymentForm />
                                {/* <div className="col-span-2 ok">
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Card number </label>
                                    <div className="mt-1">
                                        <input type="text" name="" id="" placeholder="XXXX XXXX XXXX XXXX" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Name on the card </label>
                                    <div className="mt-1">
                                        <input type="text" name="" id="" placeholder="ex: John Doe" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Expiry date </label>
                                    <div className="mt-1">
                                        <input type="text" name="" id="" placeholder="MM/YYYY" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> CSV </label>
                                    <div className="mt-1">
                                        <input type="text" name="" id="" placeholder="XXX" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </label>
                </li>
                <li className='py-2'>
                    <label htmlFor="Cash" className='block text-gray-900 peer-checked:text-blue-600'>
                        <div className='relative flex items-center py-1 pl-3'>
                            <input type="radio" name="payment_method" id="Cash" className='hidden peer opacity-0' defaultChecked />
                            <div className='invisible peer-checked:visible absolute left-6 m-auto top-0 bottom-0 w-f h-fit'>
                                <RiRadioButtonLine className='peer-checked:bg-gray-700' />
                            </div>
                            <div className='visible peer-checked:invisible absolute left-6 m-auto top-0 bottom-0 w-f h-fit'>
                                <RiCheckboxBlankCircleLine className='peer-checked:bg-gray-700' />
                            </div>
                            <span className='flex justify-between -ml-4 text-xl font-semibold py-6 pr-6 pl-20 peer-checked:border-[3px] border-2 peer-checked:border-green-200 border-gray-400 rounded-[20px] w-[102%]'>Cash on delivery
                            <svg width="73" height="24" viewBox="0 0 73 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" opacity-0">
                                    <rect x="0.5" y="0.5" width="33.5" height="23" rx="3.5" fill="white" stroke="#D9D9D9" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.4733 16.2582H8.38327L6.816 10.1924C6.74161 9.91334 6.58366 9.66667 6.35132 9.5504C5.7715 9.25823 5.13256 9.0257 4.43555 8.90843V8.6749H7.80242C8.2671 8.6749 8.61561 9.0257 8.67369 9.43313L9.48688 13.8086L11.5759 8.6749H13.6078L10.4733 16.2582ZM14.7695 16.2582H12.7957L14.421 8.6749H16.3949L14.7695 16.2582ZM18.9486 10.7757C19.0067 10.3673 19.3552 10.1337 19.7618 10.1337C20.4007 10.0751 21.0967 10.1924 21.6775 10.4835L22.0261 8.85081C21.4452 8.61727 20.8063 8.5 20.2264 8.5C18.3107 8.5 16.9166 9.55041 16.9166 11.0082C16.9166 12.1173 17.9041 12.6996 18.6011 13.0504C19.3552 13.4002 19.6456 13.6338 19.5875 13.9835C19.5875 14.5082 19.0067 14.7418 18.4268 14.7418C17.7298 14.7418 17.0328 14.5669 16.3949 14.2747L16.0464 15.9085C16.7434 16.1996 17.4975 16.3169 18.1945 16.3169C20.3426 16.3745 21.6775 15.3251 21.6775 13.75C21.6775 11.7665 18.9486 11.6502 18.9486 10.7757ZM28.5855 16.2582L27.0183 8.6749H25.3348C24.9863 8.6749 24.6378 8.90843 24.5217 9.25823L21.6195 16.2582H23.6514L24.057 15.1502H26.5536L26.7859 16.2582H28.5855ZM25.6253 10.7171L26.2051 13.5751H24.5797L25.6253 10.7171Z" fill="#172B85" />
                                    <rect x="39" y="0.5" width="33.5" height="23" rx="3.5" fill="white" stroke="#D9D9D9" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M55.9965 17.1569C54.822 18.1852 53.2984 18.806 51.6335 18.806C47.9187 18.806 44.9072 15.7154 44.9072 11.903C44.9072 8.09057 47.9187 5 51.6335 5C53.2984 5 54.822 5.62075 55.9965 6.64903C57.1711 5.62075 58.6947 5 60.3595 5C64.0743 5 67.0858 8.09057 67.0858 11.903C67.0858 15.7154 64.0743 18.806 60.3595 18.806C58.6947 18.806 57.1711 18.1852 55.9965 17.1569Z" fill="#ED0006" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M55.9966 17.1569C57.4428 15.8908 58.3599 14.0068 58.3599 11.903C58.3599 9.79917 57.4428 7.91517 55.9966 6.64903C57.1711 5.62075 58.6947 5 60.3596 5C64.0744 5 67.0859 8.09057 67.0859 11.903C67.0859 15.7154 64.0744 18.806 60.3596 18.806C58.6947 18.806 57.1711 18.1852 55.9966 17.1569Z" fill="#F9A000" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M55.9966 6.64844C57.4428 7.91457 58.3598 9.79856 58.3598 11.9024C58.3598 14.0062 57.4428 15.8902 55.9966 17.1563C54.5503 15.8902 53.6333 14.0062 53.6333 11.9024C53.6333 9.79856 54.5503 7.91457 55.9966 6.64844Z" fill="#FF5E00" />
                                </svg>
                            </span>
                        </div>
                    </label>
                </li>
            </ul>
        </>
    )
}