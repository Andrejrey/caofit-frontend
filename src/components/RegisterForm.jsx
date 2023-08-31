import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { registerUser } from "../utils/authUtils";
import logo from "../assets/logo/logo-dark-removedBG.png";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const RegisterForm = ({
  isAuthenticated,
  setIsAuthenticated,
  setToken,
  loadingAuthRequest,
  setLoadingAuthRequest,
}) => {
  const [{ first_name, last_name, email, password }, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!first_name || !last_name || !email || !password)
        return toast.error("Please fill out all the fields");
      setLoadingAuthRequest(true);
      const { data, error } = await registerUser({
        first_name,
        last_name,
        email,
        password,
      });
      if (error) throw error;
      setToken(data.token);
      setIsAuthenticated(true);
      setLoadingAuthRequest(false);
      localStorage.setItem("token", data.token);
    } catch (error) {
      setLoadingAuthRequest(false);
      toast.error(error.message);
    }
  };

  if (loadingAuthRequest) return <Loading />;
  if (isAuthenticated) return <Navigate to="/auth" />;

  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center bg-dark-blue-light px-5 py-5">
      <div
        className="w-full overflow-hidden rounded-3xl bg-gray-100 text-gray-500 shadow-xl"
        style={{ maxWidth: "1000px" }}
      >
        <div className="w-full md:flex">
          <div className="hidden w-1/2 items-center justify-center bg-second px-10 py-10 md:block ">
            <img src={logo} alt={logo} className="flex justify-center" />
          </div>
          <div className="w-full px-5 py-10 md:w-1/2 md:px-10">
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <div>
              <div className="-mx-3 flex">
                <div className="mb-5 w-1/2 px-3">
                  <label htmlFor="" className="px-1 text-xs font-semibold">
                    First name
                  </label>
                  <div className="flex">
                    <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center">
                      <BsFillPersonFill />
                    </div>
                    <input
                      type="text"
                      name="first_name"
                      className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-second"
                      placeholder="First Name"
                      value={first_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-5 w-1/2 px-3">
                  <label htmlFor="" className="px-1 text-xs font-semibold">
                    Last name
                  </label>
                  <div className="flex">
                    <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center">
                      <BsFillPersonFill />
                    </div>
                    <input
                      name="last_name"
                      type="text"
                      className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-second"
                      placeholder="Last Name"
                      value={last_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex">
                <div className="mb-5 w-full px-3">
                  <label htmlFor="" className="px-1 text-xs font-semibold">
                    Email
                  </label>
                  <div className="flex">
                    <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center">
                      <MdEmail />
                    </div>
                    <input
                      name="email"
                      type="email"
                      className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-second"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex">
                <div className="mb-12 w-full px-3">
                  <label htmlFor="" className="px-1 text-xs font-semibold">
                    Password
                  </label>
                  <div className="flex">
                    <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center">
                      <RiLockPasswordLine />
                    </div>
                    <input
                      name="password"
                      type="password"
                      className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-second"
                      placeholder="************"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex">
                <div className="mb-5 w-full px-3">
                  <button
                    className="mx-auto block w-full max-w-xs rounded-lg bg-second px-3 py-3 font-semibold text-white hover:bg-dark-blue-light focus:bg-second"
                    onClick={handleSubmit}
                  >
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
