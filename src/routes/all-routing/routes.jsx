// all-routing/routes.js
import About from "@/pages/about/About";
import ForgotPassword from "@/pages/auth/forgot-password";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import LandingPage from "@/pages/Home/LandingPage";
// import { Routes, Route } from "react-router-dom";


// const authRoutes = [
//   { path: "login", element: <Login /> },
//   { path: "register", element: <Register /> }
// ];

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  }
  // { path: "auth", children: authRoutes }
  // {
  //   path: "/auth", // Create a parent route for authentication
  //   element: (
  //     <Routes>  
  //       <Route path="login" element={<Login />} />
  //       <Route path="register" element={<Register />} />
  //       {/* Add additional routes for other authentication features (optional) */}
  //     </Routes>
  //   ),
  // },
  // ... add other routes here
];

export default routes;
