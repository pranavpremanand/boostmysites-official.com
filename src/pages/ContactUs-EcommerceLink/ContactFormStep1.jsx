import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
// import { SpinnerContext } from "./SpinnerContext";
import PhoneInput from "react-country-phone-input";
import "react-country-phone-input/lib/style.css";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";

const ContactFormStep1Ecommerce = ({ pathToRedirect }) => {
  const [country, setCountry] = useState("IN");
  const [state, setState] = useState("");
  const [stateList, setStateList] = useState(State.getStatesOfCountry("IN"));

  // Get all countries
  const allCountries = Country.getAllCountries();

  // Filter countries that have states
  const countriesWithStates = allCountries.filter((country) => {
    const states = State.getStatesOfCountry(country.isoCode);
    return states.length > 0; // Include countries that have at least one state
  });

  useEffect(() => {
    const c = sessionStorage.getItem("isoCode") || "IN";
    setCountry(c);
    const data = JSON.parse(sessionStorage.getItem("contactForm")) || {};
    const states = State.getStatesOfCountry(c) || [];
    setStateList(states);

    if (data) {
      console.log(data.state);
      setState(data.state || "");
      setValue("state", data.state || "");
      setValue("country", data.country || "India");
      setValue("email", data.email || "");
      setValue("fullName", data.fullName || "");
      setValue("phone", data.phone || "");
    }
  }, []);

  const navigate = useNavigate();
  const form = useRef();
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    getValues,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "India",
      state: "",
    },
  });

  const setCities = (c) => {
    const states = State.getStatesOfCountry(c);
    const cntry = Country.getCountryByCode(c);
    setCountry(c);
    sessionStorage.setItem("isoCode", cntry.isoCode);
    setValue("country", cntry.name);
    // const initialState = State.getStatesOfCountry(c)[0] || {};
    // setValue("state", initialState.name);
    // setState(initialState.name);
    setState("");
    setStateList(states);
  };

  const nextStep = (values) => {
    const countriesList = Country.getAllCountries();
    const phoneNumberNotExist = countriesList.find(
      (country) => country.phonecode === values.phone
    );
    if (!phoneNumberNotExist) {
      const data = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        country: values.country,
        state: values.state,
      };
      sessionStorage.setItem("contactForm", JSON.stringify(data));
      if (pathToRedirect === "/") {
        navigate(`${pathToRedirect}contact/step2`);
      } else {
        navigate(`${pathToRedirect}/contact/step2`);
      }
    } else {
      setError("phone", {
        type: "custom",
        message: "Phone is required",
      });
    }
  };

  return (
    <div
      id="contact"
      className="landing-page max-w-md mx-auto gap-5 text-white pt-32 px-5"
    >
      <form
        ref={form}
        onSubmit={handleSubmit(nextStep)}
        data-aos="fade-right"
        data-aos-offset="-150"
      >
        <h2 className="font-medium text-3xl mb-4 sm:mb-6 text-center sm:text-start">
          Tell us a little about yourself{" "}
        </h2>
        <div className="grid grid-cols-1 gap-4 mt-6">
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
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
              placeholder="Enter your full name"
            />
            <small className="error">{errors.fullName?.message}</small>
          </div>
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Email
            </label>
            <input
              type="email"
              className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
              placeholder="Enter your email"
            />
            <small className="error">{errors.email?.message}</small>
          </div>
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Phone Number
            </label>
            {/* <input
              type="phone"
              className="border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[6-9]\d{9}$/i,
                  message: "Entered phone number is invalid",
                },
              })}
            /> */}
            <PhoneInput
              placeholder="Enter your phone number"
              value={getValues("phone")}
              onChange={(val) => {
                setValue("phone", val || ""); // Update phone field with full phone number
                trigger("phone"); // Trigger validation
              }}
              country="in"
              inputProps={{
                name: "phone",
                required: true,
              }}
              className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
            />

            <input
              type="hidden"
              {...register("phone", {
                required: "Phone is required",
                // pattern: {
                //   value: /^[6-9]\d{9}$/i,
                //   message: "Entered phone number is invalid",
                // },
              })}
            />

            <small className="error">{errors.phone?.message}</small>
          </div>
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Country
            </label>
            <div className="border border-[#2d2e32] rounded-[0.2rem] py-3 px-2 text-black bg-white/70">
              <select
                value={country}
                onChange={(e) => {
                  setCities(e.target.value);
                }}
                name="country"
                id=""
                className="bg-transparent outline-none flex justify-between w-full"
              >
                {countriesWithStates.map((country) => (
                  <option
                    className="hover:bg-primary outline-none"
                    key={country.isoCode}
                    value={country.isoCode}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {stateList.length > 0 && stateList[0].name && (
            <div className="grid grid-cols-1 relative">
              <label htmlFor="" className="text-sm">
                State
              </label>
              <div className="border border-[#2d2e32] rounded-[0.2rem] py-3 px-2 text-black bg-white/70">
                <select
                  name="state"
                  id=""
                  className="bg-transparent outline-none flex justify-between w-full"
                  // onChange={(e) => {
                  //   setState(e.target.value);
                  // }}
                  // value={state}
                  {...register("state", {
                    required: "Select state",
                    onChange: (e) => setState(e.target.value),
                  })}
                >
                  <option className="hover:bg-primary outline-none" value="">
                    {state || "Select state"}
                  </option>
                  {stateList.length > 0 &&
                    stateList.map((state) => (
                      <option
                        className="hover:bg-primary outline-none"
                        key={state.name}
                        value={state.name}
                      >
                        {state.name}
                      </option>
                    ))}
                </select>
              </div>
              <small className="error">{errors.state?.message}</small>
            </div>
          )}
          {/* <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Subject
            </label>
            <input
              type="text"
              className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
              placeholder="Enter your subject"
            />
            <small className="error">{errors.subject?.message}</small>
          </div> */}
          {/* <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Message
            </label>
            <textarea
              type="text"
              rows="3"
              className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
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
              placeholder="Enter your message"
            />
            <small className="error">{errors.message?.message}</small>
          </div> */}
          <button type="submit" className="bg-primary primary-btn">
            Next Step
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

export default ContactFormStep1Ecommerce;
