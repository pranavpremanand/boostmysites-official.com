import { ArrowUpRight } from "lucide-react";

const CaseStudyBanner = () => {
  return (
    <div className="bg-black h-screen relative overflow-hidden  ">
      <div className="wrapper flex items-center h-full ">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2">
          {/* Header Section */}
          <div className="md:text-start text-center">
            <h1 className="banner-heading text-white mb-8" data-aos="fade-up">
              Our Case Study
            </h1>
            <p className="desc !text-white" data-aos="fade-up">
              An Experience design agency building high-end products and
              experiences that grow your business exponentially.
            </p>
          </div>

          {/* Image Section with Build Together Button */}
          <div
            className="flex items-center justify-center mb-16 md:mb-0"
            data-aos="zoom-in"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
              <div className="absolute inset-0 bg-yellow-300 rounded-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 animate-spin-slow">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <path
                            id="circle"
                            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          />
                        </defs>
                        <text className="  text-[0.53rem] font-bold uppercase">
                          <textPath href="#circle" startOffset="0%">
                            LET&apos;S BUILD TOGETHER • LET&apos;S BUILD
                            TOGETHER •
                          </textPath>
                        </text>
                      </svg>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaseStudyBanner;
