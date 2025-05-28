import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaPause } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";


const ClientStoryVideo = ({ video, setPlayingVideoId, playingVideoId }) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const playerRef = useRef(null);

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

  const handlePlayPause = () => {
    if (playingVideoId === video.id) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingVideoId(video.id);
      setIsPlaying(true);
      setIsBuffering(true);
    }
  };

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      className="w-full shadow-xl border-b border-b-white/20 flex flex-col md:odd:flex-row md:even:flex-row-reverse justify-between items-center gap-8 md:odd:text-end md:even:text-start backdrop-blur-sm py-6"
    >
      <div className="flex flex-col gap-4 md:w-[70%]">
        <h2 className="text-[2rem] text-balance !leading-[1.15] md:text-4xl lg:text-5xl font-medium text-white">
          {video.title}
        </h2>
        <p className="font-light text-white/80 whitespace-pre-line">{video.description}</p>
      </div>

      {hasBeenInView ? (
        <div className="video-component w-full md:w-[30%] max-h-[78vh] h-full aspect-[3/4.75] rounded-lg overflow-hidden relative group">
          {playingVideoId === video.id ? (
            <div className="relative w-full h-full">
              {isVideoLoading && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/20">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              )}
              <ReactPlayer
                ref={playerRef}
                url={video.video}
                width="100%"
                height="100%"
                playing={isPlaying}
                onEnded={() => {
                  setPlayingVideoId(null);
                  setIsPlaying(false);
                }}
                onReady={() => {
                  setIsVideoLoading(false);
                  setIsBuffering(false);
                }}
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

              {isBuffering && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <ImSpinner8 className="w-12 h-12 text-white animate-spin" />
                </div>
              )}

              <button
                onClick={handlePlayPause}
                className="absolute inset-0 m-auto w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label={isPlaying ? "Pause video" : "Play video"}
                disabled={isBuffering}
              >
                {isPlaying ? (
                  <FaPause className="w-6 h-6 text-white" />
                ) : (
                  <FaPlay className="w-6 h-6 text-white ml-1" />
                )}
              </button>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
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
        </div>
      ) : (
        // Placeholder while waiting to come into view
        <div className="w-full md:w-[30%] max-h-[78vh] h-full aspect-[3/4.75] rounded-lg overflow-hidden bg-gray-200/10 animate-pulse" />
      )}
    </div>
  );
};

export default ClientStoryVideo;
