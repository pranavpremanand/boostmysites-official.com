import toast from "react-hot-toast";
import { AiOutlineCheck } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { SlClose } from "react-icons/sl";

export const PaymentSuccess = ({ amount, phone, email, paymentId }) => {
  return (
    <div className="h-fit bg-white text-black pt-7 space-y-2 max-w-sm w-full flex justify-center flex-col items-center text-center relative">
      <button
        className="absolute top-2 right-0 w-fit h-fit z-10"
        onClick={() => toast.dismiss()}
      >
        <SlClose size={20} />
      </button>
      <div className="w-10 h-10 rounded-full bg-[#1FC16B] flex justify-center items-center">
        <AiOutlineCheck size={22} className="text-white" />
      </div>
      <h5 className="text-xl font-medium text-[#1FC16B]">Successful Payment</h5>
      <ul className="space-y-1 w-full pt-2 text-sm text-gray-600">
        <li className="grid grid-cols-[1fr_2px_1fr] gap-2">
          <span className="text-start">Phone number</span> :
          <span className="text-start">{phone}</span>
        </li>
        <li className="grid grid-cols-[1fr_2px_1fr] gap-2">
          <span className="text-start">Email</span> :
          <span className="text-start">{email}</span>
        </li>
        <li className="grid grid-cols-[1fr_2px_1fr] gap-2">
          <span className="text-start">Payment ID</span> :
          <span className="text-start">{paymentId}</span>
        </li>
        <li className="grid grid-cols-[1fr_2px_1fr] gap-2">
          <span className="text-start">Amount Paid</span> :
          <span className="text-start">₹{amount}</span>
        </li>
      </ul>
    </div>
  );
};

export const PaymentFailure = ({ message }) => {
  return (
    <div className="h-fit bg-white text-black pt-7 space-y-2 max-w-sm w-full flex justify-center flex-col items-center text-center relative">
      <button
        className="absolute top-2 right-0 w-fit h-fit z-10"
        onClick={() => toast.dismiss()}
      >
        <SlClose size={20} />
      </button>
      <div className="w-10 h-10 rounded-full bg-[#D00416] flex justify-center items-center">
        <GrClose size={22} className="text-white" />
      </div>
      <h5 className="text-xl font-medium text-[#D00416]">Payment Failed</h5>
      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
};
