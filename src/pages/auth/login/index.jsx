import React from "react";
import FormInput from "@/components/reuseable/input"; // assuming correct path
import { useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SubmitButton from "@/components/button";
import FormMarkup from "@/components/reuseable/FormMarkup";

const Login = () => {
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
      <FormMarkup text="Login to your account">
        <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6">
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
          <div className="mt-3">
            <FormInput
              label="Password"
              placeholder="Password"
              type="password"
              register={register("password", {
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
              Rembember Me
            </label>
          </div>
          <div className="flex items-center justify-between mt-3">
            <SubmitButton text="Submit" />
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <hr className="m-4"></hr>
          <p className="text-center text-muted">Don't have an account?</p>

          <div className="mt-4 text-center">
            <SubmitButton text="Register" to="/register" />
            {/* <Link
                  class="mt-4 bg-gray-500 text-white py-2 px-6 rounded-lg"
                  to="/register"
                >
                  Register
                </Link> */}

            {/* <Link
                    class="mt-4 bg-green-800 text-white py-2 px-6 rounded-lg"
                    to="/register/advertiser"
                  >
                    Advertiser
                  </Link> */}
          </div>
        </form>
      </FormMarkup>
    </>
  );
};

export default Login;
