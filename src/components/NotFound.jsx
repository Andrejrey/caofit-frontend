const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-homeBg bg-cover bg-top">
      <div className="flex p-1 items-center  text-white text-4xl font-semibold bg-dark-blue-light rounded-lg">
        <div className="flex p-3  flex-col justify-center items-center text-dark-blue-light rounded-lg">
          <p className="font-semibold text-first">Hey, you look lost</p>
          <div className="mt-5 flex flex-row items-center">
            <img
              src="src\assets\logo\caoFit_light_logo_without_text.svg"
              className="w-36"
              alt="logo"
            />
            <p className="font-bold text-first text-7xl ml-5">404</p>
          </div>
          <p className="font-semibold text-first">
            This page doesn't seem to exist
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
