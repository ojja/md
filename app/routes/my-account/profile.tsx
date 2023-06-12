import { useNavigate } from "@remix-run/react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { RiCheckboxBlankCircleLine, RiRadioButtonLine } from "react-icons/ri";
import { MetaFunction } from "remix";
import Button from "~/components/Button";
import Cookies from "js-cookie";
import { fetchUserInfo, updateProfile } from "~/utils/account";
import Msg from "~/components/Msg";
import SelectInput from "~/components/SelectInput";

export default function profile() {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    birth_day: '',
    birth_month: '',
    birth_year: '',
    gender: '',
    avatar_url: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    // setIsLoading(false);
    // Check if the user is already logged in based on the cookie
    const user_id = Cookies.get('user_id');
    if (!user_id) {
      // Redirect to the dashboard or any other authorized page
      navigate('/login');
      return;
    }
    setUserId(user_id);
    const getUserInfo = async () => {
      const userInfo = await fetchUserInfo(Number(user_id));
      if (userInfo) {
        setUserInfo(userInfo);
      } else {
        // Handle the case when fetching user information fails
        // You can display an error message or redirect the user
      }
    };

    getUserInfo();
  }, []);

  const handleSubmit = async (e: any) => {
    e && e.preventDefault();
    try {
      const updatedUserInfo = await updateProfile(userInfo, userId);
      console.log('before IF')
      console.log('before msg', message)
      setMessage('Profile updated successfully');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      if (updatedUserInfo) {
        setUserInfo(updatedUserInfo);
      } else {
        // Handle the case when updatedUserInfo is undefined
        // You can display an error message or handle it as appropriate
      }
    } catch (error) {
      // Handle the case when updating user information fails
      // You can display an error message or redirect the user
    }
  };


  let [isOpenPassword, setIsOpenPassword] = useState(false)

  function closePassword() {
    setIsOpenPassword(false)
  }

  function openPassword() {
    setIsOpenPassword(true)
  }
  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePassword1 = () => {
    setPasswordShown1(!passwordShown1);
  };
  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
  };
  const [passwordShown3, setPasswordShown3] = useState(false);
  const togglePassword3 = () => {
    setPasswordShown3(!passwordShown1);
  };
  return (
    <div>
      {message && <Msg color="green" message={message} />}
      <div className="flex items-center justify-between py-5 pb-5 border-b-2 border-gray-200 border-solid">
        <h1 className="text-3xl">Account Info.</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 py-4 pb-5 border-b-2 border-gray-200 border-solid lg:max-w-xl">
          <div>
            <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> First name </label>
            <div className="mt-1">
              <input
                type="text"
                placeholder=""
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                name="first_name"
                value={userInfo.first_name}
                onChange={(e) => setUserInfo({ ...userInfo, first_name: e.target.value })}

              />
            </div>
          </div>

          <div>
            <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> Last name </label>
            <div className="mt-1">
              <input
                type="text"
                placeholder=""
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                name="last_name"
                value={userInfo.last_name}
                onChange={(e) => setUserInfo({ ...userInfo, last_name: e.target.value })}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> Email Address </label>
            <div className="mt-1">
              <input
                type="email"
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                name="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                readOnly
              />
            </div>
          </div>

          <div className="col-span-2">
            <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> Phone number </label>
            <div className="mt-1">
              <input
                type="text"
                placeholder=""
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                name="phone"
                value={userInfo.phone}
                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> Birth Date </label>
            <div className="mt-1 space-x-3">
              <SelectInput
                value={userInfo.birth_day}
                options={['Day', ...Array.from({ length: 31 }, (_, index) => (index + 1).toString().padStart(2, '0'))]}
                onChange={(value) => setUserInfo({ ...userInfo, birth_day: value })}
              />

              <SelectInput
                value={userInfo.birth_month}
                options={['Month', ...Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))]}
                onChange={(value) => setUserInfo({ ...userInfo, birth_month: value })}
              />
              <SelectInput
                value={userInfo.birth_year}
                options={['Year', ...Array.from({ length: 74 }, (_, i) => String(2023 - i))]}
                onChange={(value) => setUserInfo({ ...userInfo, birth_year: value })}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize">Gender</label>
            <div className="mt-1 space-x-4">
              <label htmlFor="Male" className='inline-block text-lg text-gray-900 cursor-pointer'>
                <div className='relative flex items-center py-1 pl-3'>
                  <input
                    type="radio"
                    name="gender"
                    id="Male"
                    className='hidden peer'
                    checked={userInfo.gender === 'M'}
                    onChange={() => setUserInfo({ ...userInfo, gender: 'M' })}
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
                    className='hidden peer'
                    checked={userInfo.gender === 'F'}
                    onChange={() => setUserInfo({ ...userInfo, gender: 'F' })}
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
          </div>


          <Button
            name="Save Changes"
            type="submit"
          />
        </div>
      </form>
      <button className="mt-3 font-semibold underline" onClick={openPassword}>Change Password</button>

      <Transition appear show={isOpenPassword} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closePassword}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg py-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl px-14 rounded-2xl">
                  <button onClick={closePassword} type="button" className="absolute p-2 -m-2 text-gray-400 outline-none hover:text-gray-500 top-2 right-2">
                    <span className="sr-only">Close panel</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                  <h3 className="text-xl font-semibold tracking-wider">Change Password</h3>
                  <div className="mt-3 space-y-2">
                    <div>
                      <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> Please Enter Your Current Password </label>
                      <div className="relative mt-1">
                        <input type={passwordShown1 ? "text" : "password"} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                        <button onClick={togglePassword1} className="absolute right-2 top-2.5">
                          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> Enter Your New Password </label>
                      <div className="relative mt-1">
                        <input type={passwordShown2 ? "text" : "password"} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                        <button onClick={togglePassword2} className="absolute right-2 top-2.5">
                          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="" className="block mb-1 text-sm text-gray-400 capitalize"> Confirm Your New Password </label>
                      <div className="relative mt-1">
                        <input type={passwordShown3 ? "text" : "password"} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                        <button onClick={togglePassword3} className="absolute right-2 top-2.5">
                          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-center text-white rounded-lg bg-slate-900 hover:bg-slate-700" onClick={closePassword}>Change Password</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export const meta: MetaFunction = () => {
  return {
    title: 'My Profile - Account | Sitename'
  }
}