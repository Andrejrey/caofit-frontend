import { useState, Component } from "react";
import DiaryAccordionItem from "./DiaryAccordionItem";

const DiaryAccordion = ({ data }) => {
  const [open, setOpen] = useState(null); // 1, 2, 3, ...

  // Funktion zur Konvertierung von "DD/MM/YYYY" in ein vergleichbares Datum
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day); // Monate in JavaScript sind 0-basiert
  };

  // Funktion zur Sortierung der Daten nach Datum
  const sortedData = data.slice().sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateA - dateB;
  });

  // Toggle Funktion für Accordion Items
  const handleToggleOpen = (id) => {
    setOpen(id === open ? null : id);
  };

  return (
    <div className="mx-2 mb-5 lg:flex lg:flex-col">
      <div className="lg:overflow-y-scroll lg:h-[75vh] lg:scrollbar-thin lg:scrollbar-thumb-rounded-sm lg:scrollbar-thumb-second lg:scrollbar-track-slate-300">
        {sortedData &&
          sortedData.map((item) => {
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
    </div>
  );
};

export default DiaryAccordion;
