import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../assets/logo/text-dark.png";

function DesktopNavbar({
  selectedProductCount,
  toggleCartModal,
  isAuthenticated,
  logOut,
  setIsOpen,
  isOpen,
  user,
}) {
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

  const toggleMenu = () => {
    setIsOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const openCartModal = () => {
    toggleCartModal();
  };

  return (
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
          </Link>
          <div
            className={`relative ml-5 flex cursor-pointer items-center text-white md:hidden`}
            onClick={openCartModal}
          >
            {cartIcon}
            <span className="absolute right-0 top-2 flex h-5 w-5 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-first text-blue-900">
              {selectedProductCount}
            </span>
          </div>
        </div>
        <nav
          className={`flex-grow flex-col ${
            isOpen ? "flex" : "hidden"
          } md:flex md:flex-row md:justify-end`}
        >
          <Link
            onClick={() => setIsOpen(false)}
            className="shadow-outline mt-2 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:text-yellow-400 focus:outline-none md:ml-4 md:mt-0"
            to={"/"}
          >
            Home
          </Link>
          <>
            <Link
              onClick={() => setIsOpen(false)}
              to={"/shop"}
              className="shadow-outline mt-2 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:text-yellow-400 focus:outline-none md:ml-4 md:mt-0"
            >
              Shop
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/calculator"
              className="shadow-outline mt-2 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:text-yellow-400 focus:outline-none md:ml-4 md:mt-0"
            >
              Calculator
            </Link>
          </>
          {isAuthenticated && (
            <Link
              onClick={() => setIsOpen(false)}
              to="/diary"
              className="shadow-outline mt-2 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:text-yellow-400 focus:outline-none md:ml-4 md:mt-0"
            >
              Diary
            </Link>
          )}
          {!isAuthenticated && (
            <Link
              to="/login"
              className="shadow-outline text-bold mt-2 cursor-pointer rounded-lg bg-first px-4 py-2 text-sm font-semibold text-blue-900 hover:bg-yellow-400 focus:outline-none md:ml-4 md:mt-0"
            >
              Login
            </Link>
          )}
          {user && isAuthenticated && (
            <div className="relative ml-5 mt-2 text-sm font-semibold">
              <button
                onClick={toggleMenu}
                className="flex h-5 items-center hover:text-yellow-400"
              >
                <p>
                  {user &&
                    user.first_name.charAt(0).toUpperCase() +
                      user.first_name.slice(1)}
                </p>
                {!isOpen ? <ArrowRightIcon /> : <ArrowDropDownIcon />}
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 rounded-md bg-second">
                  <div className="flex items-start pb-2 pl-3 pr-3 pt-3">
                    <AccountBoxIcon />
                    <Link
                      to="/auth/profile"
                      className="ml-2  block hover:text-yellow-400"
                    >
                      Profile
                    </Link>
                  </div>
                  <div className="pt1 flex items-center pb-3 pl-3 pr-3">
                    <LogoutIcon />
                    <Link
                      onClick={logOut}
                      to="/"
                      className="ml-1 block text-red-600 hover:text-red-500"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </nav>
        {selectedProductCount > 0 && (
          <div
            className="relative ml-5 hidden cursor-pointer items-center text-white md:block"
            onClick={openCartModal}
          >
            {cartIcon}
            <span className="absolute right-0 top-2 flex h-5 w-5 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-first text-blue-900">
              {selectedProductCount > 0 ? selectedProductCount : 0}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default DesktopNavbar;
