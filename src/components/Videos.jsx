import { createRef, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { BiPlay } from "react-icons/bi";

// Import video and thumbnail assets
const videos = [
  {
    src: require("../assets/videos/vid1.mp4"),
    thumb: require("../assets/videos/vid1.webp"),
  },
  {
    src: require("../assets/videos/vid2.mp4"),
    thumb: require("../assets/videos/vid2.webp"),
  },
  {
    src: require("../assets/videos/vid3.mp4"),
    thumb: require("../assets/videos/vid3.webp"),
  },
  {
    src: require("../assets/videos/vid4.mp4"),
    thumb: require("../assets/videos/vid4.webp"),
  },
  {
    src: require("../assets/videos/vid5.mp4"),
    thumb: require("../assets/videos/vid5.webp"),
  },
  {
    src: require("../assets/videos/vid6.mp4"),
    thumb: require("../assets/videos/vid6.webp"),
  },
  {
    src: require("../assets/videos/vid7.mp4"),
    thumb: require("../assets/videos/vid7.webp"),
  },
  {
    src: require("../assets/videos/vid8.mp4"),
    thumb: require("../assets/videos/vid8.webp"),
  },
  {
    src: require("../assets/videos/vid9.mp4"),
    thumb: require("../assets/videos/vid9.webp"),
  },
];

const Videos = ({ setIntroVidIsPlaying }) => {
  const videoRefs = useRef(videos.map(() => createRef()));
  const [isPlaying, setIsPlaying] = useState(videos.map(() => false));
  const [isVideoLoading, setIsVideoLoading] = useState(videos.map(() => true));

  const handlePlay = (index) => {
    setIntroVidIsPlaying(false);

    // Pause all other videos except the one clicked
    videoRefs.current.forEach((ref, i) => {
      if (ref.current && i !== index) {
        ref.current.seekTo(0);
        ref.current.getInternalPlayer().pause();
        setIsPlaying((prev) =>
          prev.map((val, idx) => (idx === i ? false : val))
        );
      }
    });

    // Toggle play/pause for the clicked video
    const player = videoRefs.current[index].current.getInternalPlayer();
    if (player.paused) {
      videoRefs.current[index].current.seekTo(0);
      player.play();
      setIsPlaying((prev) =>
        prev.map((val, idx) => (idx === index ? true : val))
      );
    } else {
      player.pause();
      videoRefs.current[index].current.seekTo(0);
      setIsPlaying((prev) =>
        prev.map((val, idx) => (idx === index ? false : val))
      );
    }
  };

  return (
    <section className="w-full videos">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center gap-7 wrapper">
        {videos.slice(0, 8).map((video, index) => (
          <div
            key={index}
            className="h-[60vh] md:h-auto aspect-[2/3] relative"
          >
            <div
              onClick={() => !isVideoLoading[index] && handlePlay(index)}
              className={`absolute top-0 left-0 w-full h-full z-10 ${
                !isPlaying[index] && "bg-black/20"
              }`}
            >
              {!isPlaying[index] && !isVideoLoading[index] && (
                <button className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <BiPlay className="text-[3rem] text-black" />
                </button>
              )}
            </div>

            {isVideoLoading[index] && (
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <img
                  loading="lazy"
                  src={video.thumb}
                  className="h-full w-full object-cover rounded-[1rem]"
                  alt="thumbnail"
                />
              </div>
            )}
            <ReactPlayer
              ref={videoRefs.current[index]}
              className="h-full w-full z-0"
              url={video.src}
              playing={false}
              width="100%"
              height="100%"
              pip={false}
              playsinline={true}
              onReady={() =>
                setIsVideoLoading((prev) =>
                  prev.map((val, idx) => (idx === index ? false : val))
                )
              }
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload noplaybackrate",
                    disablePictureInPicture: true,
                  },
                },
              }}
            />
          </div>
        ))}
      </div>

      <h1 className="whitespace-pre-line text-[2.7rem] mt-14 mb-3 md:mb-8 leading-[3rem] md:leading-[4rem] md:text-[3rem] font-semibold text-primary max-w-[45rem] mx-auto">
        {"Boostmysites\n Founder & Chairman"} <br />
      </h1>
      <h1 className="text-white text-[2.7rem] md:text-6xl mb-3 md:mb-14 font-bold">
        MAHIN B S
      </h1>
      <div className="h-[60vh] aspect-[4/6] mx-auto md:h-[70vh] max-h-[35rem] relative">
        <div className="absolute top-0 left-0 w-full h-full z-10"></div>
        {isVideoLoading[8] && (
          <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[70vh] max-h-[35rem] flex justify-center items-center">
            <img
              loading="lazy"
              src={videos[8].thumb}
              className="h-full w-full object-cover rounded-[1rem]"
              alt="thumbnail"
            />
          </div>
        )}
        <ReactPlayer
          ref={videoRefs.current[8]}
          className="h-full z-0"
          url={videos[8].src}
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          pip={false}
          playsinline={true}
          onReady={() =>
            setIsVideoLoading((prev) =>
              prev.map((val, idx) => (idx === 8 ? false : val))
            )
          }
          config={{
            file: {
              attributes: {
                preload: "auto",
                controlsList: "nodownload noplaybackrate",
                disablePictureInPicture: true,
                playsinline: true,
              },
            },
          }}
        />
      </div>
    </section>
  );
};

export default Videos;
