import DiaryAccordion from "./DiaryAccordion";
import { useState, useEffect } from "react";
import axios from "axios";

const Diary = ({ user, token }) => {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    if (user && token) {
      axios
        .get(`${import.meta.env.VITE_APP_CAOFIT_API}/diary/get_user_diary`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setDiary(response.data);
        });
    }
  }, [user, token]);

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
