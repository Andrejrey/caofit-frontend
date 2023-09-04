import { Link } from "react-router-dom";
import Loading from "./Loading";
import strong from "../assets/icons/muscle.png";
import book from "../assets/icons/open-book.png";
import shopping from "../assets/icons/shopping-cart.png";

const UserProfile = ({ user }) => {
  return user ? (
    <div className="flex h-screen flex-col justify-center items-start bg-homeBg bg-cover bg-top">
      <div className="text-center text-dark-blue mx-3 mb-10 lg:w-3/5 xl:w-1/2 xl:ml-10 2xl:w-1/3 2xl:ml-80">
        <h1 className="text-3xl">
          Name:{" "}
          <span className="text-dark-blue-light font-bold">
            {user.first_name}
          </span>
        </h1>
        <div className="flex flex-col items-center mt-3">
          <img
            src={strong}
            alt="Muscle Icon"
            className="w-12 mb-2 self-center mt-5"
          />
          <h2 className="font-semibold">
            Empower Your Nutrition - Track and Thrive!
          </h2>
          <hr className="h-px my-1 mx-10 bg-dark-blue border-0"></hr>
          <p className="mt-3 text-base px-3">
            Discover a new way of food tracking with our revolutionary app!
            Effortlessly monitor what you eat and uncover the secrets of your
            eating habits. Gain valuable insights into your food intake, from
            calories to micronutrients.
          </p>
          <Link
            className="transform mt-5 rounded-lg w-fit self-center bg-first px-6 py-3 font-semibold text-dark-blue shadow-md transition duration-300 hover:scale-105 hover:bg-yellow-400"
            to={"/calculator"}
          >
            Calculator
          </Link>
          <img
            src={book}
            alt="Muscle Icon"
            className="w-12 mb-2 self-center mt-5"
          />
          <h2 className="font-semibold">
            Nutrition Diary - Your Journey of Empowerment
          </h2>
          <hr className="h-px my-1 mx-10 bg-dark-blue border-0"></hr>
          <p className="mt-3 text-base px-3">
            Transform your health with CaoFIT's nutrition tracking. Get accurate
            insights into your diet. Make informed choices for weight management
            or overall wellness. Visualize progress, spot patterns, and optimize
            nutrition effortlessly.
          </p>
          <Link
            className="transform mt-5 rounded-lg w-fit self-center bg-first px-6 py-3 font-semibold text-dark-blue shadow-md transition duration-300 hover:scale-105 hover:bg-yellow-400"
            to={"/diary"}
          >
            Diary
          </Link>
          <img
            src={shopping}
            alt="Muscle Icon"
            className="w-12 mb-2 self-center mt-5"
          />
          <h2 className="font-semibold">
            Ultimate Destination for Health Enthusiasts
          </h2>
          <hr className="h-px my-1 mx-10 bg-dark-blue border-0"></hr>
          <p className="mt-3 text-base px-3">
            Discover an array of curated selection of top-tier protein products,
            which fuel your workouts or support your recovery. Step into the
            world of CaoFIT Shop and embrace the power of protein
            supplementation!
          </p>
          <Link
            className="transform mt-5 rounded-lg w-fit self-center bg-first px-6 py-3 font-semibold text-dark-blue shadow-md transition duration-300 hover:scale-105 hover:bg-yellow-400"
            to={"/shop"}
          >
            Shop
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default UserProfile;
