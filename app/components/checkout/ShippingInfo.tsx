import { useTranslation } from "react-i18next";

export default function ShippingInfo({ formData, handleChange, errors }: any) {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <label htmlFor="firstName" className="block text-base font-semibold leading-6  text-gray-50 capitalize">
                        {t('checkout.first_name')}<span>*</span>
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full py-4 px-5  border-2 border-gray-400  rounded-2xl  text-black outline-none ${errors.firstName && 'border-red-500'}`}
                        />
                        {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                    </div>
                </div>

                <div className="col-span-2">
                    <label htmlFor="lastName" className="block text-base font-semibold leading-6  text-gray-50 capitalize">
                        {t('checkout.last_name')}<span>*</span>
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full py-4 px-5  border-2 border-gray-400  rounded-2xl  text-black outline-none ${errors.lastName && 'border-red-500'}`}
                        />
                        {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                    </div>
                </div>
                <div className="col-span-4">
                    <label htmlFor="emailAddress" className="block text-base font-semibold leading-6  text-gray-50 capitalize">
                        {t('checkout.email_address')}<span>*</span>
                    </label>
                    <div className="mt-1">
                        <input
                            type="email"
                            id="emailAddress"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            required
                            className={`w-full  py-4 px-5  border-2 border-gray-400  rounded-2xl  text-black outline-none ${errors.emailAddress && 'border-red-500'}`}
                        />
                        {errors.emailAddress && <p className="mt-1 text-xs text-red-500">{errors.emailAddress}</p>}
                    </div>
                </div>
                <div className="col-span-4">
                    <label htmlFor="phoneNumber" className="block text-base font-semibold leading-6  text-gray-50 capitalize">
                        {t('checkout.phone_number')}<span>*</span>
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className={`w-full  py-4 px-5  border-2 border-gray-400  rounded-2xl  text-black outline-none ${errors.phoneNumber && 'border-red-500'}`}
                        />
                        {errors.phoneNumber && <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>}
                    </div>
                </div>

                
            </div>
        </div>
    );
}
