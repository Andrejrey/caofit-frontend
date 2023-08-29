import DeleteIcon from "@mui/icons-material/Delete";

const TotalFoodNutritionalValue = ({
  totalFood,
  deleteFoodNutritionalValueId,
}) => {
  return (
    <div className="grid grid-cols-8 gap-4 items-center mb-3  shadow-lg rounded-xl p-3 font-semibold text-dark-blue-light bg-white">
      <img src={totalFood.foodIcon} alt="" className="w-8 mr-3" />
      <p className="mr-3 font-extrabold">
        {totalFood.name.charAt(0).toUpperCase() + totalFood.name.slice(1)}
      </p>
      <p className="mr-3 p-1 rounded-lg font-bold">
        {totalFood.unit === "g"
          ? `${totalFood.quantity}g`
          : totalFood.unit === "ml"
          ? `${totalFood.quantity}ml`
          : `${totalFood.quantity} pieces`}{" "}
      </p>
      <p className="mr-3 p-1 rounded-lg">
        {Math.round(totalFood.totalFoodCarbs * 100) / 100}g
      </p>
      <p className="mr-3 p-1 rounded-lg ">
        {Math.round(totalFood.totalFoodFat * 100) / 100}g
      </p>
      <p className="mr-3 p-1 rounded-lg ">
        {Math.round(totalFood.totalFoodKcal * 100) / 100}
      </p>
      <p className="mr-3 p-1 rounded-lg ">
        {Math.round(totalFood.totalFoodProteins * 100) / 100}g
      </p>
      <div className="flex justify-end">
        <button
          className="flex items-center justify-center  w-12 p-1 ml-3 rounded-lg text-red-600 hover:text-red-400 font-semibol cursor-pointer"
          onClick={() => deleteFoodNutritionalValueId(totalFood.id)}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TotalFoodNutritionalValue;
