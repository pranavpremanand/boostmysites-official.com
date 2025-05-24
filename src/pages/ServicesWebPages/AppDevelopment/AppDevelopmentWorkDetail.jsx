import AboutAppDev from "../../../components/serviceWebPages/appDevelopment/AboutAppDev";
import DevelopmentProcess from "../../../components/serviceWebPages/appDevelopment/DevelopmentProcess";
import ProblemsAndSolutions from "../../../components/serviceWebPages/appDevelopment/ProblemsAndSolutions";
import Testimonial from "../../../components/serviceWebPages/appDevelopment/Testimonials";
import AppDevBanner from "../../../components/serviceWebPages/appDevelopment/AppDevBanner";
import impactbg from "../../../assets/images/servicewebpages/app development/impactbgimg.png";
import Projects from "../../../components/serviceWebPages/appDevelopment/Projects";
import { useParams } from "react-router-dom";
import { appDevelopmentCaseStudies } from "../../../data/caseStudies/appDevelopment";
import ContactForm from "../../../components/serviceWebPages/ContactForm";
import OurOffices from "../../../components/OurOffices";

const AppDevelopmentWorkDetail = () => {
  const { id } = useParams();

  const caseStudyDetails = appDevelopmentCaseStudies[id - 1];
  return (
    <div>
      <AppDevBanner caseStudyDetails={caseStudyDetails} />
      <AboutAppDev caseStudyDetails={caseStudyDetails} />
      <ProblemsAndSolutions caseStudyDetails={caseStudyDetails} />
      <Testimonial caseStudyDetails={caseStudyDetails} />
      <DevelopmentProcess caseStudyDetails={caseStudyDetails} />
      <div className="relative bg-white text-black overflow-hidden padding-between h-[77vh] flex justify-center items-center">
        <div className="absolute left-0  top-0 z-[1]">
          <img src={impactbg} alt="impactbg" data-aos="fade-right" />
        </div>
        <div className="padding-between">
          <h1
            className="text-black text-6xl sm:text-8xl font-bold text-center"
            data-aos="fade-up"
          >
            Impact
            <br /> <span className="text-[#97979B]">We Created</span>
          </h1>
        </div>
      </div>
      <div className="bg-[#D6DCE1] padding-between">
        <h1
          className="text-black text-6xl sm:text-8xl font-bold text-start wrapper"
          data-aos="fade-up"
        >
          Related
          <br />{" "}
          <span className="text-[#97979B] md:ml-[10rem] lg:ml-[20rem]">
            Case Studies
          </span>
        </h1>
      </div>
      <Projects />
      <ContactForm title={"Have a Project Idea?"} service="App Development" />
      <div className="wrapper">
        <OurOffices />
      </div>
    </div>
  );
};

export default AppDevelopmentWorkDetail;
