import React, { useEffect, useRef, useState } from "react";
import banner from "../assets/images/reviews-banner.webp";
import { MdOutlineStarPurple500 } from "react-icons/md";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { testimonials } from "../data/constant";
import { BsPersonCircle } from "react-icons/bs";

const Reviews = () => {
  const isReviewSubmitted = localStorage.getItem("isReviewSubmitted");

  return (
    <div className="pt-[4rem] pb-[2rem] relative">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[80vh] flex items-center rounded-lg shadow-lg mb-12">
        <img loading="lazy" 
          src={banner}
           
          data-aos="zoom-out"
          className="absolute w-full left-0 top-0 h-full object-cover object-top -z-20"
          alt=""
        />
        {/* <div className="absolute h-full w-full bg-primary1/20 -z-10"></div> */}
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
                        {/* <img loading="lazy" 
                          className="min-w-[4rem] aspect-square w-[4rem] rounded-full object-cover"
                          src="https://www.shutterstock.com/image-photo/handsome-happy-african-american-bearded-600nw-2460702995.jpg"
                          alt=""
                        /> */}
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
      {/* {!isReviewSubmitted && <ReviewForm />} */}
    </div>
  );
};

export default Reviews;

const ReviewForm = () => {
  const imgRef = useRef();
  let selectedFile;
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      rating: "",
    },
  });

  // on image change
  const onImgChange = (file) => {
    if (file.target.files && file.target.files[0]) {
      selectedFile = file.target.files[0];

      // Validate file type
      const validFileTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (!validFileTypes.includes(selectedFile.type)) {
        toast.error("Select a valid image file (PNG, JPEG, JPG)");
        return;
      }

      // Validate file size (max size: 5MB)
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
      if (selectedFile.size > maxSizeInBytes) {
        toast.error("File size should not exceed 5MB");
        return;
      }

      //   setImgUrl(URL.createObjectURL(selectedFile));

      toast.success("Image selected");
    }
  };

  // handle form submit
  const onSubmit = (values) => {
    if (rating === 0 || rating === "")
      return setError("rating", {
        type: "required",
        message: "Rating is required",
      });
    reset();
    toast.success("Thank you for your review");
    localStorage.setItem("isReviewSubmitted", true);
  };

  // handle rating change
  useEffect(() => {
    if (rating > 0) {
      setValue("rating", rating);
      clearErrors("rating");
    }
  }, [rating]);
  return (
    <section className="mt-[5rem] relative">
      <div
        data-aos="fade-left"
        className="hidden md:inline-block blurred-red-circle right-[-10rem] top-[-25%] animate-pulse"
      ></div>
      <div className="wrapper">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-1/2 mx-auto p-5 rounded-xl bg-[#111111] backdrop-blur-md"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
            Write a Review
          </h2>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1">
              <label htmlFor="" className="text-sm">
                Overall Rating
              </label>
              <Rating
                emptySymbol={<MdOutlineStarPurple500 size={30} stroke="0" />}
                fullSymbol={
                  <MdOutlineStarPurple500
                    size={30}
                    stroke="0"
                    className="fill-primary"
                  />
                }
                fractions={2}
                onChange={(rating) => setRating(rating)}
              />
              {errors.rating && (
                <p className="text-red-500 text-sm">{errors.rating.message}</p>
              )}
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="" className="text-sm">
                Full Name
              </label>
              <input
                type="text"
                className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
                placeholder="Enter your full name"
                {...register("name", {
                  required: "Full name is required",
                  minLength: {
                    value: 3,
                    message: "Full name must be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="" className="text-sm">
                Email
              </label>
              <input
                type="email"
                className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="" className="text-sm">
                Review
              </label>
              <textarea
                className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
                placeholder="Enter your review"
                {...register("message", {
                  required: "Review is required",
                  minLength: {
                    value: 3,
                    message: "Review must be at least 3 characters",
                  },
                })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="" className="text-sm">
                Add your photo (optional)
              </label>
              <input
                onChange={onImgChange}
                accept="image/jpg, image/jpeg, image/png"
                ref={imgRef}
                type="file"
                className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
              />
            </div>
            <button type="submit" className="primary-btn mt-3 w-fit">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
