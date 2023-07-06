import type { MetaFunction } from "@remix-run/node";
import ExportSection from "~/components/ExportSection";
import { Site_Title } from "~/config";

export default function Faqs() {


    return (
        <div className="flex flex-col items-center space-y-2">
            <ExportSection />
        </div>
    );
}
export const meta: MetaFunction = () => {
    return {
        title: `Export Page - ${Site_Title}`
    }
}