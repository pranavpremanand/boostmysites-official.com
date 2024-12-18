import { useForm, useFieldArray } from "react-hook-form";
import { useContext, useState } from "react";
import { SpinnerContext } from "../components/SpinnerContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PiSpinnerGapLight } from "react-icons/pi";

const ProjectRequirementForm = ({ subject }) => {
  const { spinner, setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      features: ["", "", ""],
      userRoles: ["", ""],
    },
  });
  const { fields: featureFields, append: appendFeature } = useFieldArray({
    control,
    name: "features",
  });
  const { fields: userRoleFields, append: appendUserRole } = useFieldArray({
    control,
    name: "userRoles",
  });
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const onSubmit = async (data) => {
    // Construct email body
    let emailBody = `
        Name: ${data.name}\n
        Email: ${data.email}\n
        Phone Number: ${data.phone}\n
        Project Name: ${data.projectName}\n
        Description: ${data.description}\n
        Features: ${data.features?.join(", ")}\n
        User Roles: ${data.userRoles?.join(", ")}\n
        Platform: ${data.platform}\n
        Other Platform: ${data.otherPlatform || "N/A"}\n
        Design Style: ${data.designStyle}\n
        Tech Stack: ${data.techStack}\n
        Integrations: ${data.integrations}\n
        Timeline: ${data.timeline}\n
        Budget: ${data.budget}\n
        Additional Notes: ${data.additionalNotes}\n
       Date: ${new Date().toLocaleDateString()}\n
      `;

    // Create payload for email
    const payload = {
      to: "ceo@boostmysites.com",
      subject: subject,
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
            navigate("/thank-you");
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

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data, "Form Data Submitted");
      setSubmitStatus({
        success: true,
        message: "Form submitted successfully!",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black/60 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-28">
        <div className="absolute inset-0 bg-gradient-to-r from-[#414040] to-[#f0801c] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              {subject === "Project Requirement Form Submission"
                ? "Basic Project Requirement Form"
                : "Basic Sales Requirement Form"}
            </h2>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Client Information
              </h3>
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Name"
                  className={`w-full px-3 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className={`w-full px-3 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("phone", {
                    required: "Phone is required",
                    minLength: {
                      value: 10,
                      message: "Phone number must be at least 10 characters",
                    },
                    pattern: {
                      value: /^[+\-]?\d{10,}$/,
                      message:
                        "Invalid phone number. Only numbers, +, and - are allowed",
                    },
                  })}
                  type="tel"
                  placeholder="Phone"
                  className={`w-full px-3 py-2 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Project Details
              </h3>
              <div>
                <input
                  {...register("projectName", {
                    required: "Project name is required",
                  })}
                  type="text"
                  placeholder="Project Name"
                  className={`w-full px-3 py-2 border ${
                    errors.projectName ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                />
                {errors.projectName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.projectName.message}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  placeholder="Brief Description"
                  className={`w-full px-3 py-2 border ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                  rows={3}
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Core Requirements
              </h3>
              <div>
                <label className="block mb-2">Main Features Needed:</label>
                {featureFields.map((field, index) => (
                  <input
                    key={field.id}
                    {...register(`features.${index}`, {
                      required: "Feature is required",
                    })}
                    type="text"
                    placeholder={`Feature ${index + 1}`}
                    className={`w-full px-3 py-2 border ${
                      errors.features?.[index]
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c] mb-2`}
                  />
                ))}
                {errors.features && (
                  <p className="text-red-500 text-sm mt-1">
                    All features must be filled
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => appendFeature("")}
                  className="text-[#f0801c] hover:text-black transition-colors duration-300"
                >
                  + Add Feature
                </button>
              </div>
              <div>
                <label className="block mb-2">
                  User Roles (if applicable):
                </label>
                {userRoleFields.map((field, index) => (
                  <input
                    key={field.id}
                    {...register(`userRoles.${index}`, {
                      required: "User role is required",
                    })}
                    type="text"
                    placeholder={`Role ${index + 1}`}
                    className={`w-full px-3 py-2 border ${
                      errors.userRoles?.[index]
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c] mb-2`}
                  />
                ))}
                {errors.userRoles && (
                  <p className="text-red-500 text-sm mt-1">
                    All user roles must be filled
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => appendUserRole("")}
                  className="text-[#f0801c] hover:text-black transition-colors duration-300"
                >
                  + Add Role
                </button>
              </div>
              <div>
                <label className="block mb-2">Platform:</label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      {...register("platform", {
                        required: "Platform is required",
                      })}
                      type="radio"
                      value="Web"
                      className="form-radio text-[#f0801c]"
                    />
                    <span className="ml-2">Web</span>
                  </label>
                  <label className="inline-flex items-center mb-2">
                    <input
                      {...register("platform", {
                        required: "Platform is required",
                      })}
                      type="radio"
                      value="Mobile"
                      className="form-radio text-[#f0801c]"
                    />
                    <span className="ml-2">Mobile (Android/iOS)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      {...register("platform", {
                        required: "Platform is required",
                      })}
                      type="radio"
                      value="Other"
                      className="form-radio text-[#f0801c]"
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
                {errors.platform && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.platform.message}
                  </p>
                )}
              </div>
              {watch("platform") === "Other" && (
                <div className="mt-2">
                  <input
                    {...register("otherPlatform", {
                      required: "Please specify the other platform",
                    })}
                    type="text"
                    placeholder="Please specify the platform"
                    className={`w-full px-3 py-2 border ${
                      errors.otherPlatform
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                  />
                  {errors.otherPlatform && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.otherPlatform.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Design and Technical Preferences
              </h3>
              <div>
                <input
                  {...register("designStyle", {
                    required: "Design style is required",
                  })}
                  type="text"
                  placeholder="Preferred Design Style (if any)"
                  className={`w-full px-3 py-2 border ${
                    errors.designStyle ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                />
                {errors.designStyle && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.designStyle.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("techStack", {
                    required: "Tech stack is required",
                  })}
                  type="text"
                  placeholder="Technology Stack (if known)"
                  className={`w-full px-3 py-2 border ${
                    errors.techStack ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                />
                {errors.techStack && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.techStack.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("integrations", {
                    required: "Integrations are required",
                  })}
                  type="text"
                  placeholder="Third-Party Integrations"
                  className={`w-full px-3 py-2 border ${
                    errors.integrations ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                />
                {errors.integrations && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.integrations.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Timeline and Budget
              </h3>
              <div>
                <input
                  {...register("timeline", {
                    required: "Timeline is required",
                  })}
                  type="text"
                  placeholder="Estimated Timeline"
                  className={`w-full px-3 py-2 border ${
                    errors.timeline ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                />
                {errors.timeline && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.timeline.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("budget", { required: "Budget is required" })}
                  type="text"
                  placeholder="Budget Range"
                  className={`w-full px-3 py-2 border ${
                    errors.budget ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                />
                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.budget.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block mb-2">
                Additional Notes or Comments:
              </label>
              <textarea
                {...register("additionalNotes", {
                  required: "Additional notes are required",
                })}
                className={`w-full px-3 py-2 border ${
                  errors.additionalNotes ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                rows={3}
              ></textarea>
              {errors.additionalNotes && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.additionalNotes.message}
                </p>
              )}
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>
                I confirm that the information provided is accurate to the best
                of my knowledge.
              </p>
              <p className="mt-2">Date: {new Date().toLocaleDateString()}</p>
            </div>

            <button
              disabled={spinner}
              type="submit"
              className="primary-btn w-full"
            >
              {spinner ? (
                <div className="shadow-none">
                  <PiSpinnerGapLight className="rotate-animation text-2xl" />
                </div>
              ) : (
                "Submit"
              )}
              {/* Submit */}
            </button>

            {submitStatus.message && (
              <p
                className={`text-center mt-4 ${
                  submitStatus.success ? "text-green-500" : "text-red-500"
                }`}
              >
                {submitStatus.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectRequirementForm;
