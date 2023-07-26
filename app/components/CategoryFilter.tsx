import { SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { RiCloseCircleFill } from 'react-icons/ri';

export default function CategoryFilter({ catInfo = '' }: any) {
    const { i18n } = useTranslation();
    console.log('get catInfo', catInfo)
    let catSlug = catInfo.slug;
    let catSubs = catInfo.subcategories ? catInfo.subcategories : [];
    let catName = i18n.language === 'ar' ? catInfo.ar_name : catInfo.name;
    const [selectedTab, setSelectedTab] = useState(catSlug);
    const handleTabClick = (tabName: SetStateAction<string>) => {
        setSelectedTab(tabName);
    };
    return (
        <div className="gap-4 flex">
            <div
                className={`px-4 py-2.5 rounded-100 flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer ${selectedTab === catSlug ? 'bg-gray-100' : 'bg-green-300'
                    }`}
                onClick={() => handleTabClick(catName)}
            >
                <div className="justify-end items-center gap-2.5 inline-flex">
                    <div className="flex items-center justify-center gap-1 text-green-200">
                        <div className={`text-xl font-semibold uppercase`}>
                            {catName}
                        </div>
                        {selectedTab === catSlug &&
                            <span><RiCloseCircleFill className="text-xl" /></span>
                        }
                    </div>
                </div>
            </div>
            {catSubs.map((item: any, index: any) => (
                <div
                    key={index}
                    className={`px-4 py-2.5 rounded-100 flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer ${selectedTab === item.name ? 'bg-gray-100' : 'bg-green-300'
                        }`}
                    onClick={() => handleTabClick(item.name)}
                >
                    <div className="justify-end items-center gap-2.5 inline-flex">
                        <div className="flex items-center justify-center gap-1 text-green-200">
                            <div className={`text-xl font-semibold uppercase`}>
                                {i18n.language === 'ar' ? item.ar_name : item.name}
                            </div>
                            {selectedTab === item.name &&
                                <span><RiCloseCircleFill className="text-xl" /></span>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
