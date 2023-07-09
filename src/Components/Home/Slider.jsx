import React from "react";
// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import { EffectCards, EffectCreative, Autoplay } from "swiper";

// Desktop slide images
import Image_1 from "../../assets/Slide-image/image-1.png";
import Image_2 from "../../assets/Slide-image/image-2.png";
import Image_3 from "../../assets/Slide-image/image-3.png";
import Image_4 from "../../assets/Slide-image/image-4.png";
import Image_5 from "../../assets/Slide-image/image-5.png";
const Image1 = [
  { img: Image_1 },
  { img: Image_2 },
  { img: Image_3 },
  { img: Image_4 },
  { img: Image_5 },
];
const Image2 = [
  { img: Image_2 },
  { img: Image_3 },
  { img: Image_4 },
  { img: Image_5 },
  { img: Image_1 },
];
const Image3 = [
  { img: Image_3 },
  { img: Image_4 },
  { img: Image_5 },
  { img: Image_1 },
  { img: Image_2 },
];
const Image4 = [
  { img: Image_4 },
  { img: Image_5 },
  { img: Image_1 },
  { img: Image_2 },
  { img: Image_3 },
];
const Image5 = [
  { img: Image_5 },
  { img: Image_1 },
  { img: Image_2 },
  { img: Image_3 },
  { img: Image_4 },
];

// Mobile slide image
import Pic_1 from "../../assets/Mobile-slide/image-1.png";
import Pic_2 from "../../assets/Mobile-slide/image-2.png";
import Pic_3 from "../../assets/Mobile-slide/image-3.png";
const Pics = [{ img: Pic_1 }, { img: Pic_2 }, { img: Pic_3 }];

const Slider = () => {
  return (
    // slideshow
    <>
      <div className="my-20 mx-auto z-[-1]">
        {/* Deskop slideshow */}
        <div className="lg:block hidden mx-5 max-w-full ">
          <div className="flex justify-between mx-auto items-center ">
            <Swiper
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              autoplay={{
                delay: 2400,
              }}
              modules={[EffectCards, Autoplay]}
              className="w-1/4 transition-all duration-150 ease-linear"
            >
              {Image1.map((slides, i) => (
                <SwiperSlide key={i}>
                  <img src={slides.img} alt="" className="w-fit h-fit" />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              autoplay={{
                delay: 2300,
              }}
              modules={[EffectCards, Autoplay]}
              className="w-1/4 transition-all duration-150 ease-linear"
            >
              {Image2.map((slides, i) => (
                <SwiperSlide key={i}>
                  <img src={slides.img} alt="" className="w-fit h-fit" />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              autoplay={{
                delay: 2200,
              }}
              modules={[EffectCards, Autoplay]}
              className="w-1/4 transition-all duration-150 ease-linear"
            >
              {Image3.map((slides, i) => (
                <SwiperSlide key={i}>
                  <img src={slides.img} alt="" className="w-fit h-fit" />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              autoplay={{
                delay: 2100,
              }}
              modules={[EffectCards, Autoplay]}
              className="w-1/4 transition-all duration-150 ease-linear"
            >
              {Image4.map((slides, i) => (
                <SwiperSlide key={i}>
                  <img src={slides.img} alt="" className="w-fit h-fit" />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              autoplay={{
                delay: 2000,
              }}
              modules={[EffectCards, Autoplay]}
              className="w-1/4 transition-all duration-150 ease-linear"
            >
              {Image5.map((slides, i) => (
                <SwiperSlide key={i}>
                  <img src={slides.img} alt="" className="w-fit h-fit" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* Mobile slideshow */}
        <Swiper
          effect={"cards"}
          autoplay={true}
          modules={[EffectCards, Autoplay]}
          className=" max-w-xs md:max-w-xl mx-auto lg:hidden block transition-all duration-150 ease-linear"
        >
          {Pics.map((slide, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <img
                src={slide.img}
                alt=""
                className="bg-none shadow-none w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
