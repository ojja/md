import { Outlet } from "@remix-run/react";
import AccountNav from '~/components/account/AccountNav'

export default function index() {
    return (
        <div>
            <div className="relative flex flex-row items-start self-stretch justify-start gap-3 shrink-0">
                <div className="bg-[#edefeb] rounded-[20px] border-solid border-[transparent] border-2 flex flex-row gap-0 items-center justify-center self-stretch flex-1 relative">
                    <div className="relative flex flex-col items-center self-stretch justify-center flex-1 gap-4 p-6">
                        <svg
                            className="relative overflow-visible shrink-0"
                            style={{}}
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.6546 14.014C16.4977 13.4776 17.1914 12.7365 17.671 11.8598C18.1506 10.9831 18.4006 9.9993 18.3976 9C18.3976 5.7 15.6976 3 12.3976 3C9.09759 3 6.39759 5.7 6.39759 9C6.39759 11.1 7.46859 12.943 9.14059 14.014C6.52659 15.257 4.68359 17.914 4.68359 21H6.39759C6.39759 17.7 9.09759 15 12.3976 15C15.6976 15 18.3976 17.7 18.3976 21H20.1116C20.1116 17.914 18.2696 15.257 15.6546 14.014ZM8.11159 9C8.11476 7.86426 8.56734 6.77593 9.37043 5.97284C10.1735 5.16974 11.2618 4.71717 12.3976 4.714C13.5333 4.71717 14.6217 5.16974 15.4248 5.97284C16.2279 6.77593 16.6804 7.86426 16.6836 9C16.6804 10.1357 16.2279 11.2241 15.4248 12.0272C14.6217 12.8303 13.5333 13.2828 12.3976 13.286C11.2618 13.2828 10.1735 12.8303 9.37043 12.0272C8.56734 11.2241 8.11476 10.1357 8.11159 9Z"
                                fill="black"
                            />
                        </svg>

                        <div className="relative flex flex-col items-center self-stretch justify-start gap-0 shrink-0">
                            <div
                                className="text-[#000000] text-center uppercase relative self-stretch"
                                style={{
                                    font: "var(--arabic-heading-20-px, 600 20px/28px 'Baloo Bhaijaan 2', sans-serif)",
                                }}
                            >
                                أنشاء حساب
                            </div>

                            <div
                                className="relative self-stretch text-center text-gray-50"
                                style={{ font: "600 16px/22px 'Baloo Bhaijaan 2', sans-serif" }}
                            >
                                500 Points
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#edefeb] rounded-[20px] border-solid border-[transparent] border-2 flex flex-row gap-0 items-center justify-start self-stretch flex-1 relative">
                    <div className="relative flex flex-col items-center self-stretch justify-center flex-1 gap-4 p-6">
                        <svg
                            className="relative overflow-visible shrink-0"
                            style={{}}
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.77606 4.71387C2.66283 4.71374 2.55068 4.73594 2.44603 4.77922C2.34139 4.82249 2.24631 4.88598 2.16624 4.96605C2.08617 5.04612 2.02268 5.1412 1.97941 5.24584C1.93614 5.35048 1.91393 5.46263 1.91406 5.57587V11.9989C1.91406 12.2359 2.11406 12.4229 2.32906 12.5249C2.46906 12.5909 2.61406 12.6969 2.74606 12.8469C2.87806 12.9979 2.99306 13.1899 3.07406 13.4149C3.15606 13.6399 3.20006 13.8879 3.20006 14.1429C3.20006 14.3969 3.15606 14.6449 3.07406 14.8709C3.00068 15.0785 2.88947 15.2707 2.74606 15.4379C2.61406 15.5879 2.47006 15.6939 2.32906 15.7609C2.12706 15.8569 1.93706 16.0289 1.91606 16.2469H1.91406V18.8529C1.91406 19.3279 2.30006 19.7139 2.77606 19.7139H21.6241C21.7372 19.714 21.8493 19.6918 21.9539 19.6486C22.0584 19.6054 22.1535 19.542 22.2335 19.462C22.3136 19.3821 22.3771 19.2871 22.4204 19.1826C22.4638 19.0781 22.4861 18.966 22.4861 18.8529V5.57587C22.4862 5.46263 22.464 5.35048 22.4207 5.24584C22.3774 5.1412 22.314 5.04612 22.2339 4.96605C22.1538 4.88598 22.0587 4.82249 21.9541 4.77922C21.8494 4.73594 21.7373 4.71374 21.6241 4.71387H2.77606ZM3.62906 16.9559V17.9999H20.7701V6.42887H3.63006V11.3289C3.77506 11.4449 3.91106 11.5749 4.03706 11.7189C4.31506 12.0369 4.53706 12.4149 4.68706 12.8309C4.83706 13.2469 4.91506 13.6929 4.91506 14.1429C4.91506 14.5929 4.83806 15.0389 4.68706 15.4549C4.53706 15.8709 4.31506 16.2489 4.03706 16.5669C3.91337 16.7088 3.77716 16.8393 3.63006 16.9569L3.62906 16.9559ZM18.6291 15.8569H16.0571V14.1429H18.6291V15.8569Z"
                                fill="black"
                            />
                        </svg>

                        <div className="relative flex flex-col items-center self-stretch justify-start gap-0 shrink-0">
                            <div
                                className="text-[#000000] text-center uppercase relative self-stretch"
                                style={{
                                    font: "var(--arabic-heading-20-px, 600 20px/28px 'Baloo Bhaijaan 2', sans-serif)",
                                }}
                            >
                                قم بالشراء
                            </div>

                            <div
                                className="relative self-stretch text-center text-gray-50"
                                style={{ font: "600 16px/22px 'Baloo Bhaijaan 2', sans-serif" }}
                            >
                                10 Points/ 1 EGP
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#edefeb] rounded-[20px] border-solid border-[transparent] border-2 flex flex-row gap-0 items-center justify-start flex-1 relative">
                    <div className="relative flex flex-col items-center self-stretch justify-start flex-1 gap-4 p-6">
                        <svg
                            className="relative overflow-visible shrink-0"
                            style={{}}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.0007 1.71289C10.864 1.71289 9.77381 2.16445 8.97003 2.96823C8.16625 3.77201 7.71469 4.86217 7.71469 5.99889V6.85589H4.29069C4.06234 6.85589 3.84334 6.9466 3.68187 7.10807C3.5204 7.26954 3.42969 7.48854 3.42969 7.71689V19.7129C3.42969 20.3948 3.70056 21.0487 4.18272 21.5309C4.66487 22.013 5.31882 22.2839 6.00069 22.2839H18.0007C18.3383 22.2839 18.6726 22.2174 18.9846 22.0882C19.2965 21.959 19.5799 21.7696 19.8187 21.5309C20.0574 21.2921 20.2468 21.0087 20.376 20.6968C20.5052 20.3848 20.5717 20.0505 20.5717 19.7129V7.71689C20.5717 7.48854 20.481 7.26954 20.3195 7.10807C20.158 6.9466 19.939 6.85589 19.7107 6.85589H16.2867V5.99889C16.2867 4.86217 15.8351 3.77201 15.0313 2.96823C14.2276 2.16445 13.1374 1.71289 12.0007 1.71289ZM14.5717 6.85589V5.99889C14.5717 5.31702 14.3008 4.66307 13.8187 4.18092C13.3365 3.69876 12.6826 3.42789 12.0007 3.42789C11.3188 3.42789 10.6649 3.69876 10.1827 4.18092C9.70056 4.66307 9.42969 5.31702 9.42969 5.99889V6.85589H14.5717ZM7.71469 8.56989H5.14369V19.7129C5.14369 20.1859 5.52769 20.5699 6.00069 20.5699H18.0007C18.228 20.5699 18.446 20.4796 18.6067 20.3189C18.7674 20.1582 18.8577 19.9402 18.8577 19.7129V8.56989H7.71469Z"
                                fill="black"
                            />
                        </svg>

                        <div className="relative flex flex-col items-center self-stretch justify-start gap-0 shrink-0">
                            <div
                                className="text-[#000000] text-center uppercase relative self-stretch"
                                style={{
                                    font: "var(--arabic-heading-16-px, 600 16px/26px 'Baloo Bhaijaan 2', sans-serif)",
                                }}
                            >
                                شارك على وسائل التواصل الاجتماعي (مرة في الشهر)
                            </div>

                            <div
                                className="relative self-stretch text-center text-gray-50"
                                style={{ font: "600 16px/22px 'Baloo Bhaijaan 2', sans-serif" }}
                            >
                                10 Points
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#edefeb] rounded-[20px] border-solid border-[transparent] border-2 flex flex-row gap-0 items-center justify-start self-stretch flex-1 relative">
                    <div className="relative flex flex-col items-center self-stretch justify-center flex-1 gap-4 p-6">
                        <svg
                            className="relative overflow-visible shrink-0"
                            style={{}}
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.2139 7.71381H11.9399V5.99981C11.9399 5.66133 11.8396 5.33042 11.6518 5.04883C11.464 4.76723 11.197 4.54754 10.8845 4.41746C10.572 4.28739 10.228 4.25275 9.89588 4.31792C9.56373 4.38309 9.25831 4.54515 9.01813 4.78365C8.77795 5.02216 8.61377 5.32644 8.54629 5.65813C8.4788 5.98982 8.51104 6.33407 8.63893 6.64746C8.76682 6.96085 8.98464 7.22937 9.26492 7.41914C9.5452 7.60891 9.8754 7.71144 10.2139 7.71381ZM13.6539 7.71381V5.99981C13.6539 5.66133 13.7541 5.33042 13.9419 5.04883C14.1297 4.76723 14.3967 4.54754 14.7092 4.41746C15.0217 4.28739 15.3657 4.25275 15.6979 4.31792C16.03 4.38309 16.3354 4.54515 16.5756 4.78365C16.8158 5.02216 16.98 5.32644 17.0475 5.65813C17.1149 5.98982 17.0827 6.33407 16.9548 6.64746C16.8269 6.96085 16.6091 7.22937 16.3288 7.41914C16.0485 7.60891 15.7184 7.71144 15.3799 7.71381H13.6539ZM18.3379 7.71381C18.7621 6.97739 18.8978 6.10966 18.7185 5.2789C18.5393 4.44813 18.0579 3.71354 17.3678 3.21756C16.6776 2.72159 15.8279 2.49959 14.9833 2.5946C14.1387 2.68962 13.3596 3.09489 12.7969 3.73181C12.2345 3.09365 11.4551 2.68726 10.6099 2.59159C9.76469 2.49592 8.91411 2.7178 8.22335 3.21412C7.53258 3.71044 7.05094 4.44579 6.87196 5.27733C6.69299 6.10887 6.82946 6.97725 7.25488 7.71381H4.65788C4.54472 7.71381 4.43268 7.73612 4.32815 7.77945C4.22363 7.82278 4.12867 7.88629 4.0487 7.96635C3.96874 8.04641 3.90534 8.14144 3.86213 8.24602C3.81892 8.35059 3.79674 8.46266 3.79688 8.57581V12.4238C3.79688 12.8998 4.18288 13.2858 4.65788 13.2858H5.08288V20.5668C5.08288 21.0428 5.46788 21.4288 5.94388 21.4288H19.6499C19.763 21.4288 19.8751 21.4065 19.9796 21.3632C20.0841 21.3198 20.1791 21.2563 20.259 21.1763C20.339 21.0962 20.4024 21.0012 20.4456 20.8966C20.4888 20.792 20.511 20.68 20.5109 20.5668V13.2858H20.9359C21.049 13.2858 21.1611 13.2635 21.2656 13.2202C21.3701 13.1768 21.4651 13.1133 21.545 13.0333C21.625 12.9532 21.6884 12.8582 21.7316 12.7536C21.7748 12.649 21.797 12.537 21.7969 12.4238V8.57581C21.797 8.46266 21.7748 8.35059 21.7316 8.24602C21.6884 8.14144 21.625 8.04641 21.545 7.96635C21.4651 7.88629 21.3701 7.82278 21.2656 7.77945C21.1611 7.73612 21.049 7.71381 20.9359 7.71381H18.3379ZM15.3839 9.42981H20.0829V11.5718H5.51088V9.42981H15.3839ZM6.79688 13.2858H18.7969V19.7138H13.6539V13.2858H11.9399V19.7138H6.79688V13.2858Z"
                                fill="black"
                            />
                        </svg>

                        <div className="relative flex flex-col items-center self-stretch justify-start gap-0 shrink-0">
                            <div
                                className="text-[#000000] text-center uppercase relative self-stretch"
                                style={{
                                    font: "var(--arabic-heading-20-px, 600 20px/28px 'Baloo Bhaijaan 2', sans-serif)",
                                }}
                            >
                                مكافأة عيد الميلاد
                            </div>

                            <div
                                className="relative self-stretch text-center text-gray-50"
                                style={{ font: "600 16px/22px 'Baloo Bhaijaan 2', sans-serif" }}
                            >
                                250 Points
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#edefeb] rounded-[20px] border-solid border-[transparent] border-2 flex flex-row gap-0 items-center justify-start self-stretch flex-1 relative">
                    <div className="relative flex flex-col items-center self-stretch justify-center flex-1 gap-4 p-6">
                        <svg
                            className="relative overflow-visible shrink-0"
                            style={{}}
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.7837 12.3C18.4378 11.8228 18.9693 11.1971 19.3344 10.4744C19.6995 9.75173 19.8877 8.95267 19.8837 8.143C19.8837 5.314 17.5677 3 14.7407 3C13.8379 3.00194 12.9515 3.24031 12.1695 3.69139C11.3875 4.14247 10.7373 4.79051 10.2837 5.571C7.54069 5.657 5.31169 7.929 5.31169 10.714C5.31169 12.429 6.12669 13.929 7.41169 14.871C6.26444 15.4312 5.29818 16.3032 4.62364 17.3872C3.94909 18.4712 3.59353 19.7233 3.59769 21H5.31169C5.31169 18.986 6.51169 17.229 8.18369 16.371C8.82669 16.071 9.51169 15.857 10.2837 15.857H10.4547C13.2837 15.857 15.5977 18.171 15.5977 21H17.3117C17.3117 18.3 15.7687 15.986 13.4977 14.871C14.0657 14.4375 14.5456 13.8996 14.9117 13.286C17.6547 13.371 19.8837 15.643 19.8837 18.429H21.5977C21.5977 15.729 20.0547 13.414 17.7837 12.3ZM9.51169 14.014C8.09769 13.586 7.02769 12.3 7.02769 10.714C7.02769 9.086 8.14169 7.757 9.64169 7.371C9.89869 7.329 10.1557 7.286 10.4557 7.286C10.7987 7.286 11.0987 7.329 11.3987 7.414C12.8557 7.843 13.8847 9.129 13.8847 10.714C13.8847 10.971 13.8417 11.186 13.7987 11.443C13.4557 12.986 12.0847 14.143 10.4557 14.143C10.1127 14.143 9.81269 14.1 9.51269 14.014H9.51169ZM15.5547 11.486C15.5977 11.229 15.5977 10.971 15.5977 10.714C15.5977 8.486 14.1837 6.6 12.1687 5.871C12.4886 5.50412 12.8841 5.21077 13.3281 5.01106C13.772 4.81135 14.2539 4.71002 14.7407 4.714C15.6491 4.7169 16.5195 5.07913 17.1618 5.7216C17.8041 6.36406 18.1661 7.23456 18.1687 8.143C18.1687 9.771 17.0547 11.1 15.5547 11.486Z"
                                fill="black"
                            />
                        </svg>

                        <div className="relative flex flex-col items-center self-stretch justify-start gap-0 shrink-0">
                            <div
                                className="text-[#000000] text-center uppercase relative self-stretch"
                                style={{
                                    font: "var(--arabic-heading-20-px, 600 20px/28px 'Baloo Bhaijaan 2', sans-serif)",
                                }}
                            >
                                إحالة الأصدقاء
                            </div>

                            <div
                                className="relative self-stretch text-center text-gray-50"
                                style={{ font: "600 16px/22px 'Baloo Bhaijaan 2', sans-serif" }}
                            >
                                100 Points
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
