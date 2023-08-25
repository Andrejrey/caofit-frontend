import { useState } from "react";

// components
import DiaryAccordionItem from "./DiaryAccordionItem";

const DiaryAccordion = ({ data }) => {
  const [open, setOpen] = useState(null); // 1,2,3,..

  const handleToggleOpen = (id) => {
    setOpen(id === open ? null : id);
  };

  return (
    <div className="lg:w-4/6 2xl:w-2/4 lg:flex lg:flex-col">
      {data &&
        data.map((item) => {
          return (
            <DiaryAccordionItem
              key={item.id}
              id={item.id}
              total_carbs={item.total_carbs}
              total_fats={item.total_fats}
              total_proteins={item.total_proteins}
              total_kcal={item.total_kcal}
              food={item.food}
              date={item.date}
              day={item.day}
              handleToggleOpen={handleToggleOpen}
              setOpen={setOpen}
              open={open}
            />
          );
        })}
    </div>
  );
};

export default DiaryAccordion;