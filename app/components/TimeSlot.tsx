import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

export default function TimeSlot() {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
    return (
        <div>
            <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                    <input type="radio" id="deliver_today" name="hosting" value="deliver_today" className="hidden peer" required defaultChecked/>
                    <label htmlFor="deliver_today" className="inline-flex items-center justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                        <div className="block">
                            <div className="w-full text-lg font-semibold">Today</div>
                            <div className="w-full">Within 60min</div>
                        </div>
                        <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </label>
                </li>
                <li>
                    <input type="radio" id="deliver_date" name="hosting" value="deliver_date" className="hidden peer" />
                    <label htmlFor="deliver_date" className="inline-flex items-center justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                        <div className="block">
                            <div className="w-full text-lg font-semibold">Specific Date</div>
                            <Datepicker
                                useRange={false}
                                asSingle={true}
                                value={value}
                                onChange={handleValueChange}
                            />
                        </div>
                        <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </label>
                </li>
            </ul>
        </div>
    )
}
