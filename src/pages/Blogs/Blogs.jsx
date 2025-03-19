import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../../data/blogs";

const Blogs = () => {
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
      <div className="pt-[8rem] md:pt-[10rem] pb-[5rem] wrapper">
        <h4
          data-aos="fade-up"
          className="text-3xl md:text-4xl max-w-5xl mx-auto font-semibold leading-tight text-primary1 text-center"
        >
          Explore the Future with AI: Insights, Innovations, and Trends.
        </h4>
        <div className="mt-[2rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
          {blogs.sort((a, b) => b.id - a.id).map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

// blog item
export const BlogItem = ({ blog }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-black rounded-xl p-5 text-white relative z-10 group"
    >
      <Link to={`/blogs/${blog.title}/boostmysites-review`}>
        <img loading="lazy" 
          src={blog.image}
          alt=""
          width="600"
          height="400"
          className="object-cover aspect-video w-full rounded-xl group-hover:opacity-85 transition-all duration-200 object-top"
        />
      </Link>
      <div className="flex flex-col gap-2 mt-[1rem]">
        <Link
          to={`/blogs/${blog.title}/boostmysites-review`}
          className="text-xl hyphen-auto font-medium leading-tight line-clamp-2 text-ellipsis hover:text-primary1 transition-all duration-200"
        >
          {blog.title}
        </Link>
        <div
          dangerouslySetInnerHTML={{ __html: blog.content }}
          className="leading-tight text-gray-200 line-clamp-3 text-ellipsis hyphen-auto"
        ></div>
      </div>

      <div className="mt-5 w-full flex justify-center">
        <Link
          to={`/blogs/${blog.title}/boostmysites-review`}
          className="text-sm text-center font-medium cursor-pointer bg-gradient-to-r from-primary to-[#D5AA12] hover:-translate-y-1 shadow-large shadow-transparent hover:shadow-primary/[35%] text-black border border-primary py-3 px-4 rounded-md transition-all duration-300 w-full"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
