// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const Roadmap = () => {
//   const progressBarRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const documentHeight = document.documentElement.scrollHeight;
//       const windowHeight = window.innerHeight;
//       const totalScroll = documentHeight - windowHeight;

//       // Calculate scroll progress as a percentage
//       const progress = (scrollTop / totalScroll) * 100;

//       // Use GSAP to animate the height of the progress bar
//       gsap.to(progressBarRef.current, {
//         height: `${progress}%`,
//         duration: 0.2,
//       });
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="wrapper flex flex-col items-center relative">
//       {/* Progress Bar */}
//       <div
//         ref={progressBarRef}
//         className="fixed top-0 left-0 w-1 bg-blue-500 z-50"
//         style={{ height: "0%" }} // Start with 0 height
//       ></div>

//       {/* Roadmap Content */}
//       <div className="max-w-4xl w-full bg-black">
//         <div className="rounded-t-2xl p-4 bg-[#09254C]">
//           <h5 className="text-xl font-semibold text-white text-center">Roadmap</h5>
//         </div>
//         <div className="flex flex-col gap-7">
//           {roadmap.map((item) => (
//             <div key={item.id} className="flex flex-col gap-3 text-center items-center p-5">
//               <h3 className="text-2xl font-medium text-primary">{item.title}</h3>
//               <p className="text-white font-light">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Roadmap;

import React from "react";
import { Timeline } from "../ui/timeline";
import { roadmap } from "../../constant";

const Roadmap = () => {
  return (
    <div>
      <Timeline data={roadmap} />
    </div>
  );
};

export default Roadmap;
