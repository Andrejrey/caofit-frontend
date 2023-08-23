import DeleteIcon from "@mui/icons-material/Delete";

const TotalFoodNutritionalValue = ({
  totalFood,
  deleteFoodNutritionalValueId,
}) => {
  console.log(totalFood && totalFood.id);
  return (
    <div className="flex items-center mb-3  shadow-lg rounded-xl p-3 font-bold text-dark-blue-light">
      <img src={totalFood.foodIcon} alt="" className="w-8 mr-3" />
      <p className="mr-3 font-extrabold">
        {totalFood.name.charAt(0).toUpperCase() + totalFood.name.slice(1)}:
      </p>
      <p className="mr-3 p-1 rounded-lg shadow">
        Quantity:{" "}
        {totalFood.unit === "g"
          ? `${totalFood.quantity}g`
          : totalFood.unit === "ml"
          ? `${totalFood.quantity}ml`
          : `${totalFood.quantity} pieces`}{" "}
      </p>
      <p className="mr-3 p-1 rounded-lg shadow">
        Carbs: {Math.round(totalFood.totalFoodCarbs * 100) / 100}g
      </p>
      <p className="mr-3 p-1 rounded-lg shadow">
        Fat: {Math.round(totalFood.totalFoodFat * 100) / 100}g
      </p>
      <p className="mr-3 p-1 rounded-lg shadow">
        Kcal: {Math.round(totalFood.totalFoodKcal * 100) / 100}
      </p>
      <p className="mr-3 p-1 rounded-lg shadow">
        Proteins: {Math.round(totalFood.totalFoodProteins * 100) / 100}g
      </p>
      <button
        className="bg-first pl-1 pr-1 mb-3 ml-3 rounded-lg text-dark-blue-light font-semibold hover:bg-yellow-400 cursor-pointer"
        onClick={() => deleteFoodNutritionalValueId(totalFood.id)}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default TotalFoodNutritionalValue;
