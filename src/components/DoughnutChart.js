import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["New", "Returning", "Inactive"],
  datasets: [
    {
      label: "# of Votes",
      data: [62, 14, 24],
      backgroundColor: [
        "rgb(0, 102, 255)",
        "rgb(77, 148, 255)",
        "rgb(230, 230, 230)",
      ],
      borderColor: [
        "rgb(0, 102, 255)",
        "rgb(77, 148, 255)",
        "rgb(230, 230, 230)",
      ],
      borderWidth: 1,
      offset: 15,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "left",
      labels: {
        generateLabels: function (chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const sumOfValues = data.datasets[0].data.reduce(
              (acc, cur) => acc + cur
            );

            return data.labels.map(function (label, i) {
              const value = data.datasets[0].data[i];
              const percentageValue = Math.ceil((value * 100) / sumOfValues);
              return {
                text: `${percentageValue}% ${label}`, // Custom label text
                fillStyle: data.datasets[0].backgroundColor[i],
              };
            });
          }
          return [];
        },
        boxWidth: 15,
      },
    },
  },
};

function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
export default DoughnutChart;
