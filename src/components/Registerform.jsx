import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SocialAuth from "./SocialAuth";

export default function Registerform() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();
  const handleCreateNewUser = async (e) => {
    e.preventDefault();
    console.log({ username, email, password, photo });
    await signup(email, password, username, photo);
    navigate("/");
  };
  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex justify-center mx-auto">
        <div className="text-center">
          <h1 className="text-xl font-medium">Register Now</h1>
        </div>
      </div>
      <form onSubmit={handleCreateNewUser} className="mt-6">
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Username
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            required
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Email
            </label>
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password
            </label>
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="photoURL"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Photo URL
            </label>
          </div>
          <input
            onChange={(e) => setPhoto(e.target.value)}
            required
            type="url"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5" />
        <a
          href="#"
          className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
        >
          or login with Social Media
        </a>
        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5" />
      </div>
      <SocialAuth />
      <p className="mt-8 text-xs font-light text-center text-gray-400">
        Already have an account?
        <Link
          to="/login"
          className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
        >
          login
        </Link>
      </p>
    </div>
  );
}
