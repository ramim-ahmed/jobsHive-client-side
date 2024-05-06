import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="border-b">
      <nav className="max-w-6xl mx-auto px-3 flex justify-between items-center py-4">
        <Link to="/" className="font-bold">
          JobsHive
        </Link>
        <div className="space-x-4">
          <Link to="/login">Login</Link>
          <Link to="register">Register</Link>
        </div>
      </nav>
    </div>
  );
}
