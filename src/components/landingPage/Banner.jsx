import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import introVid from "../../assets/videos/intro.mp4";
import vidThumb from "../../assets/videos/intro.png";
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
            className="primary-btn font-medium w-fit hidden lg:flex justify-center py-3 mt-5"
          >
            Request A Quote
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
                <img
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
              playsinline={true}
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
          Request A Quote
        </button>
      </div>
    </div>

    // <div className="pt-[10rem] relative z-10">
    //   <h1
    //     data-aos="zoom-in"
    //     className="text-[2.7rem] text-balance leading-[3rem] md:text-5xl font-semibold text-primary text-center max-w-2xl mx-auto"
    //   >
    //     {pathname === "/ai-expert1"
    //       ? "Your #1 Trusted Partner for Making Your Business Dreams a Reality"
    //       : "Start Your AI Company Without Quitting Your Job"}
    //   </h1>
    //   {pathname === "/ai-expert1" && (
    //     <>
    //       <p className="font-semibold text-white uppercase text-center my-5 tracking-widest text-lg">
    //         Start your AI COMPANY
    //       </p>
    //       <p className="tracking-widest font-light text-white uppercase text-center max-w-4xl mx-auto text-white/80">
    //         with our trusted infrastructure and expert team by your side,
    //         minimizing risks and maximizing growth opportunities
    //       </p>
    //     </>
    //   )}

    //   <div className="pt-[4rem] pb-[3rem]" data-aos="fade-up">
    //     <div className="h-[50vh] sm:h-[60vh] w-fit relative mx-auto -z-10">
    //     {/* <div className="h-[50vh] sm:h-[60vh] w-full lg:w-[80%] relative mx-auto -z-10"> */}
    //       <div
    //         onClick={() => !isVideoLoading && handlePlayVideo()}
    //         className={`absolute top-0 left-0 w-full h-full z-10
    //            ${!introVidIsPlaying && "bg-black/20"}
    //           `}
    //       >
    //         {!introVidIsPlaying && !isVideoLoading && (
    //           <button className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    //             <BiPlay className="text-[3rem] text-black" />
    //           </button>
    //         )}
    //       </div>

    //       {isVideoLoading && (
    //         <div className="absolute top-0 left-0 w-full h-[50vh] sm:h-[60vh] flex justify-center items-center">
    //           <img
    //             src={vidThumb}
    //             className="h-full object-cover"
    //             alt="thumbnail"
    //           />
    //         </div>
    //       )}
    //       <ReactPlayer
    //         url={introVid}
    //         playing={introVidIsPlaying} // Control playing via state
    //         loop={false}
    //         width="100%"
    //         height="100%"
    //         pip={false}
    //         className="h-full w-full z-0"
    //         onReady={() => setIsVideoLoading(false)}
    //         playsinline={true}
    //         config={{
    //           file: {
    //             attributes: {
    //               controlsList: "nodownload noplaybackrate",
    //               disablePictureInPicture: true,
    //               playsinline: true,
    //             },
    //           },
    //         }}
    //       />
    //     </div>
    //   </div>

    //   <div
    //     data-aos="fade-up"
    //     className="flex flex-col gap-3 w-full justify-center items-center"
    //   >
    //     {path === "/" ? (
    //       <button
    //         onClick={() => navigate(`${path}contact`)}
    //         className="primary-btn font-medium w-[20rem] flex justify-center py-3"
    //       >
    //         Start your own AI company
    //       </button>
    //     ) : (
    //       <button
    //         onClick={() => navigate(`${path}/contact`)}
    //         className="primary-btn font-medium w-[20rem] flex justify-center py-3"
    //       >
    //         Start your own AI company
    //       </button>
    //     )}
    //     <JoinEntrepreneurs />
    //   </div>
    // </div>
  );
};

export default Banner;
