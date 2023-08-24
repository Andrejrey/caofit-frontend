import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/solid";

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
    <div
      id="accordionItem"
      className={`group ${id === open ? "is-active" : ""}`}
    >
      <div
        id="accordionHeader"
        className="flex flex-nowrap items-center justify-between mb-3 shadow-lg rounded-xl p-3 font-medium text-dark-blue-light"
        onClick={() => handleToggleOpen(id)}
      >
        <h2>{`${day}, ${date}`}</h2>
        <ChevronDownIcon className="w-5 h-5 rotate-0 group-[.is-active]:rotate-[180deg]" />
      </div>
      <div
        id="accordionContent"
        className="overflow-hidden h-0 group-[.is-active]:h-fit"
      >
        <div className="grid grid-cols-4 grid-flow-row">
          <div></div>
          <div className="text-right">quantity</div>
          <div className="text-right">proteins</div>
          <div className="text-right">calories</div>
        </div>
        {food &&
          food.map((f) => {
            return (
              <div key={f.food_id} className="grid grid-cols-4 grid-flow-row">
                <div className="flex flex-row">
                  <img
                    src={f.food_icon}
                    alt="Icon of saved food"
                    className="h-6"
                  />
                  <p>{f.food_name}</p>
                </div>
                <div className="text-right">
                  {f.food_quantity} {f.food_unit}
                </div>
                <div className="text-right">{total_proteins} g</div>
                <div className="text-right">{total_kcal} kcal</div>
              </div>
            );
          })}
        <div className="grid grid-cols-4 grid-flow-row bg-gray-100">
          <div className="flex flex-nowrap items-center">
            <ChartBarIcon className="w-5 h-5" />
            <p className="font-bold">Total</p>
          </div>
          <div></div>
          <p className="text-right font-bold">{total_proteins}g</p>
          <p className="text-right font-bold">{total_kcal}kcal</p>
        </div>
      </div>
    </div>
  );
};

export default DiaryAccordionItem;
