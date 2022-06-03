import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
export default function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="h-12 bg-blue-700 flex justify-center">
      <div className="w-full max-w-5xl text-white flex items-center justify-between">
        <Link to="/">
          <span className="font-medium">Booking</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="ml-5 py-1 px-2 cursor-pointer font-medium hover:scale-110 duration-100 transition-all border rounded-xl bg-blue-400">
              Register
            </button>
            <Link to="/login">
              <button className="ml-5 py-1 px-2 cursor-pointer font-medium hover:scale-110 duration-100 transition-all border rounded-xl bg-blue-400">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
