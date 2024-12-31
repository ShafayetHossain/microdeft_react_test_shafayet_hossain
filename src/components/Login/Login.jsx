import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../Provider/Provider";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(true);
  const {user, setUser} = useContext(ContextProvider);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginData = { email, password };

    try {
      const response = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }
      const data = await response.json();
      setUser(data);
      if(user){
        alert("Login Successful.!");
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 outline outline-1 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="email">
              Email address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
              required
            />
          </div>

          <div className="mb-6 relative">
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type={viewPassword ? "password" : "text"}
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
              required
            />

            <button
              type="button"
              onClick={() => setViewPassword(!viewPassword)}
              className="absolute right-4 bottom-3"
            >
              {viewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t Have An Account?{" "}
          <Link to="/registration" className="text-red-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
