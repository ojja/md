import { Tab } from "@headlessui/react";
import Reviews from "../Reviews";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

interface TabsProps {
    product: any;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
export default function TabsNew({ product }: TabsProps) {
    const { t } = useTranslation();

    return (
        <div className=" pt-12 bg-white  ">
            <div className="container mx-auto">
                <Tab.Group as="div" className="flex flex-col" defaultIndex={0}>
                    <Tab.List className="flex flex-wrap -mb-px space-x-1 border-b border-gray-200 mb-12">
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'p-4 py-2.5 text-xl font-medium leading-5 text-black focus:outline-none bg-transparent border-b-4  transition-colors duration-300',
                                    selected
                                    ? 'border-[#DCC498]'
                                    : ' border-transparent'
                                )
                            }
                        >
                            {i18next.language === "ar" ?
                                ' الفوائد  ' : '  Benefits '
                            }
                        </Tab>
                        <Tab
                              className={({ selected }) =>
                              classNames(
                                  'p-4 py-2.5 text-xl font-medium leading-5 text-black focus:outline-none bg-transparent border-b-4  transition-colors duration-300',
                                  selected
                                      ? 'border-[#DCC498]'
                                      : ' border-transparent'
                              )
                          }
                        >
                            {i18next.language === "ar" ?
                                ' طريقة الحفظ  ' : ' Preservation Method '
                            }
                        </Tab>

                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <ul>
                                <li>
                                    <div className="flex items-center gap-x-3  mb-9">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="60" height="60" rx="30" fill="#F9F0E0" />
                                            <path d="M30.0001 12.3535C21.0883 23.2947 30.0001 25.9418 30.0001 25.9418C30.0001 25.9418 38.9119 23.2947 30.0001 12.3535Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.5001 22.3242C33.6178 23.2948 29.3825 31.5889 29.3825 31.5889C29.3825 31.5889 21.4413 36.2654 19.5001 22.3242Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M40.4999 22.3242C26.3823 23.2948 30.6176 31.5889 30.6176 31.5889C30.6176 31.5889 38.647 36.2654 40.4999 22.3242Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.5001 31.1465C33.6178 32.1171 29.3825 40.4112 29.3825 40.4112C29.3825 40.4112 21.4413 45.1759 19.5001 31.1465Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M40.4999 31.1465C26.3823 32.1171 30.6176 40.4112 30.6176 40.4112C30.6176 40.4112 38.647 45.1759 40.4999 31.1465Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M30 25.9414V47.6473" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p className=" text-xl font-semibold text-gray-50">مليئة بالعناصر الغذائية والفيتامينات الصحية</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-x-3  mb-9">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="60" height="60" rx="30" fill="#F9F0E0" />
                                            <path d="M30.0001 12.3535C21.0883 23.2947 30.0001 25.9418 30.0001 25.9418C30.0001 25.9418 38.9119 23.2947 30.0001 12.3535Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.5001 22.3242C33.6178 23.2948 29.3825 31.5889 29.3825 31.5889C29.3825 31.5889 21.4413 36.2654 19.5001 22.3242Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M40.4999 22.3242C26.3823 23.2948 30.6176 31.5889 30.6176 31.5889C30.6176 31.5889 38.647 36.2654 40.4999 22.3242Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.5001 31.1465C33.6178 32.1171 29.3825 40.4112 29.3825 40.4112C29.3825 40.4112 21.4413 45.1759 19.5001 31.1465Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M40.4999 31.1465C26.3823 32.1171 30.6176 40.4112 30.6176 40.4112C30.6176 40.4112 38.647 45.1759 40.4999 31.1465Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M30 25.9414V47.6473" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p className="text-xl font-semibold text-gray-50">مليئة بالعناصر الغذائية والفيتامينات الصحية</p>
                                    </div>
                                </li>
                            </ul>
                        </Tab.Panel>
                        <Tab.Panel>
                            <ul>
                                <li>
                                    <div className="flex items-center gap-x-3  mb-9">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="60" height="60" rx="30" fill="#F9F0E0" />
                                            <path d="M30.0001 12.3535C21.0883 23.2947 30.0001 25.9418 30.0001 25.9418C30.0001 25.9418 38.9119 23.2947 30.0001 12.3535Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.5001 22.3242C33.6178 23.2948 29.3825 31.5889 29.3825 31.5889C29.3825 31.5889 21.4413 36.2654 19.5001 22.3242Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M40.4999 22.3242C26.3823 23.2948 30.6176 31.5889 30.6176 31.5889C30.6176 31.5889 38.647 36.2654 40.4999 22.3242Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.5001 31.1465C33.6178 32.1171 29.3825 40.4112 29.3825 40.4112C29.3825 40.4112 21.4413 45.1759 19.5001 31.1465Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M40.4999 31.1465C26.3823 32.1171 30.6176 40.4112 30.6176 40.4112C30.6176 40.4112 38.647 45.1759 40.4999 31.1465Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M30 25.9414V47.6473" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p className="text-xl font-semibold text-gray-50">مليية والفيتامينات الصحية</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-x-3  mb-9">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="60" height="60" rx="30" fill="#F9F0E0" />
                                            <path d="M30.0001 12.3535C21.0883 23.2947 30.0001 25.9418 30.0001 25.9418C30.0001 25.9418 38.9119 23.2947 30.0001 12.3535Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.5001 22.3242C33.6178 23.2948 29.3825 31.5889 29.3825 31.5889C29.3825 31.5889 21.4413 36.2654 19.5001 22.3242Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M40.4999 22.3242C26.3823 23.2948 30.6176 31.5889 30.6176 31.5889C30.6176 31.5889 38.647 36.2654 40.4999 22.3242Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.5001 31.1465C33.6178 32.1171 29.3825 40.4112 29.3825 40.4112C29.3825 40.4112 21.4413 45.1759 19.5001 31.1465Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M40.4999 31.1465C26.3823 32.1171 30.6176 40.4112 30.6176 40.4112C30.6176 40.4112 38.647 45.1759 40.4999 31.1465Z" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M30 25.9414V47.6473" stroke="#163300" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p className="text-xl font-semibold text-gray-50">مليئة باة والفيتامينات الصحية</p>
                                    </div>
                                </li>
                            </ul>
                        </Tab.Panel>

                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}
