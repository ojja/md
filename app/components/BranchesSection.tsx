import { Link } from "@remix-run/react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import TextEllipsis from "./about/TextEllipsis";
import HistorySection from "./about/history";
import ValuesSection from "./about/values";
import ToggleSection from "./about/toggleSection";
import Breadcrumbs from "./Breadcrumbs";
import i18next from "i18next";
import LocationTabs from "./branches/filtersection";


export default function BranchesSection() {
    const { t } = useTranslation();
    const breadcrumbs = {
        pages: [
            { name: t('home.name'), href: '/' },
            { name: 'الفروع', href: '#' },
        ]
    }
    return (

        <section className=" w-full">
            <div className="pt-4 md:pb-16 pb-5">
                <div className="details container mx-auto md:px-24 px-4">
                    {/* <span className="hidden line-clamp-3 line-clamp-5 w-2/3"></span> */}
                    <Breadcrumbs breadcrumbs={breadcrumbs.pages} className="pb-4" />
                    <h1 className=" md:text-4xl text-2xl text-black font-bold  pt-2 md:pt-7">الفروع</h1>
                </div>
            </div>
           <LocationTabs />

        </section>
    )
}
