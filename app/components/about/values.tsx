import { Link } from "@remix-run/react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';


export default function ValuesSection() {
    const { t } = useTranslation();

    const values = [
        {
            title: "الثقة والولاء هم سلاحنا للنجاح",
            description: "فريقنا لديه التزام عميق بالتميز والتفاني في تقديم مجموعة متنوعة من الخدمات؛ فرضاء العملاء هو ركيزة نجاحنا، حيث يتأكد فريقنا من أخذ كل التعليقات بعين الاعتبار ويعمل عليها لمواصلة بناء وتجديد اسم علامتنا التجارية باستمرار واكتساب ثقة وولاء عملائنا.",
        },
        {
            title: "الصدق والنزاهة والالتزام قيَم أساسية نتمسك بها",
            description: "نستثمر باستمرار مبالغ كبيرة من رأس مال الشركة حتى نتمكن من الاستمرار في تقديم خدمة متميزة وجودة فائقة ودعم عملاء احترافي، كما نستثمر في المعرفة المهارات جديدة لتطوير منتجاتنا وعمليات التحميص. حيث نسعى جاهدين للبقاء دائمًا على مستوى توقعات عملائنا.",
        },
        {
            title: "مسؤولية الريادة بأسواق المنتجات العضوية",
            description: "مسؤولياتنا كشركة تقع على رأس قائمة أولوياتنا، فجزء من مسؤولياتنا هو جعل مهمتنا هي توفير قهوة ومكسرات ومنتجات غذائية صحية ذات جودة عالية مع تأثير بيئي منخفض. من الفكرة وحتى الاستهلاك ننقل الحب والرعاية إلى منتجاتنا وخدماتنا، فنعتني بالطبيعة والبيئة وجميع الأشخاص المشاركين في تقديم منتجاتنا إليك.",
        },
        {
            title: "روح العائلة بالفريق",
            description: "نخلق بيئة عمل صحية تدفع كل عضو للتميز في منطقته؛ حيث نعمل كعائلة على ابتكار وتحسين وتقديم أفضل جودة وخدمة في السوق.",
        },
    ]
    return (


        <div className="bg-green-300 md:pt-20 pb-24 pt-6">
            <div className="details container mx-auto md:px-24 px-4">
                <h3 className=" font-bold text-xl md:text-5xl text-green-400 leading-none">قيم أبو عوف</h3>
                <div className="list flex flex-wrap md:mt-11 mt-6 md:gap-x-12 gap-x-0 md:gap-y-12 gap-y-3">
                    {values.map((value, index) => (
                        <div className={`single bg-white shadow-lg drop-shadow-2xl rounded-xl md:py-8 md:px-8 md:w-46 w-full shadow-gray-200 p-5`}>
                            <h4 className="text-green-400 md:text-2xl mb-3 font-bold after:bg-primary-700">{value.title}</h4>
                            <p className=" text-gray-50 md:text-xl">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
