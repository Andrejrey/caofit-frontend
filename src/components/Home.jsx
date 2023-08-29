import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-dark-withoutText-removedBG.png";

const Home = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center  bg-second">
      <img src={logo} alt="logo" className="h-48 w-auto" />
      <div className="max-w-xl text-center">
        <h1 className="mb-6 mt-16 text-4xl font-semibold text-gray-100">
          Your Ultimate Protein Destination
        </h1>
        <p className="mb-6 text-lg text-gray-100">
          Welcome to our online protein haven! We are committed to helping you
          achieve your fitness goals by offering a diverse range of premium
          protein products. Whether you're an athlete, fitness enthusiast, or
          someone pursuing a healthier lifestyle, our selection caters to
          everyone's needs.
        </p>
        <p className="mb-6 text-lg text-gray-100">
          From protein supplements to delightful snacks, we have your protein
          requirements covered. Our mission is to empower your fitness journey
          by providing the tools necessary to track your protein intake and
          progress. Our user-friendly diary feature makes logging meals and
          monitoring protein consumption effortless.
        </p>
        <p className="mb-6 text-lg text-gray-100">
          Explore our Protein Shop to discover the latest and most innovative
          products that will elevate your fitness regimen. Our shop accommodates
          various dietary preferences and needs, ensuring everyone finds their
          perfect match. Energize your workouts, recover efficiently, and reach
          your fitness milestones with confidence.
        </p>
      </div>
      <div className="m-4 flex justify-center space-x-4">
        <Link
          to="/shop"
          className="transform rounded-lg bg-first px-6 py-3 font-semibold text-blue-900 shadow-md transition duration-300 hover:scale-105 hover:bg-yellow-400"
        >
          Explore Shop
        </Link>
        <Link
          to="/calculator"
          className="transform rounded-lg bg-first px-6 py-3 font-semibold text-blue-900 shadow-md transition duration-300 hover:scale-105 hover:bg-yellow-400"
        >
          Calculatorw
        </Link>
      </div>
    </div>
  );
};

export default Home;
