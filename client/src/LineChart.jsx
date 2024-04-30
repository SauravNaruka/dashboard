import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import { Card } from "./microComponents/Card";
import { DropDown } from "./microComponents/DropDown";
import { DatePickerWrapper as DatePicker } from "./microComponents/DatePicker";
import { defectType } from "./constants/defectTypeConstants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    zoom: {
      pan: {
        enabled: true,
        mode: "x",
      },
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        drag: {
          enabled: false,
        },
        mode: "x",
      },
    },
  },
};

const labels = Array.from(Array(50)).map((_, index) => {
  return {
    dateTime: `18-04-2024  08:${index < 10 ? 0 : ""}${index}`,
    severity: Math.floor(Math.random() * 8),
  };
});

export function LineChart() {
  const data = {
    labels: labels.map(({ dateTime }) => dateTime),
    datasets: [
      {
        label: "Approved",
        data: labels.map(({ severity }) => {
          return severity < 4 ? severity : 0;
        }),
        lineTension: 0.3,
        borderColor: "rgb(18, 194, 150)",
        backgroundColor: "rgb(221, 246, 239)",
        fill: true,
      },
      {
        label: "Rejected",
        data: labels.map(({ severity }) => {
          return severity >= 4 ? severity : 3.5;
        }),
        lineTension: 0.3,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgb(218, 222, 249)",
        fill: true,
      },
    ],
  };

  return (
    <Card>
      <div className="navbar w-full">
        <h3 className="items-center text-lg flex flex-1 md:gap-1 lg:gap-2">
          Defect Analysis Chart
        </h3>
        <div className="flex">
          <div>
            <label className="mr-2.5">Start:</label>
            <DatePicker />
          </div>
          <div>
            <label className="mr-2.5">End:</label>
            <DatePicker />
          </div>
        </div>
        <DropDown label={"Defect Type"} options={defectType}></DropDown>
      </div>
      <Line options={options} data={data} />
    </Card>
  );
}
