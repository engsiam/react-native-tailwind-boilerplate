import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[#000] text-7xl">24scan</h1>
      <Link to="/login">
        <p className="mt-8 text-4xl font-thin"> Login Form</p>
      </Link>
    </div>
  );
};

export default LandingPage;
