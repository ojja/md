import { useTranslation } from "react-i18next";

export default function ShippingInfo({ register, errors }: any) {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <div>
                        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 capitalize">{t('checkout.first_name')}</label>
                        <div className="mt-1">
                            <input
                                type="text"
                                className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none ${errors.first_name ? 'border-red-500' : ''}`}
                                {...register('first_name', {
                                    required: { value: true, message: t('fields.first_name_required') }
                                })}
                            />
                            {errors.first_name && errors.first_name.type === "required" && (<p className="mt-1 text-xs text-red-500">{errors.first_name.message}</p>)}
                        </div>
                    </div>
                </div>

                <div className="col-span-2">
                    <div>
                        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 capitalize"> {t('checkout.last_name')} </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none ${errors.last_name && 'border-red-500'}`}
                                {...register('last_name', {
                                    required: { value: true, message: t('fields.last_name_required') }
                                })}
                            />
                            {errors.last_name && errors.last_name.type === "required" && (<p className="mt-1 text-xs text-red-500">{errors.last_name.message}</p>)}
                        </div>
                    </div>
                </div>

                <div className="col-span-4">
                    <div>
                        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 capitalize"> {t('checkout.phone_number')} </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                placeholder=""
                                className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none ${errors.phone && 'border-red-500'}`}
                                {...register('phone', {
                                    required: { value: true, message: t('fields.phone_required') }
                                })}
                            />
                            {errors.phone && errors.phone.type === "required" && (<p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>)}
                        </div>
                    </div>
                </div>

                <div className="col-span-4">
                    <div>
                        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 capitalize"> {t('checkout.email_address')} </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none ${errors.email && 'border-red-500'}`}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: i18n.language === 'ar' ? 'يجب ادخال البريد الإلكتروني' : 'Email is required',
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: i18n.language === 'ar' ? 'صيغة البريد الإلكتروني غير صحيحة' : 'Invalid email format',
                                    },
                                })}
                            />

                            {errors.email && errors.email.type === "required" && (<p className="mt-1 text-xs text-red-500">{errors.email.message}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
