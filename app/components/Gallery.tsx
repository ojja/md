import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    focusOnSelect: true,
    arrows: false,
    centerPadding: '10px',
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 3,
        },
      },
    ],
  };

  const slidesData = [
    {
      id: 1,
      img: "https://picsum.photos/800/800?img=1",
      thumb: "https://picsum.photos/100/100?img=1",
    },
    {
      id: 2,
      img: "https://picsum.photos/800/800?img=2",
      thumb: "https://picsum.photos/100/100?img=2",
    },
    {
      id: 3,
      img: "https://picsum.photos/800/800?img=3",
      thumb: "https://picsum.photos/100/100?img=3",
    },
    {
      id: 4,
      img: "https://picsum.photos/800/800?img=4",
      thumb: "https://picsum.photos/100/100?img=4",
    },
    {
      id: 5,
      img: "https://picsum.photos/800/800?img=5",
      thumb: "https://picsum.photos/100/100?img=5",
    },
    {
      id: 6,
      img: "https://picsum.photos/800/800?img=6",
      thumb: "https://picsum.photos/100/100?img=6",
    },
  ];

  return (
    <div className="gallery-slider-wrapper flex p-2">
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={slider => (setSlider1(slider))}
        className="w-10/12 order-1"
      >
        {slidesData.map(slide => (
          <div className="slick-slide" key={slide.id}>
            <img
              className="slick-slide-image"
              src={`https://picsum.photos/800/800?img=${slide.id}`}
            />
          </div>
        ))}
      </Slider>
      <div className="gallery-thumbnail-slider-wrap w-2/12">
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={slider => (setSlider2(slider))}
        >
          {slidesData.map(slide => (
            <div className="slick-slide" key={slide.id}>
              <img
                className="slick-slide-image"
                src={`https://picsum.photos/800/800?img=${slide.id}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}