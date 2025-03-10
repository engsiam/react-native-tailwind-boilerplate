import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./all-routing/routes";

export default function RouterProvider() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route?.path} path={route?.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}
