import React, { useState } from "react";
import toast from "react-hot-toast";
import logo from "../../assets/logo/logo.png";
import { LiaCheckSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { BsLightningCharge } from "react-icons/bs";
import { doPayment } from "../../lib/razorpay";
import { membershipPlans } from "../../data/constant";

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState({ type: "", price: "" });
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    if (!selectedPlan.type) {
      return toast.error("Please select a plan");
    }
    doPayment({ ...selectedPlan, navigate, checkUserDetails: false });
  };

  const handlePlanClick = (item) => {
    setSelectedPlan(item);
  };

  return (
    <div className="min-h-screen pt-[8rem] md:pt-[9rem]">
      <div className="wrapper flex items-center justify-center">
        <div className="rounded-lg p-5 bg-[#2B2C2C] text-white relative">
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
                {membershipPlans.map((item) => (
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

export default SubscriptionPage;
