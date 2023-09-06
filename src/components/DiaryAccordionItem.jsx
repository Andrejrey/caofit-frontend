import { ChevronDownIcon } from "@heroicons/react/24/outline";
import DeleteIcon from "@mui/icons-material/Delete";
import { OverviewListing } from "./OverviewListing";
import { OverviewPieChart } from "./OverviewPieChart";
import axios from "axios";
import { toast } from "react-toastify";

const DiaryAccordionItem = ({
  id,
  total_carbs,
  total_fats,
  total_proteins,
  total_kcal,
  food,
  date,
  day,
  handleToggleOpen,
  open,
  setOpen,
  isAuthenticated,
  getDiaryData,
}) => {
  const deleteDiaryEntry = async (id) => {
    console.log(id);
    if (isAuthenticated) {
      try {
        const { data } = await axios.delete(
          `${
            import.meta.env.VITE_APP_CAOFIT_API
          }/diary/delete_user_diary/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        toast.success(`You sucessfully deleted your data from ${date}.`);
        getDiaryData();
        return;
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className={`group ${id === open ? "is-active mr-2" : "mr-2"}`}>
      {/* Accordion Item (Header: Day, Date) */}
      <div
        className="flex flex-nowrap items-center justify-between mb-3 shadow-lg rounded-xl p-3 font-medium text-dark-blue-light bg-white"
        onClick={() => handleToggleOpen(id)}
      >
        <h2>{`${day}, ${date}`}</h2>
        <div className="flex flex-row flex-nowrap">
          <button
            className="flex items-center justify-center w-12 text-red-400 hover:text-red-600 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              deleteDiaryEntry(id);
            }}
          >
            <DeleteIcon />
          </button>
          <ChevronDownIcon className="w-5 h-5 rotate-0 group-[.is-active]:rotate-[180deg]" />
        </div>
      </div>
      {/* Accordion Content (Charts) */}
      <div className="overflow-hidden h-0 group-[.is-active]:h-fit mb-2">
        <OverviewListing
          total_carbs={total_carbs}
          total_fats={total_fats}
          total_proteins={total_proteins}
          total_kcal={total_kcal}
          food={food}
        />
        <OverviewPieChart
          date={date}
          total_carbs={total_carbs}
          total_fats={total_fats}
          total_proteins={total_proteins}
        />
      </div>
    </div>
  );
};

export default DiaryAccordionItem;
