import React from "react";
import { FiCalendar, FiCheckCircle, FiPhone } from "react-icons/fi";

const FeeRevisionAnnouncement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 to-orange-100 flex items-center justify-center px-4 md:pt-5 pt-24 pb-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary1 p-5 text-white">
          <h1 className="text-2xl font-bold flex items-center">
            <FiCalendar className="mr-2 text-6xl w-[4rem]" />
            Upcoming Price Revision – Secure Your Spot Before March 7th!
          </h1>
        </div>

        <div className="p-6">
          <p className="text-gray-700 mb-6">
            We're updating our subscription price starting March 7th, 2025 to
            enhance the value and services we provide. Here's the revised
            pricing:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <FiCheckCircle className="text-primary1 text-xl mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-800">
                <span className="font-medium">10 Months:</span> ₹4,00,000 + GST
              </p>
            </div>

            <div className="flex items-start">
              <FiCheckCircle className="text-primary1 text-xl mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-800">
                <span className="font-medium">12 Months (1 Year):</span>{" "}
                ₹4,50,000 + GST
              </p>
            </div>

            <div className="flex items-start">
              <FiCheckCircle className="text-primary1 text-xl mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-800">
                <span className="font-medium">24 Months (2 Years):</span>{" "}
                ₹5,50,000 + GST
              </p>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-6">
            <p className="text-gray-800">
              If you're ready to start your journey before the price hike, you
              can still lock in the current pricing by signing up before March
              6th.
            </p>
          </div>

          <div className="text-center">
            <button className="bg-primary1 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg flex items-center mx-auto transition duration-300">
              <FiPhone className="mr-2" />
              Contact your POC now to secure your slot!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeRevisionAnnouncement;
