import { useState, useEffect, useRef } from "react";
import Select from "react-select";
import TotalFoodNutritionalValue from "./TotalFoodNutritionalValue";
import TotalNutritionalValue from "./TotalNutritionalValue";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const LOCAL_STORAGE_KEY = "food:savedTotalFoodNutritionalValue";

const Calculator = ({ food, isAuthenticated }) => {
  const [measureValue, setMeasureValue] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [totalFoodNutritionalValue, setTotalFoodNutritionalValue] = useState(
    []
  );
  const [date, setDate] = useState("");
  const inputRef = useRef();
  const navigate = useNavigate();

  function setTotalFoodNutritionalValueAndSave(newTotalFoodNutritionalValue) {
    setTotalFoodNutritionalValue(newTotalFoodNutritionalValue);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(newTotalFoodNutritionalValue)
    );
  }

  function loadSavedTotalFoodNutritionalValue() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTotalFoodNutritionalValue(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTotalFoodNutritionalValue();
  }, []);

  function setDateAndSave(date) {
    localStorage.setItem("date", date);
  }

  useEffect(() => {
    const data = localStorage["date"];
    setDate(data);
  }, []);

  function addFoodCalculation() {
    if (
      selectedFood &&
      measureValue &&
      measureValue > 0 &&
      typeof measureValue === "number" &&
      date
    ) {
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
    if (!date) {
      toast.error("Please select a date");
    } else if (!selectedFood) {
      toast.error("Please select a grocerie");
    } else if (measureValue < 0) {
      toast.error("Please enter a valid number");
    } else if (!measureValue) {
      toast.error("Please enter quantity");
    } else if (typeof measureValue !== "number") {
      toast.error("Please enter a valid number");
    }
    setMeasureValue("");
  }

  const handleSaveTotalNutritionalValueToDiary = async () => {
    if (isAuthenticated) {
      try {
        const { data, error } = await axios.post(
          `${import.meta.env.VITE_APP_CAOFIT_API}/diary/save_to_diary`,
          {
            total_carbs: totalCarbs,
            total_fats: totalFat,
            total_proteins: totalProteins,
            total_kcal: totalKcal,
            date: selectedDate,
            day: selectedDayOfWeek,
            food: totalFoodNutritionalValue,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setTotalFoodNutritionalValueAndSave([]);
        setDate("");
        localStorage.removeItem("date");
        toast.success(" You have successfully saved to diary!");
        if (error) throw new Error(error.message);
        return data;
      } catch (error) {
        toast.error(error.message);
      }
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
    setMeasureValue(Number(event.target.value));
  };

  const onChangeDateInputHandler = (event) => {
    setDate(event.target.value);
    setDateAndSave(event.target.value);
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

  const goToLogIn = () => {
    navigate("/login");
  };

  const splitedDate = date && date.split("-");
  const selectedDate =
    splitedDate && splitedDate[2] + "/" + splitedDate[1] + "/" + splitedDate[0];
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
    <div className="flex flex-col h-fit lg:h-screen lg:items-center lg:bg-diaryBg lg:bg-cover lg:bg-right">
      <div className="bg-gray-200 sm:h-fit lg:h-[90vh] lg:rounded-md lg:shadow-xl lg:my-8 lg:w-3/5 2xl:w-2/5">
        <div className="px-2 py-2">
          <h1 className="text-5xl font-extrabold text-dark-blue">
            CaoFIT
            <span className="text-3xl font-bold text-dark-blue-light">
              Calculator
            </span>
          </h1>
        </div>
        <div className="px-2 py-2">
          <div className="flex flex-row flex-nowrap items-center pb-2">
            <div className="border-2 border-dark-blue bg-slate-200 rounded-full w-[20px] h-[20px] flex justify-center items-center mr-2">
              <p className="font-bold text-dark-blue pb-0.5">1</p>
            </div>
            <p className="text-dark-blue font-semibold">Select a date:</p>
          </div>
          <input
            onChange={onChangeDateInputHandler}
            type="date"
            value={date}
            className="rounded-lg border border-dark-blue-light p-1"
          />
        </div>
        <div className="px-2 py-2 flex flex-col">
          <div className="flex flex-row flex-nowrap items-center pb-2">
            <div className="border-2 border-dark-blue bg-slate-200 rounded-full w-[20px] h-[20px] flex justify-center items-center mr-2">
              <p className="font-bold text-dark-blue pb-0.5">2</p>
            </div>
            <p className="text-dark-blue font-semibold">Add your food:</p>
          </div>
          <div className="flex flex-col md:flex-row">
            {food && (
              <Select
                options={food.map((f) => {
                  return {
                    value: f,
                    label: f.name.charAt(0).toUpperCase() + f.name.slice(1),
                  };
                })}
                className="w-[300px] mb-2 md:mr-3"
                onChange={onChangeSelectHandler}
              />
            )}
            <div className="flex flex-row flex-nowrap">
              <input
                onChange={onChangeInputHandler}
                value={measureValue}
                type="text"
                className="mr-2 block h-9 w-[237px] rounded-lg border border-first bg-gray-50 p-2.5 text-sm focus:border-yellow-400 focus:ring-yellow-400"
                placeholder={selectedFood && selectedFood.unit}
                ref={inputRef}
              />
              <button
                className="transform cursor-pointer rounded-lg bg-first h-[36px] pl-3 pr-3 font-semibold text-dark-blue hover:bg-yellow-400"
                onClick={addFoodCalculation}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="px-2 py-2 flex flex-col">
          <div className="flex flex-row flex-nowrap items-center pb-2">
            <div className="border-2 border-dark-blue bg-slate-200 rounded-full w-[20px] h-[20px] flex justify-center items-center mr-2">
              <p className="font-bold text-dark-blue pb-0.5">3</p>
            </div>
            <p className="text-dark-blue font-semibold">
              Save the food in your diary:
            </p>
          </div>

          <div className="lg:overflow-y-scroll lg:h-[40vh] lg:scrollbar-thin lg:scrollbar-thumb-rounded-sm lg:scrollbar-thumb-second lg:scrollbar-track-slate-300">
            <div className="mb-2 p-3 shadow-lg rounded-md bg-slate-200 mr-2">
              <div className="mr-[40px] grid grid-cols-6 gap-x-3 text-dark-blue-light text-sm font-bold">
                <div className="col-span-2"></div>
                <div className="text-right">carbs</div>
                <div className="text-right">fat</div>
                <div className="text-right">proteins</div>
                <div className="text-right">kcal</div>
              </div>
            </div>
            {totalFoodNutritionalValue.length === 0 ? (
              <div className="mb-2 mr-2 p-3 rounded-md bg-white flex flex-row flex-nowrap justify-center items-center">
                <p className="text-dark-blue italic">» No food added yet «</p>
              </div>
            ) : (
              ""
            )}
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
          </div>
        </div>
        <div className="flex justify-end p-3 rounded-md">
          {totalFoodNutritionalValue.length > 1 && (
            <button
              onClick={clearAllNutritionalValue}
              className="cursor-pointer rounded-lg bg-[#b3b3b3] p-2 font-semibold text-white hover:bg-dark-blue"
            >
              Clear all
            </button>
          )}
          {totalFoodNutritionalValue.length > 0 && (
            <button
              onClick={
                !isAuthenticated
                  ? goToLogIn
                  : handleSaveTotalNutritionalValueToDiary
              }
              className="cursor-pointer ml-5 rounded-lg bg-first p-2 font-semibold text-dark-blue hover:bg-yellow-400"
            >
              Save to diary
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
