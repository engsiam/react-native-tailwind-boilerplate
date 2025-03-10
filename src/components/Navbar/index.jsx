import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-900">
      <Link to="/">
        <h1 className="text-2xl text-white">24scan</h1>
      </Link>
      <Link to="/login">
        <div className="text-white">
          <a href="#">Login</a>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
