import { IoMdArrowDown } from "react-icons/io";
import banner from "../../assets/images/client stories/banner.webp";
import { clientStoryVideos } from "../../data/constant";
import { lazy, useState } from "react";

const ClientStoryVideo = lazy(() => import("./components/ClientStoryVideo"));

const ClientStories = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  return (
    <div data-aos="fade-up" className="bg-secondary text-white">
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-[1] h-full w-full bg-gradient-to-b from-[#0B1D26] to-transparent" />
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute section-pt inset-0 z-[2] flex items-center justify-center text-white">
          <div data-aos="fade-up" className="wrapper !max-w-4xl space-y-4">
            <span className="flex items-center gap-3 uppercase text-primary tracking-widest text-sm">
              <span className="h-[1.5px] w-8 bg-primary" /> Client stories
            </span>
            <h1 className="text-[2.7rem] text-balance !leading-[1.15] md:text-5xl lg:text-6xl font-medium text-black">
              Real Stories, Real Impact: <br /> Client Experiences with
              Boostmysites
            </h1>
            <p className="mt-4 text-sm text-black flex items-center gap-1 animate-bounce">
              Scroll Down <IoMdArrowDown size={22} />
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 wrapper">
        <div className="grid grid-cols-1 gap-8">
          {clientStoryVideos.map((video) => (
            <ClientStoryVideo
              key={video.id}
              video={video}
              playingVideoId={playingVideoId}
              setPlayingVideoId={setPlayingVideoId}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClientStories;
