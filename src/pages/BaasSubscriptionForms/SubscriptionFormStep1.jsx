import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-country-phone-input";
import "react-country-phone-input/lib/style.css";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";

const SubscriptionFormStep1 = () => {
  const [country, setCountry] = useState("IN");
  const [state, setState] = useState("");
  const [stateList, setStateList] = useState(State.getStatesOfCountry("IN"));

  const navigate = useNavigate();
  const form = useRef();
  const {
    register,
    handleSubmit,
    control,
    setValue,
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

  useEffect(() => {
    const storedCountryCode = sessionStorage.getItem("isoCode") || "IN";
    const storedData =
      JSON.parse(sessionStorage.getItem("subscriptionForm")) || {};

    setCountry(storedCountryCode);
    setState(storedData.state || "");
    setValue("state", storedData.state || "");
    setValue("country", storedData.country || "India");
    setValue("email", storedData.email || "");
    setValue("fullName", storedData.fullName || "");
    setValue("phone", storedData.phone || "");
    setStateList(State.getStatesOfCountry(storedCountryCode));
  }, [setValue]);

  const handleCountryChange = (code) => {
    const selectedCountry = Country.getCountryByCode(code);
    const states = State.getStatesOfCountry(code);

    setCountry(code);
    setState("");
    setStateList(states);
    setValue("country", selectedCountry.name);
    sessionStorage.setItem("isoCode", selectedCountry.isoCode);
  };

  const onSubmit = (values) => {
    if (!values.phone || values.phone.length < 5) {
      setError("phone", {
        type: "manual",
        message: "Phone number is required",
      });
      return;
    }

    const formData = {
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      country: values.country,
      state: values.state,
    };

    sessionStorage.setItem("subscriptionForm", JSON.stringify(formData));

    navigate("/subscription-form/step2");
  };

  return (
    <div id="contact" className="max-w-md mx-auto gap-5 text-white pt-32 px-5">
      <form ref={form} onSubmit={handleSubmit(onSubmit)} data-aos="fade-right">
        <h2 className="font-medium text-3xl mb-6 text-center sm:text-start">
          Tell us a little about yourself
        </h2>

        <div className="grid gap-4 mt-6">
          {/* Full Name */}
          <div>
            <label className="text-sm">Full Name</label>
            <input
              type="text"
              className="border border-gray-700 rounded py-3 px-2 text-black bg-white/80 w-full"
              {...register("fullName", {
                required: "Full name is required",
                validate: (val) => val.trim() !== "" || "Full name is required",
              })}
              placeholder="Enter your full name"
            />
            <small className="error">{errors.fullName?.message}</small>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="border border-gray-700 rounded py-3 px-2 text-black bg-white/80 w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
              placeholder="Enter your email"
            />
            <small className="error">{errors.email?.message}</small>
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-sm">Phone Number</label>
            <Controller
              name="phone"
              control={control}
              rules={{ required: "Phone number is required" }}
              render={({ field: { ref, ...field } }) => (
                <PhoneInput
                  {...field}
                  inputRef={ref}
                  placeholder="Enter your phone number"
                  country="in"
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  className="border border-gray-700 rounded py-3 px-2 text-black bg-white/80 w-full"
                />
              )}
            />
            <small className="error">{errors.phone?.message}</small>
          </div>

          {/* Country Selection */}
          <div>
            <label className="text-sm">Country</label>
            <select
              value={country}
              onChange={(e) => handleCountryChange(e.target.value)}
              className="border border-gray-700 rounded py-3 px-2 text-black bg-white/80 w-full"
            >
              {Country.getAllCountries().map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* State Selection (Only if states exist) */}
          {stateList.length > 0 && (
            <div>
              <label className="text-sm">State</label>
              <select
                {...register("state", {
                  required: "Select a state",
                  onChange: (e) => setState(e.target.value),
                })}
                className="border border-gray-700 rounded py-3 px-2 text-black bg-white/80 w-full"
              >
                <option value="">{state || "Select state"}</option>
                {stateList.map((state) => (
                  <option key={state.name} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
              <small className="error">{errors.state?.message}</small>
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="primary-btn w-full">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionFormStep1;
