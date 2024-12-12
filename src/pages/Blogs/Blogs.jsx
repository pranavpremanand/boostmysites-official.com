import React from "react";

const Blogs = () => {
  return (
    <div className="bg-secondary relative text-white">
      <div className="blurred-red-circle left-[-10rem] top-[18rem] md:top-[10rem] animate-pulse"></div>
      <div className="blurred-red-circle right-[-10rem] bottom-[25%] animate-pulse"></div>
      <div className="pt-[8rem] md:pt-[10rem] pb-[5rem] wrapper">
        <h4 className="text-3xl md:text-4xl max-w-5xl mx-auto font-semibold leading-tight text-primary1 text-center">
          Explore the Future with AI: Insights, Innovations, and Trends.
        </h4>
        <div className="mt-[2rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
          <BlogItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7-HVWQHxnNuywiR26jyAgbY1vBXIwAAS9w&s" />
          <BlogItem img="https://itbrief.com.au/uploads/story/2023/11/27/img-d320oqYWscvU8q8HLX0brOyX.webp" />
          <BlogItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s" />
          <BlogItem img="https://rejolut.com/wp-content/uploads/2024/02/DALL%C2%B7E-2024-02-20-16.55.07-Create-a-wide-banner-image-for-the-topic-_Top-18-Artificial-Intelligence-AI-Applications-in-2024._-This-image-should-visually-represent-a-diverse-ra-1024x585.webp" />
          <BlogItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7-HVWQHxnNuywiR26jyAgbY1vBXIwAAS9w&s" />
          <BlogItem img="https://itbrief.com.au/uploads/story/2023/11/27/img-d320oqYWscvU8q8HLX0brOyX.webp" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

// blog item
const BlogItem = (item) => {
  return (
    <div className="bg-black rounded-xl p-5 text-white relative z-10">
      <img
        src={item.img}
        alt=""
        width="600"
        height="400"
        className="bg-cover aspect-video w-full rounded-xl"
      />
      <div className="flex justify-start font-light mt-[0.8rem]">
        <div className="rounded-2xl bg-primary1 font-medium px-3 py-1 text-sm w-fit">
          Business
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-[1rem]">
        <h4 className="text-xl font-medium leading-tight line-clamp-2 text-ellipsis">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, autem
          harum placeat nobis dicta modi corporis veritatis?
        </h4>
        <p className="leading-tight text-ellipsis text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          temporibus eligendi a rem placeat natus quis accusantium! Vero, dolor.
          Sunt saepe repellat sint assumenda laborum repudiandae autem libero
          labore sit!
        </p>
      </div>

      <div className="flex justify-end font-light mt-[1.5rem]">
        <p className="text-gray-400 text-[.8rem]">12th May 2023</p>
      </div>
    </div>
  );
};
