import { useState } from 'react'
import useShoppingCart from '~/stores/cartStore';

export default function CouponForm() {
    const { addCoupon } = useShoppingCart();
    const [couponMsg, setSouponMsg] = useState('');
    const handleCouponApplication = async (couponCode: any) => {
        try {
            const response = await addCoupon(couponCode) as { status: string };
            if (response.status === 'success') {
                setSouponMsg('Coupon applied successfully')
            } else if (response.status === 'failed') {
                setSouponMsg('Coupon application failed')
            } else {
                setSouponMsg('Unknown response status')
            }
        } catch (error) {
            setSouponMsg('Error' + error)
        }
    };
    return (

        <form
            action=""
            method="post"
            className="flex flex-wrap w-full"
            onSubmit={(event) => {
                event.preventDefault(); // Prevent default form submission behavior
                const form = event.target as HTMLFormElement; // Cast event.target to HTMLFormElement
                const couponCodeInput = form.querySelector('input[name="coupon_code"]') as HTMLInputElement; // Cast the selected element to HTMLInputElement
                const couponCode = couponCodeInput.value; // Get the coupon code from the input field
                handleCouponApplication(couponCode);
            }}
        >
            <div className="flex w-full mt-2 coupon">
                <input
                    type="text"
                    name="coupon_code"
                    className="p-2 border border-gray-300 rounded-l outline-none bg-gray-50"
                    id="coupon_code"
                    placeholder="Enter Coupon Code"
                />
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    name="apply_coupon"
                    value="Apply coupon"
                >
                    Apply
                </button>
                <p>{couponMsg}</p>
            </div>
        </form>
    )
}
