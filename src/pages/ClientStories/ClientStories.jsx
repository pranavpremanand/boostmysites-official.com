import { IoMdArrowDown } from "react-icons/io";
import banner from "../../assets/images/client stories/banner.webp";
import { clientStoryVideos } from "../../data/constant";
import { lazy, useState, useMemo } from "react";

const ClientStoryVideo = lazy(() => import("./components/ClientStoryVideo"));

const ClientStories = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // Memoize the video list to prevent unnecessary re-renders
  const videoList = useMemo(() => (
    clientStoryVideos.map((video) => (
      <ClientStoryVideo
        key={video.id}
        video={video}
        playingVideoId={playingVideoId}
        setPlayingVideoId={setPlayingVideoId}
      />
    ))
  ), [playingVideoId]);

  return (
    <div data-aos="fade-up" className="bg-secondary text-black">
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-[1] h-full w-full bg-gradient-to-b from-[#0B1D26]/90 to-transparent" />
        <img
          src={banner}
          alt="Client Success Stories"
          className="w-full h-full object-cover object-bottom"
          loading="eager"
        />
        <div className="absolute section-pt inset-0 z-[2] flex items-center justify-center">
          <div data-aos="fade-up" className="wrapper !max-w-4xl space-y-4 px-4">
            <span className="flex items-center gap-3 uppercase text-primary tracking-widest text-sm">
              <span className="h-[1.5px] w-8 bg-primary" /> Client stories
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-balance !leading-[1.15] font-medium">
              Real Stories, Real Impact: <br /> Client Experiences with Boostmysites
            </h1>
            <p className="mt-4 text-sm flex items-center gap-1 animate-bounce">
              Scroll Down <IoMdArrowDown size={22} />
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 wrapper">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {videoList}
        </div>
      </section>
    </div>
  );
};

export default ClientStories;