import React, { useState } from "react";
import { BiPlay } from "react-icons/bi";
import ReactPlayer from "react-player";
import vidThumb from "../../../assets/videos/intro.webp";

const ServiceCard = ({ service }) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setVideoIsPlaying(!videoIsPlaying);
  };

  return (
    <div className="cursor-pointer group h-full w-full border border-slate-200 hover:border-primary relative overflow-hidden rounded-xl p-6 transition-all duration-300">
      <div className={` ${service.title === "" ? "h-full" : ""}`}>
        {service.img ? (
          <div className="absolute inset-0">
            <img
              loading="lazy"
              src={service.img}
              alt={service.title}
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </div>
        ) : (
          <div className="intro-vid h-full w-full relative px-5 py-6 backdrop-blur-sm rounded-[1rem] bg-white/10">
            <div
              onClick={() => !isVideoLoading && handlePlayVideo()}
              className={`absolute cursor-pointer top-0 left-0 w-full h-full z-10 rounded-[1rem]
                   ${!videoIsPlaying && "bg-black/20"}`}
            >
              {!videoIsPlaying && !isVideoLoading && (
                <button className="bg-primary p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <BiPlay className="text-[3rem] text-black" />
                </button>
              )}
            </div>

            {isVideoLoading && (
              <div className="absolute top-0 left-0 w-fit mx-auto flex justify-center items-center px-5 py-6 backdrop-blur-sm rounded-[1rem]">
                <img
                  loading="lazy"
                  src={vidThumb}
                  className="h-full object-cover rounded-[1rem]"
                  alt="thumbnail"
                />
              </div>
            )}

            <ReactPlayer
              url={service.video}
              playing={videoIsPlaying} // Control playing via state
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
                    playsInline: true,
                  },
                },
              }}
            />
          </div>
        )}
      </div>

      <div className="relative z-20">
        <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
        {service.desc && (
          <p className="text-white">
            • Ready-to-Use AI Calling & Video Software – Start your business
            instantly, no coding required.
            <br /> • White-Label Branding – Offer AI-powered voice and video
            services under your own brand.
            <br /> • Customizable AI Agents – Personalize AI voice assistants
            and video conferencing features for any industry.
            <br /> • Automated Client Engagement – AI handles calls, meetings,
            follow-ups, and lead nurturing.
            <br /> • Business & Sales Training – Learn how to attract clients
            and scale your AI agency successfully.
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
