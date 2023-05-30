
export default function ShippingInfo({ formData, handleChange }: any) {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> First name </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="col-span-2">
                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Last name </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="col-span-4">
                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Phone number </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="col-span-4">
                    <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Email Address </label>
                    <div className="mt-1">
                        <input
                            type="email"
                            id="emailAddress"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
