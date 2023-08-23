import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/text-dark.png";

function DesktopNavbar({
  selectedProductCount,
  incrementSelectedProductCount,
  toggleCartModal,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const openCartModal = () => {
    if (window.innerWidth <= 640) {
      setCartModalOpen(true);
    } else {
      toggleCartModal();
    }
  };

  const cartIcon = (
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
        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );

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
                <img
                  src={logo}
                  alt="logo"
                  className="h-8 w-32 cursor-pointer object-cover"
                />
              </a>
              <Link
                to="/shop"
                onClick={incrementSelectedProductCount}
                className="relative ml-5 flex cursor-pointer items-center text-white md:hidden"
              >
                {cartIcon}
                <span className="absolute right-0 top-2 flex h-5 w-5 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-first text-blue-900">
                  {selectedProductCount}
                </span>
              </Link>

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
                to="/shop"
                className="shadow-outline mt-2 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:text-yellow-400 focus:outline-none md:ml-4 md:mt-0"

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
                to="/calculator"
                className="shadow-outline mt-2 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:text-yellow-400 focus:outline-none md:ml-4 md:mt-0"
              >
                Calculator
              </Link>
              <Link
                to="/diary"
                className="shadow-outline mt-2 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:text-yellow-400 focus:outline-none md:ml-4 md:mt-0"
              >
                Diary
              </Link>
              <Link
                to="/contact"
                className="shadow-outline mt-2 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:text-yellow-400 focus:outline-none md:ml-4 md:mt-0"
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="shadow-outline text-bold mt-2 cursor-pointer rounded-lg bg-first px-4 py-2 text-sm font-semibold text-blue-900 hover:bg-yellow-400 focus:outline-none md:ml-4 md:mt-0"
              >
                Login
              </Link>
            </nav>
            {selectedProductCount > 0 && (
              <div
                className="relative ml-5 flex hidden cursor-pointer items-center text-white md:block"
                onClick={openCartModal}
              >
                {cartIcon}
                <span className="absolute right-0 top-2 flex h-5 w-5 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-first text-blue-900">
                  {selectedProductCount}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
