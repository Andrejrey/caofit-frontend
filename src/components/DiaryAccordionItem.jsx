import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { OverviewListing } from "./OverviewListing";
import { OverviewPieChart } from "./OverviewPieChart";

const DiaryAccordionItem = ({
  id,
  total_carbs,
  total_fats,
  total_proteins,
  total_kcal,
  food,
  date,
  day,
  handleToggleOpen,
  open,
  setOpen,
}) => {
  return (
    <div className={`group ${id === open ? "is-active mr-2" : "mr-2"}`}>
      {/* Accordion Item (Header: Day, Date) */}
      <div
        className="flex flex-nowrap items-center justify-between mb-3 shadow-lg rounded-xl p-3 font-medium text-dark-blue-light bg-white"
        onClick={() => handleToggleOpen(id)}
      >
        <h2>{`${day}, ${date}`}</h2>
        <ChevronDownIcon className="w-5 h-5 rotate-0 group-[.is-active]:rotate-[180deg]" />
      </div>
      {/* Accordion Content (Charts) */}
      <div className="overflow-hidden h-0 group-[.is-active]:h-fit mb-2">
        <OverviewListing
          total_carbs={total_carbs}
          total_fats={total_fats}
          total_proteins={total_proteins}
          total_kcal={total_kcal}
          food={food}
        />
        <OverviewPieChart
          date={date}
          total_carbs={total_carbs}
          total_fats={total_fats}
          total_proteins={total_proteins}
        />
      </div>
    </div>
  );
};

export default DiaryAccordionItem;
