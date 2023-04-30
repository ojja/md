import { Outlet } from "@remix-run/react";
import AccountNav from '~/components/account/AccountNav'

export default function Account() {
    return (
        <div>
            <section className="bg-[#F4F7FF] py-20 lg:py-[50px]">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex">
                        <div className="flex flex-col">
                            <AccountNav/>
                        </div>
                        <div className="w-full p-4 ml-10">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
