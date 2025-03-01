import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiSpinnerGapLight } from "react-icons/pi";
import "react-country-phone-input/lib/style.css";
import { useNavigate } from "react-router-dom";
import { BiCaretLeft } from "react-icons/bi";
import { SpinnerContext } from "../../components/SpinnerContext";

const Section2 = () => {
  const { spinner, setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [supportNeededFor, setSupportNeededFor] = useState("");
  const [supportNeededForText, setSupportNeededForText] = useState("");
  const [supportNeededForErr, setSupportNeededForErr] = useState("");

  useEffect(() => {
    if (!sessionStorage.getItem("connectWithUsForm")) {
      navigate(`/connect-with-us/1`);
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      reasonOfStartingBusiness: "",
      prevExperience: "",
      supportNeededFor: "",
      hoursPerWeek: 0,
      initialBudget: "",
    },
  });

  const handleInputFocus = () => {
   // Clear radio buttons when text input is focused
    handleSupportNeededForChange("");
    setSupportNeededFor("");
  };

  // Handle text input change
  const handleSupportNeededForChange = (value) => {
    setSupportNeededForText(value);
    if (value.trim() === "") {
      setSupportNeededForErr("Please specify what support you need the most");
    } else {
      setSupportNeededForErr("");
    }
  };

  const handleRadioChange = (value) => {
    setSupportNeededFor(value);
    setSupportNeededForErr("");
    setSupportNeededForText("");
  };

  // Handle form submission
  const onSubmit = async (values) => {
    if (supportNeededFor.trim() === "" && supportNeededForText.trim() === "") {
      setSupportNeededForErr("Please select or specify what support you need the most");
      return;
    } else {
      values.supportNeededFor = supportNeededFor || supportNeededForText;
    }

    if (!isCheckboxChecked) {
      toast.error("Please accept the terms and conditions");
      return;
    }
    const contactForm =
      JSON.parse(sessionStorage.getItem("connectWithUsForm")) || null;

    if (!contactForm) {
      toast.error("Please fill the personal information form first");
      return;
    } else {
      var emailBody = "Name: " + contactForm.fullName + "\n\n";
      emailBody += "Email: " + contactForm.email + "\n\n";
      emailBody += "Phone Number: " + contactForm.phone + "\n\n";
      if (contactForm.linkedInUrl) {
        emailBody += "LinkedIn: " + contactForm.linkedInUrl + "\n\n";
      }
      emailBody +=
        "Location: " +
        contactForm.city +
        ", " +
        contactForm.state +
        ", " +
        contactForm.country +
        "\n\n";
      emailBody +=
        "Reason of Starting Business: " +
        values.reasonOfStartingBusiness +
        "\n\n";
      emailBody += "Previous Experience: " + values.prevExperience + "\n\n";
      emailBody += "Support Needed For: " + values.supportNeededFor + "\n\n";
      emailBody += "Hours Per Week: " + values.hoursPerWeek + "\n\n";
      emailBody += "Initial Budget: " + values.initialBudget + "\n\n";

      // Construct the request payload
      var payload = {
        to: "ceo@boostmysites.com",
        subject: "You Got A New Message - Connect With Us Form",
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
          .then((res) => {
            if (res.error) {
              toast.error(res.error);
            } else {
              toast.success("Email sent successfully");
              reset();
              sessionStorage.removeItem("isoCode");
              sessionStorage.removeItem("connectWithUsForm");
              navigate("/connect-with-us/thank-you");
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      } catch (err) {
        toast.error("Something went wrong");
      } finally {
        setSpinner(false);
      }
    }
  };

  // Validate support needed field before form submission
  const validateSupportNeededChange = () => {
    if (supportNeededFor.trim() === "" && supportNeededForText.trim() === "") {
      setSupportNeededForErr("Please specify what support you need the most");
      return false;
    } else {
      setSupportNeededForErr("");
      return true;
    }
  };

  return (
    <div className="max-w-lg mx-auto gap-5 text-white pt-[10rem] pb-[3rem] px-5">
      <button
        data-aos="fade-right"
        onClick={() => navigate("/connect-with-us/1")}
        className="flex items-center text-white mb-5"
      >
        <BiCaretLeft className="text-4xl" />
        <span className="text-lg font-medium">Previous Step</span>
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-aos="fade-right"
        data-aos-offset="-150"
      >
        <div className="grid grid-cols-1 gap-4 mt-6">
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Why Do You Want to Start an AI Company?
            </label>
            <textarea
              type="text"
              name="reasonOfStartingBusiness"
              rows="3"
              className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
              {...register("reasonOfStartingBusiness", {
                required: "This field is required",
                validate: (value) =>
                  value.trim().split(/\s+/).length >= 5 ||
                  "Please enter at least 5 words.",
              })}
              placeholder="Detailed description in minimum 5 words"
              //   placeholder="Enter the reason for starting an AI company"
            />
            <small className="error">
              {errors.reasonOfStartingBusiness?.message}
            </small>
          </div>
          <div className="grid grid-cols-1 relative">
            <label className="text-sm">
              Have You Launched Any Businesses or AI Projects Before?
            </label>
            <div className="bg-white/70 p-3 rounded-md text-black mt-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="prevExperience"
                  value="Yes"
                  {...register("prevExperience", {
                    required: "This field is required",
                  })}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>Yes</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  name="prevExperience"
                  value="No"
                  {...register("prevExperience", {
                    required: "This field is required",
                  })}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>No</label>
              </div>
            </div>
            {errors.prevExperience && (
              <small className="text-red-500">
                {errors.prevExperience.message}
              </small>
            )}
          </div>
          <div className="grid grid-cols-1 relative">
            <label className="text-sm">
              What Type of Support Do You Need Most?
            </label>
            <div className="bg-white/70 p-3 rounded-md text-black mt-2">
              {/* Radio Options */}
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Product Development"
                  name="supportNeededFor"
                  onChange={() => handleRadioChange("Product Development")}
                  checked={supportNeededFor === "Product Development"}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>Product Development</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  value="Marketing & Branding"
                  name="supportNeededFor"
                  onChange={() => handleRadioChange("Marketing & Branding")}
                  checked={supportNeededFor === "Marketing & Branding"}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>Marketing & Branding</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  value="Legal/Compliance Support"
                  name="supportNeededFor"
                  onChange={() => handleRadioChange("Legal/Compliance Support")}
                  checked={supportNeededFor === "Legal/Compliance Support"}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>Legal/Compliance Support</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  value="Financial Planning"
                  onChange={() => handleRadioChange("Financial Planning")}
                  checked={supportNeededFor === "Financial Planning"}
                  name="supportNeededFor"
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>Financial Planning</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  value="Sales Strategy"
                  onChange={() => handleRadioChange("Sales Strategy")}
                  checked={supportNeededFor === "Sales Strategy"}
                  name="supportNeededFor"
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>Sales Strategy</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  name="supportNeededFor"
                  value="Technical Infrastructure (servers, cloud storage, etc.)"
                  onChange={() => handleRadioChange("Technical Infrastructure (servers, cloud storage, etc.)")}
                  checked={supportNeededFor === "Technical Infrastructure (servers, cloud storage, etc.)"}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>
                  Technical Infrastructure (servers, cloud storage, etc.)
                </label>
              </div>

              {/* Custom Input Field */}
              <div className="flex flex-col ml-0 mt-5">
                <label className="text-sm">Other (please specify)</label>
                <input
                  type="text"
                  name="supportNeededForText"
                  onFocus={handleInputFocus}
                  value={supportNeededForText}
                  onChange={(e) => handleSupportNeededForChange(e.target.value)}
                  className="mt-2 placeholder:text-sm text-sm placeholder:text-black/50 outline-none rounded-[0.2rem] py-2 px-2 text-black bg-white/40"
                />
              </div>
            </div>
              {supportNeededForErr && (
              <small className="text-red-700">{supportNeededForErr}</small>
            )}
          </div>
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              How Many Hours per Week Can You Dedicate to This Venture?
            </label>
            <input
              type="number"
              name="hoursPerWeek"
              typeof="number"
              inputMode="numeric"
              min={0}
              className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
              {...register("hoursPerWeek", {
                required: "This field is required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Please enter numbers only.",
                },
                min:{
                  value: 1,
                  message: "Please enter a value greater 0",
                },
                validate: (val) => {
                  if (!/^[0-9]*$/.test(Number(val))) {
                    return "Please enter numbers only.";
                  }
                },
              })}
              placeholder="Hours per week"
            />
            <small className="error">{errors.hoursPerWeek?.message}</small>
          </div>

          {/* Timeline Field */}
          <div className="relative">
            <label htmlFor="" className="text-sm text-white">
              Do You Have an Initial Budget or Funding for the Project if yes
              how much?
            </label>
            <select
              {...register("initialBudget", {
                required: "Please select your initial budget",
              })}
              className="text-black rounded-md bg-white/70 outline-none flex justify-between w-full py-3 px-2"
            >
              <option value="">Select</option>
              <option value="3 lakhs to 4 lakhs">3 lakhs to 4 lakhs</option>
              <option value="4 lakhs to 6 lakhs">4 lakhs to 6 lakhs</option>
              <option value="10 lakhs plus">10 lakhs plus</option>
            </select>
            {errors.initialBudget && (
              <small className="error">
                {errors.initialBudget.message}
              </small>
            )}
          </div>

          <div className="flex gap-2">
            <div className="mt-1">
              <input
                type="checkbox"
                name="checkbox"
                className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                checked={isCheckboxChecked}
                onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
              />
            </div>
            <p className="text-sm">
              I acknowledge that building an AI company with support from
              Boostmysites will require commitment, and I am prepared to invest
              my time and effort into making it successful.
            </p>
          </div>

          {/* Submit Button */}
          <button
            disabled={spinner}
            type="submit"
            onClick={validateSupportNeededChange}
            className={`${
              spinner
                ? "bg-primary/80 text-black py-2 px-4 rounded-md transition-all duration-300"
                : "primary-btn"
            } flex justify-center mt-4`}
          >
            {spinner ? (
              <div className="shadow-none">
                <PiSpinnerGapLight className="rotate-animation text-2xl" />
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
      {/* <div className="md:block hidden w-full h-full">
        <img loading="lazy" 
          src={img}
          className="h-full w-full object-cover rounded-lg"
          alt=""
           
        />
      </div> */}
    </div>
  );
};

export default Section2;
