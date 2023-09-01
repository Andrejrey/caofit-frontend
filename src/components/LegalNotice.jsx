import { FaGithub } from "react-icons/fa";

const LegalNotice = () => {
  return (
    <div className="flex flex-col h-screen bg-ImprintBg bg-cover bg-right-bottom sm:items-center">
      <div className="flex flex-col h-fit mx-3 my-8 px-2 py-3 rounded-md shadow-xl bg-gray-100 sm:w-[600px]">
        <div className="mb-5">
          <h1 className="text-5xl font-extrabold text-dark-blue mb-2">
            CaoFIT
            <span className="text-3xl font-bold text-dark-blue-light">
              Legal Notice
            </span>
          </h1>
          <p>
            This application is a student project that was created as part of
            the Web & App Development Bootcamp at the WBS Coding School. The
            team members are:
          </p>
        </div>
        <div className="grid grid-cols-3 self-center mdw-fit mb-4">
          <div className="flex">
            <a
              href="https://github.com/claudia-sikorski"
              className="mx-2 transition-colors duration-300 hover:text-yellow-500"
              aria-label="Github"
            >
              <FaGithub className="h-20 w-20 fill-current" />
              <span className="flex items-center justify-center font-sans text-xl">
                C
              </span>
            </a>
          </div>
          <div className="flex">
            <a
              href="https://github.com/Andrejrey"
              className="mx-2 transition-colors duration-300 hover:text-yellow-500"
              aria-label="Github"
            >
              <FaGithub className="h-20 w-20 fill-current" />
              <span className="flex items-center justify-center font-sans text-xl">
                A
              </span>
            </a>
          </div>
          <div className="flex">
            <a
              href="https://github.com/iomid23"
              className="mx-2 transition-colors duration-300 hover:text-yellow-500"
              aria-label="Github"
            >
              <FaGithub className="h-20 w-20 fill-current" />
              <span className="flex items-center justify-center font-sans text-xl">
                O
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Images sources</h2>
          <li className="ml-5">Background images by Freepik</li>
          <li className="ml-5">Icon images by Flaticon</li>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
