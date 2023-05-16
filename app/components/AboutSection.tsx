import { Link } from "@remix-run/react";
import { useTranslation } from 'react-i18next';


export default function AboutSection() {
    const { t } = useTranslation();
    return (
        // <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        //     <div className="container mx-auto">
        //         <div className="flex flex-wrap items-center justify-between -mx-4">
        //             <div className="w-full px-4 lg:w-6/12">
        //                 <div className="flex items-center -mx-3 sm:-mx-4">
        //                     <div className="w-full px-3 sm:px-4 xl:w-1/2">
        //                         <div className="py-3 sm:py-4">
        //                             <img
        //                                 src="/images/about/image-1.jpg"
        //                                 alt=""
        //                                 className="w-full rounded-2xl"
        //                             />
        //                         </div>
        //                         <div className="py-3 sm:py-4">
        //                             <img
        //                                 src="/images/about/image-2.jpg"
        //                                 alt=""
        //                                 className="w-full rounded-2xl"
        //                             />
        //                         </div>
        //                     </div>
        //                     <div className="w-full px-3 sm:px-4 xl:w-1/2">
        //                         <div className="relative z-10 my-4">
        //                             <img
        //                                 src="/images/about/image-3.jpg"
        //                                 alt=""
        //                                 className="w-full rounded-2xl"
        //                             />
        //                             <span className="absolute -right-7 -bottom-7 z-[-1]">
        //                                 <svg
        //                                     width="134"
        //                                     height="106"
        //                                     viewBox="0 0 134 106"
        //                                     fill="none"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                 >
        //                                     <circle
        //                                         cx="1.66667"
        //                                         cy="104"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 1.66667 104)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="16.3333"
        //                                         cy="104"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 16.3333 104)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="31"
        //                                         cy="104"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 31 104)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="45.6667"
        //                                         cy="104"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 45.6667 104)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="60.3334"
        //                                         cy="104"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 60.3334 104)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="88.6667"
        //                                         cy="104"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 88.6667 104)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="117.667"
        //                                         cy="104"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 117.667 104)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="74.6667"
        //                                         cy="104"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 74.6667 104)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="103"
        //                                         cy="104"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 103 104)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="132"
        //                                         cy="104"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 132 104)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="1.66667"
        //                                         cy="89.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 1.66667 89.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="16.3333"
        //                                         cy="89.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 16.3333 89.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="31"
        //                                         cy="89.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 31 89.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="45.6667"
        //                                         cy="89.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 45.6667 89.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="60.3333"
        //                                         cy="89.3338"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 60.3333 89.3338)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="88.6667"
        //                                         cy="89.3338"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 88.6667 89.3338)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="117.667"
        //                                         cy="89.3338"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 117.667 89.3338)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="74.6667"
        //                                         cy="89.3338"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 74.6667 89.3338)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="103"
        //                                         cy="89.3338"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 103 89.3338)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="132"
        //                                         cy="89.3338"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 132 89.3338)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="1.66667"
        //                                         cy="74.6673"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 1.66667 74.6673)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="1.66667"
        //                                         cy="31.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 1.66667 31.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="16.3333"
        //                                         cy="74.6668"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 16.3333 74.6668)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="16.3333"
        //                                         cy="31.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 16.3333 31.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="31"
        //                                         cy="74.6668"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 31 74.6668)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="31"
        //                                         cy="31.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 31 31.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="45.6667"
        //                                         cy="74.6668"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 45.6667 74.6668)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="45.6667"
        //                                         cy="31.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 45.6667 31.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="60.3333"
        //                                         cy="74.6668"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 60.3333 74.6668)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="60.3333"
        //                                         cy="30.9998"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 60.3333 30.9998)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="88.6667"
        //                                         cy="74.6668"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 88.6667 74.6668)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="88.6667"
        //                                         cy="30.9998"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 88.6667 30.9998)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="117.667"
        //                                         cy="74.6668"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 117.667 74.6668)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="117.667"
        //                                         cy="30.9998"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 117.667 30.9998)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="74.6667"
        //                                         cy="74.6668"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 74.6667 74.6668)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="74.6667"
        //                                         cy="30.9998"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 74.6667 30.9998)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="103"
        //                                         cy="74.6668"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 103 74.6668)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="103"
        //                                         cy="30.9998"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 103 30.9998)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="132"
        //                                         cy="74.6668"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 132 74.6668)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="132"
        //                                         cy="30.9998"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 132 30.9998)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="1.66667"
        //                                         cy="60.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 1.66667 60.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="1.66667"
        //                                         cy="16.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 1.66667 16.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="16.3333"
        //                                         cy="60.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 16.3333 60.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="16.3333"
        //                                         cy="16.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 16.3333 16.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="31"
        //                                         cy="60.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 31 60.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="31"
        //                                         cy="16.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 31 16.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="45.6667"
        //                                         cy="60.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 45.6667 60.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="45.6667"
        //                                         cy="16.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 45.6667 16.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="60.3333"
        //                                         cy="60.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 60.3333 60.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="60.3333"
        //                                         cy="16.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 60.3333 16.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="88.6667"
        //                                         cy="60.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 88.6667 60.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="88.6667"
        //                                         cy="16.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 88.6667 16.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="117.667"
        //                                         cy="60.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 117.667 60.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="117.667"
        //                                         cy="16.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 117.667 16.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="74.6667"
        //                                         cy="60.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 74.6667 60.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="74.6667"
        //                                         cy="16.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 74.6667 16.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="103"
        //                                         cy="60.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 103 60.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="103"
        //                                         cy="16.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 103 16.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="132"
        //                                         cy="60.0003"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 132 60.0003)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="132"
        //                                         cy="16.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 132 16.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="1.66667"
        //                                         cy="45.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 1.66667 45.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="1.66667"
        //                                         cy="1.66683"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 1.66667 1.66683)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="16.3333"
        //                                         cy="45.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 16.3333 45.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="16.3333"
        //                                         cy="1.66683"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 16.3333 1.66683)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="31"
        //                                         cy="45.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 31 45.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="31"
        //                                         cy="1.66683"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 31 1.66683)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="45.6667"
        //                                         cy="45.3333"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 45.6667 45.3333)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="45.6667"
        //                                         cy="1.66683"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 45.6667 1.66683)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="60.3333"
        //                                         cy="45.3338"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 60.3333 45.3338)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="60.3333"
        //                                         cy="1.66683"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 60.3333 1.66683)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="88.6667"
        //                                         cy="45.3338"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 88.6667 45.3338)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="88.6667"
        //                                         cy="1.66683"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 88.6667 1.66683)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="117.667"
        //                                         cy="45.3338"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 117.667 45.3338)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="117.667"
        //                                         cy="1.66683"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 117.667 1.66683)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="74.6667"
        //                                         cy="45.3338"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 74.6667 45.3338)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="74.6667"
        //                                         cy="1.66683"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 74.6667 1.66683)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="103"
        //                                         cy="45.3338"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 103 45.3338)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="103"
        //                                         cy="1.66683"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 103 1.66683)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="132"
        //                                         cy="45.3338"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 132 45.3338)"
        //                                         fill="#3056D3"
        //                                     />
        //                                     <circle
        //                                         cx="132"
        //                                         cy="1.66683"
        //                                         r="1.66667"
        //                                         transform="rotate(-90 132 1.66683)"
        //                                         fill="#3056D3"
        //                                     />
        //                                 </svg>
        //                             </span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
        //                 <div className="mt-10 lg:mt-0">
        //                     <span className="block mb-2 text-lg font-semibold text-primary-400">
        //                         {t('about.title')}
        //                     </span>
        //                     <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
        //                         Make your customers happy by giving services.
        //                     </h2>
        //                     <p className="mb-8 text-base text-body-color">
        //                         It is a long established fact that a reader will be distracted by
        //                         the readable content of a page when looking at its layout. The point
        //                         of using Lorem Ipsum is that it has a more-or-less.
        //                     </p>
        //                     <p className="mb-12 text-base text-body-color">
        //                         A domain name is one of the first steps to establishing your brand.
        //                         Secure a consistent brand image with a domain name that matches your
        //                         business.
        //                     </p>
        //                     <Link to="/about"
        //                         className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-primary-400 hover:bg-opacity-90 lg:px-8 xl:px-10"
        //                     >
        //                         Get Started
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className=" w-full">
            <div className="details  container p-5 md:p-7 m-auto">
                <div className="text pb-3 md:pd-0">
                    <p className="font-normal text-2xl tracking-wide">
                        About us
                    </p>
                    <h1 className=" md:mt-6 mt-3 md:mb-24 mb-3 text-xl  md:text-6xl font-medium max-w-5xl md:p-3 sm:p-0 pl-0">We’re inspiring growth by creating innovative product experiences that delight consumers.</h1>
                </div>
                <div className="box flex justify-center	md:justify-between flex-col md:flex-row md:items-center items-start">
                    <div className="text md:w-3/5 w-auto">
                        <span className=" text-xs text-gray-400 md:text-xl block pb-2 md:pb-6 ">
                            How We Work
                        </span>
                        <p className=" text-sm md:text-2xl">
                            At Mitch Designs, design is seen as the meeting point of a business’s
                            goals and the customer’s needs. That’s why we put your customer at the center of our design process,
                            acting as their advocates to  design and develop digital products that help you grow, innovate and transform your business.
                        </p>
                    </div>
                    <div className="image md:w-1/3 ml-auto w-auto m-auto mt-4">
                        <img
                            src="/images/about/image-1.jpg"
                            alt=""
                            className="rounded-2xl ml-auto w-full"
                        />
                    </div>
                </div>
                <div className="repeater mt-9">

                    <div className="single-rep flex flex-col md:flex-row md:justify-between">
                        <div className="image md:w-5/12 w-auto">
                            <img
                                src="/images/about/image-37.webp"
                                alt=""
                                className="w-full"
                            />                    </div>

                    </div>

                    <div className="single-rep flex flex-col md:flex-row-reverse md:justify-between md:-mt-52 mt-3 md:items-center">
                        <div className="image md:w-5/12 w-auto">
                            <img
                                src="/images/about/image-38.webp"
                                alt=""
                                className="w-full"
                            />                              </div>
                        <div className="text md:w-2/5 w-auto mt-2">
                            <p className=" text-sm md:text-4xl">Our <strong>drive</strong> is simple.</p>
                            <h3 className=" text-xl md:text-6xl pt-2 pb-2">Innovate or die.</h3>
                            <p className=" text-sm md:text-xl text-gray-500">-Peter Drucker</p></div>

                    </div>

                    <div className="single-rep flex flex-col md:flex-row md:justify-between  md:mt-5 mt-3 items-center">
                        <div className="image md:w-5/12 w-auto">
                            <img
                                src="/images/about/image-39.webp"
                                alt=""
                                className="w-full"
                            />
                        </div>
                        <div className="text md:w-2/5 w-auto mt-2">
                            <p className=" md:text-4xl"><b>Continuous learning and improvement are essential to our success.</b></p>
                            <p className="md:text-4xl md:mt-5 font-light md:leading-10">We are committed to staying up-to-date with the latest trends and technologies.</p></div>

                    </div>

                    <div className="single-rep flex flex-col md:flex-row-reverse md:justify-between  md:mt-5 mt-3 items-center">
                        <div className="image md:w-5/12 w-auto">
                            <img
                                src="/images/about/image-36.webp"
                                alt=""
                                className="w-full"
                            />                              </div>
                        <div className="text md:w-2/5 w-auto mt-2">
                            <p className="md:text-4xl text-sm">We are passionate about design, and it shows in the quality of our products and services.</p>
                            <Link to='/' className=" bg-black text-white p-2 mt-3 block w-fit hover:bg-white hover:text-black transition-all duration-300"> HOMEPAGE</Link>
                            </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
