import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { MdArrowOutward } from "react-icons/md";
import entrepreneurThumbnail from "../../../assets/videos/entrepreneur-magazine-thumb.webp";
import entrepreneurVideo from "../../../assets/videos/entrepreneur-magazine-vid.mp4";
import { ImSpinner8 } from "react-icons/im";
import { FaPlay } from "react-icons/fa";

const MediaFeatures = () => {
  const [videoReady, setVideoReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const playerRef = useRef(null);
  const forbesThumbnail =
    "https://img.youtube.com/vi/z8QmKfoBCWY/maxresdefault.jpg";

  const handleReady = () => {
    setVideoReady(true);
    setLoading(false);
  };

  const handleStart = () => {
    setLoading(false);
  };

  const handleBuffer = () => {
    setLoading(true);
  };

  const handleBufferEnd = () => {
    setLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
      <div className="wrapper">
        {/* Forbes Interview Section */}
        <div className="mb-28" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured in <span className="text-primary1">Forbes</span>
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Our founder Mahin BS shares insights about the future of AI and
                how Boostmysites is revolutionizing the IT services industry.
              </p>
              <a
                href="https://youtu.be/z8QmKfoBCWY?si=FRvbL9JozEF9lK5Y"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 primary-btn1"
              >
                Watch Full Interview
                <MdArrowOutward className="text-lg" />
              </a>
            </div>

            <div className="lg:w-1/2 w-full h-full relative group">
              <div className="relative aspect-video max-h-[70vh] h-full w-full rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={forbesThumbnail}
                  alt="Forbes Interview Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>
                <a
                  href="https://youtu.be/z8QmKfoBCWY?si=FRvbL9JozEF9lK5Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <button
                    className="absolute inset-0 m-auto w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Play video"
                  >
                    <FaPlay className="w-6 h-6 text-white ml-1" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Entrepreneur Magazine Section */}
        <div data-aos="fade-up">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10">
            <div className="lg:w-2/3">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured in <span className="text-primary1">Entrepreneur</span>
              </h2>
              <p className="text-lg opacity-90">
                Our team was featured in the January 2021 issue of Entrepreneur
                magazine, recognized for our innovative approach to AI and
                business solutions.
              </p>
            </div>

            <div className="lg:w-1/3 w-full">
              <div className="video-component relative max-h-[78vh] h-full aspect-[3/4.75] w-full rounded-xl overflow-hidden shadow-2xl bg-black">
                {/* Thumbnail overlay - shows until video is ready */}
                {!videoReady && (
                  <div className="absolute inset-0">
                    <img
                      src={entrepreneurThumbnail}
                      alt="Entrepreneur Magazine Feature"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <ImSpinner8 className="w-12 h-12 text-white animate-spin" />
                      </div>
                    )}
                  </div>
                )}

                {/* Video player - autoplays when ready */}
                <ReactPlayer
                  ref={playerRef}
                  url={entrepreneurVideo}
                  width="100%"
                  height="100%"
                  playing={videoReady}
                  muted={true}
                  loop={true}
                  controls={false}
                  playsinline
                  onReady={handleReady}
                  onStart={handleStart}
                  onBuffer={handleBuffer}
                  onBufferEnd={handleBufferEnd}
                  onError={() => setLoading(false)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: videoReady ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                  config={{
                    file: {
                      attributes: {
                        preload: "auto",
                        muted: true,
                        autoPlay: true,
                        loop: true,
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaFeatures;
