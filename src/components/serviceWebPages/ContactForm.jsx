import { useForm } from "react-hook-form";
import bgImage from "../../assets/images/contact-form-bg.png";
import { useContext, useState, useEffect, useRef } from "react";
import { SpinnerContext } from "../SpinnerContext";
import toast from "react-hot-toast";
import { PiSpinnerGapLight } from "react-icons/pi";
import { RxCaretDown } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const ContactForm = ({ title, service }) => {
  const { spinner, setSpinner } = useContext(SpinnerContext);
  const [isBudgetDropdownOpen, setIsBudgetDropdownOpen] = useState(false);
  const [isFindUsDropdownOpen, setIsFindUsDropdownOpen] = useState(false);

  const budgetDropdownRef = useRef(null);
  const findUsDropdownRef = useRef(null);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        budgetDropdownRef.current &&
        !budgetDropdownRef.current.contains(event.target)
      ) {
        setIsBudgetDropdownOpen(false);
      }
      if (
        findUsDropdownRef.current &&
        !findUsDropdownRef.current.contains(event.target)
      ) {
        setIsFindUsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      projectBudget: "",
      findUs: "",
      projectDetails: "",
    },
  });

  // Handle budget selection
  const handleBudgetChange = (value) => {
    setValue("projectBudget", value);
    setIsBudgetDropdownOpen(false);
  };

  // Handle find us selection
  const handleFindUsChange = (value) => {
    setValue("findUs", value);
    setIsFindUsDropdownOpen(false);
  };

  const onSubmit = async (data) => {
    // Create email body from form data
    let emailBody = `Full Name: ${data.fullName}\n\n`;
    emailBody += `Company Name: ${data.companyName}\n\n`;
    emailBody += `Email: ${data.email}\n\n`;
    emailBody += `Service: ${service}\n\n`;
    emailBody += `Project Budget: ${data.projectBudget}\n\n`;
    emailBody += `How did you find us: ${data.findUs}\n\n`;
    emailBody += `Project Details:\n${data.projectDetails}`;

    // Construct the request payload
    const payload = {
      to: "chairman@boostmysites.com",
      subject: `Contact Form Submission - ${service} Service Page`,
      body: emailBody,
      name: "BoostMySites",
    };

    try {
      setSpinner(true);

      // Send the form data to the API
      const response = await fetch(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Your inquiry has been sent successfully!");
        reset();
      } else {
        toast.error("Failed to send your inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSpinner(false);
    }
  };

  return (
    <div id="contact" className="padding-between bg-black">
      <div className="relative padding-between">
        <div className="absolute left-0 bottom-0 z-0 w-full h-full">
          <img src={bgImage} alt="" className="w-full object-cover" />
        </div>
        <div className="wrapper grid lg:grid-cols-2 gap-8 items-center text-white">
          <div>
            <h2
              className="text-5xl md:text-7xl font-bold leading-tight"
              data-aos="fade-right"
            >
              {title}
            </h2>
          </div>

          <div
            className="bg-white text-black rounded-lg p-8 shadow-lg"
            data-aos="fade-left"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="w-full p-2 border-b border-gray-300 focus:border-black outline-none"
                  placeholder="Jane Cooper"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Company name
                </label>
                <input
                  type="text"
                  {...register("companyName", {
                    required: "Company name is required",
                  })}
                  className="w-full p-2 border-b border-gray-300 focus:border-black outline-none"
                  placeholder="Ex. Tesla Inc"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-2 border-b border-gray-300 focus:border-black outline-none"
                  placeholder="You@Example.Com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Project budget
                  </label>
                  <div className="relative" ref={budgetDropdownRef}>
                    <input
                      type="hidden"
                      {...register("projectBudget", {
                        required: "Project budget is required",
                      })}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setIsBudgetDropdownOpen(!isBudgetDropdownOpen)
                      }
                      className="w-full p-2 border-b border-gray-300 hover:border-gray-500 focus:border-black outline-none text-left flex justify-between items-center transition-colors"
                    >
                      <span
                        className={
                          getValues("projectBudget")
                            ? "text-black"
                            : "text-gray-500"
                        }
                      >
                        {getValues("projectBudget")
                          ? getValues("projectBudget") === "0-5000"
                            ? "$0 - $5,000"
                            : getValues("projectBudget") === "5000-10000"
                            ? "$5,000 - $10,000"
                            : "$10,000+"
                          : "Select Your Range"}
                      </span>
                      <RxCaretDown
                        className={`text-xl transition-transform duration-200 ${
                          isBudgetDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isBudgetDropdownOpen && (
                      <div className="absolute left-0 right-0 mt-1 bg-white shadow-lg rounded-md z-10 border border-gray-200 overflow-hidden">
                        <div
                          className="p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100"
                          onClick={() => handleBudgetChange("3000-5000")}
                        >
                          $3,000 - $5,000
                        </div>
                        <div
                          className="p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100"
                          onClick={() => handleBudgetChange("5000-20000")}
                        >
                          $5,000 - $20,000
                        </div>
                        <div
                          className="p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() => handleBudgetChange("20000-50000")}
                        >
                          $20,000 - $50,000
                        </div>
                        <div
                          className="p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() => handleBudgetChange("50000-plus")}
                        >
                          $50,000+
                        </div>
                      </div>
                    )}
                  </div>
                  {errors.projectBudget && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.projectBudget.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    How did you find us
                  </label>
                  <div className="relative" ref={findUsDropdownRef}>
                    <input
                      type="hidden"
                      {...register("findUs", {
                        required: "This field is required",
                      })}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setIsFindUsDropdownOpen(!isFindUsDropdownOpen)
                      }
                      className="w-full p-2 border-b border-gray-300 hover:border-gray-500 focus:border-black outline-none text-left flex justify-between items-center transition-colors"
                    >
                      <span
                        className={
                          getValues("findUs") ? "text-black" : "text-gray-500"
                        }
                      >
                        {getValues("findUs")
                          ? getValues("findUs") === "google"
                            ? "Google"
                            : getValues("findUs") === "referral"
                            ? "Referral"
                            : getValues("findUs") === "social"
                            ? "Social Media"
                            : "Other"
                          : "Select an option"}
                      </span>
                      <RxCaretDown
                        className={`text-xl transition-transform duration-200 ${
                          isFindUsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isFindUsDropdownOpen && (
                      <div className="absolute left-0 right-0 mt-1 bg-white shadow-lg rounded-md z-10 border border-gray-200 overflow-hidden">
                        <div
                          className="p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100"
                          onClick={() => handleFindUsChange("google")}
                        >
                          Google
                        </div>
                        <div
                          className="p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100"
                          onClick={() => handleFindUsChange("referral")}
                        >
                          Referral
                        </div>
                        <div
                          className="p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100"
                          onClick={() => handleFindUsChange("social")}
                        >
                          Social Media
                        </div>
                        <div
                          className="p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() => handleFindUsChange("other")}
                        >
                          Other
                        </div>
                      </div>
                    )}
                  </div>
                  {errors.findUs && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.findUs.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Project details
                </label>
                <textarea
                  {...register("projectDetails", {
                    required: "Project details are required",
                    minLength: {
                      value: 20,
                      message: "Please provide at least 20 characters",
                    },
                  })}
                  className="w-full p-2 border-b border-gray-300 focus:border-black outline-none resize-none"
                  rows={4}
                  placeholder="Tell us more about your idea"
                />
                {errors.projectDetails && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.projectDetails.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={spinner}
                className="w-fit bg-primary text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                {spinner ? (
                  <>
                    <PiSpinnerGapLight className="animate-spin mr-2 text-xl" />
                    Sending...
                  </>
                ) : (
                  "Send inquiry"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
