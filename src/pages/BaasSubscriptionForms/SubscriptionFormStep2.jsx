import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiSpinnerGapLight } from "react-icons/pi";
import "react-country-phone-input/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import { BiCaretLeft } from "react-icons/bi";
import axios from "axios";
import { SpinnerContext } from "../../components/SpinnerContext";
import SubscriptionPlansPopup from "./components/SubscriptionPlansPopup";

const SubscriptionFormStep2 = () => {
  const { spinner, setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [primaryGoalText, setPrimaryGoalText] = useState("");
  const [primaryGoalErr, setPrimaryGoalErr] = useState("");
  const [isAgreedConditions, setIsAgreedConditions] = useState(false);
  const [showPopupForm, setShowPopupForm] = useState(false);

  useEffect(() => {
    const contactForm =
      JSON.parse(sessionStorage.getItem("subscriptionForm")) || null;
    if (!contactForm) {
      navigate("/subscription-form/step1");
    } else if (contactForm?.primaryGoal) {
      setShowPopupForm(true);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      expectedEarnings: "",
      timeline: "",
      primaryGoalText: "",
    },
  });

  const handleRadioChange = (value) => {
    setPrimaryGoal(value);
    setPrimaryGoalErr("");
    setPrimaryGoalText("");
  };

  const handlePrimaryGoalChange = (value) => {
    setPrimaryGoalText(value);
    setPrimaryGoalErr(value.trim() ? "" : "Please specify your primary goal");
  };

  const onSubmit = async (values) => {
    if (!primaryGoal.trim() && !primaryGoalText.trim()) {
      setPrimaryGoalErr("Please select or specify your primary goal");
      return;
    }
    values.primaryGoal = primaryGoal || primaryGoalText;

    const subscriptionForm = JSON.parse(
      sessionStorage.getItem("subscriptionForm")
    );
    if (!subscriptionForm) {
      toast.error("Please fill the contact form first");
      return;
    }
    if (!isAgreedConditions) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    Object.assign(values, subscriptionForm);

    let emailBody = `
      Name: ${values.fullName}\n
      Email: ${values.email}\n
      Phone: ${values.phone}\n
      Location: ${values.state}, ${values.country}\n
      Expected Earnings: ${values.expectedEarnings}\n
      Primary Goal: ${values.primaryGoal}\n
      Investment Capital: ${values.investmentCapital}\n
      Timeline: ${values.timeline}\n
    `;

    const payload = {
      to: "mpranavprem@gmail.com",
      // to: "ceo@boostmysites.com",
      subject: "Subscription form submission",
      body: emailBody,
      name: "BoostMySites",
    };

    try {
      setSpinner(true);
      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        payload
      );

      if (res.data.success) {
        setShowPopupForm(true);
        sessionStorage.setItem("subscriptionForm", JSON.stringify(values));
      } else {
        toast.error(res.error);
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setSpinner(false);
    }
  };

  return (
    <div className="landing-page max-w-md mx-auto gap-5 text-white section-pt px-5">
      {showPopupForm && (
        <SubscriptionPlansPopup setShowPopupForm={setShowPopupForm} />
      )}
      <button
        onClick={() => navigate("/subscription-form/step1")}
        className="flex items-center text-white mb-5"
      >
        <BiCaretLeft className="text-4xl" />
        <span className="text-lg font-medium">Previous Step</span>
      </button>

      <form onSubmit={handleSubmit(onSubmit)} data-aos="fade-right">
        <div className="grid grid-cols-1 gap-4 mt-6">
          {/* Expected Earnings */}
          <div>
            <label className="text-sm">
              What are your expected annual earnings?
            </label>
            <div className="bg-white/70 p-3 rounded-md text-black mt-2">
              {[
                "25 lakhs per annum",
                "50 lakhs per annum",
                "1 crore per annum",
              ].map((amount) => (
                <div key={amount} className="flex items-center gap-2 mt-3">
                  <input
                    type="radio"
                    value={amount}
                    {...register("expectedEarnings", {
                      required: "Please select your expected earnings",
                    })}
                    className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                  />
                  <label>{amount}</label>
                </div>
              ))}
            </div>
            {errors.expectedEarnings && (
              <small className="text-red-700">
                {errors.expectedEarnings.message}
              </small>
            )}
          </div>

          {/* Primary Goal */}
          <div>
            <label className="text-sm">
              What are your primary goals for starting this business?
            </label>
            <div className="bg-white/70 p-3 rounded-md text-black mt-2">
              {[
                "Financial independence",
                "Passion for the industry",
                "Solving a problem",
              ].map((goal) => (
                <div key={goal} className="flex items-center gap-2 mt-3">
                  <input
                    type="radio"
                    value={goal}
                    checked={primaryGoal === goal}
                    onChange={() => handleRadioChange(goal)}
                    className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                  />
                  <label>{goal}</label>
                </div>
              ))}
              <div className="flex flex-col ml-0 mt-5">
                <label className="text-sm">
                  None of the above? Please specify
                </label>
                <input
                  type="text"
                  value={primaryGoalText}
                  onChange={(e) => handlePrimaryGoalChange(e.target.value)}
                  className="mt-2 text-sm placeholder:text-black/50 outline-none rounded-md py-2 px-2 text-black bg-white/40"
                />
              </div>
            </div>
            {primaryGoalErr && (
              <small className="text-red-700">{primaryGoalErr}</small>
            )}
          </div>

          {/* Timeline */}
          <div>
            <label className="text-sm">
              What is your timeline for launching your business?
            </label>
            <select
              {...register("timeline", {
                required: "Please select your timeline",
              })}
              className="text-black rounded-md bg-white/70 outline-none w-full py-3 px-2"
            >
              <option value="">Select</option>
              {["1-3 months", "3-6 months", "6-12 months", "Not sure yet"].map(
                (t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                )
              )}
            </select>
            {errors.timeline && (
              <small className="text-red-700">{errors.timeline.message}</small>
            )}
          </div>

          {/* Checkbox */}
          <div className="mt-4 flex items-start">
            <input
              type="checkbox"
              checked={isAgreedConditions}
              onChange={(e) => setIsAgreedConditions(e.target.checked)}
              className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer mr-2"
            />
            <label className="text-sm">
              By submitting the form, you consent to our{" "}
              <Link
                className="text-primary underline font-semibold"
                to="/terms-and-conditions"
              >
                terms and conditions
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            disabled={spinner}
            type="submit"
            className="primary-btn flex justify-center mt-4"
          >
            {spinner ? (
              <PiSpinnerGapLight className="rotate-animation text-2xl" />
            ) : (
              "Subscribe Now"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionFormStep2;
