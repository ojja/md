import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LoginForm from "~/components/account/LoginForm";
import Loader from "~/components/Loader";
import { API_ENDPOINT } from "~/config";
import { checkLoginStatus } from "~/utils/authUtils";
import { useNavigate } from 'remix';


export default function login() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: 0,
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    general: ''
  });

  const scrollToFirst = () => {
    setTimeout(() => {
      const element = document.querySelector('.border-red-500') as HTMLElement;
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = window.pageYOffset + rect.top - 100;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      } else {
        const parent = document.querySelector('.login-form') as HTMLElement;
        if (parent) {
          const rect = parent.getBoundingClientRect();
          const offset = window.pageYOffset + rect.top - 100;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        } else {
          const bodyRect = document.body.getBoundingClientRect();
          const offset = window.pageYOffset + bodyRect.top - 100;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }
    }, 500);
  };


  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: '',
      password: '',
      general: ''
    };

    if (formData.username.trim() === '') {
      newErrors.username = i18n.language === 'ar' ? 'يجب ادخال الاسم ' : 'username is required';
      isValid = false;
    }

    if (formData.password.trim() === '') {
      newErrors.password = i18n.language === 'ar' ? 'يجب ادخال كلمه السر' : 'password is required';
      isValid = false;
    }
    setErrors(newErrors);
    scrollToFirst();
    console.log('calling validateForm');
    return isValid;
  };

  const handleChange = (e: any, inputType: string) => {
    let value = e.target.value;

    if (inputType === 'checkbox') {
      value = e.target.checked;
    }

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e && e.preventDefault();
    setIsLoading(true);
    const apiUrl = `${API_ENDPOINT}/my-account/login.php`;
    const requestBody = {
      username: formData.username,
      password: formData.password,
      remember: formData.remember
    };


    if (validateForm()) {
      try {
        setIsLoading(true);
        const response = await fetch(apiUrl, {
          method: 'POST',
          body: JSON.stringify(requestBody),
          credentials: 'include'
        });

        if (response.ok) {
          const responseData: any = await response.json();
          console.log('responseData', responseData)
          console.log('API call successful');
          if (responseData.status === 'success' && responseData.msg) {
            if (responseData.msg_code === 'login_error') {
              setErrors(prevErrors => ({
                ...prevErrors,
                general: responseData.msg
              }));
            } else if (responseData.msg_code === 'login_success') {
              console.log('Success Login //');
              checkLoginStatus();
              navigate('/dashboard');
            } else {
              setErrors(prevErrors => ({
                ...prevErrors,
                general: 'An error occurred.'
              }));
            }
            setIsLoading(false);
          } else {
            console.log('API call failed');
            setIsLoading(false);
          }
        } else {
          console.log('API call failed');
          setIsLoading(false);
        }
      } catch (error) {
        console.log('An error occurred', error);
      }
    } else {
      console.log('Form is invalid');
      console.log('formData >> ', formData);
      setIsLoading(false);
    }
  };

  // Call checkLoginStatus when the page loads to check the initial login status
  checkLoginStatus();

  useEffect(() => {
    setTimeout(() => {
      console.log('EFfext set load')
      setIsLoading(false);
      console.log('data', formData)
    }, 1000);
  }, []);
  return (
    <div>
      <section className="p-8 mx-auto bg-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="relative w-full px-4">
              {isLoading ? (
                <div className="absolute z-20 flex items-start justify-center pt-20 bg-gray-200 bg-opacity-75 -inset-4">
                  <Loader />
                </div>
              ) : ('')}
              <LoginForm formData={formData} handleChange={handleChange} errors={errors} handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
