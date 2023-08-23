const TotalNutritionalValue = ({
  totalCarbs,
  totalFat,
  totalKcal,
  totalProteins,
}) => {
  return (
    <div className="flex items-center mb-3  shadow-lg rounded-xl p-3 font-medium text-dark-blue-light bg-first">
      <img src="src\assets\groceryIcon.png" alt="" className="w-8 mr-3" />
      <p className="mr-3">Total carbs: {Math.round(totalCarbs * 100) / 100}g</p>
      <p className="mr-3">Total fat: {Math.round(totalFat * 100) / 100}g</p>
      <p className="mr-3">Total kcal: {Math.round(totalKcal * 100) / 100}</p>
      <p className="mr-3">
        Total proteins: {Math.round(totalProteins * 100) / 100}g
      </p>
    </div>
  );
};

export default TotalNutritionalValue;
