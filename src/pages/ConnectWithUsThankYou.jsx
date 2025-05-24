import { Link } from "react-router-dom";

const ConnectWithUsThankYou = ({ pathToRedirect }) => {
  return (
    <>
      <div className="h-screen flex items-center text-white">
        <div className="wrapper h-3/4 flex justify-center items-center">
          <div
            data-aos="fade-up"
            className="backdrop-blur-lg flex flex-col gap-3 items-center justify-center shadow-white/20 rounded-lg p-6 shadow-large"
          >
            <div className="h-[4rem] w-[4rem] bg-green-500 rounded-full p-3 text-3xl sm:text-4xl flex justify-center items-center">
              ✔
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-primary1">
              Thank you!
            </h1>
            <p className="max-w-[30rem] text-center text-gray-200 text-sm md:text-base text-balance">
              Thanks for contacting us, one of our associates will get in touch
              with you soon! <br /> Let's make some big bucks together!!!
            </p>
            <Link
              to={pathToRedirect}
              className="mt-3 text-sm cursor-pointer flex justify-center bg-primary1 hover:-translate-y-1 shadow-large shadow-transparent hover:shadow-primary/[35%] text-white border border-primary1 py-3 px-4 rounded-full transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConnectWithUsThankYou;
