import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SpinnerContext } from "../SpinnerContext";
import toast from "react-hot-toast";

const sources = ["LinkedIn", "Twitter", "Meta"];

const FormSection = ({ emailIdToSendMail, sourceName }) => {
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
        name: "BoostMySites",
      };

      // setIsLoading(true);
      await fetch("https://send-mail-redirect-boostmysites.vercel.app/send-email", {
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
            toast.success("Email sent successfully");
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
    <div className="mt-[4rem] py-[3rem] text-white">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col h-full justify-start gap-2">
          <h3 className="text-3xl font-medium leading-tight">
            Where Innovation Meets Intelligence: AI Solutions for the Future -{" "}
            <span className="text-primary">
              Start Your Own AI Company with Boostmysites
            </span>
          </h3>
          <p className="text-white/80 font-light mt-3">
            Starting your own AI company with support from BoostMySites could be
            a powerful approach to establish a strong online presence right from
            the beginning. By leveraging BoostMySites for website design, you
            can create a sleek, professional site that showcases your AI
            solutions, services, and mission. With a well-structured, visually
            appealing website, you can highlight your expertise in AI-driven
            technology, showcase case studies, and provide clients with clear,
            compelling calls to action. BoostMySites can also help ensure the
            website is optimized for SEO, user engagement, and lead conversion,
            making it easier to reach potential clients, investors, and partners
            as you grow your AI company.
          </p>
        </div>
        <div className="rounded-lg p-5 bg-white text-black">
          <h4 className="text-xl font-medium">
            Ready to start your AI company?
          </h4>
          <p className="text-sm text-black/70 mt-1">
            Fill out the form and let our team build it for you.
          </p>
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

export default FormSection;
