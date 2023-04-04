import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='p-4 bg-white rounded-lg md:px-6 md:py-8 dark:bg-gray-900'>
            <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 mr-3" alt="Flowbite Logo" width={38} height={32}/>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©<a href="https://Site.com/" className="hover:underline">Site™</a>. All Rights Reserved.
                </span>
            </footer>
        </div>

    )
}
