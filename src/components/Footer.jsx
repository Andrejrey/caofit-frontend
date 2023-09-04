import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo/caoFit_light_logo_without_text.svg";

function Footer() {
  return (
    <footer className="relative z-0 bg-dark-blue">
      <div className="px-6 py-10 sm:flex sm:justify-center">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex h-fit flex-row items-center justify-center md:col-span-3 lg:col-span-1">
            <img className="ml-6 h-32 w-32" src={logo} alt="Logo" />
            <p className="ml-2 text-center text-3xl font-normal text-white">
              C a o <span className="font-semibold text-first ">F I T</span>
            </p>
          </div>
          <div className="sm:w-[500px] md:w-[320px]">
            <div className="grid grid-cols-2 space-y-2">
              <div className="col-span-2">
                <p className="border-b font-semibold text-white">Quick Links</p>
              </div>
              <div>
                <Link
                  to="/calculator"
                  className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
                >
                  Calculator
                </Link>
              </div>
              <div>
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  to="/diary"
                  className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
                >
                  Diary
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
                >
                  News
                </Link>
              </div>
              <div>
                <Link
                  to="/shop"
                  className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
                >
                  Shop
                </Link>
              </div>
              <div>
                <Link
                  to="/legal-notice"
                  className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
                >
                  Legal Notice
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:w-[500px] md:w-[320px]">
            <div className="mb-3 grid grid-cols-1 items-center justify-center space-y-2">
              <div>
                <p className="mb-2 border-b font-semibold text-white">
                  The Crew Members
                </p>
              </div>
              <div className="flex flex-row justify-center">
                <div className="flex w-fit flex-col items-center">
                  <a
                    href="https://github.com/claudia-sikorski"
                    className="mx-2 text-white transition-colors duration-300 hover:text-yellow-500"
                    aria-label="Github"
                  >
                    <FaGithub className="h-14 w-14 fill-current" />
                    <span className="flex items-center justify-center font-sans text-xl">
                      C
                    </span>
                  </a>
                </div>
                <div className="flex w-fit flex-col items-center">
                  <a
                    href="https://github.com/Andrejrey"
                    className="mx-2 text-white transition-colors duration-300 hover:text-yellow-500"
                    aria-label="Github"
                  >
                    <FaGithub className="h-14 w-14 fill-current" />
                    <span className="flex items-center justify-center font-sans text-xl">
                      A
                    </span>
                  </a>
                </div>
                <div className="flex w-fit flex-col items-center">
                  <a
                    href="https://github.com/iomid23"
                    className="mx-2 text-white transition-colors duration-300 hover:text-yellow-500"
                    aria-label="Github"
                  >
                    <FaGithub className="h-14 w-14 fill-current" />
                    <span className="flex items-center justify-center font-sans text-xl">
                      O
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
