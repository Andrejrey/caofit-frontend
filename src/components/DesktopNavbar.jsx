import { useState } from "react";

function DesktopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

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
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-6 w-6"
                >
                  {/* SVG paths for menu icon */}
                </svg>
              </button>
            </div>
            <nav
              className={`flex-grow flex-col ${
                menuOpen ? "flex" : "hidden"
              } md:flex md:flex-row md:justify-end`}
            >
              <a
                className="shadow-outline mt-2 rounded-lg  px-4 py-2 text-sm font-semibold text-white focus:outline-none md:ml-4 md:mt-0"
                href="#"
              >
                Shopping
              </a>
              <a
                className="shadow-outline mt-2 rounded-lg  px-4 py-2 text-sm font-semibold text-white  focus:outline-none md:ml-4 md:mt-0"
                href="#"
              >
                Calculator
              </a>
              <a
                className="shadow-outline mt-2 rounded-lg  px-4 py-2 text-sm font-semibold text-white  focus:outline-none md:ml-4 md:mt-0"
                href="#"
              >
                Diary
              </a>
              <a
                className="shadow-outline mt-2 rounded-lg  px-4 py-2 text-sm font-semibold text-white focus:outline-none md:ml-4 md:mt-0"
                href="#"
              >
                Contact
              </a>
              <a
                className="shadow-outline mt-2 rounded-lg bg-first px-4  py-2 text-sm font-semibold text-blue-900 hover:bg-yellow-400 focus:outline-none md:ml-4 md:mt-0"
                href="#"
              >
                Login
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
