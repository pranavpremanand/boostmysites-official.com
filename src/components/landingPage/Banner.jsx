import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import introVid from "../../assets/videos/intro.mp4";
import vidThumb from "../../assets/videos/intro.webp";
import { BiPlay } from "react-icons/bi";

const Banner = ({ introVidIsPlaying, setIntroVidIsPlaying, path }) => {
  const navigate = useNavigate();
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handlePlayVideo = () => {
    setIntroVidIsPlaying(!introVidIsPlaying);
  };

  return (
    <div className="h-full wrapper relative z-10 flex items-center pt-[10rem] pb-[5rem] lg:pb-0 lg:pt-[5%]">
      <div className="grid lg:grid-cols-2 gap-[2rem] items-start">
        <div className="flex flex-col gap-3 items-start text-center lg:text-start">
          <h1
            data-aos="zoom-in"
            className="text-[2.7rem] text-balance leading-[3rem] md:text-5xl font-semibold text-primary"
          >
            Your #1 Trusted Partner for Making Your Business Dreams a Reality
          </h1>
          <p className="tracking-widest text-white">
            With our trusted infrastructure and expert team by your side,
            minimizing risks and maximizing growth opportunities
          </p>
          <button
            onClick={() =>
              navigate(
                path === "/" ? `${path}contact/step1` : `${path}/contact/step1`
              )
            }
            className="primary-btn capitalize font-medium w-fit hidden lg:flex justify-center py-3 mt-5"
          >
            Get your free consultation
          </button>
        </div>

        <div className="w-full flex justify-center" data-aos="fade-up">
          <div className="intro-vid h-[50vh] sm:h-[60vh] max-h-[35rem] w-fit relative -z-10 px-5 py-6 backdrop-blur-sm rounded-[1rem] bg-white/10">
            <div
              onClick={() => !isVideoLoading && handlePlayVideo()}
              className={`absolute cursor-pointer top-0 left-0 w-full h-full z-10 rounded-[1rem]
               ${!introVidIsPlaying && "bg-black/20"}
              `}
            >
              {!introVidIsPlaying && !isVideoLoading && (
                <button className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <BiPlay className="text-[3rem] text-black" />
                </button>
              )}
            </div>

            {isVideoLoading && (
              <div className="absolute top-0 left-0 w-fit mx-auto h-[50vh] sm:h-[60vh] max-h-[35rem] flex justify-center items-center px-5 py-6 backdrop-blur-sm rounded-[1rem]">
                <img loading="lazy" 
                  src={vidThumb}
                  className="h-full object-cover rounded-[1rem]"
                  alt="thumbnail"
                />
              </div>
            )}
            <ReactPlayer
              url={introVid}
              playing={introVidIsPlaying} // Control playing via state
              loop={false}
              width="100%"
              height="100%"
              pip={false}
              onReady={() => setIsVideoLoading(false)}
              playsinline
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload noplaybackrate",
                    disablePictureInPicture: true,
                    playsinline: true,
                  },
                },
              }}
            />
          </div>
        </div>
        <button
          onClick={() =>
            navigate(
              path === "/" ? `${path}contact/step1` : `${path}/contact/step1`
            )
          }
          className="primary-btn font-medium w-[17rem] flex mx-auto lg:hidden justify-center py-3 mt-2"
        >
          Get your free consultation
        </button>
      </div>
    </div>
  );
};

export default Banner;
