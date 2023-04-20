import { Link } from "@remix-run/react";

export default function Footer() {
    return (
        <div className='p-4 bg-white rounded-lg md:px-6 md:py-8 dark:bg-gray-900'>
            <footer className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0">
                        <img src="/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" width={38} height={32}/>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="#" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©<Link to="https://Site.com/" className="hover:underline">Site™</Link>. All Rights Reserved.
                </span>
            </footer>
        </div>

    )
}
