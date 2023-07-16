import { Link } from "@remix-run/react";
import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from 'react-i18next';


export default function HistorySection() {
    const { t } = useTranslation();
    const items = [
        {
            imageSrc: "/images/image.png",
            year: "1970’s",
            description: "بدأ أبو عوف في بيع الفاكهة المجففة والمكسرات بكميات كبيرة وبالجملة.",
            description_English: "Abu Auf started selling dried fruits and nuts in bulk and wholesale."
        },
        {
            imageSrc: "/images/image.png",
            year: "1980’s",
            description: "وسعت شركة أبو عوف محفظتها، حيث قدمت المزيد من المنتجات والمكونات إلى السوق.",
            description_English: "Abu Auf expanded its portfolio, introducing more products and ingredients to the market."
        },
        {
            imageSrc: "/images/image.png",
            year: "1990’s",
            description: " افتتح أبو عوف مراكز لوجستية في القاهرة والإسكندرية",
            description_English: "Abu Auf opened logistic centers in Cairo and Alexandria"
        },
        {
            imageSrc: "/images/image.png",
            year: "2000",
            description: " قدم أبو عوف التمر الفاخر للسوق المصري",
            description_English: "Abu Auf introduced premium dates to the Egyptian market"
        },
        {
            imageSrc: "/images/image.png",
            year: "2010",
            description: " تم تقديم العلامة التجارية تحت اسم 'أبو عوف' وتم افتتاح أول متجر مميز لدينا في الميرغني.",
            description_English: "The brand was introduced under the name “Abu Auf” and our first premium store was opened in Al Merghany."
        },
        {
            imageSrc: "/images/image.png",
            year: "2018",
            description: "  وسعت شركة أبو عوف نطاق منتجاتها وقدمت مجموعة صحية من المنتجات المختلفة إلى السوق. ",
            description_English: "Abu Auf expanded its product range and introduced a healthy range of different products to the market."
        },
        {
            imageSrc: "/images/image.png",
            year: "2019",
            description: "أطلق أبو عوف موقعه على الإنترنت واكتسب المزيد من التقدير في جميع أنحاء العالم.",
            description_English: "Abu Auf launched his website and gained more recognition all over the world."
        },
        {
            imageSrc: "/images/image.png",
            year: "2021",
            description: "أطلقت شركة أبو عوف تطبيق الهاتف الخاص بها مما وفر وصولاً أسهل لعملائها وسهّل عملية الشراء.",
            description_English: "Abu Auf launched its own mobile application, which provided easier access to its customers and facilitated the purchase process."
        },
        // Add more items here...
    ];

    return (

        <div className="history container mx-auto mt-6 md:my-20 mb-14 md:px-24 px-4">
            <h3 className=" font-bold text-xl md:text-5xl text-green-400 leading-none">{t('about.history_title')}</h3>

            <div className="list md:mt-16 mt-6 ">
                {items.map((item, index) => (
                    <div className="single flex md:h-64 h-28 md:w-2/4 overflow-hidden">
                        <img src={item.imageSrc} alt="" className=" md:w-60 w-32 md:h-44 h-24" />
                        <div className="border-new md:w-4 w-2 mx-5 mt-2">
                            <span className=" bg-black md:w-4 md:h-4 w-2 h-2 block rounded-full"></span>
                            <span className={`md:w-1 w-0.5 bg-gray-100 h-full mt-2 block mx-auto ${(items.length - 1 == index) ? 'hidden' : ''}`}></span>
                        </div>
                        <div className="text">
                            <p className="year text-green-400 text-base md:text-xl font-extrabold direction-ltr rtl:text-end ltr:text-start">{item.year}</p>
                            <p className=" text-sm mt-1 text-gray-50 md:text-xl">
                                {i18next.language === "ar" ?
                                    item.description : item.description_English
                                }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
