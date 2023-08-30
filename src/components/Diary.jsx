import DiaryAccordion from "./DiaryAccordion";
import axios from "axios";

const Diary = ({ diary }) => {
  return (
    <div className="h-screen flex flex-col lg:items-center lg:bg-diaryBg bg-cover bg-right">
      <div className="bg-gray-200 rounded-md shadow-xl lg:my-8 lg:w-4/6 2xl:w-2/4">
        <div className="px-2 py-2">
          <h1 className="text-5xl font-extrabold text-dark-blue">
            CaoFIT
            <span className="text-3xl font-bold text-dark-blue-light">
              Diary
            </span>
          </h1>
        </div>
        <DiaryAccordion data={diary} />
      </div>
    </div>
  );
};

export default Diary;
