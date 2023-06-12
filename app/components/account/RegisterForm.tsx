import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { register } from '~/utils/account';
import Msg from "~/components/Msg";
import SelectInput from "~/components/SelectInput";
import { RiCheckboxBlankCircleLine, RiRadioButtonLine } from "react-icons/ri";
import Button from "~/components/Button";
import Loader from "~/components/Loader";


export default function RegisterForm() {
    const { t, i18n } = useTranslation();
    const [isSend, setIsSend] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        birth_day: '',
        birth_month: '',
        birth_year: '',
        gender: '',
    });

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const isValidEmail = (email: any) => {
        const trimmedEmail = email.trim();
        if (trimmedEmail === '') {
            return false;
        }
        const parts = trimmedEmail.split('@');
        if (parts.length !== 2) {
            return false;
        }
        const [localPart, domainPart] = parts;
        if (localPart === '' || domainPart === '') {
            return false;
        }
        if (!domainPart.includes('.')) {
            return false;
        }
        return true;
    };
    const isValidPhoneNumber = (phoneNumber: any) => {
        const digitsOnly = phoneNumber.replace(/\D/g, '');
        return digitsOnly.startsWith('0') && digitsOnly.length === 11;
    };
    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        birth_day: '',
        birth_month: '',
        birth_year: '',
        gender: '',
        response: '',
    });
    const validateForm = () => {
        let isValid = true;
        setIsLoading(true);
        const newErrors = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            password: '',
            birth_day: '',
            birth_month: '',
            birth_year: '',
            gender: '',
        };
        if (formData.email.trim() === '') {
            newErrors.email = i18n.language === 'ar' ? 'يجب ادخال البريد الإلكتروني' : 'Email address is required';
            isValid = false;
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = i18n.language === 'ar' ? 'صيغة البريد الإلكتروني غير صحيحة' : 'Invalid email address format';
            isValid = false;
        }

        if (formData.first_name.trim() === '') {
            newErrors.first_name = i18n.language === 'ar' ? 'يجب ادخال الاسم الأول' : 'First name is required';
            isValid = false;
        }
        if (formData.password.trim() === '') {
            newErrors.password = i18n.language === 'ar' ? 'يجب ادخال كلمه سر' : 'password is required';
            isValid = false;
        }

        if (formData.last_name.trim() === '') {
            newErrors.last_name = i18n.language === 'ar' ? 'يجب ادخال الاسم الأخير' : 'Last name is required';
            isValid = false;
        }

        if (formData.phone.trim() === '') {
            newErrors.phone = i18n.language === 'ar' ? 'يجب ادخال رقم الهاتف' : 'Phone number is required';
            isValid = false;
        } else if (!isValidPhoneNumber(formData.phone)) {
            newErrors.phone = i18n.language === 'ar' ? 'صيغة رقم الهاتف غير صحيحة' : 'Invalid phone number format';
            isValid = false;
        }

        if (formData.birth_day === 'Day' || formData.birth_month === 'Month' || formData.birth_year === 'Year') {
            newErrors.birth_day = i18n.language === 'ar' ? 'يجب اختيار تاريخ الميلاد' : 'Birth date is required';
            isValid = false;
        }

        if (formData.gender === '') {
            newErrors.gender = i18n.language === 'ar' ? 'يجب اختيار الجنس' : 'Gender is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        setIsLoading(true);
        console.log('handle')
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await register({ formData });
                console.log('response', response)
                setIsLoading(false);
                if (response && response.status === "error") {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        response: response.msg,
                    }));
                } else if (response && response.status === "success") {
                    console.log("Password reset email sent successfully");
                }
            } catch (error) {
                setIsLoading(false);
                console.log("An error occurred while calling forgotPassword API:", error);
            }
        } else {
            console.log('handle else n')
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    };
    return (
        <div className="relative">
            {isLoading ? (
                <div className="absolute z-20 flex items-start justify-center pt-20 bg-gray-200 bg-opacity-75 -inset-4">
                    <Loader />
                </div>
            ) : ('')}
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 py-4 pb-5 text-left border-b-2 border-gray-200 border-solid lg:max-w-xl">
                    {errors.response && <p className="mt-1 text-xs text-red-500">{errors.response}</p>}
                    <div>
                        <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> First name </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                placeholder=""
                                className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none ${errors.first_name && 'border-red-500'}`}
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                            {errors.first_name && <p className="mt-1 text-xs text-red-500">{errors.first_name}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> Last name </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none ${errors.last_name && 'border-red-500'}`}
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                            {errors.last_name && <p className="mt-1 text-xs text-red-500">{errors.last_name}</p>}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> Email Address </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none ${errors.email && 'border-red-500'}`}
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> Phone number </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                placeholder=""
                                className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none ${errors.phone && 'border-red-500'}`}
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> Password </label>
                        <div className="mt-1">
                            <input
                                type="Password"
                                className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none ${errors.phone && 'border-red-500'}`}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> Birth Date </label>
                        <div className="flex mt-1 space-x-3">
                            <div className='w-1/3'>
                                <SelectInput
                                    value={formData.birth_day}
                                    options={['Day', ...Array.from({ length: 31 }, (_, index) => (index + 1).toString().padStart(2, '0'))]}
                                    onChange={(value) => handleChange({ target: { name: 'birth_day', value } })}
                                />
                            </div>
                            <div className='w-1/3'>
                                <SelectInput
                                    value={formData.birth_month}
                                    options={['Month', ...Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))]}
                                    onChange={(value) => handleChange({ target: { name: 'birth_month', value } })}
                                />
                            </div>
                            <div className='w-1/3'>
                                <SelectInput
                                    value={formData.birth_year}
                                    options={['Year', ...Array.from({ length: 74 }, (_, i) => String(2023 - i))]}
                                    onChange={(value) => handleChange({ target: { name: 'birth_year', value } })}
                                />
                            </div>
                            {errors.birth_day && <div className="error-message">{errors.birth_day}</div>}
                            {errors.birth_month && <div className="error-message">{errors.birth_month}</div>}
                            {errors.birth_year && <div className="error-message">{errors.birth_year}</div>}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize">Gender</label>
                        <div className="mt-1 space-x-4">
                            <label htmlFor="gender_male" className='inline-block text-lg text-gray-900 cursor-pointer'>
                                <div className='relative flex items-center py-1 pl-3'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="gender_male"
                                        value="M"
                                        className='hidden peer'
                                        checked={formData.gender === 'M'}
                                        onChange={handleChange}
                                    />
                                    <div className='invisible peer-checked:visible absolute left-0 top-1 mt-0.5'>
                                        <RiRadioButtonLine className='peer-checked:bg-gray-700' />
                                    </div>
                                    <div className='visible peer-checked:invisible absolute left-0 top-1 mt-0.5'>
                                        <RiCheckboxBlankCircleLine className='peer-checked:bg-gray-700' />
                                    </div>
                                    <span className='ml-2 text-base font-medium'>Male</span>
                                </div>
                            </label>
                            <label htmlFor="Female" className='inline-block text-lg text-gray-900 cursor-pointer'>
                                <div className='relative flex items-center py-1 pl-3'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="Female"
                                        value="F"
                                        className='hidden peer'
                                        checked={formData.gender === 'F'}
                                        onChange={handleChange}
                                    />
                                    <div className='invisible peer-checked:visible absolute left-0 top-1 mt-0.5'>
                                        <RiRadioButtonLine className='peer-checked:bg-gray-700' />
                                    </div>
                                    <div className='visible peer-checked:invisible absolute left-0 top-1 mt-0.5'>
                                        <RiCheckboxBlankCircleLine className='peer-checked:bg-gray-700' />
                                    </div>
                                    <span className='ml-2 text-base font-medium'>Female</span>
                                </div>
                            </label>
                        </div>
                        {errors.gender && <p className="mt-1 text-xs text-red-500">{errors.gender}</p>}
                    </div>

                    <div className="col-span-2">
                        <Button
                            name="Sign Up"
                            width="full"
                            type="submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
