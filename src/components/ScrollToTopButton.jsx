import React, { useEffect, useState } from "react";
import { RxCaretUp } from "react-icons/rx";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;

      // Show buttons if scrolling up or at top of page
      if (scrollingUp || currentScrollPos < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className={`z-50 hover:-translate-y-1 transition-all duration-300 hover:shadow-white/25 hover:shadow-large w-[3.5rem] h-[3.5rem] fixed bottom-5 right-5 bg-black border border-white/30 flex justify-center items-center backdrop-blur-3xl text-white text-[2.5rem] rounded-full ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[10rem] pointer-events-none"
      }`}
    >
      <RxCaretUp />
    </button>
  );
};

export default ScrollToTopButton;
