import DeleteIcon from "@mui/icons-material/Delete";

const TotalFoodNutritionalValue = ({
  totalFood,
  deleteFoodNutritionalValueId,
}) => {
  console.log(totalFood && totalFood.id);
  return (
    <div className="flex items-center mb-3  shadow-lg rounded-xl p-3 font-medium text-dark-blue-light">
      <img src={totalFood.foodIcon} alt="" className="w-8 mr-3" />
      <p className="mr-3">
        {totalFood.name.charAt(0).toUpperCase() + totalFood.name.slice(1)}:
      </p>
      <p className="mr-3">
        Quantity:{" "}
        {totalFood.unit === "g"
          ? `${totalFood.quantity}g`
          : totalFood.unit === "ml"
          ? `${totalFood.quantity}ml`
          : `${totalFood.quantity} pieces`}
        ,{" "}
      </p>
      <p className="mr-3">
        Carbs: {Math.round(totalFood.totalFoodCarbs * 100) / 100}g,
      </p>
      <p className="mr-3">
        Fat: {Math.round(totalFood.totalFoodFat * 100) / 100}g,
      </p>
      <p className="mr-3">
        Kcal: {Math.round(totalFood.totalFoodKcal * 100) / 100},
      </p>
      <p className="mr-3">
        Proteins: {Math.round(totalFood.totalFoodProteins * 100) / 100}g
      </p>
      <DeleteIcon onClick={() => deleteFoodNutritionalValueId(totalFood.id)} />
    </div>
  );
};

export default TotalFoodNutritionalValue;
