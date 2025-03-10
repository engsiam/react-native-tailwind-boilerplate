import React from "react";
import { Link } from "react-router-dom";

export default function SubmitButton({ text, className, onClick, to }) {
  if (to) {
    // Render a Link component if the 'to' prop is provided
    return (
      <Link to={to} className={`mt-4 bg-gray-500 text-white py-2 px-6 rounded-lg ${className}`}>
        {text}
      </Link>
    );
  } else {
    // Render a regular button if the 'to' prop is not provided
    return (
      <button
        type="submit"
        className={`px-6 py-2 text-white bg-indigo-500 rounded-lg ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}
