import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

const ThankYou = ({ pathToRedirect }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Change 100 to whatever scroll position you prefer
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed z-50 py-3 flex justify-center w-full top-0 left-0 ${
          isScrolled ? "backdrop-blur-md bg-black/30" : "bg-black"
        }`}
      >
        <div className="w-full">
          <div className="wrapper flex justify-between items-center w-full">
            <Link to={pathToRedirect} className="cursor-pointer">
              <img loading="lazy" 
                src={logo}
                alt=""
                className="h-[4rem] md:h-[5rem] object-contain -mb-3"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="landing-page h-screen flex flex-col gap-8 justify-between pt-[10rem] text-white">
        <div className="wrapper h-3/4 flex justify-center items-center">
          <div data-aos="fade-up" className="backdrop-blur-lg flex flex-col gap-3 items-center justify-center shadow-white/20 rounded-lg p-6 shadow-large">
            <div className="h-[4rem] w-[4rem] bg-green-500 rounded-full p-3 text-3xl sm:text-4xl flex justify-center items-center">
              ✔
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-primary1">
              Thank you!
            </h1>
            <p className="max-w-[30rem] text-center text-gray-200 text-sm md:text-base text-balance">
              Thanks for contacting us, one of our associates will get in
              touch with you soon! <br /> Let's make some big bucks together!!!
            </p>
            <Link
              to={pathToRedirect}
              className="mt-3 text-sm cursor-pointer flex justify-center bg-primary1 hover:-translate-y-1 shadow-large shadow-transparent hover:shadow-primary/[35%] text-white border border-primary1 py-3 px-4 rounded-full transition-all duration-300"
            >
              Home Page
            </Link>
          </div>
        </div>
      <div className="flex backdrop-blur-sm flex-col gap-4 md:items-center justify-center py-[1.8rem] text-white mt-14 border-t border-gray-800/70">
        <div className="wrapper w-full flex md:flex-row flex-col items-center justify-between gap-10">
          <img loading="lazy"  src={logo} alt="logo" className="h-[5rem] object-contain" />
        </div>
      </div>
      </div>
    </>
  );
};
export default ThankYou;
