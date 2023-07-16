import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ProductLoader from './product/ProductLoader';
import ProductWidget from './product/ProductWidget';
import Slider from 'react-slick';
import i18n from 'i18next';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { getUpSellingProducts } from '~/api/upselling';

interface Props {
    productID: number;
    title: string;
    isEmpty: boolean;
}

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const PRODUCT_LOADERS_COUNT = 5;

export default function UpSellingProducts({ productID, title , isEmpty}: Props) {
    const [upSellingProducts, setUpSellingProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const products = await getUpSellingProducts(productID);
                    console.log('here', products)
                    if (Array.isArray(products)) {
                        setUpSellingProducts((prevProducts) => [...prevProducts, ...products]);
                    }
                } catch (error) {
                    console.error('Error fetching extra products:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [productID, inView]);

    // const isUpSellingProductsEmpty = upSellingProducts.length === 0;

    const CustomPrevArrow = (props: any) => {
        const { className, onClick } = props;
        return (
            <div className={`slick-prev ${className}`} onClick={onClick}>
                {/* SVG code for custom prev arrow */}
            </div>
        );
    };

    const CustomNextArrow = (props: any) => {
        const { className, onClick } = props;
        return (
            <div className={`slick-next ${className}`} onClick={onClick}>
                {/* SVG code for custom next arrow */}
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
        <>
            {/* {isUpSellingProductsEmpty == true ? '' : */}
                <div className={`mt-10 product-list ${isEmpty == true? 'hidden':''}`} ref={ref}>
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
                            <Slider {...sliderSettings} className="">
                                {upSellingProducts.map((productData: any) => (
                                    <div key={productData.id} className="px-3">
                                        <ProductWidget product={productData} key={undefined} isItemInWishlist={false} />
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
            {/* } */}
        </>
    );
}
