import React, { useEffect, useRef, useState } from "react";
import banner from "../assets/images/reviews-banner.webp";
import { MdOutlineStarPurple500 } from "react-icons/md";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { testimonials } from "../data/constant";
import { BsPersonCircle } from "react-icons/bs";

const Reviews = () => {
  return (
    <div className="pt-[4rem] pb-[4rem] relative">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[80vh] flex items-center rounded-lg shadow-lg mb-12">
        <img loading="lazy" 
          src={banner}
           
          data-aos="zoom-out"
          className="absolute w-full left-0 top-0 h-full object-cover object-top -z-20"
          alt=""
        />
        <div className="absolute h-full w-full bg-black/60 -z-10"></div>
        <div data-aos="zoom-in" className="wrapper py-16 text-center z-10">
          <h1 className="mb-4 text-[2.5rem] md:text-6xl max-w-5xl mx-auto font-semibold leading-tight text-primary1 text-center">
            What Our Customers Say About BoostMySites
          </h1>
          <p className="text-wrap max-w-5xl tracking-wide text-xl mx-auto mb-8">
            Real stories from businesses that have transformed their online
            presence with our services.
          </p>
        </div>
      </section>
      <section className="relative">
        <div
          data-aos="fade-right"
          className="hidden md:inline-block blurred-red-circle left-[-10rem] top-[18rem] md:top-[10rem] animate-pulse"
        ></div>
        <div className="wrapper text-white pt-[3rem]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-7">
            {testimonials.map((item, i) => (
              <div data-aos="fade-up" className="backdrop-blur-md bg-white/5 transition-all duration-300 relative border border-primary flex-shrink-0 p-8 rounded-2xl py-6">
                <div className="flex flex-col gap-4 text-start">
                  <p className="pb-4 border-b border-primary desc">
                    {item.desc}
                  </p>
                  <div className="">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <BsPersonCircle size={40} className="fill-primary" />
                     
                        <div className="">
                          <h6 className="">{item.name}</h6>
                        </div>
                      </div>
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <MdOutlineStarPurple500
                              key={i}
                              fill="#DEA821"
                              size={15}
                              stroke="0"
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
