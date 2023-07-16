import type { MetaFunction } from "@remix-run/node";
import PrivacySection from "~/components/corporate/PrivacySection";
import { Site_Title } from "~/config";
import i18n from 'i18next';
import ContactSection from "~/components/corporate/ContactSection";

export default function Contact() {
    return (
        <div className="flex flex-col items-center space-y-2">
            <ContactSection/>
        </div>
    );
}
export const meta: MetaFunction = () => {
    return {
        title: `${i18n.language === "en" ? 'Privacy Policy' : 'سياسة الخصوصية'} - ${Site_Title}`
    }
}