import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import CalculateIcon from "@mui/icons-material/Calculate";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
        <div className="flex flex-col items-center">
          <HomeIcon />
          <p>Home</p>
        </div>
      </Link>

      {/* <Link
        href="/shop"
        className="whitespace-no-wrap flex flex-grow flex-col items-center justify-center
        overflow-hidden text-sm text-white transition-colors duration-100
        ease-in-out hover:text-yellow-500"
      >
        <div className="flex flex-col items-center">
          <ShoppingCartIcon />
          <p>Shop</p>
        </div>
      </Link> */}

      <Link
        to={"/calculator"}
        className="whitespace-no-wrap flex flex-grow flex-col items-center justify-center
		overflow-hidden text-sm text-white transition-colors duration-100
		ease-in-out hover:text-yellow-500"
      >
        <div className="flex flex-col items-center">
          <CalculateIcon />
          <p>Calculator</p>
        </div>
      </Link>
      {isAuthenticated && (
        <Link
          to={"/diary"}
          className="whitespace-no-wrap flex flex-grow flex-col items-center justify-center
		overflow-hidden text-sm text-white transition-colors duration-100
		ease-in-out hover:text-yellow-500"
        >
          <div className="flex flex-col items-center">
            <AutoStoriesIcon />
            <p>Diary</p>
          </div>
        </Link>
      )}
      {!isAuthenticated && (
        <Link
          to={"/login"}
          className="whitespace-no-wrap flex flex-grow flex-col items-center justify-center
		overflow-hidden text-sm text-white transition-colors duration-100
		ease-in-out hover:text-yellow-500"
        >
          <div className="flex flex-col items-center">
            <LoginIcon />
            <p>Login</p>
          </div>
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
          <div className="flex flex-col items-center">
            <LogoutIcon />
            <p>Logout</p>
          </div>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
