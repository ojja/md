import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { fetchFilterProducts } from '~/utils/productsAPI';
import ProductLoader from './product/ProductLoader';
import ProductWidget from './product/ProductWidget';
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

const PRODUCT_LOADERS_COUNT = 5;

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
            <div className={`slick-prev before:content-none -left-12 ${className}`} onClick={onClick}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="46" height="46" rx="23" fill="white" />
                    <path d="M23.3808 31.6433L16.2383 24.4991C16.1706 24.4346 16.1168 24.357 16.08 24.271C16.0431 24.1851 16.0242 24.0926 16.0242 23.9991C16.0242 23.9056 16.0431 23.8131 16.08 23.7271C16.1168 23.6412 16.1706 23.5636 16.2383 23.4991L23.3808 16.3574L24.3808 17.3574L18.4525 23.2858L33.1666 23.2858L33.1666 24.7149L18.4533 24.7149L24.3816 30.6433L23.3808 31.6433Z" fill="#163300" />
                    <rect x="1" y="1" width="46" height="46" rx="23" stroke="#868685" strokeWidth="2" />
                </svg>
            </div>
        );
    };

    const CustomNextArrow = (props: any) => {
        const { className, onClick } = props;
        return (
            <div className={`slick-next before:content-none ${className}`} onClick={onClick}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="46" height="46" rx="23" fill="white" />
                    <path d="M25.3575 16.3567L32.5 23.5009C32.5677 23.5654 32.6216 23.643 32.6584 23.729C32.6952 23.8149 32.7142 23.9074 32.7142 24.0009C32.7142 24.0944 32.6952 24.1869 32.6584 24.2729C32.6216 24.3588 32.5677 24.4364 32.5 24.5009L25.3575 31.6426L24.3575 30.6426L30.2859 24.7142L15.5717 24.7142L15.5717 23.2851L30.285 23.2851L24.3567 17.3567L25.3575 16.3567Z" fill="#163300" />
                    <rect x="1" y="1" width="46" height="46" rx="23" stroke="#868685" strokeWidth="2" />
                </svg>
            </div>
        );
    };
    // Configure the settings for the slider
    const sliderSettings = {
        // rtl: i18n.language === "ar" ? true : false,
        // initialSlide: 0, // Set initialSlide to 0
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
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
        <div className="mt-10 border-b-2 py-16 sm:py-24" ref={ref}>
            <div className="container px-6 mx-auto sm:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 px-2">{title || 'Customers also purchased'}</h2>
                {loading ? (
                    <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
                        {Array.from({ length: PRODUCT_LOADERS_COUNT }).map((_, index) => (
                            <ProductLoader key={index} />
                        ))}
                    </div>
                ) : (
                    <div className='z-20 mt-6'>
                        <Slider {...sliderSettings} className="products-slider">
                            {extraProducts.map((productData: any) => (
                                <div key={productData.id} className='px-3'>
                                    <ProductWidget product={productData} key={undefined} isItemInWishlist={false} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
            </div>
        </div>
    );
}
