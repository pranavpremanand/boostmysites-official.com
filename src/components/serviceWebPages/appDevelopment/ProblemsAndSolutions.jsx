const ProblemsAndSolutions = ({ caseStudyDetails }) => {
  return (
    <div className="bg-white text-black">
      <div className="wrapper padding-between">
        <h1 className="text-xl font-semibold" data-aos="fade-right">
          Our Approach{" "}
        </h1>
        <div className=" grid md:grid-cols-3">
          <h1 className="text-xl font-semibold" data-aos="fade-right">
            Research & Strategy{" "}
          </h1>
          <p className="md:col-span-2" data-aos="fade-left">
            {caseStudyDetails.approach.researchStrategy}
          </p>
        </div>
        <div className=" grid md:grid-cols-3 mt-16">
          <h1 className="text-xl font-semibold" data-aos="fade-right">
            Design & Development{" "}
          </h1>
          <p className="md:col-span-2 flex flex-col gap-4" data-aos="fade-left">
            {caseStudyDetails.approach.designDevelopment.map((obj, i) => (
              <div key={i}>
                <h3 className="text-base flex items-center gap-1 font-semibold ">
                  <div className="bg-black w-1 h-1 rounded-full" />
                  {obj.type}
                </h3>
                <p>{obj.description}</p>
              </div>
            ))}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 pt-[4rem]">
          {caseStudyDetails.firstImageSet.map((obj, i) => (
            <img
              src={obj}
              key={i}
              alt="images"
              className="rounded-xl max-h-[60rem]"
            />
          ))}
        </div>

        <div className=" grid md:grid-cols-3 mt-16">
          <h1 className="text-xl font-semibold" data-aos="fade-right">
            Organic Growth & Marketing{" "}
          </h1>
          <p className="md:col-span-2 flex flex-col gap-4" data-aos="fade-left">
            {caseStudyDetails.approach.organicGrowthMarketing.map((obj, i) => (
              <div key={i}>
                <h3 className="text-base flex items-center gap-1 font-semibold ">
                  <div className="bg-black w-1 h-1 rounded-full" />
                  {obj.type}
                </h3>
                <p>{obj.description}</p>
              </div>
            ))}
          </p>
        </div>

        <div className=" grid md:grid-cols-3 pt-[4rem]">
          <h1 className="text-xl font-semibold" data-aos="fade-right">
            Continuous Optimization{" "}
          </h1>
          <p className="md:col-span-2" data-aos="fade-left">
            {caseStudyDetails.approach.continuousOptimization}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 pt-[4rem]">
          {caseStudyDetails.secondImageSet.map((obj, i) => (
            <img
              key={i}
              src={obj}
              alt="images"
              className="rounded-xl w-full object-cover max-h-[60rem]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemsAndSolutions;
