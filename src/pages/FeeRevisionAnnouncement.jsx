import React from "react";
import {
  FiCalendar,
  FiCheckCircle,
  FiPhone,
  FiClock,
  FiAward,
  FiStar,
} from "react-icons/fi";

const FeeRevisionAnnouncement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center px-4 py-[12rem] font-sans">
      <div className="max-w-7xl w-full bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-101">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Upcoming Fee Revision
            </h1>
            <FiStar className="text-yellow-300 text-3xl animate-pulse" />
          </div>
          <p className="text-xl font-medium flex items-center">
            <FiCalendar className="mr-2" />
            Secure Your Spot Before March 1st!
          </p>
          <div className="mt-4 bg-orange-700 bg-opacity-30 p-3 rounded-lg">
            <p className="text-sm md:text-base">
              Limited time opportunity to lock in current rates before the price
              adjustment
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="text-gray-700 mb-8">
            <p className="mb-4">
              We're updating our subscription fees starting March 1st, 2025 to
              enhance the value and services we provide to our valued clients.
              These adjustments will allow us to continue delivering premium
              quality service while expanding our offerings.
            </p>
            <p>
              Review our new pricing structure below and take advantage of
              current rates before the revision takes effect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg border border-orange-200 shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="text-primary text-xl mb-4 flex items-center">
                <FiClock className="mr-2" />
                <span className="font-bold">10 Months</span>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                ₹4,00,000
              </div>
              <div className="text-gray-500 mb-4">+ GST</div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">
                    Full access to all services
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Priority support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-orange-200 shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 relative">
              <div className="absolute -top-3 -right-3 bg-primary text-white text-xs py-1 px-3 rounded-full">
                Popular Choice
              </div>
              <div className="text-primary text-xl mb-4 flex items-center">
                <FiClock className="mr-2" />
                <span className="font-bold">12 Months (1 Year)</span>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                ₹4,50,000
              </div>
              <div className="text-gray-500 mb-4">+ GST</div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">
                    Full access to all services
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Quarterly reviews</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-orange-200 shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="text-primary text-xl mb-4 flex items-center">
                <FiClock className="mr-2" />
                <span className="font-bold">24 Months (2 Years)</span>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                ₹5,50,000
              </div>
              <div className="text-gray-500 mb-4">+ GST</div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">
                    Full access to all services
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Quarterly reviews</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Maximum savings</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg mb-8 border-l-4 border-primary">
            <div className="flex items-start">
              <FiAward className="text-primary text-2xl mr-4 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  Limited Time Opportunity
                </h3>
                <p className="text-gray-700">
                  If you're ready to start your journey before the price
                  revision, you can still lock in the current pricing by signing
                  up before February 29th, 2025. This gives you the opportunity
                  to secure our services at the existing rate for the duration
                  of your subscription.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center py-4">
            <button className="primary-btn1 flex items-center mx-auto">
              <FiPhone className="mr-2" />
              Contact your POC now to secure your slot!
            </button>
            <p className="text-gray-500 mt-4">
              Our team is standing by to assist you with any questions
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 text-center text-gray-500 text-sm">
          <p>
            Offer valid until February 29th, 2025. Terms and conditions apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeeRevisionAnnouncement;
