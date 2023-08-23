const TotalFoodNutritionalValue = ({ totalFood }) => {
  return (
    <div className="flex mb-3 ">
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
        Total carbs: {Math.round(totalFood.totalFoodCarbs * 100) / 100}g,
      </p>
      <p className="mr-3">
        Total fat: {Math.round(totalFood.totalFoodFat * 100) / 100}g,
      </p>
      <p className="mr-3">
        Total kcal: {Math.round(totalFood.totalFoodKcal * 100) / 100},
      </p>
      <p className="mr-3">
        Total proteins: {Math.round(totalFood.totalFoodproteins * 100) / 100}g
      </p>
    </div>
  );
};

export default TotalFoodNutritionalValue;
