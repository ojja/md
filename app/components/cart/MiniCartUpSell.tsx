import AlsoLikeSlider from "../AlsoLikeSlider";


export default function MiniCartUpSell() {

    return (
        <div className="">
            <div className=" rounded-[20px] md:mx-10 mx-4  overflow-hidden border-2 border-gray-100">
                <h4 className=" pt-5 pb-3 px-8 border-b text-2xl font-bold text-start bg-green-300 border-gray-100">قد يعجبك أيضا</h4>
                <div className="mini_cart_upsell_items">
                    <AlsoLikeSlider/>
                </div>
            </div>
        </div>
    )
}
