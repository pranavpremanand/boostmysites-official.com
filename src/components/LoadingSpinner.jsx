import { CgSpinner } from "react-icons/cg";

export const LoadingSpinner = () => {
  return (
    <div aria-label="Loading..." className="spinner-parent" role="status">
      {/* <span className="loader"></span> */}
      <CgSpinner className="text-primary animate-spin" size={60} />
    </div>
  );
};
