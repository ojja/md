import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { v4 } from 'uuid';
import i18n from 'i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface GalleryImage {
    imageSrc: string;
}
interface GalleryHomeProps {
    galleryImages: GalleryImage[];
}

export default function GalleryHome({ galleryImages = [] }: GalleryHomeProps) {
    // const GalleryHome = ({ galleryImages = [] }) => {

    const [language, setLanguage] = useState(i18n.language);

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, [slider1, slider2]);
    const CustomPrevArrow = (props) => (
        <button {...props} className=''>
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="6" height="6" rx="32" fill="black" />
                <path d="M33.6291 22.8289L42.2001 31.4019C42.2813 31.4793 42.3459 31.5724 42.3901 31.6755C42.4343 31.7787 42.457 31.8897 42.457 32.0019C42.457 32.1141 42.4343 32.2251 42.3901 32.3282C42.3459 32.4314 42.2813 32.5245 42.2001 32.6019L33.6291 41.1719L32.4291 39.9719L39.5431 32.8579L21.8861 32.8579L21.8861 31.1429L39.5421 31.1429L32.4281 24.0289L33.6291 22.8289Z" fill="white" />
            </svg>

        </button>
    );

    const CustomNextArrow = (props) => (
        <button {...props}>
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button>
    );

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
        fade: true,
        arrows: true,
        // asNavFor: nav2,
        rtl: i18n.language === "ar" ? true : false,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };


    return (
        <div className="overflow-hidden gallery-slider-wrapper" data-lang={language}
        // dir={i18n.language==="ar" ? 'rtl' : 'ltr'}
        >
            <Slider
                {...settingsMain}
                // asNavFor={nav2}
                ref={slider => (setSlider1(slider))}
                className="order-1"
                style={{ direction: i18n.language === "ar" ? 'rtl' : 'ltr' }}
            >
                {galleryImages.map(slide => (
                    <div className="slick-slide" key={v4()}>
                        <img
                            className="slick-slide-image w-full"
                            src={slide.imageSrc}
                        />
                    </div>
                ))}
            </Slider>

        </div>
    );
}