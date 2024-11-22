import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BiPhone } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SpinnerContext } from "./SpinnerContext";
import { PiSpinnerGapLight } from "react-icons/pi";
import toast from "react-hot-toast";
import { RxCaretDown } from "react-icons/rx";

const LeadForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { spinner, setSpinner } = useContext(SpinnerContext);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      fullName: "",
      email: "",
      service: "AI & IT development solution",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    var emailBody = "Full Name: " + values.fullName + "\n";
    emailBody += "Email: " + values.email + "\n";
    emailBody += "Service Requested: " + values.service + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: "ceo@boostmysites.com",
      subject: "Lead Form Submission",
      body: emailBody,
    };
    try {
      setSpinner(true);

      await fetch("https://smtp-api-tawny.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then(() => {
          toast.success("Email sent successfully");
          reset();
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setSpinner(false);
    }
  };

  // set service value
  const handleServiceChange = (value) => {
    setValue("service", value);
    setIsDropdownOpen(false);
  };
  return (
    <div
      id="contact-form"
      className="wrapper grid sm:grid-cols-2 gap-5 items-center"
    >
      <div data-aos="fade-right" className="flex flex-col gap-2 sm:gap-5">
        <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
          Looking to partner with us?
        </h3>
        <div className="mt-[1rem] sm:mt-[2rem] flex flex-col gap-3">
          <Link className="flex items-center gap-1 text-primary1 w-fit">
            <BiPhone className="text-2xl" /> <span>+2 456 (343) 24 45</span>
          </Link>
          <div className="mt-2 flex items-center gap-5">
            <Link
              to="https://www.linkedin.com/company/boostmysitescom"
              target="_blank"
              rel="noreferrer"
              className="w-[2.5rem] h-[2.5rem] text-xl hover:-translate-y-1 transition-all duration-300 p-3 rounded-full border border-white/40 flex justify-center items-center"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://www.instagram.com/boostmysites"
              target="_blank"
              rel="noreferrer"
              className="w-[2.5rem] h-[2.5rem] text-xl hover:-translate-y-1 transition-all duration-300 p-3 rounded-full border border-white/40 flex justify-center items-center"
            >
              <FaInstagram />
            </Link>
            <Link className="w-[2.5rem] h-[2.5rem] text-xl hover:-translate-y-1 transition-all duration-300 p-3 p-3 rounded-full border border-white/40 flex justify-center items-center">
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </div>
      <form
        data-aos="fade-left"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/60 p-4 md:p-8 rounded-xl flex flex-col gap-3 text-black"
      >
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold translate-x-[2rem]">
            Boostmysites
          </p>
          <h4 className="text-2xl font-bold">Send Us A Message</h4>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName", {
              required: "Full name is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Full name is required";
                }
              },
            })}
            className="placeholder:text-black/80 placeholder:text-md text-md outline-none border-none text-black p-3 rounded-full bg-[#EEF0FF]"
          />
          {errors.fullName && (
            <p className="error text-[.8rem] ml-2">{errors.fullName.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Entered email is invalid",
              },
            })}
            className="placeholder:text-black/80 placeholder:text-md text-md outline-none border-none text-black p-3 rounded-full bg-[#EEF0FF]"
          />
          {errors.email && (
            <p className="error text-[.8rem] ml-2">{errors.email.message}</p>
          )}
        </div>
        <div className="flex relative flex-col bg-[#EEF0FF] p-2 rounded-2xl">
          <label htmlFor="" className="text-black/80 text-sm">
            Service Required
          </label>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#eef0ff] mt-2 outline-none text-start text-md flex justify-between pr-1 text-nowrap truncate line-clamp-1 text-ellipsis"
          >
            {getValues("service")} <RxCaretDown className="text-xl" />
          </button>
          {isDropdownOpen && (
            <div
              className="absolute rounded-xl left-0 top-[1.8rem] w-full border bg-[#eef0ff] mt-2 outline-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              name="service"
              id=""
            >
              <p
                onClick={() =>
                  handleServiceChange("AI & IT development solution")
                }
                className="text-md hover:bg-primary1 p-2 cursor-pointer rounded-xl"
              >
                AI & IT development solution
              </p>
              <p
                onClick={() => handleServiceChange("Start your own AI company")}
                className="text-md hover:bg-primary1 p-2 cursor-pointer rounded-xl"
              >
                Start your own AI company
              </p>
              <p
                onClick={() =>
                  handleServiceChange("Start your own Ecommerce company")
                }
                className="text-md hover:bg-primary1 p-2 cursor-pointer rounded-xl"
              >
                Start your own Ecommerce company
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <textarea
            type="text"
            rows="3"
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Message is required";
                }
              },
            })}
            className="placeholder:text-black/80 placeholder:text-md text-md outline-none border-none text-black p-3 rounded-3xl bg-[#EEF0FF]"
          />
          {errors.message && (
            <p className="error text-[.8rem] ml-2">{errors.message.message}</p>
          )}
        </div>
        <button
          disabled={spinner}
          type="submit"
          className="mt-3 text-sm cursor-pointer flex justify-center bg-primary1 hover:-translate-y-1 shadow-large shadow-transparent hover:shadow-primary/[35%] text-white border border-primary1 py-3 px-4 rounded-full transition-all duration-300"
        >
          {spinner ? (
            <div className="shadow-none">
              <PiSpinnerGapLight className="rotate-animation text-2xl" />
            </div>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
