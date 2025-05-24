import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import SliderWorksSection from "./components/SliderWorksSection";
import FAQ from "./components/FAQ";
import Banner from "./components/Banner";
import OurOffices from "../../../components/OurOffices";
import ContactForm from "../../../components/serviceWebPages/ContactForm";

const AppDevelopment = () => {
  const gradientRef1 = useRef(null);
  const gradientRef2 = useRef(null);
  const gradientRef3 = useRef(null);
  const gradientRef4 = useRef(null);

  useEffect(() => {
    // Set initial state
    gsap.set(gradientRef1.current, { x: "-110%", y: "-35%" });
    gsap.set(gradientRef2.current, { x: "110%", y: "-35%" });
    gsap.set(gradientRef3.current, { x: "110%", y: "40%", rotate: -15 });
    gsap.set(gradientRef4.current, { x: "-110%", y: "35%", rotate: 15 });

    // Create hover animation
    const handleMouseEnter = () => {
      gsap.to(gradientRef1.current, { x: "-50%", duration: 0.5 });
      gsap.to(gradientRef2.current, { x: "50%", duration: 0.5 });
      gsap.to(gradientRef3.current, {
        x: "50%",
        y: "40%",
        rotate: -15,
        duration: 0.5,
      });
      gsap.to(gradientRef4.current, { x: "-50%", duration: 0.5 });
    };

    const handleMouseLeave = () => {
      gsap.to(gradientRef1.current, { x: "-110%", duration: 0.5 });
      gsap.to(gradientRef2.current, { x: "110%", duration: 0.5 });
      gsap.to(gradientRef3.current, { x: "110%", y: "40%", duration: 0.5 });
      gsap.to(gradientRef4.current, { x: "-110%", duration: 0.5 });
    };

    const wrapper = gradientRef1.current.parentElement;
    wrapper.addEventListener("mouseenter", handleMouseEnter);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      wrapper.removeEventListener("mouseenter", handleMouseEnter);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <Banner />
      <section data-aos="fade-up" className="bg-[#0E0E0E]">
        <div className="wrapper overflow-hidden py-16 min-h-[70vh] flex items-center text-center relative">
          <div
            ref={gradientRef1}
            className="absolute left-0 top-0 z-[1] w-[30rem] h-[20rem] bg-gradient-to-b from-primary to-primary/10 -rotate-45"
          />
          <div
            ref={gradientRef2}
            className="absolute right-0 top-0 z-[1] w-[30rem] h-[20rem] bg-gradient-to-l from-primary to-primary/10 rotate-45"
          />
          <div
            ref={gradientRef3}
            className="absolute right-0 bottom-0 z-[1] w-[60rem] sm:w-[90rem] h-[10rem] sm:h-[20rem] bg-gradient-to-l from-primary/10 to-primary -rotate-45"
          />
          <div
            ref={gradientRef4}
            className="absolute left-0 bottom-0 z-[1] w-[60rem] sm:w-[90rem] h-[10rem] sm:h-[20rem] bg-gradient-to-l from-primary/10 to-primary -rotate-45"
          />
          <div className="wrapper flex flex-col items-center justify-center">
            <h2 className="section-heading !mb-8 z-[2]">
              <span className="text-primary">Tailored Experiences</span> for
              Every User
            </h2>
            <p className="casestudy-desc mb-8 z-[2]">
              Forget one-size-fits-all. We deliver native app experiences that
              feel right, every time.
            </p>
            <Link
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              to="contact"
              className="primary-btn w-fit z-[2]"
            >
              Craft your App With Us!
            </Link>
          </div>
        </div>
      </section>
      <SliderWorksSection />
      <section className="py-16 wrapper">
        <h2 data-aos="fade-up" className="section-heading">
          Numbers that define our
          <span className="text-primary"> app design capabilities!</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-10 lg:gap-16 text-black">
          <div
            data-aos="fade-up"
            className="rounded-xl flex flex-col justify-center gap-4 items-center text-center bg-[#ff9934] from-white to-[#ff9934_80%] hover:bg-gradient-to-b transition-all duration-300 p-9 text-black"
          >
            <h2 className="text-4xl md:text-5xl font-bold">17%</h2>
            <p className="font-semibold">
              Growth Seen in the Client Engement And Insights
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-xl flex flex-col justify-center gap-4 items-center text-center bg-[#ff9934] from-white to-[#ff9934_80%] hover:bg-gradient-to-b transition-all duration-300 p-9 text-black"
          >
            <h2 className="text-4xl md:text-5xl font-bold">6K+</h2>
            <p className="font-semibold">Happy Clients</p>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-xl flex flex-col justify-center gap-4 items-center text-center bg-[#ff9934] from-white to-[#ff9934_80%] hover:bg-gradient-to-b transition-all duration-300 p-9 text-black"
          >
            <h2 className="text-4xl md:text-5xl font-bold">+31%</h2>
            <p className="font-semibold">
              Client conversion increased after giving a design upgrade!
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-xl flex flex-col justify-center gap-4 items-center text-center bg-[#ff9934] from-white to-[#ff9934_80%] hover:bg-gradient-to-b transition-all duration-300 p-9 text-black"
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              Realestate Brokerage -Seamless Operations
            </h2>
          </div>
        </div>
        <div data-aos="fade-up" className="mt-16 flex justify-center">
          <Link
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            to="contact"
            className="primary-btn w-fit z-[2]"
          >
            Get Quotation Now
          </Link>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactForm title={"Let's Collaborate"} service="App Development" />
      <div className="wrapper">
        <OurOffices />
      </div>
    </div>
  );
};

export default AppDevelopment;

const faqs = [
  {
    question: "What is involved in your app design services?",
    answer:
      "At BoostMySites, our app design services include user research, UI/UX design, wireframing, prototyping, and visual design. We focus on creating intuitive, engaging, and conversion-focused mobile experiences tailored to your business goals.",
  },
  {
    question: "How long does it take to design an app?",
    answer:
      "The timeline depends on the complexity and scope of the project. On average, app design takes between 2 to 6 weeks. We ensure timely delivery without compromising quality or user experience.",
  },
  {
    question:
      "What should I expect if I hire your company for app design services?",
    answer:
      "You can expect a collaborative process that includes regular updates, user-centric design decisions, and complete transparency. From ideation to handoff, our team ensures the app reflects your brand and meets your business objectives.",
  },
  {
    question: "What are the steps involved in your app design and development?",
    answer:
      "Our process includes: Discovery & Research, Wireframing & Prototyping, UI/UX Design, Development (Frontend & Backend), Testing & QA, Deployment & Support. We guide you through every stage, ensuring a smooth and effective launch.",
  },
  {
    question: "Why is BoostMySites different from others in app design?",
    answer:
      "BoostMySites combines creative design with strategic thinking and advanced tech integration. We don't just build apps—we build scalable, user-friendly experiences that align with your growth goals. Our edge lies in our ability to integrate AI, automation, and performance-focused design into every product we deliver.",
  },
];
