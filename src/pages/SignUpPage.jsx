import { useForm } from "react-hook-form";
import gif from "../assets/gif/signup-gif.gif";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import FileUpload from "../components/FileUpload";
import SignaturePad from "../components/SignaturePad";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const sigCanvas = useRef();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    if (loading) return;
    setLoading(true);
    if (!data.signature) {
      alert("Please provide a signature");
      setLoading(false);
      return;
    }

    const formData = new FormData();

    const emailBody = `Name: ${data.name}\n\nEmail: ${data.email}\n\nPhone: ${data.whatsapp}\n\npaymentId: ${data.paymentId}\n\npaymentDate:\n${data.paymentDate}`;

    const signatureFile = dataURItoFile(data.signature, "signature.png");

    if (file) {
      formData.append("file", file);
    }
    if (signatureFile) {
      formData.append("file", signatureFile);
    }
    formData.append("body", emailBody);
    try {
      const response = await axios.post(
        "https://boostmysite-attachment-email-zeta.vercel.app/api/send-signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        alert("Form submitted successfully!");
        reset();
        setFile(null);
        setLoading(false);
        clear();
        handleRemoveFile();
      } else {
        alert("Form submission failed!");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
      setLoading(false);
    }
  };

  const dataURItoFile = (dataURI, filename) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new File([ab], filename, { type: mimeString });
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.querySelector(
        `[name="${firstErrorField}"]`
      );

      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [errors]);

  const clear = () => {
    sigCanvas.current.clear();
    setValue("signature", "");
  };
  const handleRemoveFile = () => {
    setFile(null);
    setImage(null);
  };
  return (
    <div className="min-h-screen bg-gray-100 pt-[10rem]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <img
              src={gif}
              alt="Sign Up Illustration"
              className="mx-auto w-64"
            />
          </div>
          <div className="bg-orange-500 rounded-lg p-6 shadow-lg">
            <h1 className="text-white text-4xl font-light mb-8 text-center">
              SIGN UP
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-white text-lg mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg text-black"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-200 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <label className="block text-white text-lg mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg text-black"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <span className="text-red-200 text-sm">
                    Please enter a valid email
                  </span>
                )}
              </div>
              <div>
                <label className="block text-white text-lg mb-2">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full p-3 rounded-lg text-black"
                  {...register("whatsapp", {
                    required: true,
                    pattern: /^\+?[1-9]\d{1,14}$/,
                  })}
                />
                {errors.whatsapp && (
                  <span className="text-red-200 text-sm">
                    Please enter a valid WhatsApp number (e.g., +1234567890)
                  </span>
                )}
              </div>

              <FileUpload
                register={register}
                name="idProof"
                label="ID Proof"
                errors={errors}
                file={file}
                setFile={setFile}
                handleRemoveFile={handleRemoveFile}
                setImage={setImage}
                image={image}
              />

              <div>
                <label className="block text-white text-lg mb-2">
                  Payment ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg text-black"
                  {...register("paymentId", { required: true })}
                />
              </div>
              {errors.paymentId && (
                <span className="text-red-200 text-sm">
                  Payment ID is required. Please enter a valid Payment ID to
                  proceed.
                </span>
              )}
              <div>
                <label className="block text-white text-lg mb-2">
                  Payment Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full p-3 rounded-lg text-black"
                  {...register("paymentDate", { required: true })}
                />
              </div>
              {errors.paymentDate && (
                <span className="text-red-200 text-sm">
                  Payment Date is required. Please select a valid date.
                </span>
              )}

              <SignaturePad
                register={register}
                setValue={setValue}
                clear={clear}
                sigCanvas={sigCanvas}
              />

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  className="mt-1 text-black"
                  {...register("declaration", { required: true })}
                />
                <label className="text-white text-sm">
                  I confirm that I have read and agree to the{" "}
                  <Link
                    to={"/terms-and-conditions"}
                    className="text-orange-100 underline underline-offset-2"
                  >
                    Terms and Conditions
                  </Link>{" "}
                  Terms and Conditions of the website.
                </label>
              </div>
              {errors.declaration && (
                <span className="text-red-200 text-sm">
                  You must agree to the Terms and Conditions to proceed.
                </span>
              )}

              <div className="text-center">
                <button
                  disabled={loading}
                  type="submit"
                  className={`${
                    loading ? `bg-black/70` : `bg-black`
                  } text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors`}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="fixed bottom-4 right-4">
          <button className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors">
            Contact us
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SignUpForm;
