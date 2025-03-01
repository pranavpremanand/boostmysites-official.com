import gsap from "gsap";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import offerImg from "../../assets/images/offer-icon.png";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { SpinnerContext } from "../SpinnerContext";
import { IoClose } from "react-icons/io5";

const sources = ["LinkedIn", "Twitter", "Meta"];

const PopupForm = ({ setShowPopup, emailIdToSendMail, sourceName }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  // close popup
  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem("popupFormShown", "true");
  };

  const onDismiss = useCallback(() => {
    closePopup();
  }, []);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#popup", {
      duration: 0.5,
      translateY: 0,
    });

    return () => tl.kill();
  }, []);

  const { setSpinner } = useContext(SpinnerContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      source: "LinkedIn",
    },
  });

  //   handle form submit click
  const onSubmit = async (values) => {
    try {
      setSpinner(true);
      var emailBody = "Name: " + values.name + "\n\n";
      emailBody += "Email: " + values.email + "\n\n";
      emailBody += "Phone Number: " + values.phone + "\n\n";

      if (sourceName) {
        emailBody += "Source: " + sourceName + "\n\n";
      }

      // Construct the request payload
      var payload = {
        to: emailIdToSendMail,
        subject: "Form Submission - Boostmysites AI Expert",
        body: emailBody,
      };

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
            toast.success("Thank you for registering!");
            closePopup();
            reset();
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
  };

  return (
    <div
      ref={overlay}
      className="fixed z-50 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-10/12 h-[80vh] max-h-[90vh] p-5 flex items-center justify-center"
      >
        <div
          id="popup"
          className="translate-y-[10rem] rounded-lg px-5 pb-5 pt-10 bg-white text-black relative"
        >
          <button
            className="absolute top-[0.5rem] right-[0.5rem]"
            onClick={() => setShowPopup(false)}
          >
            <IoClose size={25} />
          </button>
          <img loading="lazy" 
            src={offerImg}
             
            className="absolute top-[-1.5rem] left-[-1.5rem] -rotate-[35deg] w-[4rem] object-contain aspect-square"
            alt=""
          />
          <h4 className="text-xl font-medium">
            20% Early Bird Offer for the next 10 registrations!
          </h4>
          <h4 className="text-xl font-medium leading-tight">
            Act Fast—Limited Slots!
          </h4>
          <p className="text-black/70 mt-3">👇 Register Now!</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 mt-3"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Name
              </label>
              <input
                type="text"
                className="outline-none p-2 rounded-md border"
                {...register("name", {
                  required: "Name is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Name is required";
                    }
                  },
                })}
              />
              <small className="text-red-600">{errors.name?.message}</small>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Email
              </label>
              <input
                type="email"
                className="outline-none p-2 rounded-md border"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              <small className="text-red-600">{errors.email?.message}</small>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Phone
              </label>
              <input
                type="tel"
                className="outline-none p-2 rounded-md border"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[1-9]\d{9}$/i,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              <small className="text-red-600">{errors.phone?.message}</small>
            </div>
            <button type="submit" className="primary-btn1 mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
