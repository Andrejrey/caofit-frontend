import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
const TotalNutritionalValue = ({
  totalCarbs,
  totalFat,
  totalKcal,
  totalProteins,
}) => {
  return (
    <div className="mb-2 mr-2 p-3 shadow-lg rounded-md bg-dark-blue-light">
      <div className="mr-[40px] grid grid-cols-6 gap-x-3 items-center text-white text-sm font-bold">
        <div className="col-span-2 flex flex-row flex-nowrap items-center">
          <img
            src="/assets/icons/groceryIcon.png"
            alt="Total image"
            className="w-8 h-8 mr-2"
          />
          <p className="font-bold">Total</p>
        </div>
        <div className="text-right">{Math.round(totalCarbs * 100) / 100}g</div>
        <div className="text-right">{Math.round(totalFat * 100) / 100}g</div>
        <div className="text-right">
          {Math.round(totalProteins * 100) / 100}g
        </div>
        <div className="text-right">{Math.round(totalKcal * 100) / 100}</div>
      </div>
    </div>
  );
};

export default TotalNutritionalValue;
