import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { searchForm } from "~/api/common";
import Popup from "./Popup";
import ProductWidget from './product/ProductWidget';

export default function Search() {
    let [isSearch, setIsSearch] = useState(false);
    const { register, handleSubmit, watch } = useForm();
    const [searchResults, setSearchResults] = useState([]);

    function closeModal() {
        setIsSearch(false);
    }

    function openModal() {
        setIsSearch(true);
    }

    const keyword = watch('keyword');
    const onSubmit = async (data) => {
        // Call the searchForm function with the entered keyword
        const searchResult = await searchForm(keyword);
        // Handle the search result here (e.g., update state, display data)
        setSearchResults(Array.isArray(searchResult) ? searchResult : []); // Check if searchResult is an array
        setSearchResults(searchResult);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission on Enter press
            handleSubmit(onSubmit)();
        }
    };

    return (
        <div>
            <span className="p-2 text-gray-400 cursor-pointer hover:text-gray-500" onClick={openModal}>
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className=" w-4 h-4" aria-hidden="true" />
            </span>
            {isSearch && (
                <Popup isOpen={isSearch} close={closeModal} width="full">
                    <div className="w-full max-w-3xl">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="default-search"
                                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Search Products"
                                    required
                                    {...register('keyword')}
                                    onKeyPress={handleKeyPress}
                                />
                                <button
                                    type="submit"
                                    className="absolute px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg right-2 bottom-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                            {Array.isArray(searchResults) ?
                                searchResults.map((productData) => (
                                    <ProductWidget product={productData} key={productData.id} />
                                )) : (
                                    <p>No Products Fount</p>
                                )}
                        </div>
                    </div>
                </Popup>
            )}
        </div>
    );
}
