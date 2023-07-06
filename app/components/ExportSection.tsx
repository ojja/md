import { Link } from "@remix-run/react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import TextEllipsis from "./about/TextEllipsis";
import HistorySection from "./about/history";
import ValuesSection from "./about/values";
import ToggleSection from "./about/toggleSection";
import Breadcrumbs from "./Breadcrumbs";
import i18next from "i18next";


export default function ExportSection() {
    const { t } = useTranslation();


    const cities = [
        {
            imageSrc: "/images/export/cities/SaudiArabia.png",
            name: "السعودية",
        },
        {
            imageSrc: "/images/export/cities/UnitedArabEmirates.png",
            name: "المتحدة العربية المتحدة",
        },
        {
            imageSrc: "/images/export/cities/Malaysia.png",
            name: "ماليزيا",
        },
        {
            imageSrc: "/images/export/cities/UnitedStates.png",
            name: "الولايات المتحدة الأمريكية",
        },
        {
            imageSrc: "/images/export/cities/China.png",
            name: "الصين",
        },
        {
            imageSrc: "/images/export/cities/Morocco.png",
            name: "المغرب",
        },
        {
            imageSrc: "/images/export/cities/HongKong.png",
            name: "هونغ كونغ",
        },
        {
            imageSrc: "/images/export/cities/Indonesia.png",
            name: "إندونيسيا",
        },
        {
            imageSrc: "/images/export/cities/Germany.png",
            name: "ألمانيا",
        },
    ];
    const items = [
        {
            imageSrc: "/images/export/items/image.png",
            name: "التمور المصرية",
            description: "تتميز التمور المصرية بسمعة طيبة وجودة مميزة وسعر تنافسي يجعلها من أولويات مستوردي التمور لزيادة القدرة التنافسية للتمر المصري، استعانت “أبوعوف” بأحدث خطوط الغسيل والتجفيف وتم شراء خط تعقيم للتمر هو الأول من نوعه والأوحد في مصر مما أعطى تمور أبوعوف ميزة إضافية حيث يعتبر هذا الخط بمثابة صمام أمان ضد حدوث أي أضرار مستقبلية للتمر و منحه صلاحية أكبر. الشركة تصدر مختلف أصناف التمور المصرية مثل (الصعيدي – السيوي – المجدول – الملكابي)."
        },
        {
            imageSrc: "/images/export/items/image1.png",
            name: "القهوة",
            description: "تقوم شركة “أبوعوف” بإنتاج أصناف مختلفة من القهوة لتتناسب مع جميع الأذواق منها: القهوة التركي – القهوة الفرنساوي – إسبريسو – القهوة العربي – قهوة نواة التمر . … وغيرها) و قد مكن تنوع القهوة إلى جانب تميز المذاق و النكهة بجميع الأصناف، شركة “أبو عوف” من اكتساح مجموعة من الأسواق، كل هذا بفضل تجربة الشركة الفريدة والمتميزة في مجال إنتاج القهوة و اهتمامها بالجودة، شركة أبو عوف تقوم دائما بتطوير وتحديث التقنيات الخاصة بها."
        },
        {
            imageSrc: "/images/export/items/image2.png",
            name: "البريتزل",
            description: "البريتزل من المقرمشات التى اكتسبت رواجا كبيرا فى مختلف الأسواق الخارجية، وذلك لأنه منتج صحي يتناسب مع جميع الأعمار كما أنه يقدم بنكهات مختلفة تتناسب مع جميع الأذواق. البريتزل الذي تقدمه شركة “أبو عوف” لذيذ لأنه مصنوع من عجينة مميزة و بطريقة فريدة. وذلك بفضل الوصفات الخاصة و المميزة. كل هذا ساهم في انتشاره بسرعة كبيرة في الأسواق و تزايد الطلب على هذا المنتج."
        },
        {
            imageSrc: "/images/export/items/image.png",
            name: "التمور المصرية",
            description: "تتميز التمور المصرية بسمعة طيبة وجودة مميزة وسعر تنافسي يجعلها من أولويات مستوردي التمور لزيادة القدرة التنافسية للتمر المصري، استعانت “أبوعوف” بأحدث خطوط الغسيل والتجفيف وتم شراء خط تعقيم للتمر هو الأول من نوعه والأوحد في مصر مما أعطى تمور أبوعوف ميزة إضافية حيث يعتبر هذا الخط بمثابة صمام أمان ضد حدوث أي أضرار مستقبلية للتمر و منحه صلاحية أكبر. الشركة تصدر مختلف أصناف التمور المصرية مثل (الصعيدي – السيوي – المجدول – الملكابي)."
        },

    ];
    const breadcrumbs = {
        pages: [
            { name: t('home.name'), href: '/' },
            { name: t('export.name'), href: '#' },
        ]
    }

    return (

        <section className=" w-full">
            <div className=" bg-green-300 pt-4 md:pb-16 pb-12">
                <div className="details container mx-auto md:px-24 px-4">
                    <Breadcrumbs breadcrumbs={breadcrumbs.pages} className="pb-4 " />
                </div>
                <div className="flex md:mb-16 mb-6 md:flex-row flex-col">
                    <div className="md:w-1/2 w-full">
                        <img src="/images/export/image13.png" alt="" className="w-full" />
                    </div>
                    <div className=" bg-green-500 md:w-1/2 w-full md:p-12 py-6 px-4 flex flex-col justify-center">
                        <div className=" md:w-[700px] w-full flex flex-col justify-center">
                            <span className=" text-gray-50 md:text-xl font-semibold">{t('export.name')}</span>
                            <h1 className="md:py-6 py-3 text-white text-xl md:text-5xl">ما بين أسواق أوروبا، آسيا، أمريكا و الوطن العربي</h1>
                            <p className=" text-[#3C926F] md:text-xl font-semibold">اتجهت شركة "أبوعوف" للتصدير إلى الأسواق العالمية، ما بين الأسواق الأوروبية والأسيوية والأمريكية بالإضافة إلى الأسواق العربية. اهتمت الشركة بمراعاة متطلبات كل سوق على حدة و تلبية احتياجات العملاء، و ذلك بالتواصل المستمر مع الأسواق الخارجية والتواجد بالمعارض العالمية. تمكنت شركة "أبوعوف" من الانتشار في الأسواق الخارجية والتي تضم مختلف الدول. وتسعى شركة "أبوعوف" للتوسع في باقي الأسواق.</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto md:px-0 px-4">
                    <h3 className=" text-green-400 md:text-5xl text-xl font-bold">نسعى للتوسع في الأسواق العالمية</h3>
                    <div className="flex flex-wrap md:gap-x-6 gap-x-3 md:gap-y-12 gap-y-3 md:mt-12 mt-6">
                        {cities.map((cite, index) => (
                            <div className=" bg-white md:p-9 p-3 rounded-3xl md:w-[230px] w-[calc(50%-12px)] text-center flex flex-col justify-center" style={{ boxShadow: ' 0px 20px 66px rgba(0, 0, 0, 0.2)' }}>
                                <img src={cite.imageSrc} alt="" className=" md:h-24 h-9 mx-auto" />
                                <p className=" md:text-2xl text-base text-gray-50 font-semibold mt-3">
                                    {cite.name}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
            <div className=" md:mt-16 mt-6 mb-24 container mx-auto md:px-0 px-4">
                <h3 className=" text-green-400 md:text-5xl text-xl font-bold">نصّدر الأصناف الأكثر طلباً في الأسواق العالمية</h3>
                <div className="flex flex-wrap md:gap-x-6 gap-x-0 md:gap-y-12 gap-y-4 md:mt-12 mt-6">
                    {items.map((item, index) => (
                        <div className=" bg-green-300 rounded-3xl md:w-666 w-full overflow-hidden" >
                            <img src={item.imageSrc} alt="" className=" w-full mx-auto" />
                            <div className=" md:p-8 p-4">
                                <p className=" md:text-2xl text-base font-bold ">
                                    {item.name}
                                </p>
                                <div className=" md:text-base text-sm text-gray-50 font-semibold mt-2">
                                    {item.description}
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}
