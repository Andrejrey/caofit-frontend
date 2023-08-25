const TotalNutritionalValue = ({
  totalCarbs,
  totalFat,
  totalKcal,
  totalProteins,
}) => {
  return (
    <div className="flex items-center mb-5  shadow-lg rounded-xl p-3 font-bold text-dark-blue-light bg-first">
      <img src="src\assets\groceryIcon.png" alt="" className="w-8 mr-3" />
      <p className="mr-3 p-1 rounded-lg shadow font-extrabold">Total</p>
      <p className="mr-3 p-1 rounded-lg shadow">
        Carbs: {Math.round(totalCarbs * 100) / 100}g
      </p>
      <p className="mr-3 p-1 rounded-lg shadow">
        Fat: {Math.round(totalFat * 100) / 100}g
      </p>
      <p className="mr-3 p-1 rounded-lg shadow">
        Kcal: {Math.round(totalKcal * 100) / 100}
      </p>
      <p className="mr-3 p-1 rounded-lg shadow">
        Proteins: {Math.round(totalProteins * 100) / 100}g
      </p>
    </div>
  );
};

export default TotalNutritionalValue;
