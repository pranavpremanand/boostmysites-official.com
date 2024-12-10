import ReactPlayer from "react-player";
import bannerbgvid from "../../../assets/videos/banner-landing.mp4";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative w-screen min-h-[90vh] overflow-hidden flex items-center justify-center text-white">
      <div className="absolute inset-0 w-full h-full bg-black/60 z-10"></div>
      <div className="video-cover absolute w-screen h-full inset-0 overflow-hidden z-0">
        <ReactPlayer
          url={bannerbgvid}
          playing
          muted
          playsInline
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
          className="object-cover"
        />
      </div>

      <div className="relative z-10 wrapper px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-start">
          <div className="grid grid-cols-1  lg:grid-cols-1">
            <h1
              data-aos="fade-up"
              className=" text-4xl sm:text-5xl font-bold text-primary  mb-6"
            >
              START YOUR AI COMPANY
              <br /> WITH BOOSTMYSITES
            </h1>
            <p
              data-aos="fade-up"
              className="mt-4 lg:mt-0 tracking-widest text-white max-w-3xl "
            >
              Are you dreaming of starting your software company? At
              BoostmySites, we turn dreams into reality. We offer comprehensive
              services to guide and support individuals in establishing their
              own software ventures. From ideation to execution, we’re your
              partners in this incredible journey.
            </p>
          </div>
          <div data-aos="fade-up" className="mt-10">
            <Link
              to="/ai-expert/contact/step1"
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
