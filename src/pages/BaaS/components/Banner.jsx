import ReactPlayer from "react-player";
import bannerbgvid from "../../../assets/videos/banner-landing.mp4";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden flex items-center justify-center text-white">
      <div className="landing-page-bg h-full w-full absolute left-0 top-0">
        <div className="absolute inset-0 h-full w-full bg-black/60 z-[1]"></div>
        <ReactPlayer
          url={bannerbgvid}
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

      <div className="relative z-10 wrapper px-4 sm:px-6 lg:px-8 py-32">
        <h1
          data-aos="fade-up"
          className=" text-4xl sm:text-3xl text-center font-bold text-primary  mb-6"
        >
          BAAS - Business As A Service
        </h1>
        <div className="text-start">
          <div className="flex flex-col items-center text-center">
            <h1
              data-aos="fade-up"
              className=" text-4xl sm:text-5xl font-bold text-primary  mb-6 capitalize"
            >
              {/* LAUNCH YOUR AI VOICE CALLING AND <br /> AI VIDEO CALLING COMPANY
              WITH
              <br /> BOOSTMYSITES. */}
              Launch your AI Voice calling and Video calling company with BoostMySites
            </h1>
            <p
              data-aos="fade-up"
              className="mt-4 lg:mt-0 tracking-widest text-white max-w-3xl "
            >
              Looking to launch your own AI-powered voice and video confrencing
              company? At BoostmySites, we help you build, scale, and succeed.
              From AI-driven voice call solutions to advanced video conferencing
              platforms, we provide the tools and expertise to turn your vision
              into reality. Let’s shape the future of communication—together.
            </p>
          </div>
          <div data-aos="fade-up" className="mt-10 flex justify-center">
            <Link
              to='/subscription-form/step1'
              className="primary-btn inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary to-[#D5AA12] hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
