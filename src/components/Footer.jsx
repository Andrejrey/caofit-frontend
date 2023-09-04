import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo/CaoFit_light_logo_without_text.svg";

function Footer() {
  return (
    <footer className="relative z-0 bg-dark-blue">
      <div className="sm:flex sm:justify-center px-6 py-10">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-fit flex flex-row justify-center items-center md:col-span-3 lg:col-span-1">
            <img className="h-32 w-32 ml-6" src={logo} alt="Logo" />
            <p className="text-white text-center font-normal text-3xl ml-2">
              C a o <span className="text-first font-semibold ">F I T</span>
            </p>
          </div>
          <div className="sm:w-[500px] md:w-[320px]">
            <div className="grid grid-cols-2 space-y-2">
              <div className="col-span-2">
                <p className="font-semibold text-white border-b">Quick Links</p>
              </div>
              <div>
                <Link
                  to="calculator"
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
                  to="diary"
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
                  to="shop"
                  className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
                >
                  Shop
                </Link>
              </div>
              <div>
                <Link
                  to="legal-notice"
                  className="text-white transition-colors duration-300 hover:text-yellow-500 hover:underline"
                >
                  Legal Notice
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:w-[500px] md:w-[320px]">
            <div className="grid grid-cols-1 space-y-2 justify-center items-center mb-3">
              <div>
                <p className="font-semibold text-white border-b mb-2">
                  The Crew Members
                </p>
              </div>
              <div className="flex flex-row justify-center">
                <div className="flex flex-col items-center w-fit">
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
                <div className="flex flex-col items-center w-fit">
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
                <div className="flex flex-col items-center w-fit">
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
