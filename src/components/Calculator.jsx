import { useState, useEffect } from "react";
import Select from "react-select";
import TotalFoodNutritionalValue from "./TotalFoodNutritionalValue";
import TotalNutritionalValue from "./TotalNutritionalValue";
import axios from "axios";

const LOCAL_STORAGE_KEY = "food:savedTotalFoodNutritionalValue";

const Calculator = ({ food }) => {
  const [measureValue, setMeasureValue] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [totalFoodNutritionalValue, setTotalFoodNutritionalValue] = useState(
    []
  );
  const [date, setDate] = useState();
  const [message, setMessage] = useState(true);

  function loadSavedTotalFoodNutritionalValue() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTotalFoodNutritionalValue(JSON.parse(saved));
    }
  }

  // console.log(totalFoodNutritionalValue && totalFoodNutritionalValue);

  useEffect(() => {
    loadSavedTotalFoodNutritionalValue();
  }, []);

  function setTotalFoodNutritionalValueAndSave(newTotalFoodNutritionalValue) {
    setTotalFoodNutritionalValue(newTotalFoodNutritionalValue);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(newTotalFoodNutritionalValue)
    );
  }

  function addFoodCalculation() {
    if (measureValue) {
      setTotalFoodNutritionalValueAndSave([
        ...totalFoodNutritionalValue,
        {
          id: crypto.randomUUID(),
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
          totalFoodProteins:
            (selectedFood.proteins / selectedFood.quantity) *
            Number(measureValue),
        },
      ]);
    }
    setMeasureValue("");
    if (!measureValue) {
      setMessage(false);
    } else {
      setMessage(true);
    }

    // setSelectedFood(null);
  }

  const handleSaveTotalNutritionalValueToDiary = () => {
    axios
      .post("http://localhost:8080/total_nutritional_value", {
        total_carbs: totalCarbs,
        total_fats: totalFat,
        total_proteins: totalProteins,
        total_kcal: totalKcal,
        date: selectedDate,
        day: selectedDayOfWeek,
      })
      .then((response) => {
        console.log("Success:", response.data);
        alert("Saved to diary!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSaveTotalNutritionalValueToDiary2 = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/total_nutritional_value",
        {
          total_carbs: totalCarbs,
          total_fats: totalFat,
          total_proteins: totalProteins,
          total_kcal: totalKcal,
          date: selectedDate,
          day: selectedDayOfWeek,
        }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const totalCarbs =
    totalFoodNutritionalValue &&
    totalFoodNutritionalValue.reduce((a, c) => a + c.totalFoodCarbs, 0);
  const totalFat =
    totalFoodNutritionalValue &&
    totalFoodNutritionalValue.reduce((a, c) => a + c.totalFoodFat, 0);
  const totalKcal =
    totalFoodNutritionalValue &&
    totalFoodNutritionalValue.reduce((a, c) => a + c.totalFoodKcal, 0);
  const totalProteins =
    totalFoodNutritionalValue &&
    totalFoodNutritionalValue.reduce((a, c) => a + c.totalFoodProteins, 0);

  const onChangeSelectHandler = (selectedOption) => {
    setSelectedFood(selectedOption.value);
  };

  const onChangeInputHandler = (event) => {
    setMeasureValue(event.target.value);
  };

  const onChangeDateInputHandler = (event) => {
    setDate(event.target.value);
  };

  const clearAllNutritionalValue = () => {
    setTotalFoodNutritionalValue([]);
  };

  function deleteFoodNutritionalValueId(nutritionalValueId) {
    const newTotalFoodNutritionalValue = totalFoodNutritionalValue.filter(
      (f) => f.id !== nutritionalValueId
    );
    setTotalFoodNutritionalValue(newTotalFoodNutritionalValue);
  }

  const splitedDate = date && date.split("-");
  const selectedDate =
    splitedDate && splitedDate[1] + "/" + splitedDate[2] + "/" + splitedDate[0];
  const selectedDay = new Date(`${date}`);
  const day = selectedDay.getDay();
  const selectedDayOfWeek =
    day === 0
      ? "Sunday"
      : day === 1
      ? "Monday"
      : day === 2
      ? "Tuesday"
      : day === 3
      ? "Wednesday"
      : day === 4
      ? "Thursday"
      : day === 5
      ? "Friday"
      : day === 6
      ? "Saturday"
      : "";

  return (
    <div className="h-full ml-5 mt-2 mr-5">
      <h1 className="text-5xl font-extrabold text-dark-blue">
        CaoFIT
        <span className="text-3xl font-bold text-dark-blue-light">
          Calculator
        </span>
      </h1>
      <input
        onChange={onChangeDateInputHandler}
        type="date"
        className="mt-5 border border-dark-blue-light rounded-lg p-1"
      />
      {date && (
        <p className="mt-5 font-bold text-lg">
          {selectedDayOfWeek}{" "}
          <span className="font-semibold">{selectedDate}</span>
        </p>
      )}

      <div className="flex-col mt-5 mb-3">
        <div className="flex">
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
              value={measureValue}
              type="text"
              className="h-9 mr-5 bg-gray-50 border border-first text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark-blue dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={selectedFood.unit}
            />
          )}
          {selectedFood && selectedFood.unit === "ml" && (
            <input
              onChange={onChangeInputHandler}
              value={measureValue}
              type="text"
              className="h-9 mr-5 bg-gray-50 border border-first text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark-blue dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ml"
            />
          )}
          {selectedFood && selectedFood.unit === "piece(s)" && (
            <input
              onChange={onChangeInputHandler}
              value={measureValue}
              type="text"
              className="h-9 mr-5 bg-gray-50 border border-dark-blue-light text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark-blue dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="piece"
            />
          )}
          <button
            className="bg-first pl-3 pr-3 rounded-lg text-dark-blue-light font-semibold hover:bg-yellow-400 cursor-pointer"
            onClick={addFoodCalculation}
          >
            Add
          </button>
        </div>
        <div>
          {!message && (
            <p className="text-red-500 mt-1">Pleae enter quantity</p>
          )}
        </div>
      </div>

      {totalFoodNutritionalValue.map((t, i) => {
        return (
          <TotalFoodNutritionalValue
            totalFood={t}
            key={i}
            deleteFoodNutritionalValueId={deleteFoodNutritionalValueId}
          />
        );
      })}
      <TotalNutritionalValue
        totalCarbs={totalCarbs}
        totalFat={totalFat}
        totalKcal={totalKcal}
        totalProteins={totalProteins}
      />
      {totalFoodNutritionalValue.length > 1 && (
        <button
          onClick={clearAllNutritionalValue}
          className="bg-first p-2 mb-3 mr-3 rounded-lg text-dark-blue-light font-semibold hover:bg-yellow-400 cursor-pointer"
        >
          Clear all
        </button>
      )}
      {totalFoodNutritionalValue.length > 0 && (
        <button
          onClick={handleSaveTotalNutritionalValueToDiary2}
          className="bg-first p-2 mb-3 rounded-lg text-dark-blue-light font-semibold hover:bg-yellow-400 cursor-pointer"
        >
          Save to diary
        </button>
      )}
    </div>
  );
};

export default Calculator;
