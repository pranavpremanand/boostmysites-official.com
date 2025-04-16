import { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import ReactPlayer from "react-player";
import video from "../../../assets/videos/BaaS-Intro.mp4";
import { ImSpinner8 } from "react-icons/im";
import { FaPause, FaPlay } from "react-icons/fa";
import thumbnail from "../../../assets/videos/BaaS-Intro-Thumbnail.webp";

const BaaSIntroVideo = () => {
  const [hasBeenInView, setHasBeenInView] = useState(false);

  // Use the intersection observer hook
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "100px",
  });

  // Update hasBeenInView when component comes into view
  useEffect(() => {
    if (isIntersecting && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [isIntersecting, hasBeenInView]);

  return (
    <div
      ref={ref}
      className="mb-[4rem] wrapper flex flex-col-reverse lg:grid grid-cols-2 lg:items-center gap-5 lg:gap-10 mx-auto z-10"
    >
      <div data-aos="fade-up" className="lg:block hidden w-full">
        <Video isVisible={hasBeenInView} />
      </div>
      <div
        data-aos="fade-up"
        className="lg:min-h-[20rem] flex flex-col gap-10 justify-between z-10"
      >
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl text-primary1 font-medium">
            Launch Your Own Company with Our Business As A Service (BAAS) Model
          </h4>
          <div data-aos="fade-up" className="block lg:hidden w-full">
            <Video isVisible={hasBeenInView} />
          </div>
          <p className="text-sm font-light">
            BAAS is not a one-time solution but a model for continuous evolution
            and adaptability. It enables entrepreneurs and businesses to quickly
            establish their own company without the need to build systems from
            scratch, manage complex operations, hire large teams, or invest
            heavily upfront. Instead, you gain immediate access to a fully
            functional business framework that you can brand, operate, and scale
            as your own. <br />
            <br />
            With BAAS, you can launch your own company and start providing
            services to clients worldwide — without the traditional barriers of
            starting a business. It's a smart, streamlined way to become a
            service provider and grow in today's fast-moving market.
          </p>
          <Link
            to="/baas"
            target="_blank"
            rel="noreferrer"
            className="text-md flex items-center gap-2 text-primary1 underline w-fit"
          >
            Know More <MdArrowOutward className="text-lg -mt-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Video = ({ isVisible }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasVideoLoaded, setHasVideoLoaded] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const playerRef = useRef(null);
  const controlsTimeout = useRef(null);

  const handlePlayPause = () => {
    if (!hasVideoLoaded && isVisible) {
      setHasVideoLoaded(true);
    }
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setIsBuffering(true);
    }
  };

  const handleMouseEnter = () => {
    if (isPlaying) {
      setShowControls(true);
      clearTimeout(controlsTimeout.current);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      controlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(controlsTimeout.current);
    };
  }, []);

  return (
    <div
      className="w-full max-h-[78vh] h-full aspect-video rounded-lg overflow-hidden relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="video-component relative w-full h-full">
        {/* Thumbnail placeholder */}
        {(!hasVideoLoaded || !isVisible) && (
          <div className="absolute inset-0 w-full h-full">
            <img
              src={thumbnail}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <button
              onClick={handlePlayPause}
              className="absolute inset-0 m-auto w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300"
              aria-label="Play video"
            >
              <FaPlay className="w-6 h-6 text-white ml-1" />
            </button>
          </div>
        )}

        {/* Video player */}
        {hasVideoLoaded && isVisible && (
          <ReactPlayer
            ref={playerRef}
            url={video}
            width="100%"
            height="100%"
            playing={isPlaying}
            onEnded={() => {
              setIsPlaying(false);
              setShowControls(true);
            }}
            onReady={() => setIsBuffering(false)}
            onBuffer={() => setIsBuffering(true)}
            onBufferEnd={() => setIsBuffering(false)}
            onPlay={() => setIsBuffering(false)}
            style={{ position: "absolute", top: 0, left: 0 }}
            playsinline
            pip={false}
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
        )}

        {/* Loading spinner */}
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <ImSpinner8 className="w-12 h-12 text-white animate-spin" />
          </div>
        )}

        {/* Play/Pause controls */}
        {hasVideoLoaded && isVisible && (
          <>
            {!isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 m-auto w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                aria-label="Play video"
                disabled={isBuffering}
              >
                <FaPlay className="w-6 h-6 text-white ml-1" />
              </button>
            )}
            {isPlaying && showControls && !isBuffering && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 m-auto w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                aria-label="Pause video"
              >
                <FaPause className="w-6 h-6 text-white" />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BaaSIntroVideo;
