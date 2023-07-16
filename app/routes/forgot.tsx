import { Link } from "@remix-run/react";
import ForgotForm from "~/components/account/ForgotForm";
import Dots from "~/components/Dots";

export default function Forgot() {
  return (
    <div>
      <section className="py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4 min-w-[525px]">
            <div className="w-full px-4">
              <div
                className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
              >
                <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900">Forgot Password</h1>
                {/* <p className="text-base text-[#adadad] text-left mb-3">Please enter your email</p>
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Email"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-10">
                    <input
                      type="submit"
                      value="Send Email to Reast"
                      className="w-full px-5 py-3 text-base text-white transition border rounded-md cursor-pointer bg-primary-500 border-primary hover:bg-opacity-90"
                    />
                  </div>
                </form> */}
                <ForgotForm/>
                <Dots />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
