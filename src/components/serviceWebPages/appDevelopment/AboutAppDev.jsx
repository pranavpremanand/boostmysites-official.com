import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutWebDev = ({ caseStudyDetails }) => {
  return (
    <div className=" bg-black text-white p-6 md:p-12">
      <div className="wrapper">
        <div className="mb-16">
          <h1 className="section-heading" data-aos="fade-up">
            {caseStudyDetails.client}
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-16 sm:justify-items-center">
          <div>
            <h1 className="casestudy-heading">CLIENT</h1>
            <p className="casestudy-desc pt-3">
              {caseStudyDetails.client} App
            </p>
          </div>
          <div>
            <h1 className="casestudy-heading">Category</h1>
            <p className="casestudy-desc pt-3">
              {caseStudyDetails.businessType}
            </p>
          </div>
          <div>
            <h1 className="casestudy-heading">INDUSTRY</h1>
            <p className="casestudy-desc pt-3">
              {caseStudyDetails.industry}
            </p>
          </div>
          <div>
            <h1 className="casestudy-heading pb-3">LIVE VIEW</h1>
            <Link
              to={caseStudyDetails.url}
              className="text-blue-500 flex items-center"
            >
              Visit App <ArrowUpRight size={20} />
            </Link>
          </div>
          <div>
            <h1 className="casestudy-heading">SERVICE WE PROVIDED</h1>
            <ul className="casestudy-desc pt-3">
              {caseStudyDetails.servicesProvided.map((obj) => (
                <li>{obj}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t w-full border-slate-700" />
        <div className="flex flex-col gap-8 mb-16 pt-[4rem]">
          <div className="grid md:grid-cols-3">
            <h1>Company Overview</h1>
            <p className="col-span-2">{caseStudyDetails.companyOverview}</p>
          </div>
          <div className="grid md:grid-cols-3">
            <h1>Company Objective</h1>
            <p className="col-span-2">{caseStudyDetails.objective}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWebDev;
