import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getExtraProducts } from '~/api/extraProducts';
import ProductLoader from './product/ProductLoader';
import { ProductWidget } from './product/ProductWidget';
import Slider from 'react-slick';
import i18n from 'i18next';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
    categorySlug: string;
    title: string;
    count: number;
}

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const PRODUCT_LOADERS_COUNT = 5;

export default function ExtraProducts({ categorySlug, count, title }: Props) {
    const [extraProducts, setExtraProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const products = await getExtraProducts(categorySlug, count);
                    setExtraProducts((prevProducts) => [...prevProducts, ...products]);
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
            <div className={`slick-prev ${className}`} onClick={onClick}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="46" height="46" rx="23" fill="white" />
                    <path d="M25.3575 16.3567L32.5 23.5009C32.5677 23.5654 32.6216 23.643 32.6584 23.729C32.6952 23.8149 32.7142 23.9074 32.7142 24.0009C32.7142 24.0944 32.6952 24.1869 32.6584 24.2729C32.6216 24.3588 32.5677 24.4364 32.5 24.5009L25.3575 31.6426L24.3575 30.6426L30.2859 24.7142L15.5717 24.7142L15.5717 23.2851L30.285 23.2851L24.3567 17.3567L25.3575 16.3567Z" fill="#163300" />
                    <rect x="1" y="1" width="46" height="46" rx="23" stroke="#868685" strokeWidth="2" />
                </svg>

            </div>
        );
    };

    const CustomNextArrow = (props: any) => {
        const { className, onClick } = props;
        return (
            <div className={`slick-next ${className}`} onClick={onClick}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="46" height="46" rx="23" fill="white" />
                    <path d="M23.3808 31.6433L16.2383 24.4991C16.1706 24.4346 16.1168 24.357 16.08 24.271C16.0431 24.1851 16.0242 24.0926 16.0242 23.9991C16.0242 23.9056 16.0431 23.8131 16.08 23.7271C16.1168 23.6412 16.1706 23.5636 16.2383 23.4991L23.3808 16.3574L24.3808 17.3574L18.4525 23.2858L33.1666 23.2858L33.1666 24.7149L18.4533 24.7149L24.3816 30.6433L23.3808 31.6433Z" fill="#163300" />
                    <rect x="1" y="1" width="46" height="46" rx="23" stroke="#868685" strokeWidth="2" />
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
        infinite: false,
        arrows: true,
        dots: false,
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
                    <Slider {...sliderSettings} className=''>
                    {extraProducts.map((productData: any) => (
                      <div key={productData.id} className='px-3'>
                        <ProductWidget product={productData} key={undefined} isItemInWishlist={false} />
                      </div>
                    ))}
                  </Slider>
                )}
            </div>
        </div>
    );
}

