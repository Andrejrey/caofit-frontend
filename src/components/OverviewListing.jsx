import GraphBar from "../assets/icons/graph-bar.png";

export const OverviewListing = ({
  total_carbs,
  total_fats,
  total_proteins,
  total_kcal,
  food,
}) => {
  return (
    <div className="mb-2">
      <div className="ml-4 mr-2 grid grid-flow-row grid-cols-5 md:grid-cols-6">
        <div className="md:col-span-2"></div>
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
              className="bg-gray-100 rounded my-2 mx-2 pl-2 grid grid-flow-row grid-cols-5 md:grid-cols-6 md:h-7 md:items-center"
            >
              <div className="flex flex-row md:col-span-2">
                <img
                  src={f.food_icon}
                  alt="Icon of saved food"
                  className="w-6 h-6 mr-2"
                />
                <p>
                  {f.food_name.charAt(0).toUpperCase() + f.food_name.slice(1)}:{" "}
                  {f.food_quantity}
                  {f.food_unit}
                </p>
              </div>
              <div className="text-right">
                {Math.round(f.food_total_carbs * 100) / 100}g
              </div>
              <div className="text-right">
                {Math.round(f.food_total_fats * 100) / 100}g
              </div>
              <div className="text-right">
                {Math.round(f.food_total_proteins * 100) / 100}g
              </div>
              <div className="text-right pr-2">
                {Math.round(f.food_total_kcal * 100) / 100}kcal
              </div>
            </div>
          );
        })}
      <div className="bg-second text-slate-50 mx-2 pl-2 h-8 rounded-sm items-center grid grid-flow-row grid-cols-5 md:grid-cols-6">
        <div className="flex flex-nowrap items-center md:col-span-2">
          <img src={GraphBar} alt="Graph bar" className="w-5 h-5 mr-3 invert" />
          <p className="font-bold">Total</p>
        </div>
        <p className="font-bold flex flex-nowrap justify-end">
          {Math.round(total_carbs * 100) / 100}g
        </p>
        <p className="font-bold flex flex-nowrap justify-end">
          {Math.round(total_fats * 100) / 100}g
        </p>
        <p className="font-bold flex flex-nowrap justify-end">
          {Math.round(total_proteins * 100) / 100}g
        </p>
        <p className="font-bold flex flex-nowrap justify-end pr-2">
          {Math.round(total_kcal * 100) / 100}kcal
        </p>
      </div>
    </div>
  );
};
