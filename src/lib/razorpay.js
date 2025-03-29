import toast from "react-hot-toast";
import logo from "../assets/logo/logo.png";
import { PaymentFailure, PaymentSuccess } from "../components/PaymentStatuses";

// Load Razorpay script dynamically
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

// Initialize Razorpay payment with error handling
export const doPayment = async ({
  type,
  price,
  navigate,
  checkUserDetails,
}) => {
  try {
    // Load Razorpay script
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?");
      return;
    }

    let userDetails;
    if (checkUserDetails) {
      userDetails =
        JSON.parse(sessionStorage.getItem("subscriptionForm")) || null;

      if (!userDetails) {
        toast.error("Please fill the contact form first");
        return;
      }
    }

    // Create order options with modal event handlers
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: price * 100,
      currency: "INR",
      name: "BoostMySites",
      description: `${type} - ₹${price} - Subscription for BoostMySites`,
      image: logo,
      handler: function (response) {
        if (response.razorpay_payment_id) {
          toast(
            <PaymentSuccess
              amount={price}
              email={userDetails?.email || ""}
              paymentId={response.razorpay_payment_id}
              phone={userDetails?.phone || ""}
            />,
            {
              duration: 5000,
              style: { backgroundColor: "#ffffff" },
            }
          );
          sessionStorage.removeItem("subscriptionForm");
          navigate("/");
        }
      },
      prefill: {
        name: userDetails?.fullName || "",
        email: userDetails?.email || "",
        contact: userDetails?.phone || "",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#2B2C2C",
      },
      modal: {
        ondismiss: function () {
          toast(<PaymentFailure message="Payment was cancelled by user" />, {
            duration: 5000,
            style: { backgroundColor: "#ffffff" },
          });
        },
      },
    };

    // Open Razorpay payment modal
    const paymentObject = new window.Razorpay(options);

    paymentObject.on("payment.failed", function (response) {
      const errorMessage = getErrorMessage(response.error);
      toast(<PaymentFailure message={errorMessage} />, {
        duration: 5000,
        style: { backgroundColor: "#ffffff" },
      });
    });

    paymentObject.open();
  } catch (error) {
    toast.error("An unexpected error occurred during payment processing");
    console.error("Payment error:", error);
  }
};

// Helper function to get user-friendly error messages
function getErrorMessage(error) {
  if (!error) return "Payment failed due to unknown reasons";

  // Handle Razorpay error codes
  switch (error.code) {
    case "BAD_REQUEST_ERROR":
      return "Invalid payment request. Please try again.";
    case "PAYMENT_CANCELLED":
      return "Payment was cancelled by user";
    case "NETWORK_ERROR":
      return "Network issue occurred. Please check your connection.";
    case "INSUFFICIENT_FUNDS":
      return "Insufficient funds in your account";
    case "AUTHENTICATION_FAILED":
      return "Payment authentication failed";
    case "SERVER_ERROR":
      return "Server error occurred. Please try again later.";
    default:
      return error.description || "Payment failed. Please try again.";
  }
}
