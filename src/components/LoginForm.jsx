import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../utils/authUtils";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import logo from "../assets/logo/CaoFit_light_logo_without_text.svg";

function LoginForm({
  onClose,
  setIsAuthenticated,
  setToken,
  loadingAuthRequest,
  setLoadingAuthRequest,
}) {
  const navigate = useNavigate();

  const [{ email, password }, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password)
        return toast.error("Please fill out all the fields");
      setLoadingAuthRequest(true);
      const { data, error } = await loginUser({
        email,
        password,
      });
      if (error) toast.error("Incorecct email or password");
      setToken(data.token);
      setIsAuthenticated(true);
      setLoadingAuthRequest(false);
      localStorage.setItem("token", data.token);
      navigate(-1);
    } catch (error) {
      setLoadingAuthRequest(false);
      toast.error(error.message);
    }
  };

  if (loadingAuthRequest) return <Loading />;
  // if (isAuthenticated) return <Navigate to="/auth" />;

  return (
    <div className="flex h-screen justify-evenly bg-LoginBg bg-cover bg-right">
      <div className="flex items-center justify-center">
        <div className="bg-dark-blue rounded-full p-14 flex flex-col items-center">
          {" "}
          <img
            src={logo}
            alt="logo"
            className="pl-4 hidden w-80 items-center justify-center lg:block"
          />
          <p className="text-white text-5xl">
            C a o <span className="text-first">F I T</span>
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center space-y-8 lg:w-1/2">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <form
            onSubmit={handleSubmit}
            className="rounded-md bg-white p-5 shadow-2xl"
          >
            <h1 className="mb-1 text-2xl font-bold text-gray-800">
              Hello Again
            </h1>
            <p className="mb-8 text-sm font-normal text-gray-600">
              Welcome Back
            </p>
            <div className="mb-8 flex items-center rounded-lg border-2 px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="w-full border-none pl-2 outline-none"
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-12 flex items-center rounded-lg border-2 px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="w-full border-none pl-2 outline-none"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="mb-2 mt-5 block w-full rounded-lg bg-first py-2 font-semibold text-black transition-all duration-500 hover:-translate-y-1 hover:bg-yellow-400"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mb-2 mt-3 block w-full rounded-lg bg-dark-blue py-2 font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-dark-blue-light"
            >
              Close
            </button>
            <div className="mt-4 flex justify-between">
              <span className="ml-2 cursor-pointer text-sm transition-all duration-500 hover:-translate-y-1 hover:text-yellow-700">
                Forgot Password?
              </span>
              <Link
                to="/register"
                className="ml-2 cursor-pointer text-sm transition-all duration-500 hover:-translate-y-1 hover:text-yellow-700"
              >
                Dont have an account yet?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
