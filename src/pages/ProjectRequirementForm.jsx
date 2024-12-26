import { useForm, useFieldArray } from "react-hook-form";
import { useContext, useRef, useState } from "react";
import { SpinnerContext } from "../components/SpinnerContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PiSpinnerGapLight } from "react-icons/pi";

const ProjectRequirementForm = ({ subject }) => {
  const { spinner, setSpinner } = useContext(SpinnerContext);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const inputRef = useRef(null);
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
    setSpinner(true);
    console.log(data, "thisisdata");
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
        Join Month: ${data.joinMonth}\n
        Join Year: ${data.joinYear}\n
        Sale Option: ${data.salesOption}\n
        Subscriber Name: ${data.subscribername}\n
        referenceWebsite: ${data.referenceWebsite}\n
       Date: ${new Date().toLocaleDateString()}\n
      `;

    const formData = new FormData();
    const subjectFormail = subject;
    formData.append("body", emailBody);
    formData.append("subject", subjectFormail);
    if (file) {
      formData.append("file", file);
    }

    const googleFormURL =
      "https://script.google.com/macros/s/AKfycbwIJOyXVKHbG0PjXPkoEyet8tTbInvk--G01ibCM9Rsgnmldax-K5pHPbaD1KdeJcF1GA/exec";
    const googleFormData = new URLSearchParams();
    googleFormData.append("name", data.name);
    googleFormData.append("email", data.email);
    googleFormData.append("phone", data.phone);
    googleFormData.append("projectName", data.projectName || "N/A");
    googleFormData.append("description", data.description || "N/A");
    googleFormData.append("features", data.features?.join(", ") || "N/A");
    googleFormData.append("userRoles", data.userRoles?.join(", ") || "N/A");
    googleFormData.append("platform", data.platform || "N/A");
    googleFormData.append("otherPlatform", data.otherPlatform || "N/A");
    googleFormData.append("designStyle", data.designStyle || "N/A");
    googleFormData.append("techStack", data.techStack || "N/A");
    googleFormData.append("integrations", data.integrations || "N/A");
    googleFormData.append("timeline", data.timeline || "N/A");
    googleFormData.append("budget", data.budget || "N/A");
    googleFormData.append("additionalNotes", data.additionalNotes || "N/A");
    googleFormData.append("joinMonth", data.joinMonth || "N/A");
    googleFormData.append("joinYear", data.joinYear || "N/A");
    googleFormData.append("salesOption", data.salesOption || "N/A");
    googleFormData.append("subscribername", data.subscribername || "N/A");
    googleFormData.append("referenceWebsite", data.referenceWebsite || "N/A");
    googleFormData.append("date", new Date().toLocaleDateString());
    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: googleFormData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Ensure content type is correct
        },
        redirect: "follow",
      });

      // await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      // await fetch("http://localhost:8080/api/send-email", {
      await fetch(
        "https://boostmysite-attachment-email-zeta.vercel.app/api/send-email",
        // "https://boostmysite-attachment-email.vercel.app/api/send-email",
        {
          method: "POST",
          body: formData,
        }
      )
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

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5000000) {
        setError("File size must be less than 5MB");
      } else {
        setFile(selectedFile);
        setError(null);
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.size > 5000000) {
        setError("File size must be less than 5MB");
      } else {
        setFile(droppedFile);
        setError(null);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1999 }, (_, i) => 2000 + i);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log(file, "adsjfaksdlfasd");
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
                How would you like to handle this sale?
              </h3>

              <div className=" grid grid-cols-1 gap-5">
                <div className="flex items-center border rounded-xl p-5 h-full">
                  <input
                    {...register("salesOption", {
                      required: "Please select a sale option",
                    })}
                    type="radio"
                    id="doItYourself"
                    value="doItYourself"
                    className="h-4 w-4 text-[#f0801c] focus:ring-[#f0801c] border-gray-300"
                  />
                  <label
                    htmlFor="doItYourself"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    <span className="font-semibold">Do it Yourself sale:</span>{" "}
                    You are pitching the client, and retain 70% of the profit
                    upon successful closing, with 30% allocated for development
                    costs.
                  </label>
                </div>
                <div className="flex items-center border rounded-xl p-5 h-full">
                  <input
                    {...register("salesOption", {
                      required: "Please select a sale option",
                    })}
                    type="radio"
                    id="salesTeam"
                    value="salesTeam"
                    className="h-4 w-4 text-[#f0801c] focus:ring-[#f0801c] border-gray-300"
                  />
                  <label
                    htmlFor="salesTeam"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    <span className="font-semibold">Sales Team Service:</span>{" "}
                    Our Sales Team takes over to help close the deal. You keep
                    50% of the profit upon successful closing, with 20%
                    commission for the Sales Team and 30% for development costs.
                  </label>
                </div>
              </div>

              {errors.salesOption && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.salesOption.message}
                </p>
              )}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Subscriber Information
              </h3>

              <div>
                <input
                  {...register("subscribername", {
                    required: "Subscriber Name is required",
                  })}
                  type="text"
                  placeholder="Subscriber Name*"
                  className={`w-full px-3 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                />
                {errors.subscribername && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subscribername.message}
                  </p>
                )}
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <select
                    {...register("joinMonth")}
                    className={`w-full px-3 py-2 border ${
                      errors.joinMonth ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                  >
                    <option value="">Select Month</option>
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  {errors.joinMonth && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.joinMonth.message}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <select
                    {...register("joinYear")}
                    className={`w-full px-3 py-2 border ${
                      errors.joinYear ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                  >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  {errors.joinYear && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.joinYear.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <input
                  {...register("phoneNumber")}
                  type="tel"
                  placeholder="Phone Number"
                  className={`w-full px-3 py-2 border ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Client Information
              </h3>
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Name*"
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
                  {...register("email")}
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
                  {...register("phone")}
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
                  {...register("projectName")}
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
                  placeholder="Brief Description*"
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
              <div>
                <input
                  {...register("referenceWebsite", {
                    required: "Reference Website is required",
                  })}
                  type="url"
                  placeholder="Reference Website*"
                  className={`w-full px-3 py-2 border ${
                    errors.referenceWebsite
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0801c]`}
                />
                {errors.referenceWebsite && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.referenceWebsite.message}
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
                    {...register(`features.${index}`)}
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
                    {...register(`userRoles.${index}`)}
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
                      {...register("platform")}
                      type="radio"
                      value="Web"
                      className="form-radio text-[#f0801c]"
                    />
                    <span className="ml-2">Web</span>
                  </label>
                  <label className="inline-flex items-center mb-2">
                    <input
                      {...register("platform")}
                      type="radio"
                      value="Mobile"
                      className="form-radio text-[#f0801c]"
                    />
                    <span className="ml-2">Mobile (Android/iOS)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      {...register("platform")}
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
                    {...register("otherPlatform")}
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
                  {...register("designStyle")}
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
                  {...register("techStack")}
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
                  {...register("integrations")}
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
                  {...register("timeline")}
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
                  placeholder="Budget Range*"
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
                {...register("additionalNotes")}
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
            <div>
              <label className="block mb-2">Upload File:</label>

              {/* Drag and Drop Area */}
              <div
                className="w-full p-4 border-dashed rounded-md cursor-pointer relative"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={handleDivClick}
                style={{
                  borderColor: file ? "#4CAF50" : error ? "#f44336" : "#ccc",
                  backgroundColor: file || error ? "transparent" : "#f9f9f9",
                }}
              >
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*, .pdf, .doc, .docx, .txt"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {file ? (
                  file.type.startsWith("image/") ? (
                    <div className="relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt="Uploaded"
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <button
                        onClick={handleRemoveFile}
                        className="absolute w-5 h-5 flex justify-center items-center top-2 right-2 bg-red-500 text-white p-1 rounded-full text-sm"
                        aria-label="Remove Image"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="relative bg-gray-100 p-4 rounded-md">
                      <p className="text-gray-700">{file.name}</p>
                      <button
                        onClick={handleRemoveFile}
                        className="absolute w-5 h-5 flex justify-center items-center top-2 right-2 bg-red-500 text-white p-1 rounded-full text-sm"
                        aria-label="Remove File"
                      >
                        ✕
                      </button>
                    </div>
                  )
                ) : (
                  <p className="text-center text-gray-500">
                    Drag & drop a file here, or click to select a file
                  </p>
                )}
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
