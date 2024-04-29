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
      text: "Defect Analysis Chart",
    },
  },
};

const labels = [
  { label: "All Others", data: 0 },
  { label: "Bubble QT", data: 6 },
  { label: "Dent Mark", data: 2 },
  { label: "Stone", data: 16 },
  { label: "Large Punctual Defect", data: 4 },
  { label: "Roller Mark", data: 7 },
  { label: "Surface Inc", data: 14 },
];

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;

export const data = {
  labels: labels.map(({ label }) => label),
  datasets: [
    {
      label: `Date: ${currentDate}`,
      data: labels.map(({ data }) => data),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function BarChart() {
  return (
    <div className="chart-area">
      <Bar options={options} data={data} />
    </div>
  );
}
