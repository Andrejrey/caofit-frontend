import DiaryAccordion from "./DiaryAccordion";

const Diary = ({ diary }) => {
  return (
    <div className="flex flex-col lg:h-screen lg:items-center lg:bg-diaryBg lg:bg-cover lg:bg-right">
      <div className="bg-gray-200 sm:h-fit lg:rounded-md lg:shadow-xl lg:my-8 lg:w-4/6 2xl:w-2/4">
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
