import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function DesktopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  // const handleLoginClick = () => {
  //   setShowLoginForm(true);
  // };

  // const handleCloseLoginForm = () => {
  //   setShowLoginForm(false);
  // };

  // const handleGoToLogin = () => {
  //   navigate("/login");
  // };
  return (
    <div className="min-h-screen">
      <div className="">
        <div className="w-full bg-dark-blue text-white">
          <div className="mx-auto flex max-w-screen-xl flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <a
                href="#"
                className="focus:shadow-outline rounded-lg text-lg font-semibold uppercase tracking-widest text-white focus:outline-none"
              >
                CaoFIT
              </a>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
