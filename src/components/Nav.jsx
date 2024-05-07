import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UserProfile from "./UserProfile";

export default function Nav() {
  const { authUser } = useAuth();
  return (
    <div className="border-b">
      <nav className="max-w-6xl mx-auto px-3 flex justify-between items-center py-4">
        <Link to="/" className="font-bold">
          JobsHive
        </Link>
        {authUser ? (
          <UserProfile />
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
