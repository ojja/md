import { json, MetaFunction } from "@remix-run/node";
import { LoaderFunction } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react";
import { ProductWidget } from "~/components/product/ProductWidget";
import { v4 } from 'uuid';
import React, { useEffect, useState } from "react";
import Breadcrumbs from "~/components/Breadcrumbs";
import ShopListTop from "~/components/ShopListTop";
import { useTranslation } from "react-i18next";
import Filters from "~/components/Filters";
import { getFilterProducts } from "~/models/category.server";
import { API_ENDPOINT, Site_Title } from "~/config";
import { getNewFilterProducts } from "~/api/products";
import Loader from "~/components/Loader";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const meta: MetaFunction = ({ params }: any) => {
    return {
        title: `Shop All - ${Site_Title}`
    }
}
export const loader: LoaderFunction = async ({ request }) => {
    const { searchParams } = new URL(request.url);
    const pageNumber = Number(searchParams.get("pageNumber")) || 1;
    const minPrice = Number(searchParams.get("minPrice")) || 0;
    const maxPrice = Number(searchParams.get("maxPrice")) || 500000;
    let selectedCategories = searchParams.get("selectedCategories") || "";
    const perPage = 20;

    try {
        const response = await getFilterProducts(
            selectedCategories,
            pageNumber,
            perPage,
            minPrice,
            maxPrice
        );
        const filteredProducts = await response;
        return json({
            filteredProducts,
        });
    } catch (error) {
        console.log("error", error);
        return new Response("Internal Server Error", { status: 500 });
    }
};



export default function shop() {
    const { t } = useTranslation();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [grid, setGrid] = useState(false);
    const cat = 'Category';
    const breadcrumbs = {
        pages: [
            { name: 'Home', href: '/' },
            { name: 'Woman', href: '#' },
            { name: 'Parent Category', href: '#' },
            { name: cat, href: '#' }
        ]
    }

    const { filteredProducts: initialProducts } = useLoaderData();
    const [products, setProducts] = useState(initialProducts);
    let [selectedCategories, setSelectedCategories] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500000);
    const [isLoading, setIsLoading] = useState(false);

    console.log('selectedCategories', selectedCategories);
    const debounce = (func: (...args: any[]) => void, delay: number) => {
        let timer: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };


    const fetchProducts = async (appendData = false, selectedCategories: any) => {
        console.log('selectedCategories Before try', selectedCategories)
        try {
            setIsLoading(true);
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    category: selectedCategories,
                    price_range: [minPrice, maxPrice],
                    products_per_page: 20,
                    page: pageNumber,
                }),
            };

            const response = await fetch(
                `${API_ENDPOINT}/filter.php`,
                options
            );
            const newData = await response.json();

            setProducts((prevProducts: any[]) => {
                if (appendData && prevProducts) {
                    console.log('IF appendData')
                    return [...prevProducts, ...newData as any[]];
                } else {
                    console.log('IF ELSE appendData')
                    return newData as any[];
                }
            });
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false);
        }
    };
    const debouncedFetchProducts = debounce(fetchProducts, 2000);
    const handleLoadMore = async () => {
        setIsLoading(true);
        try {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    category: selectedCategories,
                    price_range: [minPrice, maxPrice],
                    products_per_page: 20,
                    page: pageNumber + 1,
                }),
            };

            const response = await fetch(
                `${API_ENDPOINT}/filter.php`,
                options
            );
            const newData = await response.json();
            setProducts((prevProducts) => [...prevProducts, ...newData]);
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
            setIsLoading(false);
        } catch (error) {
            console.error('Error loading more products:', error);
        }
    };

    let handleSelectedCategoriesChange = (selectedCategories: any) => {
        // Update selectedCategories state and call fetchProducts with appendData set to false
        // debugger;
        setSelectedCategories(selectedCategories);
        setIsLoading(true);
        debouncedFetchProducts(false, selectedCategories);
    };

    const handleMinPriceChange = (event: any) => {
        // Update minPrice state and call fetchProducts with appendData set to false
        setMinPrice(event.target.value);
        debouncedFetchProducts();
    };

    const handleMaxPriceChange = (event: any) => {
        // Update maxPrice state and call fetchProducts with appendData set to false
        setMaxPrice(event.target.value);
        debouncedFetchProducts();
    };

    // console.log('products>>', products);
    return (
        <div className="bg-white">
            <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className='pt-5 '>
                    {/* <span>{products.length}</span> */}
                    <ShopListTop grid={grid} setGrid={setGrid} setMobileFiltersOpen={setMobileFiltersOpen} title={'Shop All'} />
                    {/* <input type="number" name="minPrice" onChange={handleMinPriceChange} />
                    <input type="number" name="maxPrice" onChange={handleMaxPriceChange} /> */}
                    <button onClick={fetchProducts}>Reload Data</button>
                    <Breadcrumbs breadcrumbs={breadcrumbs.pages} className="pb-4 border-b border-gray-200" />
                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            <Filters
                                filteredProducts={products}
                                selectedCategories={selectedCategories}
                                handleMinPriceChange={handleMinPriceChange}
                                handleMaxPriceChange={handleMaxPriceChange}
                                handleSelectedCategoriesChange={handleSelectedCategoriesChange}
                            />
                            {/* Product grid */}
                            <div className="relative z-10 lg:col-span-3">
                                <div className={classNames(
                                    grid ? 'sm:grid-cols-1 lg:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4',
                                    'grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 mt-6 relative'
                                )}
                                >
                                    {isLoading ? (
                                        <div className="absolute z-20 inset-0 bg-gray-200 bg-opacity-75 flex items-start justify-center pt-20">
                                            <Loader />
                                        </div>
                                    ) : ('')}
                                    {products && products.map((productData: any) => (
                                        <React.Fragment key={v4()}>
                                            <ProductWidget product={productData} />
                                            {/* <ProductWidgetWithVariation product={productData} key={v4()} /> */}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="flex items-center justify-center mt-10 loadmore">

                                    <button onClick={handleLoadMore} date-num={pageNumber} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center justify-center whitespace-nowrap">
                                        {!isLoading ? (
                                            'Load More'
                                        ) : (
                                            <>
                                                <Loader extraclass={'w-4 h-4 mr-2'} />
                                                Loading...
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
