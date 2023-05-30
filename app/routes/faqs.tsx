import type { MetaFunction } from "@remix-run/node";
import FAQsSection from "~/components/FaqsSection";
import { Site_Title } from "~/config";

export default function FAQs() {


    return (
        <div className="flex flex-col items-center space-y-2">
            <FAQsSection />
        </div>
    );
}
export const meta: MetaFunction = () => {
    return {
        title: `FAQs Page - ${Site_Title}`
    }
}