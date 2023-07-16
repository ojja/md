import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { fetchFilterProducts } from '~/utils/productsAPI';
import ProductLoader from './product/ProductLoader';
import ProductWidget from './product/ProductWidget';
import i18n from 'i18next';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

interface Props {
    categorySlug?: string;
    count?: number;
    title?: string;
    criteria?: string;
    arrangement?: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const PRODUCT_LOADERS_COUNT = 4;

export default function ExtraProducts({ categorySlug, count = 10, title, criteria = 'date', arrangement = 'arrangement' }: Props) {
    const [extraProducts, setExtraProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const filterData = {
        selectedCategories: categorySlug ? categorySlug : '', // Array of selected category slugs
        minPrice: 0, // Minimum price value
        maxPrice: 100000000, // Maximum price value
        pageNumber: 1, // Page number for pagination
        criteria: criteria, // Sorting criteria (e.g., 'price', 'name', etc.)
        arrangement: arrangement, // Sorting arrangement (e.g., 'ASC', 'DESC')
    };
    useEffect(() => {
        if (inView) {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const products = await fetchFilterProducts(filterData);
                    setExtraProducts(prevProducts => [...prevProducts, ...products]);
                } catch (error) {
                    console.error('Error fetching extra products:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [categorySlug, count, inView]);


    const CustomPrevArrow = (props: any) => {
        const { className, onClick } = props;
        return (
            <div className={`left-1 absolute top-1/2 -translate-y-1/2 translate-x-4 bg-green-200 rounded-full p-5 text-white z-10 cursor-pointer hover:bg-green-400 ${className}`} onClick={onClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6291 2.82887L22.2001 11.4019C22.2813 11.4793 22.3459 11.5724 22.3901 11.6755C22.4343 11.7787 22.457 11.8897 22.457 12.0019C22.457 12.1141 22.4343 12.2251 22.3901 12.3282C22.3459 12.4314 22.2813 12.5245 22.2001 12.6019L13.6291 21.1719L12.4291 19.9719L19.5431 12.8579L1.88608 12.8579L1.88608 11.1429L19.5421 11.1429L12.4281 4.02888L13.6291 2.82887Z" fill="currentColor" />
                </svg>

            </div>
        );
    };

    const CustomNextArrow = (props: any) => {
        const { className, onClick } = props;
        return (
            <div className={`right-1 rotate-180 absolute top-1/2 -translate-y-1/2 -translate-x-4 bg-green-200 rounded-full p-5 text-white z-10 cursor-pointer hover:bg-green-400 ${className}`} onClick={onClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                    <path d="M13.6291 2.82887L22.2001 11.4019C22.2813 11.4793 22.3459 11.5724 22.3901 11.6755C22.4343 11.7787 22.457 11.8897 22.457 12.0019C22.457 12.1141 22.4343 12.2251 22.3901 12.3282C22.3459 12.4314 22.2813 12.5245 22.2001 12.6019L13.6291 21.1719L12.4291 19.9719L19.5431 12.8579L1.88608 12.8579L1.88608 11.1429L19.5421 11.1429L12.4281 4.02888L13.6291 2.82887Z" fill="currentColor" />
                </svg>
            </div>
        );
    };
    // Configure the settings for the slider
    const sliderSettings = {
        // rtl: i18n.language === "ar" ? true : false,
        // initialSlide: 0, // Set initialSlide to 0
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <div className="mt-10 product-list" ref={ref}>
            <div className="container px-4 py-16 mx-auto sm:py-24 sm:px-6">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-7">
                    {title || 'Customers also purchased'}
                </h2>
                {loading ? (
                    <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {Array.from({ length: PRODUCT_LOADERS_COUNT }).map((_, index) => (
                            <ProductLoader key={index} />
                        ))}
                    </div>
                ) : (
                    <Slider {...sliderSettings} className="products-slider">
                        {extraProducts.map((productData: any) => (
                            <div key={productData.id} className={`px-3 ${i18n.language === "ar" ? 'font-sans-ar rtl' : 'font-sans-en ltr'}`}>
                                <ProductWidget product={productData} key={undefined} isItemInWishlist={false} />
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
}

