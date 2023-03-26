import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'




export default function Gallery() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    // centerMode: true,
    // swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    centerPadding: '10px',
    vertical: true,
    verticalSwiping: true,
  };

  const slidesData = [
    {
      id: 1
    }, {
      id: 2,
    }, {
      id: 3,
    }, {
      id: 4,
    }, {
      id: 5,
    }, {
      id: 6,
    },
  ];

  return (

    <div className="App">

      <div className="slider-wrapper flex p-2">

        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
          className="w-10/12 order-1"
        >

          {slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <img className="slick-slide-image" src={`https://picsum.photos/800/800?img=${slide.id}`} />
            </div>

          )}

        </Slider>
        <div className="thumbnail-slider-wrap w-2/12">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {slidesData.map((slide) =>

              <div className="slick-slide" key={slide.id}>
                <img className="slick-slide-image" src={`https://picsum.photos/800/800?img=${slide.id}`} />
              </div>

            )}

          </Slider>
        </div>
      </div>

    </div>
  )
}