import { Link } from "react-router-dom";
import Loading from "./Loading";
import strong from "../assets/icons/muscle.png";
import book from "../assets/icons/open-book.png";
import shopping from "../assets/icons/shopping-cart.png";

const UserProfile = ({ user }) => {
  return user ? (
    <div className="flex h-screen flex-col justify-center items-center mt-5 mb-5">
      <h1>
        Name:{" "}
        <span className="text-dark-blue-light font-bold">
          {user.first_name}
        </span>
      </h1>
      <div className="flex flex-col items-center mt-3">
        <img src={strong} alt="Muscle Icon" className="w-12 mb-2 self-center" />
        <Link
          className="transform rounded-lg w-fit self-center bg-first px-6 py-3 font-semibold text-dark-blue shadow-md transition duration-300 hover:scale-105 hover:bg-yellow-400"
          to={"/calculator"}
        >
          Calculator
        </Link>
        <img
          src={book}
          alt="Muscle Icon"
          className="w-12 mb-2 self-center mt-2"
        />
        <Link
          className="transform rounded-lg w-fit self-center bg-first px-6 py-3 font-semibold text-dark-blue shadow-md transition duration-300 hover:scale-105 hover:bg-yellow-400"
          to={"/diary"}
        >
          Diary
        </Link>
        <img
          src={shopping}
          alt="Muscle Icon"
          className="w-12 mb-2 self-center mt-2"
        />
        <Link
          className="transform rounded-lg w-fit self-center bg-first px-6 py-3 font-semibold text-dark-blue shadow-md transition duration-300 hover:scale-105 hover:bg-yellow-400"
          to={"/shop"}
        >
          Shop
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default UserProfile;
