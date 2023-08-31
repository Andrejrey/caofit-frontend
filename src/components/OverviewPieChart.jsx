import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";

export const OverviewPieChart = ({
  date,
  total_carbs,
  total_fats,
  total_proteins,
}) => {
  const [chartData, setChartData] = useState({
    label: date,
    datasets: [
      {
        labels: ["carbs", "fats", "proteins"],
        data: [total_carbs, total_fats, total_proteins],
        backgroundColor: ["#104E8B", "#CD3333", "#2E8B57"],
        borderColor: "rgba(0, 0, 0, 0)",
      },
    ],
  });

  return (
    <div className="mt-10 mb-3 flex flex-col">
      <p className="w-fit self-center text-dark-blue font-semibold">
        Macronutrients overview
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <div className="w-72 h-72 self-center">
          <Pie data={chartData} />
        </div>
        <div className="self-center w-80 lg:w-72 lg:ml-4">
          <div className="mt-4 grid grid-cols-3 grid-rows-4 grid-flow-rows">
            <div></div>
            <div className="border-t border-l border-gray-400 italic pr-3 text-right">
              quantity
            </div>
            <div className="border-t border-r border-gray-400 italic pr-3 text-right">
              percentage
            </div>
            <div className="border-l border-t border-b border-gray-400 pl-2 bg-gray-300 flex flew-row flex-nowrap items-center">
              <div className="bg-[#104E8B] w-4 h-4 mr-2"></div>
              <p>carbs</p>
            </div>
            <div className="border-t border-b border-gray-400 pr-3 bg-gray-300 text-right">
              {Math.round(total_carbs * 100) / 100}g
            </div>
            <div className="border-t border-r border-b border-gray-400 pr-3 bg-gray-300 text-right">
              {Math.round(
                (total_carbs / (total_carbs + total_fats + total_proteins)) *
                  100
              )}
              %
            </div>
            <div className="border-l border-gray-400 pl-2 flex flew-row flex-nowrap items-center">
              <div className="bg-[#CD3333] w-4 h-4 mr-2"></div>
              <p>fats</p>
            </div>

            <div className="border-gray-400 pr-3 text-right">
              {Math.round(total_fats * 100) / 100}g
            </div>
            <div className="border-r border-gray-400 pr-3 text-right">
              {Math.round(
                (total_fats / (total_carbs + total_fats + total_proteins)) * 100
              )}
              %
            </div>
            <div className="border-l border-t border-b border-gray-400 pl-2 bg-gray-300 flex flew-row flex-nowrap items-center">
              <div className="bg-[#2E8B57] w-4 h-4 mr-2"></div>
              <p>proteins</p>
            </div>
            <div className="border-t border-b border-gray-400 pr-3 bg-gray-300 text-right">
              {Math.round(total_proteins * 100) / 100}g
            </div>
            <div className="border-t border-r border-b border-gray-400 pr-3 bg-gray-300 text-right">
              {Math.round(
                (total_proteins / (total_carbs + total_fats + total_proteins)) *
                  100
              )}
              %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
