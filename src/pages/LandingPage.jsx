import { lazy } from "react";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";
import bannerBgVid from "../assets/videos/banner-landing.mp4";
import RoadmapWithAccordion from "../components/landingPage/RoadmapWithAccordion";
import { aiExpertAccesses, subscriptionBenefits } from "../data/constant";
const Banner = lazy(() => import("../components/landingPage/Banner"));
const FeaturedIn = lazy(() => import("../components/FeaturedIn"));
const FAQ = lazy(() => import("../components/FAQ"));
const JoinEntrepreneurs = lazy(() => import("../components/JoinEntrepreneurs"));
const Reviews = lazy(() => import("../components/Reviews"));
const Videos = lazy(() => import("../components/Videos"));
const OurOffices = lazy(() => import("../components/OurOffices"));

const LandingPage = ({ path, emailIdToSendMail }) => {
  const [introVidIsPlaying, setIntroVidIsPlaying] = useState(false);
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const popupShown = localStorage.getItem("popupFormShown");
  //   if (!popupShown) {
  //     setShowPopup(true);
  //   }
  // }, []);
  return (
    <div className="landing-page relative" id="home">
      {/* {showPopup && (
        <PopupForm
          setShowPopup={setShowPopup}
          emailIdToSendMail={emailIdToSendMail}
        />
      )} */}
      <div className="min-h-screen flex items-center relative">
        <div className="landing-page-bg h-full w-full absolute left-0 top-0">
          <div className="absolute inset-0 h-full w-full bg-black/60 z-[1]"></div>
          <ReactPlayer
            url={bannerBgVid}
            playing
            muted
            playsinline
            loop
            pip={false}
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                  },
                },
              },
            }}
          />
        </div>
        <div className="wrapper h-fit">
          <Banner
            introVidIsPlaying={introVidIsPlaying}
            setIntroVidIsPlaying={setIntroVidIsPlaying}
            path={path}
          />
        </div>
      </div>
      <section className="pt-20">
        <FeaturedIn />
      </section>
      <div className="wrapper">
        <section
          id="features"
          className="flex flex-col items-center justify-center gap-10 text-center section-pt"
        >
          <div className="flex flex-col gap-2 items-center">
            <p
              data-aos="fade-up"
              className="tracking-widest text-lg font-light text-white/80"
            >
              Top-Notch Features
            </p>
            <h2 data-aos="fade-up" className="text-4xl font-bold text-white">
              Access These Exclusive Subscription Benefits
            </h2>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-7 mt-5 text-white"
          >
            {subscriptionBenefits.map(({ id, title, description, icon }) => {
              const Icon = icon;
              return (
                <div
                  className="p-5 bg-black flex flex-col items-center text-center gap-2 hover:border-t-4 border-primary transition-all duration-150"
                  key={id}
                >
                  <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-white flex items-center justify-center">
                    <Icon className="h-[2rem] w-[2rem] fill-primary1 object-contain" />
                  </div>
                  <h4 className="text-2xl font-semibold leading-tight mt-2">
                    {title}
                  </h4>
                  <p className="font-light text-white/80">{description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section-pt flex flex-col items-center justify-center text-center gap-10">
          <h2
            data-aos="zoom-in"
            className=" text-[2.7rem] leading-[3rem] md:text-5xl font-semibold text-primary text-center"
          >
            Launch the company <br />
            {"you've always envisioned."}
          </h2>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-3 w-full justify-center items-center"
          >
            <Link
              className="primary-btn font-medium w-[20rem] flex justify-center py-3"
              to={
                path === "/" ? `${path}contact/step1` : `${path}/contact/step1`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started Now
            </Link>
            <JoinEntrepreneurs />
          </div>
          <div className="text-white" data-aos="fade-up">
            <p className="text-white/80 max-w-[40rem] font-light">
              We are constantly adding new technology and creation methods that
              we couldn’t previously disclose. Join{" "}
              <span className="text-white font-medium">Boostmysites</span> and
              level up now.
            </p>
          </div>
        </section>

        {/* <FormSection emailIdToSendMail={emailIdToSendMail} /> */}

        <section
          id="courses"
          data-aos="fade-up"
          className="section-pt text-white"
        >
          <h2 className="text-4xl font-bold text-white text-center">
            Services We Offer
          </h2>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-10 max-w-3xl mx-auto">
            {aiExpertAccesses.map((access) => (
              <div
                key={access.title}
                style={{ backgroundImage: `url(${encodeURI(access.img)})` }}
                className="shadow-large shadow-white/10 relative bg-center group overflow-hidden hover:scale-105 bg-cover cursor-pointer transition-all duration-200 rounded-md p-5 text-xl sm:text-2xl flex justify-center items-center text-center w-full aspect-square"
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 h-full w-full"></div>
                <p className="z-10 font-semibold">{access.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center section-pt">
          <h2 className=" text-[2.7rem] mb-14 leading-[3rem] md:text-5xl font-semibold text-primary max-w-[40rem] mx-auto">
            Turn your vision into the company of your dreams.
          </h2>
          <Videos
            introVidIsPlaying={introVidIsPlaying}
            setIntroVidIsPlaying={setIntroVidIsPlaying}
          />
        </section>

        <section data-aos="fade-up" className="section-pt">
          <RoadmapWithAccordion />
        </section>

        <section data-aos="fade-up" className="">
          <h2
            data-aos="zoom-in"
            className="text-[2.7rem] leading-[3rem] md:text-5xl font-semibold text-primary text-center mt-20"
          >
            Worried about sales?
          </h2>
          <p className="text-white/80 max-w-[40rem] mx-auto text-center mt-5 font-light">
            Streamline your sales with boostmysites sales assistance
          </p>
          <Link
            className="mx-auto mt-5 primary-btn font-medium w-[20rem] flex justify-center py-3"
            to="/services"
          >
            Know More
          </Link>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-[2.7rem] leading-[3rem] md:text-5xl font-semibold text-primary text-center mt-20">
            Bring your dream company to life.
          </h2>
          <p className="text-white/80 max-w-[40rem] mx-auto text-center mt-5 font-light">
            Position yourself as a global leader in AI and IT solutions with
            Boostmysites, empowering you to offer 11 innovative technology
            services and a market-ready SaaS product!
          </p>
          <Link
            className="mx-auto mt-5 primary-btn font-medium w-[20rem] flex justify-center py-3"
            to="/services"
          >
            Services
          </Link>
        </section>

        <section id="reviews" className="pt-[4rem] text-center text-white">
          <div className="max-w-[40rem] mx-auto">
            <h2
              data-aos="zoom-in"
              className="text-4xl font-bold text-white mt-2 text-center"
            >
              Wall Of Love <BsHeartFill className="text-red-500 inline ml-1" />
            </h2>
            <h2
              data-aos="fade-up"
              className="text-xl font-medium mt-[1rem] text-primary"
            >
              <span className="font-bold">Latest Reviews</span> from our
              Customers
            </h2>
          </div>
        </section>
      </div>

      <section>
        <Reviews />
        <div
          data-aos="fade-up"
          className="flex flex-col gap-3 w-full justify-center items-center section-pt"
        >
          <Link
            className="primary-btn font-medium w-[20rem] flex justify-center py-3"
            to={path === "/" ? `${path}contact` : `${path}/contact`}
          >
            Get Started Today!
          </Link>
          <JoinEntrepreneurs />
        </div>
        {/* <div className="wrapper">
          <FormSection emailIdToSendMail={emailIdToSendMail} />
        </div> */}
      </section>

      <div className="wrapper mt-[5rem]">
        <section data-aos="fade-up" className="">
          <FAQ />
        </section>
        <div className="mt-20">
          <div className="flex flex-col gap-3 w-full justify-center items-center mt-14">
            <Link
              className="primary-btn font-medium w-[20rem] flex justify-center py-3"
              to={path === "/" ? `${path}contact` : `${path}/contact`}
            >
              Get Started Today!
            </Link>
            <JoinEntrepreneurs />
          </div>
        </div>

        <section data-aos="fade-up" className="section-pt">
          <OurOffices />
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
