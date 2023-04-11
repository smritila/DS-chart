import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const BarChart = () => {
  const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
  return (
    <div>
      <Bar
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: "Dataset 1",
              data: labels.map((_, idx) => (idx + 1) * 100),
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
        height={200}
        width={600}
      />
    </div>
  );
};

export default BarChart;
