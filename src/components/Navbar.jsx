import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import CalculateIcon from "@mui/icons-material/Calculate";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Link } from "react-router-dom";

function Navbar({ isAuthenticated, logOut }) {
  return (
    <nav className="fixed bottom-0 z-10 flex w-full border-t bg-dark-blue p-2 md:hidden">
      <Link
        to={"/"}
        className="whitespace-no-wrap flex flex-grow flex-col items-center justify-center
		overflow-hidden text-sm text-white transition-colors duration-100
		ease-in-out hover:text-yellow-500"
      >
        <HomeIcon />
      </Link>

      {/* <a
        href="/shop"
        className="whitespace-no-wrap flex flex-grow flex-col items-center 
		justify-center overflow-hidden text-sm text-white transition-colors
		duration-100 ease-in-out hover:text-yellow-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>

        <span className="hidden text-sm capitalize">Shopping</span>
      </a> */}

      <Link
        to={"/calculator"}
        className="whitespace-no-wrap flex flex-grow flex-col items-center justify-center
		overflow-hidden text-sm text-white transition-colors duration-100
		ease-in-out hover:text-yellow-500"
      >
        <CalculateIcon />
      </Link>
      {isAuthenticated && (
        <Link
          to={"/diary"}
          className="whitespace-no-wrap flex flex-grow flex-col items-center justify-center
		overflow-hidden text-sm text-white transition-colors duration-100
		ease-in-out hover:text-yellow-500"
        >
          <AutoStoriesIcon />
        </Link>
      )}
      {!isAuthenticated && (
        <Link
          to={"/login"}
          className="whitespace-no-wrap flex flex-grow flex-col items-center justify-center
		overflow-hidden text-sm text-white transition-colors duration-100
		ease-in-out hover:text-yellow-500"
        >
          <LoginIcon />
        </Link>
      )}
      {isAuthenticated && (
        <Link
          onClick={logOut}
          to={"/login"}
          className="whitespace-no-wrap flex flex-grow flex-col items-center justify-center
		overflow-hidden text-sm text-white transition-colors duration-100
		ease-in-out hover:text-yellow-500"
        >
          <LogoutIcon />
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
