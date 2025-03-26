import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-country-phone-input";
import "react-country-phone-input/lib/style.css";
import { TiMicrophoneOutline } from "react-icons/ti";
import { FiLoader } from "react-icons/fi";

const BolnaVoiceCall = ({ agentId, apiKey }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [callData, setCallData] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "", // Initialize as empty string
    },
  });

  const initiateCall = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const fullPhoneNumber = data.phone.startsWith("+")
        ? data.phone
        : `+${data.phone}`;

      const response = await fetch("https://api.bolna.dev/call", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from_phone_number: "+912231043807",
          recipient_phone_number: fullPhoneNumber,
          agent_id: agentId,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(
          responseData.message || "Failed to initiate call. Please try again."
        );
      }

      setCallData(responseData);
      setSuccess(true);
      reset();
      setTimeout(() => {
        setSuccess(false);
      }, 8000);
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-4">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <TiMicrophoneOutline size={28} className="text-primary" />
          AI Voice Call
        </h2>

        <form onSubmit={handleSubmit(initiateCall)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Recipient Phone Number
            </label>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Phone number is required",
                validate: (value) => {
                  if (!value) return "Phone number is required";
                  // Remove non-digit characters and check length
                  //   const digitsOnly = value.replace(/\D/g, "");
                  //   if (digitsOnly.length < 10) {
                  //     return "Phone number must be at least 10 digits";
                  //   }
                  return true;
                },
              }}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                  placeholder="Enter phone number"
                  country="in"
                  inputProps={{
                    required: true,
                    autoComplete: "tel",
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-700"
                  } text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                />
              )}
            />
            {errors.phone ? (
              <p className="mt-1 text-sm text-red-400">
                {errors.phone.message}
              </p>
            ) : (
              <p className="mt-1 text-sm text-gray-400">
                Select country and enter phone number
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !isValid}
            className={`w-full px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
              loading || !isValid
                ? "bg-primary/80 cursor-not-allowed"
                : "primary-btn hover:bg-primary"
            } text-black shadow-md`}
          >
            {loading ? (
              <>
                <div className="animate-spin">
                  <FiLoader />
                </div>
                Calling...
              </>
            ) : (
              <>
                <TiMicrophoneOutline size={24} />
                Initiate Call
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-200">
            <p className="font-medium">Error: {error}</p>
            <p className="text-sm mt-1">
              Please check the number and try again.
            </p>
          </div>
        )}

        {success && callData && (
          <div className="mt-4 p-3 bg-green-900/30 border border-green-700 rounded-lg text-green-200">
            <p className="font-medium">Call queued successfully!</p>
            <div className="mt-2 space-y-1 text-sm">
              <p>Status: {callData.status}</p>
            </div>
            <p className="mt-2 text-xs text-green-300">
              The recipient should receive the call shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BolnaVoiceCall;
