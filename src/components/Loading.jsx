import logo from "/public/assets/logo/caoFit_light_logo_without_text.svg";
import FadeLoader from "react-spinners/FadeLoader";

const Loading = () => {
  return (
    <div className="absolute m-auto left-0 right-0 top-0 bottom-0 w-[320px] h-[330px] flex flex-col justify-center bg-second rounded-lg">
      <div className="flex flex-row p-1 items-center justify-center mb-3 text-white text-4xl font-semibold">
        <img src={logo} alt="logo" className="w-24" />
        <p className="ml-2 text-center text-3xl font-normal text-white">
          C a o <span className="font-semibold text-first ">F I T</span>
        </p>
      </div>
      <div className="flex flex-col items-center">
        <FadeLoader color="#ffffff" />
        <span className="font-bold mt-3 text-white">is loading...</span>
        <p className="mt-5 mx-5 text-center italic text-white">
          Notice: Due to the free PostgreSQL version, the waiting time can take
          a maximum of 2-3 minutes.
        </p>
      </div>
    </div>
  );
};

export default Loading;
