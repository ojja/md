import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Sort({ onSortOptionChange }: any) {
    const { t, i18n } = useTranslation();
    const sortOptions = [
        { name: t('sortOptions.newest'), criteria: 'date', arrangement: 'DESC', current: true },
        { name: t('sortOptions.oldest'), criteria: 'date', arrangement: 'ASC', current: false },
        { name: t('sortOptions.priceLowToHigh'), criteria: 'price', arrangement: 'ASC', current: false },
        { name: t('sortOptions.priceHighToLow'), criteria: 'price', arrangement: 'DESC', current: false },
    ];
    
    const [selectedSortOption, setSelectedSortOption] = useState(sortOptions.find(option => option.current));
    const [selectedSortOptionName, setSelectedSortOptionName] = useState('');
  
    const handleSortOptionClick = (option: any) => {
      setSelectedSortOption((prevOption) => {
        const updatedOptions = sortOptions.map((sortOption) => {
          return {
            ...sortOption,
            current: sortOption === option,
          };
        });
        onSortOptionChange(option);
        return updatedOptions.find((sortOption) => sortOption.current);
      });
    };
  
    useEffect(() => {
      if (selectedSortOption) {
        setSelectedSortOptionName(t(selectedSortOption.name));
      }
    }, [selectedSortOption, t]);
      return (
        <Menu as="div" className="relative z-20 inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                    {selectedSortOptionName}
                    <ChevronDownIcon
                        className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
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
                                    <span
                                        className={classNames(
                                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm cursor-pointer'
                                        )}
                                        onClick={() => handleSortOptionClick(option)}
                                    >
                                        {t(option.name)}
                                    </span>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
