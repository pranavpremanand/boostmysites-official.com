import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaPause } from "react-icons/fa";

const ClientStoryVideo = ({ video, setPlayingVideoId, playingVideoId }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    if (playingVideoId === video.id) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingVideoId(video.id);
      setIsPlaying(true);
    }
  };

  return (
    // grid grid-cols-1 md:even:grid-cols-[1fr,70%] md:odd:grid-cols-[70%,1fr]
    <div
      data-aos="fade-up"
      className="w-full shadow-xl border-b border-b-white/20 flex flex-col md:odd:flex-row md:even:flex-row-reverse justify-between items-center gap-8 md:odd:text-end md:even:text-start backdrop-blur-sm p-6"
    >
      <div className="flex flex-col gap-4 md:w-[70%]">
        <h2 className="text-[2rem] text-balance !leading-[1.15] md:text-4xl lg:text-5xl font-medium text-white">
          {video.title}
        </h2>
        <p className="font-light text-white/80">{video.description}</p>
      </div>
      <div className="client-story-video-player w-full md:w-[30%] aspect-[3/4.75] rounded-lg overflow-hidden relative group">
        {playingVideoId === video.id ? (
          <div className="relative w-full h-full">
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
            <button
              onClick={handlePlayPause}
              className="absolute inset-0 m-auto w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label={isPlaying ? "Pause video" : "Play video"}
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
              onLoad={() => setImageLoaded(true)}
            />
            {imageLoaded && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 m-auto w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                aria-label="Play video"
              >
                <FaPlay className="w-6 h-6 text-white ml-1" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientStoryVideo;
