import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { BlogItem } from "../Blogs/Blogs";
import { blogs } from "../../data/blogs";

const BlogDetails = () => {
  const { link } = useParams();
  const blog = blogs.find((item) => item.link === link);
  console.log({ blog });
  if (!blog) {
    return <Navigate to="/blogs" />;
  }
  const latestBlogs = blogs.filter((item) => item.id !== blog.id) || [];
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
            loading="lazy"
            data-aos="fade-up"
            src={blog.image}
            alt=""
            className="mx-auto rounded-xl object-contain object-top max-h-[70vh]"
          />
          <div className="flex flex-col gap-2">
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
              {latestBlogs
                .sort((a, b) => b.id - a.id)
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
