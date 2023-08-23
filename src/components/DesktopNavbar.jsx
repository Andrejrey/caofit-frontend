import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/text-dark.png";

function DesktopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div>
      <div className="">
        <div className="w-full bg-dark-blue text-white">
          <div className="mx-auto flex max-w-screen-xl flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <Link
                to={"/"}
                className="focus:shadow-outline rounded-lg text-lg font-semibold uppercase tracking-widest text-white focus:outline-none"
              >
                CaoFIT
              </Link>
              <button
                className="focus:shadow-outline rounded-lg focus:outline-none md:hidden"
                onClick={toggleMenu}
              >
                {/* Your menu icon */}
              </button>
            </div>
            <nav
              className={`flex-grow flex-col ${
                menuOpen ? "flex" : "hidden"
              } md:flex md:flex-row md:justify-end`}
            >
              <Link
                to={"/"}
                className="shadow-outline mt-2 rounded-lg  px-4 py-2 text-sm font-semibold text-white  hover:text-yellow-400 focus:outline-none md:ml-4  md:mt-0"
                href="#"
              >
                Home
              </Link>
              <Link
                to={"/shop"}
                className="shadow-outline mt-2 rounded-lg  px-4 py-2 text-sm font-semibold text-white  hover:text-yellow-400 focus:outline-none md:ml-4  md:mt-0"
                href="#"
              >
                Shopping
              </Link>
              <Link
                to={"/calculator"}
                className="shadow-outline mt-2 rounded-lg  px-4 py-2 text-sm font-semibold text-white   hover:text-yellow-400 focus:outline-none md:ml-4 md:mt-0"
                href="#"
              >
                Calculator
              </Link>
              <Link
                to={"/diary"}
                className="shadow-outline mt-2 rounded-lg  px-4 py-2 text-sm font-semibold text-white   hover:text-yellow-400 focus:outline-none md:ml-4 md:mt-0"
                href="#"
              >
                Diary
              </Link>
              <Link
                to={"/contact"}
                className="shadow-outline mt-2 rounded-lg  px-4 py-2 text-sm font-semibold text-white  hover:text-yellow-400 focus:outline-none md:ml-4 md:mt-0"
                href="#"
              >
                Contact
              </Link>
              <Link
                to={"/login"}
                className="shadow-outline text-bold mt-2 cursor-pointer rounded-lg bg-first  px-4 py-2 text-sm font-semibold text-blue-900   hover:bg-yellow-400 focus:outline-none md:ml-4 md:mt-0"
              >
                Login
              </Link>
            </nav>
            <div className="relative ml-5 flex cursor-pointer items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <span className="absolute right-0 top-2 flex h-5 w-5 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-first text-blue-900">
                5
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
