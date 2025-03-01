import { useKeenSlider } from "keen-slider/react";
import React from "react";
import { IoStar } from "react-icons/io5";

const animation = { duration: 30000, easing: (t) => t };
const StartYourBusiness = ({ styles, slides }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 1,
      origin: "auto",
      spacing: 100,
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: {
          perView: 0.8,
        },
      },
      "(max-width: 990px)": {
        slides: {
          perView: 0.5,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 0.5,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: .7,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div
      ref={sliderRef}
      className="keen-slider py-[1.5rem] sm:py-[2rem] flex items-center relative bg-secondary text-white z-10"
    >
      <div className="absolute top-0 left-0 w-[20vw] h-full bg-gradient-to-r from-secondary via-white/25 to-secondary"></div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="keen-slider__slide w-screen text-center overflow-y-hidden text-nowrap"
        >
          <h2
            className={`${styles} text-center flex items-center gap-2 w-fit uppercase text-[1.9rem] sm:text-5xl md:text-6xl xl:text-[4rem] relative z-10 font-semibold`}
          >
            {/* <span className="text-white">&#9733;</span> */}
            <IoStar className="text-[1.2rem] sm:text-4xl md:text-5xl xl:text-[3.5rem] z-10 text-[#D9D9D9]" />
            {slide}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default StartYourBusiness;
