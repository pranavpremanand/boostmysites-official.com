import ContactForm from "../../../components/serviceWebPages/ContactForm";
import CaseStudyBanner from "../../../components/serviceWebPages/appDevelopment/CaseStudyBanner";
import OurOffices from "../../../components/OurOffices";
import Projects from "../../../components/serviceWebPages/appDevelopment/Projects";

const AppDevelopmentCaseStudy = () => {
  return (
    <>
      <CaseStudyBanner />
      <Projects />
      <ContactForm title={"Have a Project Idea?"} service="App Development"/>
      <div className="wrapper">
        <OurOffices />
      </div>
    </>
  );
};

export default AppDevelopmentCaseStudy;
