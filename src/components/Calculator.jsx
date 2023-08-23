import { useState } from "react";
import Select from "react-select";
import TotalFoodNutritionalValue from "./TotalFoodNutritionalValue";

const Calculator = ({ food }) => {
  const [measureValue, setMeasureValue] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [totalFoodNutritionalValue, setTotalFoodNutritionalValue] = useState(
    []
  );

  // console.log(selectedFood);

  function addFoodCalculation() {
    setTotalFoodNutritionalValue([
      ...totalFoodNutritionalValue,
      {
        foodImage: selectedFood.image,
        foodIcon: selectedFood.icon,
        name: selectedFood.name,
        quantity: measureValue,
        unit: selectedFood.unit,
        totalFoodCarbs:
          (selectedFood.carbs / selectedFood.quantity) * Number(measureValue),
        totalFoodFat:
          (selectedFood.fat / selectedFood.quantity) * Number(measureValue),
        totalFoodKcal:
          (selectedFood.kcal / selectedFood.quantity) * Number(measureValue),
        totalFoodproteins:
          (selectedFood.proteins / selectedFood.quantity) *
          Number(measureValue),
      },
    ]);
  }

  console.log(totalFoodNutritionalValue);

  const onChangeSelectHandler = (selectedOption) => {
    setSelectedFood(selectedOption.value);
  };

  const onChangeInputHandler = (event) => {
    setMeasureValue(event.target.value);
  };

  return (
    <div className="ml-5">
      <h1 className="text-5xl font-extrabold text-dark-blue">
        CaoFIT
        <span className="text-3xl font-bold text-dark-blue-light">
          Calculator
        </span>
      </h1>
      <div className="flex mt-5 mb-5">
        {food && (
          <Select
            options={food.map((f) => {
              return {
                value: f,
                label: f.name.charAt(0).toUpperCase() + f.name.slice(1),
              };
            })}
            className="w-72 mr-5"
            onChange={onChangeSelectHandler}
          />
        )}
        {selectedFood && selectedFood.unit === "g" && (
          <input
            onChange={onChangeInputHandler}
            type="text"
            className="h-9 mr-5 bg-gray-50 border border-first text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark-blue dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={selectedFood.unit}
          />
        )}
        {selectedFood && selectedFood.unit === "ml" && (
          <input
            onChange={onChangeInputHandler}
            type="text"
            className="h-9 mr-5 bg-gray-50 border border-first text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark-blue dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ml"
          />
        )}
        {selectedFood && selectedFood.unit === "piece(s)" && (
          <input
            onChange={onChangeInputHandler}
            type="text"
            className="h-9 mr-5 bg-gray-50 border border-first text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark-blue dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="piece"
          />
        )}
        <button
          className="bg-first pl-2 pr-2 rounded-lg text-dark-blue font-medium"
          onClick={addFoodCalculation}
        >
          Add
        </button>
      </div>
      {totalFoodNutritionalValue.map((t, i) => {
        return <TotalFoodNutritionalValue totalFood={t} key={i} />;
      })}
    </div>
  );
};

export default Calculator;
