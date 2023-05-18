import { useState } from "react";

interface TextEllipsisProps {
    title?: string;
    content?: string;
    width?: any;
    lineClampNumber?: number;
    textAlign?:string;
}

export default function TextEllipsis({ title, content, width = 'w-full', lineClampNumber = 3 , textAlign = 'text-center'}: TextEllipsisProps) {
    const [click, setClick] = useState(false);

    return (
        <div className={`text md:mt-16 mt-6 ${textAlign} md:${width} w-full mx-auto px-1`}>
            {title ?
                <h1 className="text-green-400 md:text-5xl text-xl font-bold">{title}</h1>
                : ""}
            <span className="hidden line-clamp-3 line-clamp-5"></span>
            <p
                className={`md:mt-7 mt-3 md:mb-11 mb-6 text-gray-50 md:text-xl text-sm font-medium leading-6 ${click === true ? "" : `max-h-100 overflow-hidden line-clamp-${lineClampNumber}`
                    }`}
            >
                {content}
            </p>
            <button
                onClick={() => setClick(true)}
                className={`text-green-200 md:text-xl border-b-2 border-solid border-green-200 ${click === true ? "hidden" : ""
                    }`}
            >
                أقرأ المزيد
            </button>
            <button
                onClick={() => setClick(false)}
                className={`text-green-200 md:text-xl border-b-2 border-solid border-green-200 ${click === true ? "" : "hidden"
                    }`}
            >
                أقرأ أقل
            </button>
        </div>
    );
}
