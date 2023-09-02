import DeleteIcon from "@mui/icons-material/Delete";

const TotalFoodNutritionalValue = ({
  totalFood,
  deleteFoodNutritionalValueId,
}) => {
  return (
    <div className="mb-2 p-3 rounded-md bg-white flex flex-row flex-nowrap justify-end items-center">
      <div className="w-full grid grid-cols-6 gap-x-3 items-center text-dark-blue-light text-sm font-semibold">
        <div className="col-span-2 flex flex-row flex-nowrap">
          <img
            src={totalFood.foodIcon}
            alt="food image"
            className="w-8 h-8 mr-2 self-center"
          />
          <p className="mr-3">
            {totalFood.name.charAt(0).toUpperCase() + totalFood.name.slice(1)}
            ,<br />
            {totalFood.unit === "g"
              ? `${totalFood.quantity}g`
              : totalFood.unit === "ml"
              ? `${totalFood.quantity}ml`
              : `${totalFood.quantity} pieces`}
          </p>
        </div>
        <div className="text-right ">
          {Math.round(totalFood.totalFoodCarbs * 100) / 100}g
        </div>
        <div className="text-right">
          {Math.round(totalFood.totalFoodFat * 100) / 100}g
        </div>
        <div className="text-right">
          {Math.round(totalFood.totalFoodProteins * 100) / 100}g
        </div>
        <div className="text-right">
          {Math.round(totalFood.totalFoodKcal * 100) / 100}
        </div>
      </div>
      <div className="w-[24px] ml-4 flex justify-end">
        <button
          className="flex items-center justify-center w-12 text-red-400 hover:text-red-600 cursor-pointer"
          onClick={() => deleteFoodNutritionalValueId(totalFood.id)}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TotalFoodNutritionalValue;
