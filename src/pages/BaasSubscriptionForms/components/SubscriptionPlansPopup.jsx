import gsap from "gsap";
import React, { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import logo from "../../../assets/logo/logo.png";
import { LiaCheckSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { BsLightningCharge } from "react-icons/bs";
import { doPayment } from "../../../lib/razorpay";

const SubscriptionPlansPopup = ({ setShowPopupForm }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const [selectedPlan, setSelectedPlan] = useState({ type: "", price: "" });
  const navigate = useNavigate();

  const closePopup = useCallback(() => {
    setShowPopupForm(false);
  }, [setShowPopupForm]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        closePopup();
      }
    },
    [closePopup]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") closePopup();
    },
    [closePopup]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    gsap.fromTo(
      "#popup",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, []);

  const handleSubscribeClick = () => {
    if (!selectedPlan.type) {
      return toast.error("Please select a plan");
    }
    doPayment({ ...selectedPlan, navigate });
  };

  const handlePlanClick = (item) => {
    setSelectedPlan(item);
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
          className="translate-y-[10rem] rounded-lg px-5 pb-5 pt-10 bg-[#2B2C2C] text-white relative"
        >
          <button
            aria-label="Close popup"
            className="absolute top-[0.5rem] right-[0.5rem]"
            onClick={closePopup}
          >
            <IoClose size={25} />
          </button>

          <div className="flex flex-col items-start gap-5">
            <img
              src={logo}
              alt="Logo"
              className="w-[7rem] h-fit object-contain"
            />
            <div className="">
              <h4 className="font-bold text-lg">Subscribe for Membership</h4>
              <p className="">
                Get all access and an extra 20% off when you subscribe annually
              </p>
            </div>
            <div className="space-y-2 w-full">
              <p>Membership Type</p>
              <div className="flex flex-col gap-4">
                {[
                  { type: "Register", price: 5000 },
                  { type: "1 Year Plan", price: 399000 },
                  { type: "2 Years Plan", price: 499000 },
                ].map((item) => (
                  <div
                    key={item.type}
                    onClick={() => handlePlanClick(item)}
                    className={`cursor-pointer p-3 rounded bg-white text-black flex items-center gap-5 w-full`}
                  >
                    <button
                      onClick={() => handlePlanClick(item)}
                      className={`border border-primary1 w-5 h-5 rounded-full cursor-pointer flex items-center justify-center`}
                    >
                      {selectedPlan.price === item.price && (
                        <LiaCheckSolid className="text-primary1" size={15} />
                      )}
                    </button>
                    <div>
                      <p className="font-semibold">{item.type}</p>
                      <p className="text-gray-500 text-sm">
                        ₹{item.price.toLocaleString()} + GST
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm pt-2 pb-3">
                By Continuing you agree to our{" "}
                <Link className="text-primary1" to="/terms-and-conditions">
                  terms and conditions.
                </Link>
              </p>
              <button
                onClick={handleSubscribeClick}
                className="primary-btn1 flex items-center gap-2 w-full !text-black justify-center"
              >
                <BsLightningCharge size={20} /> Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlansPopup;
