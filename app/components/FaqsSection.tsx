import { Tab } from "@headlessui/react";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import TextEllipsis from "./about/TextEllipsis";
import HistorySection from "./about/history";
import ValuesSection from "./about/values";
import ToggleSection from "./about/toggleSection";
import Breadcrumbs from "./Breadcrumbs";
import i18next from "i18next";


interface TabsProps {
    product: any;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const first = [
    {
        title: "سياسة الخصوصية",
        description: "تصف سياسة الخصوصية هذه ('السياسة') كيف يقوم أبو عوف ('أبو عوف' أو 'نحن' أو 'لدينا') بجمع وحماية واستخدام معلومات التعريف الشخصية ('المعلومات الشخصية') أنت ('المستخدم' ، 'أنت' أو 'الخاص بك') على موقع abuauf.com وأي من منتجاته أو خدماته (يُشار إليها إجمالاً بـ 'الموقع' أو 'الخدمات'). كما يصف الخيارات المتاحة لك فيما يتعلق باستخدامنا لمعلوماتك الشخصية وكيف يمكنك الوصول إلى هذه المعلومات وتحديثها. لا تنطبق هذه السياسة على ممارسات الشركات التي لا نملكها أو نتحكم فيها ، أو على الأفراد الذين لا نوظفهم أو نديرهز",
    },
    {
        title: "سياسة الخصوصية",
        description: "تصف سياسة الخصوصية هذه ('السياسة') كيف يقوم أبو عوف ('أبو عوف' أو 'نحن' أو 'لدينا') بجمع وحماية واستخدام معلومات التعريف الشخصية ('المعلومات الشخصية') أنت ('المستخدم' ، 'أنت' أو 'الخاص بك') على موقع abuauf.com وأي من منتجاته أو خدماته (يُشار إليها إجمالاً بـ 'الموقع' أو 'الخدمات'). كما يصف الخيارات المتاحة لك فيما يتعلق باستخدامنا لمعلوماتك الشخصية وكيف يمكنك الوصول إلى هذه المعلومات وتحديثها. لا تنطبق هذه السياسة على ممارسات الشركات التي لا نملكها أو نتحكم فيها ، أو على الأفراد الذين لا نوظفهم أو نديرهز",
    },
    {
        title: "سياسة الخصوصية",
        description: "تصف سياسة الخصوصية هذه ('السياسة') كيف يقوم أبو عوف ('أبو عوف' أو 'نحن' أو 'لدينا') بجمع وحماية واستخدام معلومات التعريف الشخصية ('المعلومات الشخصية') أنت ('المستخدم' ، 'أنت' أو 'الخاص بك') على موقع abuauf.com وأي من منتجاته أو خدماته (يُشار إليها إجمالاً بـ 'الموقع' أو 'الخدمات'). كما يصف الخيارات المتاحة لك فيما يتعلق باستخدامنا لمعلوماتك الشخصية وكيف يمكنك الوصول إلى هذه المعلومات وتحديثها. لا تنطبق هذه السياسة على ممارسات الشركات التي لا نملكها أو نتحكم فيها ، أو على الأفراد الذين لا نوظفهم أو نديرهز",
    },
];
const second = [
    {
        title: "سياسة الخصوصية",
        description: "تصف سياسة الخصوصية هذه ('السياسة') كيف يقوم أبو عوف ('أبو عوف' أو 'نحن' أو 'لدينا') بجمع وحماية واستخدام معلومات التعريف الشخصية ('المعلومات الشخصية') أنت ('المستخدم' ، 'أنت' أو 'الخاص بك') على موقع abuauf.com وأي من منتجاته أو خدماته (يُشار إليها إجمالاً بـ 'الموقع' أو 'الخدمات'). كما يصف الخيارات المتاحة لك فيما يتعلق باستخدامنا لمعلوماتك الشخصية وكيف يمكنك الوصول إلى هذه المعلومات وتحديثها. لا تنطبق هذه السياسة على ممارسات الشركات التي لا نملكها أو نتحكم فيها ، أو على الأفراد الذين لا نوظفهم أو نديرهز",
    },
    {
        title: "سياسة الخصوصية",
        description: "تصف سياسة الخصوصية هذه ('السياسة') كيف يقوم أبو عوف ('أبو عوف' أو 'نحن' أو 'لدينا') بجمع وحماية واستخدام معلومات التعريف الشخصية ('المعلومات الشخصية') أنت ('المستخدم' ، 'أنت' أو 'الخاص بك') على موقع abuauf.com وأي من منتجاته أو خدماته (يُشار إليها إجمالاً بـ 'الموقع' أو 'الخدمات'). كما يصف الخيارات المتاحة لك فيما يتعلق باستخدامنا لمعلوماتك الشخصية وكيف يمكنك الوصول إلى هذه المعلومات وتحديثها. لا تنطبق هذه السياسة على ممارسات الشركات التي لا نملكها أو نتحكم فيها ، أو على الأفراد الذين لا نوظفهم أو نديرهز",
    },
    {
        title: "سياسة الخصوصية",
        description: "تصف سياسة الخصوصية هذه ('السياسة') كيف يقوم أبو عوف ('أبو عوف' أو 'نحن' أو 'لدينا') بجمع وحماية واستخدام معلومات التعريف الشخصية ('المعلومات الشخصية') أنت ('المستخدم' ، 'أنت' أو 'الخاص بك') على موقع abuauf.com وأي من منتجاته أو خدماته (يُشار إليها إجمالاً بـ 'الموقع' أو 'الخدمات'). كما يصف الخيارات المتاحة لك فيما يتعلق باستخدامنا لمعلوماتك الشخصية وكيف يمكنك الوصول إلى هذه المعلومات وتحديثها. لا تنطبق هذه السياسة على ممارسات الشركات التي لا نملكها أو نتحكم فيها ، أو على الأفراد الذين لا نوظفهم أو نديرهز",
    },
];
const third = [
    {
        title: "سياسة الخصوصية",
        description: "تصف سياسة الخصوصية هذه ('السياسة') كيف يقوم أبو عوف ('أبو عوف' أو 'نحن' أو 'لدينا') بجمع وحماية واستخدام معلومات التعريف الشخصية ('المعلومات الشخصية') أنت ('المستخدم' ، 'أنت' أو 'الخاص بك') على موقع abuauf.com وأي من منتجاته أو خدماته (يُشار إليها إجمالاً بـ 'الموقع' أو 'الخدمات'). كما يصف الخيارات المتاحة لك فيما يتعلق باستخدامنا لمعلوماتك الشخصية وكيف يمكنك الوصول إلى هذه المعلومات وتحديثها. لا تنطبق هذه السياسة على ممارسات الشركات التي لا نملكها أو نتحكم فيها ، أو على الأفراد الذين لا نوظفهم أو نديرهز",
    },
    {
        title: "سياسة الخصوصية",
        description: "تصف سياسة الخصوصية هذه ('السياسة') كيف يقوم أبو عوف ('أبو عوف' أو 'نحن' أو 'لدينا') بجمع وحماية واستخدام معلومات التعريف الشخصية ('المعلومات الشخصية') أنت ('المستخدم' ، 'أنت' أو 'الخاص بك') على موقع abuauf.com وأي من منتجاته أو خدماته (يُشار إليها إجمالاً بـ 'الموقع' أو 'الخدمات'). كما يصف الخيارات المتاحة لك فيما يتعلق باستخدامنا لمعلوماتك الشخصية وكيف يمكنك الوصول إلى هذه المعلومات وتحديثها. لا تنطبق هذه السياسة على ممارسات الشركات التي لا نملكها أو نتحكم فيها ، أو على الأفراد الذين لا نوظفهم أو نديرهز",
    },
    {
        title: "سياسة الخصوصية",
        description: "تصف سياسة الخصوصية هذه ('السياسة') كيف يقوم أبو عوف ('أبو عوف' أو 'نحن' أو 'لدينا') بجمع وحماية واستخدام معلومات التعريف الشخصية ('المعلومات الشخصية') أنت ('المستخدم' ، 'أنت' أو 'الخاص بك') على موقع abuauf.com وأي من منتجاته أو خدماته (يُشار إليها إجمالاً بـ 'الموقع' أو 'الخدمات'). كما يصف الخيارات المتاحة لك فيما يتعلق باستخدامنا لمعلوماتك الشخصية وكيف يمكنك الوصول إلى هذه المعلومات وتحديثها. لا تنطبق هذه السياسة على ممارسات الشركات التي لا نملكها أو نتحكم فيها ، أو على الأفراد الذين لا نوظفهم أو نديرهز",
    },
];
export default function FaqsSection() {
    const { t } = useTranslation();
    const breadcrumbs = {
        pages: [
            { name: t('home.name'), href: '/' },
            { name: t('faq.faqs_name'), href: '#' },
        ]
    }

    return (

        <section className=" w-full pb-24">
            <div className="pt-4 md:pb-16 pb-5">
                <div className="details container mx-auto md:px-24 px-4">
                    {/* <span className="hidden line-clamp-3 line-clamp-5 w-2/3"></span> */}
                    <Breadcrumbs breadcrumbs={breadcrumbs.pages} className="pb-4" />
                    <h1 className=" md:text-4xl text-2xl text-black font-bold  pt-2 md:pt-7">{t('faq.faqs_name')}</h1>
                </div>
            </div>
            <div className=" bg-white w-full  ">
                <div className="">
                    <Tab.Group as="div" className="flex flex-col" defaultIndex={0}>
                        <Tab.List className="flex flex-wrap -mb-px space-x-1 border-b border-gray-200 mb-12">
                            <div className="container mx-auto md:px-24 px-4">
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            'md:p-4 p-2 py-2.5 md:text-xl text-sm font-medium leading-5 text-black focus:outline-none bg-transparent border-b-4  transition-colors duration-300',
                                            selected
                                                ? 'border-[#DCC498]'
                                                : ' border-transparent'
                                        )
                                    }
                                >
                                    {i18next.language === "ar" ?
                                        ' الشراء عبر الانترنت  ' : '  Benefits '
                                    }
                                </Tab>
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            'md:p-4 p-2 py-2.5 md:text-xl text-sm font-medium leading-5 text-black focus:outline-none bg-transparent border-b-4  transition-colors duration-300',
                                            selected
                                                ? 'border-[#DCC498]'
                                                : ' border-transparent'
                                        )
                                    }
                                >
                                    {i18next.language === "ar" ?
                                        '  الفروع والاتصال  ' : ' Preservation Method '
                                    }
                                </Tab>
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            'md:p-4 p-2 py-2.5 md:text-xl text-sm font-medium leading-5 text-black focus:outline-none bg-transparent border-b-4  transition-colors duration-300',
                                            selected
                                                ? 'border-[#DCC498]'
                                                : ' border-transparent'
                                        )
                                    }
                                >
                                    {i18next.language === "ar" ?
                                        '   المنتجات والجودة  ' : ' Preservation Method '
                                    }
                                </Tab>
                            </div>

                        </Tab.List>
                        <div className="container mx-auto md:px-24 px-4">
                            <Tab.Panels>
                                <Tab.Panel>
                                    <ul>
                                        {first.map((item, index) => (
                                            <li className=" mb-10">
                                                <h4 className="md:text-2xl font-bold md:pb-6">{item.title} </h4>
                                                <p className=" text-gray-50 md:text-xl font-semibold text-sm">{item.description}</p>
                                            </li>
                                        ))}


                                    </ul>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <ul>
                                        {second.map((item, index) => (
                                            <li className=" mb-10">
                                                <h4 className="md:text-2xl font-bold md:pb-6">{item.title} </h4>
                                                <p className=" text-gray-50 md:text-xl font-semibold text-sm">{item.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <ul>
                                        {third.map((item, index) => (
                                            <li className=" mb-10">
                                                <h4 className="md:text-2xl font-bold md:pb-6 text-base pb-2">{item.title} </h4>
                                                <p className=" text-gray-50 md:text-xl font-semibold text-sm">{item.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </Tab.Panel>
                            </Tab.Panels>
                        </div>

                    </Tab.Group>
                </div>
            </div>
        </section>
    )
}
