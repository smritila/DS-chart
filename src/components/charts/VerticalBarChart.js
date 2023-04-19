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

function VerticalBarChart({ data, labels }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      // title: {
      //   display: true,
      //   text: "Chart.js Bar Chart",
      // },
    },
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "0-5 employee",
        data: data,
        backgroundColor: "rgb(77, 148, 255)",
        barThickness: 35,
      },
    ],
  };

  return <Bar options={options} data={chartData} />;
}

export default VerticalBarChart;
