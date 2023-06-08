import { Link } from "@remix-run/react";
import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from 'react-i18next';


export default function ValuesSection() {
    const { t } = useTranslation();

    const values = [
        {
            title: "الصدق والنزاهة والالتزام قيَم أساسية نتمسك بها",
            description: "نستثمر باستمرار مبالغ كبيرة من رأس مال الشركة حتى نتمكن من الاستمرار في تقديم خدمة متميزة وجودة فائقة ودعم عملاء احترافي، كما نستثمر في المعرفة المهارات جديدة لتطوير منتجاتنا وعمليات التحميص. حيث نسعى جاهدين للبقاء دائمًا على مستوى توقعات عملائنا.",
            title_en: "Honesty, integrity and commitment are core values we adhere to",
            description_en: "We are constantly investing large amounts of the company's capital so that we can continue to provide outstanding service, superior quality and professional customer support, and we are also investing in new knowledge and skills to develop our products and roasting processes. We strive to always live up to our customers' expectations."
        },
        {
            title: "الثقة والولاء هم سلاحنا للنجاح",
            description: "فريقنا لديه التزام عميق بالتميز والتفاني في تقديم مجموعة متنوعة من الخدمات؛ فرضاء العملاء هو ركيزة نجاحنا، حيث يتأكد فريقنا من أخذ كل التعليقات بعين الاعتبار ويعمل عليها لمواصلة بناء وتجديد اسم علامتنا التجارية باستمرار واكتساب ثقة وولاء عملائنا.",
            title_en: "Trust and loyalty are our weapons for success",
            description_en: "Our team has a deep commitment to excellence and dedication to providing a variety of services; Customer satisfaction is the cornerstone of our success, as our team makes sure that every feedback is taken into account and works on it to continue building and constantly renewing our brand name and gaining the trust and loyalty of our customers."
        },
        {
            title: "مسؤولية الريادة بأسواق المنتجات العضوية",
            description: "مسؤولياتنا كشركة تقع على رأس قائمة أولوياتنا، فجزء من مسؤولياتنا هو جعل مهمتنا هي توفير قهوة ومكسرات ومنتجات غذائية صحية ذات جودة عالية مع تأثير بيئي منخفض. من الفكرة وحتى الاستهلاك ننقل الحب والرعاية إلى منتجاتنا وخدماتنا، فنعتني بالطبيعة والبيئة وجميع الأشخاص المشاركين في تقديم منتجاتنا إليك.",
            title_en: "Responsibility of leadership in the markets of organic products",
            description_en: "Our responsibilities as a company are at the top of our list of priorities, part of our responsibilities is to make it our mission to provide high quality coffee, nuts and healthy food products with low environmental impact. From conception to consumption, we pass love and care into our products and services, caring for nature, the environment and all the people involved in bringing our products to you."
        },
        {
            title: "روح العائلة بالفريق",
            description: "نخلق بيئة عمل صحية تدفع كل عضو للتميز في منطقته؛ حيث نعمل كعائلة على ابتكار وتحسين وتقديم أفضل جودة وخدمة في السوق.",
            title_en: "Family team spirit",
            description_en: "We create a healthy work environment that encourages each member to excel in his area; Where we work as a family to innovate, improve and provide the best quality and service in the market."
        },
    ]
    return (
        <div className="bg-green-300 md:pt-20 pb-24 pt-6">
            <div className="details container mx-auto md:px-24 px-4">
                <h3 className=" font-bold text-xl md:text-5xl text-green-400 leading-none"> {t('about.value_title')}</h3>
                <div className="list flex flex-wrap md:mt-11 mt-6 md:gap-x-12 gap-x-0 md:gap-y-12 gap-y-3">
                    {values.map((value, index) => (
                        <div className={`single bg-white shadow-lg drop-shadow-2xl rounded-xl md:py-8 md:px-8 md:w-46 w-full shadow-gray-200 p-5`}>
                            <h4 className="text-green-400 md:text-2xl mb-3 font-bold after:bg-primary-700">
                                {i18next.language === "ar" ?
                                    value.title : value.title_en
                                }
                            </h4>
                            <p className=" text-gray-50 md:text-xl">
                                {i18next.language === "ar" ?
                                    value.description : value.description_en
                                }
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}