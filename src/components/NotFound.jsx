import logo from "/public/assets/logo/caoFit_light_logo_without_text.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen min-h-[500px] flex flex-col justify-center items-center bg-homeBg bg-cover bg-top">
      <div className="flex lg:h-fit lg:w-[500px] p-1 items-center justify-center text-4xl font-semibold bg-second rounded-lg">
        <div className="flex p-3 flex-col justify-center items-center rounded-lg">
          <p className="mb-2 mt-3 text-3xl font-semibold text-first">
            Hey, you look lost... 🥺
          </p>
          <div className="mt-5 flex flex-row items-center">
            <img src={logo} className="w-36" alt="logo" />
            <p className="mb-2 font-bold text-first text-7xl ml-1">404</p>
          </div>
          <p className="text-lg font-semibold text-first">
            This page doesn&apos;t seem to exist.
          </p>
          <div className="my-3">
            <Link
              to="/"
              className="w-fit text-lg transform self-center rounded-lg bg-first px-6 py-3 font-semibold text-dark-blue shadow-md transition duration-300 hover:scale-105 hover:bg-yellow-400"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
