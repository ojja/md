import AlsoLikeSlider from "../AlsoLikeSlider";


export default function MiniCartUpSell() {

    return (
        <div className="">
            <div className=" rounded-[20px] md:mx-10 mx-4  overflow-hidden">
                <h4 className="p-3 border-b text-2xl font-bold text-center bg-green-300 border-gray-100">قد يعجبك أيضا</h4>
                <div className="mini_cart_upsell_items">
                    <AlsoLikeSlider/>
                </div>
            </div>
        </div>
    )
}
