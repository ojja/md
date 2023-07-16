import { Link } from "@remix-run/react";
import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import CampaignMonitorForm from '~/components/footer/companinMonitor';



export default function TopFooter() {
    const { t } = useTranslation('footer');
    return (

        <div className=" bg-of-white-100">
            <div className="container flex justify-between m-auto md:py-16 md:flex-row flex-col-reverse px-5 py-9">
                <div className=" md:w-1/3 w-full md:mt-0 mt-5">
                    <h4 className=" text-green-500 text-2xl md:text-4xl font-bold">{t('faqs_title')}</h4>
                    <p className=" text-green-600 md:text-xl text-sm font-semibold mb-6 mt-2">{t('faqs_para')}</p>
                    <Link to="" className=" bg-green-200 text-white py-4 px-10 rounded-100 block w-fit cursor-pointer hover:bg-green-400 ">{t('faqs_button')} </Link>
                </div>
                <div className=" md:w-3/5 w-full ">
                    <h4 className=" text-green-500 text-2xl md:text-4xl font-bold">{t('subscription_title')}</h4>
                    <p className=" text-green-600 md:text-xl text-sm font-semibold mb-6 mt-2">{t('subscription_para')}</p>
                    <CampaignMonitorForm />
                </div>
            </div>
        </div>

    )
}
