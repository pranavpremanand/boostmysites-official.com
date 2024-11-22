import React from "react";
import { RxCaretUp } from "react-icons/rx";

const ScrollToTopButton = () => {
  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className="z-50 hover:-translate-y-1 transition-all duration-300 hover:shadow-white/25 hover:shadow-large w-[3.5rem] h-[3.5rem] fixed bottom-5 right-5 bg-black border border-white/30 flex justify-center items-center backdrop-blur-3xl text-white text-[2.5rem] rounded-full"
    >
      <RxCaretUp />
    </button>
  );
};

export default ScrollToTopButton;
