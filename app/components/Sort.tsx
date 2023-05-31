import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon, ViewColumnsIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from "react";
import { v4 } from 'uuid';

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
export default function Sort() {
    return (
        <Menu as="div" className="relative z-20 inline-block text-left border-2 border-green-200 py-2.5 px-5 rounded-100">
            <div>
                <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900 rounded-100">
                    Sort
                    <ChevronDownIcon
                        className="flex-shrink-0 w-5 h-5 ml-4 -mr-1 text-green-200 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {sortOptions.map((option) => (
                            <Menu.Item key={v4()}>
                                {({ active }) => (
                                    <a
                                        href={option.href}
                                        className={classNames(
                                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        {option.name}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}