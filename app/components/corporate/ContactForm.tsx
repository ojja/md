import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import Loader from '../Loader';
import { INPUT_CLASSES, LABEL_CLASSES } from "~/commonUIClasses";

export default function ContactForm() {
    const { t, i18n } = useTranslation();
    const { register, handleSubmit, formState: { errors: formErrors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        note: '',
    });
    const [errors, setErrors] = useState({
        response: '',
        general: ''
    });
    const onSubmit = (formData: FormData) => {
        console.log(formData); // Access form data here
    };
    return (
        <div className="relative w-full"
            key={i18n.language}>
            {isLoading ? (
                <div className="absolute z-20 flex items-start justify-center pt-20 bg-gray-200 bg-opacity-75 -inset-4">
                    <Loader />
                </div>
            ) : ('')}
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.general && (
                    <p className="p-2 my-2 text-xs text-red-800 bg-red-100 border border-red-500 rounded">
                        {errors.general}
                    </p>
                )}
                <div className="grid grid-cols-2 gap-4 py-4 pb-5">
                    <div>
                        <label htmlFor="" className={`${LABEL_CLASSES}`}> {t('checkout.first_name')} </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                className={`${INPUT_CLASSES} ${formErrors.first_name && 'border-red-500'}`}
                                {...register('first_name', {
                                    required: { value: true, message: t('fields.first_name_required') }
                                })}
                            />
                            {formErrors.first_name && (
                                <p className="mt-1 text-xs text-red-500">{formErrors.first_name.message}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="" className={`${LABEL_CLASSES}`}> {t('checkout.last_name')} </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                className={`${INPUT_CLASSES} ${formErrors.last_name && 'border-red-500'}`}
                                {...register('last_name', {
                                    required: { value: true, message: t('fields.last_name_required') }
                                })}
                            />
                            {formErrors.last_name && (
                                <p className="mt-1 text-xs text-red-500">{formErrors.last_name.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="" className={`${LABEL_CLASSES}`}> {t('checkout.email_address')} </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                className={`${INPUT_CLASSES} ${formErrors.email && 'border-red-500'}`}
                                {...register('email', {
                                    required: { value: true, message: t('fields.email_required') }
                                })}
                            />
                            {formErrors.email && (
                                <p className="mt-1 text-xs text-red-500">{formErrors.email.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="" className={`${LABEL_CLASSES}`}> {t('checkout.phone_number')} </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                placeholder=""
                                className={`${INPUT_CLASSES} ${formErrors.phone && 'border-red-500'}`}
                                {...register('phone', {
                                    required: { value: true, message: t('fields.phone_required') }
                                })}
                            />
                            {formErrors.phone && (
                                <p className="mt-1 text-xs text-red-500">{formErrors.phone.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="" className={`${LABEL_CLASSES}`}> {t('common.note')} </label>
                        <div className="mt-1">
                            <textarea
                                // type="text"
                                // type="textarea"
                                id="note"
                                {...register("note", {
                                    required: t("fields.note_required"),
                                    minLength: {
                                        value: 5,
                                        message: t("fields.note_length")
                                    },
                                })}
                                className={`${INPUT_CLASSES} ${formErrors.note && "border-red-500"}`}
                            />
                            {formErrors.note && (
                                <p className="mt-1 text-xs text-red-500">{formErrors.note.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <Button
                            name={t('common.send')}
                            width="full"
                            type="submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
