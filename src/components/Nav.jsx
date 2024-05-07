import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Nav() {
  const { authUser } = useAuth();
  return (
    <div className="border-b">
      <nav className="max-w-6xl mx-auto px-3 flex justify-between items-center py-4">
        <Link to="/" className="font-bold">
          JobsHive
        </Link>
        {authUser ? (
          <div className="flex items-center space-x-2">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={authUser?.photoURL}
              alt=""
            />
            <div>
              <h4 className="font-medium text-lg">
                Hi, {authUser?.displayName}
              </h4>
            </div>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/login">Login</Link>
            <Link to="register">Register</Link>
          </div>
        )}
      </nav>
    </div>
  );
}
