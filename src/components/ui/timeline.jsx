import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]); // Array to hold refs for each item
  const [height, setHeight] = useState(0);
  const [centeredIndex, setCenteredIndex] = useState(0); // Track the centered item

  // Adjust itemRefs based on data length
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, data.length);
  }, [data]);

  // Set container height
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // offset: ["start 10%", "end 50%"],
    offset: ["start 50%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

 // Manually calculate the centered item on scroll
 useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((item, index) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - itemCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setCenteredIndex(closestIndex);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case the page is already scrolled

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full font-sans md:px-10 overflow-hidden" ref={containerRef}>
      <div className="max-w-4xl w-full mx-auto">
        <div className="rounded-t-2xl p-4 bg-[#09254C]">
          <h5 className="text-xl font-semibold text-white text-center">
            Roadmap
          </h5>
        </div>
      </div>
      <div ref={ref} className="relative max-w-4xl bg-black mx-auto pb-20 flex flex-col gap-8 pt-[2rem]">
        {data.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (itemRefs.current[index] = el)} // Attach refs to each item
            className="flex justify-center md:gap-10"
          >
            <div className="sticky flex flex-row z-40 items-center top-40 self-start w-full">
              <div className="h-10 absolute md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
              </div>
              <div
                className={`flex flex-col gap-3 text-center items-center transition-colors rounded-xl duration-500 ease-in ml-[3.3rem] sm:mx-14 md:mx-20 p-5 sm:p-[2rem] border-4 ${
                  centeredIndex === index ? "border-primary" : "border-transparent"
                }`}
              >
                <h3 className="text-xl font-semibold tracking-wide text-primary">
                  {item.title}
                </h3>
                <p className="text-white font-light">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[1.1rem] md:left-[1.85rem] top-0 overflow-hidden w-[4px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[4px] bg-[#FFBB38] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
