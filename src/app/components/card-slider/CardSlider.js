"use client";
import React, { memo, useRef } from "react";
import Slider from "react-slick";
import CardSliderImage from "/public/images/rb_6059 1.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

const CardSlider = ({ data }) => {
  let sliderRef = useRef(null);

  // Function to navigate to the next slide
  const next = () => {
    sliderRef.slickNext();
  };

  // Function to navigate to the previous slide
  const previous = () => {
    sliderRef.slickPrev();
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      {/* Slider component */}
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {/* Map through the data to render slides */}
        {data.data.map((item) => {
          return (
            <div key={item.id} className="px-2">
              {/* Image container */}
              <div className="bg-[#f5f5f5] rounded-[28px] w-[157px] h-[157px] flex justify-center items-center mx-auto">
                <div>
                  <Image
                    width={200}
                    height={200}
                    src={item.image}
                    alt={item.name}
                    className="object-cover" // Ensure the image fits well
                  />
                </div>
              </div>
              {/* Text below the image */}
              <h2 className="text-[18px] font-bold mt-3 text-center">
                {item.name}
              </h2>
            </div>
          );
        })}
      </Slider>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center gap-5 mt-5">
   
        <button
          className="w-[50px] h-[50px] rounded-[15px] bg-[#E8EDF2] flex justify-center items-center"
          onClick={next}
        >
          <MdOutlineNavigateBefore size={24} />
        </button>
        <button
          className="w-[50px] h-[50px] rounded-[15px] text-white bg-[#1A4B7B] flex justify-center items-center"
          onClick={previous}
        >
          <MdOutlineNavigateNext size={24} />
        </button>
      </div>
    </div>
  );
};

export default memo(CardSlider);