import { Link } from "react-router-dom";
import Dots from "~/components/dots";

export default function login() {
  return (
    <div>
      <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
              >
                <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900">Login</h1>
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Email"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Password"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-10">
                    <input
                      type="submit"
                      value="Sign In"
                      className="w-full px-5 py-3 text-base text-white transition bg-indigo-500 border rounded-md cursor-pointer border-indigo hover:bg-opacity-90"
                    />
                  </div>
                </form>
                <p className="mb-6 text-base text-[#adadad]">Connect With</p>
                <ul className="flex justify-between mb-12 -mx-2">
                  <li className="w-full px-2">
                    <a
                      href="javascript:void(0)"
                      className="flex h-11 items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90"
                    >
                      <img src="/images/fb.svg" />
                    </a>
                  </li>
                  <li className="w-full px-2">
                    <a
                      href="javascript:void(0)"
                      className="flex h-11 items-center justify-center rounded-md bg-[#1C9CEA] hover:bg-opacity-90"
                    >
                      <img src="/images/tw.svg" />
                    </a>
                  </li>
                  <li className="w-full px-2">
                    <a
                      href="javascript:void(0)"
                      className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                    >
                      <img src="/images/tw.svg" />
                    </a>
                  </li>
                </ul>
                <Link
                  to="/forgot"
                  className="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
                >
                  Forget Password?
                </Link>
                <p className="text-base text-[#adadad]">
                  Not a member yet? <Link to="/signup" className="text-primary hover:underline" > Sign Up </Link>
                </p>
                <Dots />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
