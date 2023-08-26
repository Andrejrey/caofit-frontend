import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
const TotalNutritionalValue = ({
  totalCarbs,
  totalFat,
  totalKcal,
  totalProteins,
  totalFoodNutritionalValue,
  clearAllNutritionalValue,
}) => {
  return (
    <div className="grid grid-cols-8 gap-4 items-center mb-5  shadow-lg rounded-xl p-3 font-semibold text-dark-blue-light bg-gray-100">
      <img src="src\assets\groceryIcon.png" alt="" className="w-8 mr-3" />
      <LocalGroceryStoreIcon className="text-dark-blue-light" />
      <p className="mr-3 p-1 rounded-lg font-extrabold">Total</p>
      <p className="mr-3 p-1 rounded-lg ">
        {Math.round(totalCarbs * 100) / 100}g
      </p>
      <p className="mr-3 p-1 rounded-lg ">
        {Math.round(totalFat * 100) / 100}g
      </p>
      <p className="mr-3 p-1 rounded-lg ">
        {Math.round(totalKcal * 100) / 100}
      </p>
      <p className="mr-3 p-1 rounded-lg ">
        {Math.round(totalProteins * 100) / 100}g
      </p>
      {totalFoodNutritionalValue.length > 1 && (
        <button
          onClick={clearAllNutritionalValue}
          className="cursor-pointer rounded-lg bg-first p-2 font-semibold text-dark-blue-light hover:bg-yellow-400"
        >
          Clear all
        </button>
      )}
    </div>
  );
};

export default TotalNutritionalValue;
