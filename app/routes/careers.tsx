import type { MetaFunction } from "@remix-run/node";
import { Site_Title } from "~/config";


export default function Careers() {
    return (
        <>
            <div className="flex flex-col items-center space-y-2">
                <h1>Careers</h1>
            </div>
        </>
    )

}
export const meta: MetaFunction = () => {
    return {
        title: `Careers - ${Site_Title}`
    }
}
