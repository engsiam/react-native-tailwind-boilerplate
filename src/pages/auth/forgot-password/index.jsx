import Navbar from "@/components/Navbar";
import SubmitButton from "@/components/button";
import FormMarkup from "@/components/reuseable/FormMarkup";
import FormInput from "@/components/reuseable/input"; // assuming correct path
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data); // Logging the form data to the console
  };

  return (
    <>
      <Navbar />
      <FormMarkup text="Forgot Password">
        <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6">
          <div>
            <p className="mb-4 text-justify">
              Enter your email address and we'll send you an email with
              instructions to forgot your password.
            </p>
          </div>
          <div>
            <FormInput
              label="Email Address"
              type="email"
              placeholder="Email Address"
              register={register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
            />
          </div>

          {/* <button
                type="submit"
                className="px-6 py-2 mt-5 text-white bg-indigo-500 rounded-lg"
              >
                Reset Password
              </button> */}
          <SubmitButton text="Reset Password" className="mt-5" />
          <hr className="m-4"></hr>
          <p className="text-center text-muted">Already have account?</p>
          <div className="flex items-center justify-center">
            <SubmitButton text="Login" to="/login" />
            {/* <Link
                  class="mt-4"
                  to="/login"
                  className="mt-2 text-lg font-semibold hover:underline"
                >
                  Login
                </Link> */}
          </div>
        </form>
      </FormMarkup>
    </>
  );
};

export default ForgotPassword;
