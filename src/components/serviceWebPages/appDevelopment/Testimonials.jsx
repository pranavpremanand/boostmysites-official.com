import { FaCircleUser } from "react-icons/fa6";
const Testimonial = ({ caseStudyDetails }) => {
  return (
    <div className="bg-white relative z-0">
      <div
        className="text-black wrapper bg-[#FFFF00] padding-between flex items-center justify-center z-[2] relative"
        data-aos="fade-up"
      >
        <div className="max-w-4xl">
          <div className="mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
              &quot;{caseStudyDetails.testimonial}&quot;
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <FaCircleUser className="w-12 h-12 rounded-full mr-4" />

              <div>
                <p className="text-gray-700">
                  {caseStudyDetails.testimonialBy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
