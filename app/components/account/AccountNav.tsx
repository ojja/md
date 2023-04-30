import { Link } from "@remix-run/react";
import { useMatch } from "react-router-dom";

export default function AccountNav() {
    const overviewMatch = useMatch('/my-account/overview');
    const addressesMatch = useMatch('/my-account/addresses');
    const walletMatch = useMatch('/my-account/wallet');
    const wishlistMatch = useMatch('/my-account/wishlist');
    const orderstMatch = useMatch('/my-account/orders-list');
    const profiletMatch = useMatch('/my-account/profile');
    return (
        <div className='h-full p-3 space-y-2 text-gray-900 bg-gray-100 w-60'>
            <div className='divide-y divide-gray-700'>
                <div className="flex items-center p-2 space-x-4">
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 bg-gray-500 rounded-full" />
                    <div>
                        <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                        <span className="flex items-center space-x-1">
                            <a rel="noopener noreferrer" href="#" className="text-xs text-gray-400 hover:underline"> View profile </a>
                        </span>
                    </div>
                </div>

                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li>
                        <Link rel="noopener noreferrer" to="/my-account/overview" className={`flex items-center p-2 space-x-3 rounded-md hover:font-bold hover:drop-shadow-lg ${overviewMatch?'font-bold drop-shadow-lg':''}`}>
                            <span>Dashboard (Overview)</span>
                        </Link>
                    </li>
                    <li>
                        <Link rel="noopener noreferrer" to="/my-account/addresses" className={`flex items-center p-2 space-x-3 rounded-md hover:font-bold hover:drop-shadow-lg ${addressesMatch?'font-bold drop-shadow-lg':''}`}>
                            <span>Shipping Addresses</span>
                        </Link>
                    </li>
                    <li>
                        <Link rel="noopener noreferrer" to="/my-account/wallet" className={`flex items-center p-2 space-x-3 rounded-md hover:font-bold hover:drop-shadow-lg ${walletMatch?'font-bold drop-shadow-lg':''}`}>
                            <span>My Wallet</span>
                        </Link>
                    </li>
                    <li>
                        <Link rel="noopener noreferrer" to="/my-account/wishlist" className={`flex items-center p-2 space-x-3 rounded-md hover:font-bold hover:drop-shadow-lg ${wishlistMatch?'font-bold drop-shadow-lg':''}`}>
                            <span>My Wishlist</span>
                        </Link>
                    </li>
                    <li>
                        <Link rel="noopener noreferrer" to="/my-account/orders-list" className={`flex items-center p-2 space-x-3 rounded-md hover:font-bold hover:drop-shadow-lg ${orderstMatch?'font-bold drop-shadow-lg':''}`}>
                            <span>Orders & Returns</span>
                        </Link>
                    </li>
                    <li>
                        <Link rel="noopener noreferrer" to="/my-account/profile" className={`flex items-center p-2 space-x-3 rounded-md hover:font-bold hover:drop-shadow-lg ${profiletMatch?'font-bold drop-shadow-lg':''}`}>
                            <span>Account Info</span>
                        </Link>
                    </li>
                </ul>

                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="">
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md hover:font-bold hover:drop-shadow-lg">
                            <span>Need Help?</span>
                        </a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md hover:font-bold hover:drop-shadow-lg">
                            <span>FAQs</span>
                        </a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 text-gray-400 rounded-md hover:font-bold hover:drop-shadow-lg">
                            <span>Log Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
