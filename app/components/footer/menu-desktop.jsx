import { Link } from "@remix-run/react";
import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from 'react-i18next';


const menuDetails = {
    menu: [
        {
            title: 'أقسام المنتجات',
            title_en: 'Categories',
            pages: [
                {
                    name: 'العروض و الخصومات',
                    name_en: 'Sales',
                    url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: 'المكسرات',
                    name_en: 'Nuts',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: ' الوجبات صحية',
                    name_en: 'Healthy Meals',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: ' التمور والفواكه المجففة',
                    name_en: 'Dates and dried fruits',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: ' المشروبات',
                    name_en: 'Drinks',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: ' البهارات والزيوت',
                    name_en: 'Spices and oils',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
            ],

        },
        {
            title: 'عن الشركة ',
            title_en: 'Categories',
            pages: [
                {
                    name: ' قصتنا',
                    name_en: 'our Story',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: 'فروعنا',
                    name_en: 'Our Brnaches',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: ' وصفاتنا',
                    name_en: 'Our Recipes',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: 'العروض و الخصومات',
                    name_en: 'Sales',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: 'التصدير ',
                    name_en: 'Exporting',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: 'الموزعين في مصر ',
                    name_en: 'Vendors in Egypt',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: ' شركاء النجاح ',
                    name_en: 'Partners',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: '  فرص وظائف ',
                    name_en: 'Jobs',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: ' إبداء الرأي ',
                    name_en: 'Feedback',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
            ],

        },
        {
            title: ' المساعدة',
            title_en: 'Help',
            pages: [
                {
                    name: 'الاسئلة الشائعة ',
                    name_en: 'Faqs',
                    url: '/faqs',
                },
                {
                    name: ' تعليقات العملاء',
                    name_en: 'Reviews',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: ' التوصيل أو الاستلام ',
                    name_en: 'Delivery or pick up',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: 'تطبيق الجوال',
                    name_en: 'Mobile App',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: 'الشروط والاحكام',
                    name_en: 'Terms and Conditions',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: 'سياسة الخصوصية',
                    name_en: 'Privacy policy',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
                {
                    name: 'سياسة الاسترجاع',
                    name_en: 'Return policy',
                    // url: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                },
            ],

        },
    ],
}
export default function MenuDesktop() {
    const { t } = useTranslation();
    return (

        <div className="md:flex w-3/4 ltr:md:mr-24 rtl:md:ml-24 hidden ">
            {menuDetails.menu.map((menu,index) => (
                <div className=" w-1/3" key={index}>

                    <><h4 className=" text-green-600 md:text-base font-bold mb-5">
                        {i18next.language === "ar" ?
                            menu.title : menu.title_en
                        }
                    </h4><ul>
                            {menu.pages.map((page) => (

                                <li className=" text-white md:text-xl md:mb-2 hover:text-gray-100">
                                    <Link to={page.url} className=""> {i18next.language === "ar" ?
                                        page.name : page.name_en
                                    }</Link>
                                </li>
                            ))}
                        </ul></>
                </div>

            ))}
        </div>

    )
}
