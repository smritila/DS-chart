import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Blue", "white"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["blue", "white", "purple"],
      borderColor: ["red"],
      borderWidth: 1,
    },
  ],
};

export function DoughnutChart() {
  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: true,
      }}
    />
  );
}
export default DoughnutChart;
