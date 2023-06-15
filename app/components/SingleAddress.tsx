import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { makeAddressDefault, removeAddress } from "~/utils/account";
import { fetchAreas, fetchGovs } from "~/utils/general";
import EditAddress from "./account/EditAddress";
import Popup from "./Popup";


interface Address {
    id: string;
    status: string;
    gov_id: string;
    area_id: string;
    full_address: string;
    apartment_type: string;
    floor: string;
    apartment: string;
}

interface SingleAddressProps {
    address: Address;
    resetAddresses: () => Promise<void>;
    govs: [];
}

export default function SingleAddress({ address, resetAddresses, govs }: SingleAddressProps) {
    const { t, i18n } = useTranslation();
    let [isOpenAdress, setIsOpenAdress] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    function closeModal() {
        setIsOpenAdress(false)
    }

    const handleMakeAddressDefault = async (addressId: any) => {
        try {
            const response = await makeAddressDefault(addressId);
            if (response) {
                setTimeout(() => {
                    resetAddresses();
                }, 1000);
            } else {
                // Address making default failed
                // Handle the failure case
            }
        } catch (error) {
            // Handle any error that occurred during the request
        }
    };

    const handleRemoveAddress = async (addressId: any) => {
        try {
            const response = await removeAddress(addressId);
            if (response) {
                setTimeout(() => {
                    resetAddresses();
                }, 1000);
            } else {
                // Address making default failed
                // Handle the failure case
            }
        } catch (error) {
            // Handle any error that occurred during the request
        }
    };

    function openEdit() {
        setIsOpenAdress(true)
    }

    const {
        id,
        status,
        gov_id,
        area_id,
        full_address,
        apartment_type,
        floor,
        apartment,
    } = address;
    const addressID = status === 'default' ? 'Default Address' : `Address #${id}`;
    const government = govs.find((gov) => gov.id === address.gov_id);
    console.log('government', government)
    const govName = useState(i18n.language === 'ar' ? government?.name_ar : government?.name_en);
    const [areaName, setAreaName] = useState('');
    useEffect(() => {
        const fetchAreasByGovId = async () => {
            if (gov_id) {
                const response = await fetchAreas(gov_id);
                if (response === "Err in payload") {
                    return;
                }
                if (response) {
                    const selectedArea = response.find((area) => area.area_id === area_id);
                    if (selectedArea) {
                        setAreaName(selectedArea.name_en);
                        setIsLoading(false);
                    }
                } else {
                    // Handle the case when fetching the areas fails
                }
            }
        };

        fetchAreasByGovId();
    }, [gov_id]);

    return (
        <div className="relative px-4 py-5 space-y-2 bg-yellow-100 border-2 border-yellow-700" key={i18n.language}>
            <div className="mb-1 text-base font-semibold">{addressID}</div>
            <div className="inline-block mr-5 align-top">
                <label className="text-xs text-gray-700">{t('checkout.city')}</label>
                {isLoading ?
                    <div className="w-20 mt-1 animate-pulse"><div className="h-2 bg-gray-200 rounded-md"></div></div>
                    :
                    <span className="block text-sm font-bold">{i18n.language === 'ar' ? government?.name_ar : government?.name_en}</span>
                }
            </div>
            <div className="inline-block align-top">
                <label className="text-xs text-gray-700">{t('checkout.area')}</label>
                {isLoading ?
                    <div className="w-20 mt-1 animate-pulse"><div className="h-2 bg-gray-200 rounded-md"></div></div>
                    :
                    <span className="block text-sm font-bold">{areaName}</span>
                }
            </div>
            <div className="block">
                <label className="text-xs text-gray-700">{t('checkout.street_name')}</label>
                <span className="block text-sm font-bold">{full_address}</span>
            </div>
            <div className="inline-block mr-5 align-top">
                <label className="text-xs text-gray-700">{t('checkout.building_no')}</label>
                <span className="block text-sm font-bold">MISSING</span>
            </div>
            {apartment_type !== 'villa' ?
                <>
                    <div className="inline-block mr-5 align-top">
                        <label className="text-xs text-gray-700">{t('checkout.floor')}</label>
                        <span className="block text-sm font-bold">{floor}</span>
                    </div>
                    <div className="inline-block mr-5 align-top">
                        <label className="text-xs text-gray-700">{t('checkout.apartment')}</label>
                        <span className="block text-sm font-bold">{apartment}</span>
                    </div>
                </>
                :
                <div className="inline-block align-top ">
                    <label className="text-xs text-gray-700">{t('checkout.property_type')}</label>
                    <span className="block text-sm font-bold capitalize">{apartment_type}</span>
                </div>
            }
            {isOpenAdress ? (
                <Popup isOpen={true} close={closeModal}>
                    <EditAddress closeModal={closeModal} address={address} resetAddresses={resetAddresses} />
                </Popup>
            ) : ('')}

            <span className="absolute top-0 !mt-0 cursor-pointer right-1">
                <Menu as="div" className="relative">
                    <Menu.Button className="w-12 h-12">
                        <svg width="23" height="5" viewBox="0 0 23 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto">
                            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(-90 2.5 2.5)" fill="black" />
                            <circle cx="11.5" cy="2.5" r="2.5" transform="rotate(-90 11.5 2.5)" fill="black" />
                            <circle cx="20.5" cy="2.5" r="2.5" transform="rotate(-90 20.5 2.5)" fill="black" />
                        </svg>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 overflow-hidden text-black origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg whitespace-nowrap">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={openEdit}
                                        className={`${active && 'bg-blue-500 text-white'}  w-full block pl-3 pr-7 py-2`}
                                    >
                                        Edit Address
                                    </button>
                                )}
                            </Menu.Item>
                            {status === 'default' ?
                                ''
                                :
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() => handleMakeAddressDefault(id)}
                                            className={`${active && 'bg-blue-500 text-white'}  w-full block pl-3 pr-7 py-2`}
                                        >
                                            Make Default
                                        </button>
                                    )}
                                </Menu.Item>
                            }
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleRemoveAddress(id)}
                                        className={`${active && 'bg-red-100'} w-full block pl-3 pr-7 py-2 text-red-500 text-left`}
                                    >
                                        <span>Remove</span>
                                    </button>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </span>
        </div>
    )
}
