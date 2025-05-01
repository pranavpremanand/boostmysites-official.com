import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
// import { SpinnerContext } from "./SpinnerContext";
import PhoneInput from "react-country-phone-input";
import "react-country-phone-input/lib/style.css";
import { Country, State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const [countryIsoCode, setCountryIsoCode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [stateList, setStateList] = useState([]);
  const [cities, setCities] = useState([]);

  // Get all countries
  const allCountries = Country.getAllCountries();

  // Filter countries that have states
  const countriesWithStates = allCountries.filter((country) => {
    const states = State.getStatesOfCountry(country.isoCode);
    return states.length > 0; // Include countries that have at least one state
  });

  useEffect(() => {
    const c = sessionStorage.getItem("isoCode") || "IN";
    setCountryIsoCode(c);
    const data = JSON.parse(sessionStorage.getItem("connectWithUsForm"));
    let currentState;
    const statesArray = State.getStatesOfCountry(c) || [];
    setStateList(statesArray);

    // if data exist in session storage then set data in form
    if (data) {
      setValue("fullName", data.fullName || "");
      setValue("email", data.email || "");
      setValue("phone", data.phone || "");
      setValue("linkedInUrl", data.linkedInUrl || "");
      setValue("city", data.city);
      setValue("state", data.state);
      setValue("country", data.country);
      setState(data.state);
      setCity(data.city);
      currentState = statesArray.find((state) => state.name === data?.state);
    }

    let citiesList;
    if (currentState) {
      citiesList = City.getCitiesOfState(c, currentState.isoCode) || [];
      setCities(citiesList);
    } else {
      // citiesList = City.getCitiesOfState(c, statesArray[0]?.isoCode) || [];
      citiesList = [];
      setCities(citiesList);
    }

    if (!data) {
      const selectedCountry = countriesWithStates.find(
        (cntry) => cntry.isoCode === c
      );
      if (selectedCountry) {
        setValue("country", selectedCountry.name);
      } else {
        setValue("country", "India");
      }
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
      country: "",
      state: "",
      city: "",
      linkedInUrl: "",
    },
  });

  const handleCountryChange = (c) => {
    const states = State.getStatesOfCountry(c);
    const cntry = Country.getCountryByCode(c);
    setCountryIsoCode(c);
    sessionStorage.setItem("isoCode", cntry.isoCode);
    setValue("country", cntry.name);
    setStateList(states);
    setCities([]);
    setState("");
    setCity("");
    setValue("city", "");
    setValue("state", "");
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
        city: values.city,
        linkedInUrl: values.linkedInUrl,
      };
      sessionStorage.setItem("connectWithUsForm", JSON.stringify(data));
      navigate("/connect-with-us/2");
    } else {
      setError("phone", {
        type: "custom",
        message: "Phone is required",
      });
    }
  };

  //   handle state change
  const handleStateChange = (value) => {
    setState(value);
    setCity("");
    setValue("city", "");
    const stateData = stateList.find((state) => state.name === value);
    setCities(City.getCitiesOfState(countryIsoCode, stateData.isoCode));
  };

  return (
    <>
      <div
        id="contact"
        className="max-w-lg mx-auto gap-5 text-white pt-[10rem] pb-[3rem] px-5"
      >
        <form
          ref={form}
          onSubmit={handleSubmit(nextStep)}
          data-aos="fade-right"
          data-aos-offset="-150"
        >
          <h1 className="font-medium text-4xl mb-4 sm:mb-6 text-center text-primary1">
            Start Your AI Company with Our Support
          </h1>
          <h2 className="font-medium text-2xl leading-none text-center sm:text-start">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="grid grid-cols-1">
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
            <div className="grid grid-cols-1">
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
            <div className="grid grid-cols-1">
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
            <div className="grid grid-cols-1">
              <label htmlFor="" className="text-sm">
                Country
              </label>
              <div className="border border-[#2d2e32] rounded-[0.2rem] py-3 px-2 text-black bg-white/70">
                <select
                  value={countryIsoCode}
                  onChange={(e) => {
                    handleCountryChange(e.target.value);
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
                    className="bg-transparent outline-none justify-between w-full"
                    {...register("state", {
                      required: "Select state",
                      onChange: (e) => {
                        handleStateChange(e.target.value);
                      },
                    })}
                  >
                    <option className="hover:bg-primary outline-none" value="">
                      {state || "Select state"}
                    </option>
                    {stateList.map((state) => (
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
            {cities.length > 0 && cities[0].name && (
              <div className="grid grid-cols-1">
                <label htmlFor="" className="text-sm">
                  City
                </label>
                <div className="border border-[#2d2e32] rounded-[0.2rem] py-3 px-2 text-black bg-white/70">
                  <select
                    name="city"
                    id=""
                    className="bg-transparent outline-none flex justify-between w-full"
                    {...register("city", {
                      required: "Select city",
                    })}
                  >
                    <option className="hover:bg-primary outline-none" value="">
                      {city || "Select city"}
                    </option>
                    {cities.map((city) => (
                      <option
                        className="hover:bg-primary outline-none"
                        key={city.name}
                        value={city.name}
                      >
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <small className="error">{errors.city?.message}</small>
              </div>
            )}
            <div className="grid grid-cols-1">
              <label htmlFor="" className="text-sm">
                LinkedIn URL
              </label>
              <input
                type="text"
                className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
                {...register("linkedInUrl")}
                placeholder="LinkedIn Profile URL (Optional)"
              />
              <small className="error">{errors.linkedInUrl?.message}</small>
            </div>
            <button type="submit" className="bg-primary primary-btn">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Section1;
