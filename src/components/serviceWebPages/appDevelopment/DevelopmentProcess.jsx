const DevelopmentProcess = ({ caseStudyDetails }) => {
  return (
    <div className="relative bg-black pt-[15rem] pb-[10rem] !-mt-[7rem] -z-[1]">
      <div className="wrapper">
        <h1 className="text-green-300 text-4xl font-bold mb-8">Results</h1>
        <div className=" flex flex-col gap-16">
          {caseStudyDetails.results.map((obj, index) => (
            <ol key={obj.title} data-aos="fade-up">
              <li>
                <h1 className="text-[#E4C9FC] text-lg font-semibold">
                  {index + 1}. {obj.type}
                </h1>
                <p className="text-white text-lg font-semibold">
                  {obj.description}
                </p>
              </li>
            </ol>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
