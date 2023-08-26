import { useState, useEffect, useRef } from "react";
import Select from "react-select";
import TotalFoodNutritionalValue from "./TotalFoodNutritionalValue";
import TotalNutritionalValue from "./TotalNutritionalValue";
import axios from "axios";
import Logo from "../assets/logo/logo-light-withoutText.png";

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

  const inputRef = useRef();

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

  const handleSaveTotalNutritionalValueToDiary = async () => {
    try {
      const { data } = await axios.post("http://localhost:8080/save_to_diary", {
        total_carbs: totalCarbs,
        total_fats: totalFat,
        total_proteins: totalProteins,
        total_kcal: totalKcal,
        date: selectedDate,
        day: selectedDayOfWeek,
        food: totalFoodNutritionalValue,
      });
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
    inputRef.current.focus();
  };

  const onChangeInputHandler = (event) => {
    setMeasureValue(event.target.value);
  };

  const onChangeDateInputHandler = (event) => {
    setDate(event.target.value);
  };

  const clearAllNutritionalValue = () => {
    setTotalFoodNutritionalValueAndSave([]);
  };

  function deleteFoodNutritionalValueId(nutritionalValueId) {
    const newTotalFoodNutritionalValue = totalFoodNutritionalValue.filter(
      (f) => f.id !== nutritionalValueId
    );
    setTotalFoodNutritionalValueAndSave(newTotalFoodNutritionalValue);
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
    <div className="flex justify-center h-3/4 lg:bg-diaryBg bg-cover">
      <div className="h-full ml-5 mr-5 mt-8 mb-8 w-9/12 bg-gray-200 p-8 rounded-md">
        <h1 className="text-5xl font-extrabold text-dark-blue">
          CaoFIT
          <span className="text-3xl font-bold text-dark-blue-light">
            Calculator
          </span>
        </h1>
        <input
          onChange={onChangeDateInputHandler}
          type="date"
          className="mt-5 rounded-lg border border-dark-blue-light p-1"
        />
        {date && (
          <p className="mt-5 text-lg font-bold">
            {selectedDayOfWeek}{" "}
            <span className="font-semibold">{selectedDate}</span>
          </p>
        )}

        <div className="mb-3 mt-5 flex-col">
          <div className="flex mb-6">
            {food && (
              <Select
                options={food.map((f) => {
                  return {
                    value: f,
                    label: f.name.charAt(0).toUpperCase() + f.name.slice(1),
                  };
                })}
                className="mr-5 w-72"
                onChange={onChangeSelectHandler}
              />
            )}
            <input
              onChange={onChangeInputHandler}
              value={measureValue}
              type="text"
              className="mr-5 block h-9 w-36 rounded-lg border border-first bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-white dark:text-dark-blue dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder={selectedFood && selectedFood.unit}
              ref={inputRef}
            />
            <button
              className="cursor-pointer rounded-lg bg-first pl-3 pr-3 font-semibold text-dark-blue-light hover:bg-yellow-400"
              onClick={addFoodCalculation}
            >
              Add
            </button>
          </div>
          <div>
            {!message && (
              <p className="mt-1 text-red-500">Please enter quantity</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-8 gap-4 font-extrabold items-center mb-3  shadow-lg rounded-xl p-3 text-dark-blue-light bg-white">
          <div></div>
          <div className="font-extrabold">Grocerie</div>
          <p>Quantity</p>
          <p>Carbs</p>
          <p>Fat</p>
          <p>Kcal</p>
          <p>Proteins</p>
          {totalFoodNutritionalValue.length > 0 && (
            <button
              onClick={handleSaveTotalNutritionalValueToDiary}
              className="cursor-pointer rounded-lg bg-first p-2 font-semibold text-dark-blue-light hover:bg-yellow-400"
            >
              Save to diary
            </button>
          )}
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
          totalFoodNutritionalValue={totalFoodNutritionalValue}
          clearAllNutritionalValue={clearAllNutritionalValue}
        />
      </div>
    </div>
  );
};

export default Calculator;
