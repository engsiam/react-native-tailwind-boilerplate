import Navbar from "@/components/Navbar";
import SubmitButton from "@/components/button";
import CountryDropdown from "@/components/reuseable/country-dropdown";
import FormInput from "@/components/reuseable/input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
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
      <div className="p-8 mt-10 lg:mt-5">
        <div className="mx-auto text-center sm:max-w-xl lg:max-w-3xl">
          <h2 className="text-2xl font-semibold">Affiliate Signup</h2>
          <div className="relative mt-4 text-left bg-white shadow-md sm:rounded-lg">
            <div className="h-1 bg-indigo-400 rounded-t-md"></div>
            <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div>
                  <FormInput
                    label="Company Name"
                    placeholder="Company Name"
                    type="text"
                    register={register("company_name", {
                      required: true,
                    })}
                  />
                </div>
                <div>
                  <FormInput
                    label="Full Name"
                    placeholder="Full Name"
                    type="text"
                    register={register("full_name", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <div className="mt-3">
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
              <div className="grid grid-cols-1 gap-5 mt-3 lg:grid-cols-2">
                <div>
                  <FormInput
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    register={register("password", {
                      required: true,
                    })}
                  />
                </div>
                <div>
                  <FormInput
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    type="password"
                    register={register("confirm_name", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <div className="mt-3">
                <FormInput
                  label="Address Line 1"
                  placeholder="Address Line 1"
                  type="text"
                  register={register("address_line_1", {
                    required: true,
                  })}
                />
              </div>
              <div className="mt-3">
                <FormInput
                  label="Address Line 2"
                  placeholder="Address Line 2"
                  type="text"
                  register={register("address_line_2", {
                    required: true,
                  })}
                />
              </div>
              <div className="grid grid-cols-1 gap-5 mt-3 lg:grid-cols-2">
                <div>
                  <FormInput
                    label="City"
                    placeholder="Enter City"
                    type="text"
                    register={register("city", {
                      required: true,
                    })}
                  />
                </div>
                <div>
                  <FormInput
                    label="State/Region"
                    placeholder="State/Region"
                    type="text"
                    register={register("state_region", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 mt-3 lg:grid-cols-2">
                <div>
                  <label className="block font-semibold">Country</label>
                  <div className="mt-3">
                    <CountryDropdown />
                  </div>
                </div>
                <div>
                  <FormInput
                    label="ZIP/Postal Code"
                    placeholder="ZIP/Postal Code"
                    type="text"
                    register={register("postal_code", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <div className="block mt-4 text-lg font-bold text-center"></div>
              <div className="mt-3">
                <FormInput
                  label="Skype Screen Name / Username"
                  placeholder="Skype Screen Name / Username"
                  type="text"
                  register={register("skype_user", {
                    required: true,
                  })}
                />
              </div>
              <div className="mt-3">
                <FormInput
                  label="What is your website(s)/landing page(s) URL?"
                  placeholder="What is your website(s)/landing page(s) URL?"
                  type="text"
                  register={register("website", {
                    required: true,
                  })}
                />
              </div>
              <div className="mt-3">
                <FormInput
                  label="How did you hear about CPALance?"
                  placeholder="How did you hear about CPALance?"
                  type="text"
                  register={register("CPALance", {
                    required: true,
                  })}
                />
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  className="outline-none cursor-pointer focus:bg-inherit"
                />
                <label className="mt-5 ml-3 text-sm font-semibold ">
                  I accept Terms and Conditions
                </label>
              </div>
              {/* <button
                type="submit"
                className="px-6 py-2 mt-5 mb-3 text-white bg-indigo-500 rounded-lg"
              >
                Create Account
              </button> */}
              <SubmitButton
                text="Create Account"
                className="px-6 py-2 mt-5 mb-3"
              />
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
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Register;
