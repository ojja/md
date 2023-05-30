import { Link } from "@remix-run/react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import Example from "./faq/menuSection";
import Breadcrumbs from "./Breadcrumbs";
import i18next from "i18next";


export default function FAQsSection() {
    const { t } = useTranslation();
    const breadcrumbs = {
        pages: [
            { name: t('home.name'), href: '/' },
            { name: t('faq.faqs_name'), href: '#' },
        ]
    }
    return (

        <section className=" w-full">
            <div className="container m-auto pt-4 pb-16">
                <Breadcrumbs breadcrumbs={breadcrumbs.pages} className="md:mb-7 mb-2" />
                <h1 className=" font-bold text-2xl md:text-4xl">{t('faq.faqs_title')}</h1>
                <Example/>
            </div>

        </section>
    )
}
