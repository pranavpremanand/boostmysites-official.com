import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { BlogItem } from "../Blogs/Blogs";
import { blogs } from "../../data/blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === Number(id));
  if (!blog) {
    return <Navigate to="/blogs" />;
  }
  const latestBlogs = blogs.filter((item) => item.id !== Number(id)) || [];
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
      <div className="wrapper pt-[6rem] md:pt-[10rem] pb-[5rem] relative z-10">
        <div className="flex flex-col gap-2 pb-[3rem] p-3 sm:p-5 bg-black rounded-xl mb-[3rem]">
          <img
            data-aos="fade-up"
            src={blog.image}
            alt=""
            className="w-full rounded-xl object-cover aspect-[4/3] max-h-[70vh]"
          />
          <div className="flex flex-col gap-2">
            {/* <div
              data-aos="fade-up"
              className="flex justify-between items-center font-light mt-[0.8rem]"
            >
              <div className="rounded-2xl bg-primary1 font-medium px-3 py-1 text-sm w-fit">
                Business
              </div>
              <p className="text-gray-300 text-[.8rem]">12th May 2023</p>
            </div> */}
            <h4
              data-aos="fade-up"
              className="text-2xl sm:text-5xl font-medium leading-tight mt-[1rem] pb-[1.5rem]"
            >
              {blog.title}
            </h4>
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              data-aos="fade-up"
              className="hyphen-auto leading-relaxed text-gray-200 border-t border-primary/30 pt-[2rem]"
            ></div>
          </div>
        </div>
        {latestBlogs.length > 0 && (
          <div className="border-t border-primary/30 pt-[3rem]">
            <h3
              data-aos="fade-up"
              className="text-3xl text-primary1 font-medium"
            >
              Latest Blogs
            </h3>
            <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
              {blogs
                .filter((item) => item.id !== blog.id)
                .slice(0, 3)
                .map((item, i) => (
                  <BlogItem key={item.id} blog={item} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
