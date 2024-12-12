import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { BlogItem, imgs } from "../Blogs/Blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const data = imgs[id];
  if (!data) {
    return <Navigate to="/blogs" />;
  }
  return (
    <div className="bg-secondary relative text-white">
      <div
        data-aos="fade-right"
        className="blurred-red-circle left-[-10rem] top-[18rem] md:top-[10rem] animate-pulse"
      ></div>
      <div
        data-aos="fade-left"
        className="blurred-red-circle right-[-10rem] bottom-[25%] animate-pulse"
      ></div>
      <div className="wrapper pt-[8rem] md:pt-[10rem] pb-[5rem] relative z-10">
        <div className="flex flex-col gap-2 pb-[3rem] p-5 bg-black rounded-xl mb-[3rem]">
          <img
            data-aos="fade-up"
            src={data}
            alt=""
            className="w-full rounded-xl object-cover aspect-[4/3] max-h-[70vh]"
          />
          <div className="flex flex-col gap-2 mt-[1rem]">
            <div
              data-aos="fade-up"
              className="flex justify-between items-center font-light mt-[0.8rem]"
            >
              <div className="rounded-2xl bg-primary1 font-medium px-3 py-1 text-sm w-fit">
                Business
              </div>
              <p className="text-gray-300 text-[.8rem]">12th May 2023</p>
            </div>
            <h4
              data-aos="fade-up"
              className="text-2xl sm:text-5xl font-medium leading-tight mt-[1rem] pb-[1.5rem]"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
              autem harum placeat nobis dicta modi corporis veritatis?
            </h4>
            <p
              data-aos="fade-up"
              className="hyphen-auto leading-relaxed text-ellipsis text-gray-200 border-t border-primary/30 pt-[2rem] text-justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              temporibus eligendi a rem placeat natus quis accusantium! Vero,
              dolor. Sunt saepe repellat sint assumenda laborum repudiandae
              autem libero labore sit! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Expedita temporibus eligendi a rem placeat natus
              quis accusantium! Vero, dolor. Sunt saepe repellat sint assumenda
              laborum repudiandae autem libero labore sit! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Expedita temporibus eligendi a
              rem placeat natus quis accusantium! Vero, dolor.
              <br />
              <br />
              Sunt saepe repellat sint assumenda laborum repudiandae autem
              libero labore sit! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Expedita temporibus eligendi a rem placeat natus
              quis accusantium! Vero, dolor. Sunt saepe repellat sint assumenda
              laborum repudiandae autem libero labore sit! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Expedita temporibus eligendi a
              rem placeat natus quis accusantium! Vero, dolor. Sunt saepe
              repellat sint assumenda laborum repudiandae autem libero labore
              sit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Expedita temporibus eligendi a rem placeat natus quis accusantium!
              Vero, dolor. Sunt saepe repellat sint assumenda laborum
              repudiandae autem libero labore sit!
            </p>
          </div>
        </div>
        <div className="border-t border-primary/30 pt-[3rem]">
          <h3 data-aos="fade-up" className="text-3xl text-primary1 font-medium">
            Latest Blogs
          </h3>
          <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
            {imgs
              .filter((img) => img !== data)
              .slice(0, 3)
              .map((img, i) => (
                <BlogItem key={img} img={img} id={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
