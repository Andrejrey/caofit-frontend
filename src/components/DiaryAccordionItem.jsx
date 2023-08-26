import { ChevronDownIcon } from "@heroicons/react/24/outline";
import GraphBar from "../assets/icons/graph-bar.png";

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
    <div className={`group ${id === open ? "is-active" : ""}`}>
      {/* Accordion Header */}
      <div
        className="flex flex-nowrap items-center justify-between mb-3 shadow-lg rounded-xl p-3 font-medium text-dark-blue-light bg-white"
        onClick={() => handleToggleOpen(id)}
      >
        <h2>{`${day}, ${date}`}</h2>
        <ChevronDownIcon className="w-5 h-5 rotate-0 group-[.is-active]:rotate-[180deg]" />
      </div>
      {/* Accordion Content */}
      <div className="overflow-hidden h-0 group-[.is-active]:h-fit mb-2">
        <div className="grid grid-cols-5 grid-flow-row ml-4 mr-2">
          <div></div>
          <div className="text-right italic">carbs</div>
          <div className="text-right italic">fats</div>
          <div className="text-right italic">proteins</div>
          <div className="text-right italic pr-2">calories</div>
        </div>
        {food &&
          food.map((f) => {
            return (
              <div
                key={f.id}
                className="grid grid-cols-5 grid-flow-row my-2 mx-2 pl-2 even:bg-gray-100"
              >
                <div className="flex flex-row">
                  <img
                    src={f.food_icon}
                    alt="Icon of saved food"
                    className="w-6 h-6 mr-2"
                  />
                  <p>
                    {f.food_name.charAt(0).toUpperCase() + f.food_name.slice(1)}
                    : {f.food_quantity}
                    {f.food_unit}
                  </p>
                </div>
                <div className="text-right">{f.food_total_carbs}g</div>
                <div className="text-right">{f.food_total_fats}g</div>
                <div className="text-right">{f.food_total_proteins}g</div>
                <div className="text-right pr-2">{f.food_total_kcal}kcal</div>
              </div>
            );
          })}
        <div className="grid grid-cols-5 grid-flow-row bg-second text-slate-50 mx-2 pl-2 h-8 rounded-sm items-center">
          <div className="flex flex-nowrap items-center ">
            <img
              src={GraphBar}
              alt="Graph bar"
              className="w-5 h-5 mr-3 invert"
            />
            <p className="font-bold">Total</p>
          </div>
          <p className="text-right font-bold">{total_carbs}g</p>
          <p className="text-right font-bold">{total_fats}g</p>
          <p className="text-right font-bold">{total_proteins}g</p>
          <p className="text-right font-bold pr-2">{total_kcal}kcal</p>
        </div>
      </div>
    </div>
  );
};

export default DiaryAccordionItem;
