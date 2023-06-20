import Datepicker from "react-tailwindcss-datepicker";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function TimeSlot({ formData, handleChange, errors }: any) {
    const { t, i18n } = useTranslation();
    const [dateValue, setValue] = useState({
        startDate: '',
        endDate: null
    });
    const [selectedOption, setSelectedOption] = useState("deliver_today");
    const handleValueChange = (newValue: any) => {
        setValue(newValue);
        setSelectedOption(newValue.startDate);
        // setSelectedOption("deliver_date");
        handleChange({
            target: {
                name: "order_date",
                value: newValue.startDate,
            },
        });
    }
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        handleChange(event);
    };
    useEffect(() => {
        setTimeout(() => {
            handleChange({
                target: {
                    name: "order_date",
                    value: selectedOption,
                },
            });
        }, 10);
    }, [handleChange]);

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const isDatePickerDisabled = selectedOption === "deliver_today";
    return (
        <div>
            <ul className="grid w-full gap-6 md:grid-cols-2">
                <li className="relative">
                    {/* <input type="radio" id="deliver_today" name="order_date" value="deliver_today" className="hidden peer" defaultChecked={true} onChange={handleChange} /> */}
                    <input
                        type="radio"
                        id="deliver_today"
                        name="order_date"
                        value="deliver_today"
                        className="hidden peer absolute w-full h-full opacity-0 cursor-pointer"
                        defaultChecked={selectedOption === "deliver_today"}
                        onChange={handleRadioChange}
                    />
                    <label htmlFor="deliver_today" className="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white  border-gray-400 rounded-[20px] cursor-pointer peer-checked:border-green-200 border-2 peer-checked:border-[3px] hover:border-green-200 ">
                        <div className="block">
                            <div className="w-full text-xl font-semibold">{t('checkout.today')}</div>
                            <div className="w-full">{t('checkout.within_60_min')}</div>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41418 11.272C7.33297 11.3494 7.26833 11.4425 7.22417 11.5456C7.18 11.6487 7.15723 11.7598 7.15723 11.872C7.15723 11.9842 7.18 12.0952 7.22417 12.1983C7.26833 12.3015 7.33297 12.3946 7.41418 12.472L15.9852 21.043L17.1852 19.843L9.21418 11.872L17.1852 3.89997L15.9852 2.69997L7.41418 11.272Z" fill="black" />
                        </svg>
                    </label>
                </li>
                <li className="relative">
                    {/* <input type="radio" id="deliver_date" name="order_date" value={dateValue.startDate} className="hidden peer" onChange={handleChange} /> */}
                    <input
                        type="radio"
                        id="deliver_date"
                        name="order_date"
                        value={dateValue.startDate}
                        className="hidden peer absolute w-full h-full opacity-0 cursor-pointer"
                        defaultChecked={selectedOption === ""}
                        onChange={handleRadioChange}
                    />
                    <label htmlFor="deliver_date" className="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-gray-200 rounded-[20px] cursor-pointer peer-checked:border-green-200 border-2 peer-checked:border-[3px] hover:border-green-200 ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2861 6.85631V8.57031H18.0001V6.85631H20.5711V18.8563H3.43011V6.85631H6.00011V8.57031H7.71411V6.85631H16.2861ZM2.57611 5.14231H6.00011V2.57031H7.71411V5.14231H16.2861V2.57031H18.0001V5.14231H21.4241C21.9001 5.14231 22.2861 5.52831 22.2861 6.00331V19.7103C22.2861 19.8235 22.2638 19.9355 22.2205 20.04C22.1771 20.1446 22.1136 20.2395 22.0336 20.3195C21.9535 20.3994 21.8585 20.4628 21.7539 20.5061C21.6493 20.5493 21.5373 20.5714 21.4241 20.5713H2.57611C2.46296 20.5714 2.35089 20.5493 2.24631 20.5061C2.14174 20.4628 2.0467 20.3994 1.96665 20.3195C1.88659 20.2395 1.82308 20.1446 1.77975 20.04C1.73641 19.9355 1.71411 19.8235 1.71411 19.7103V6.00331C1.71411 5.52731 2.10011 5.14231 2.57611 5.14231ZM17.1431 16.7133C17.3149 16.7181 17.486 16.6884 17.6461 16.626C17.8063 16.5635 17.9523 16.4696 18.0755 16.3497C18.1988 16.2299 18.2967 16.0866 18.3636 15.9282C18.4305 15.7699 18.465 15.5997 18.465 15.4278C18.465 15.2559 18.4305 15.0858 18.3636 14.9274C18.2967 14.7691 18.1988 14.6257 18.0755 14.5059C17.9523 14.386 17.8063 14.2921 17.6461 14.2297C17.486 14.1672 17.3149 14.1375 17.1431 14.1423C16.8084 14.1516 16.4905 14.2912 16.257 14.5312C16.0236 14.7713 15.893 15.093 15.893 15.4278C15.893 15.7627 16.0236 16.0843 16.257 16.3244C16.4905 16.5644 16.8084 16.704 17.1431 16.7133Z" fill="black" />
                        </svg>

                        <div className="block">
                            <div className="w-full text-xl font-semibold">{t('checkout.choose_date')}</div>
                            <Datepicker
                                useRange={false}
                                asSingle={true}
                                value={dateValue}
                                onChange={handleValueChange}
                                minDate={tomorrow}
                                disabled={isDatePickerDisabled}
                            />
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41418 11.272C7.33297 11.3494 7.26833 11.4425 7.22417 11.5456C7.18 11.6487 7.15723 11.7598 7.15723 11.872C7.15723 11.9842 7.18 12.0952 7.22417 12.1983C7.26833 12.3015 7.33297 12.3946 7.41418 12.472L15.9852 21.043L17.1852 19.843L9.21418 11.872L17.1852 3.89997L15.9852 2.69997L7.41418 11.272Z" fill="black" />
                        </svg>
                    </label>
                </li>
            </ul>
            {errors.order_date && <p className="mt-1 text-xs text-red-500">{errors.order_date}</p>}
        </div>
    )
}
