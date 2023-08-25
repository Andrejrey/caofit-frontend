import React from "react";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo/logo-dark-removedBG.png";

function Footer() {
  return (
    <footer className="relative z-0 bg-dark-blue">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl">
              Subscribe to our newsletter to get updates.
            </h1>
            <div className="mx-auto mt-6 flex flex-col space-y-3 md:flex-row md:space-y-0">
              <input
                id="email"
                type="text"
                className="rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-40"
                placeholder="Email Address"
              />
              <button className="w-full transform rounded-lg bg-first px-6 py-2.5 text-sm font-medium tracking-wider text-black transition-colors duration-300 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80 md:mx-4 md:w-auto">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <div className="mt-5 flex flex-col items-start space-y-2">
              <a
                href="#"
                className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
              >
                Home
              </a>
              <a
                href="shop"
                className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
              >
                Shopping
              </a>
              <a
                href="calculator"
                className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
              >
                Calculator
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <div className="mt-5 flex flex-col items-start space-y-2">
              <a
                href="#"
                className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
              >
                BMI
              </a>
              <a
                href="diary"
                className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
              >
                Diary
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
              >
                News
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:my-8" />
        <div className="flex items-center justify-evenly">
          <a href="/">
            <img className="h-32 w-32" src={logo} alt="Logo" />
          </a>
          <div className="-mx-2 flex">
            <a
              href="https://github.com/claudia-sikorski"
              className="mx-2 text-white transition-colors duration-300 hover:text-yellow-500"
              aria-label="Github"
            >
              <FaGithub className="h-8 w-8 fill-current" />
              <span className="flex items-center justify-center font-sans text-xl">
                C
              </span>
            </a>
            <a
              href="https://github.com/Andrejrey"
              className="mx-2 text-white transition-colors duration-300 hover:text-yellow-500"
              aria-label="Github"
            >
              <FaGithub className="h-8 w-8 fill-current" />
              <span className="flex items-center justify-center font-sans text-xl">
                A
              </span>
            </a>
            <a
              href="https://github.com/iomid23"
              className="mx-2 text-white transition-colors duration-300 hover:text-yellow-500"
              aria-label="Github"
            >
              <FaGithub className="h-8 w-8 fill-current" />
              <span className="flex items-center justify-center font-sans text-xl">
                O
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
