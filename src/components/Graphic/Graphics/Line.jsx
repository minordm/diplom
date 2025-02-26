import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const time = [
  "8:00",
  "12:00",
  "16:00",
  "20:00",
  "00:00",
  "04:00",

  "08:00",
  "12:00",
  "16:00",
  "20:00",
  "00:00",
  "04:00",

  "08:00",
  "12:00",
];

const BorderColor =  "rgb(86, 160, 207)";

const water_data = {
  labels: time,
  datasets: [
    {
      label: "Наличие воды, м^2",
      data: [
        1.44, 1.45, 1.46, 1.445, 1.45, 1.445,

        1.43, 1.395, 1.41, 1.455, 1.425, 1.41,

        1.418, 1.448,
      ],
      borderColor: BorderColor
    }
  ]
};

const oil_data = {
  labels: time,
  datasets: [
    {
      label: "Наличие нефти, м^2",
      data: [
        1.3, 1.5, 1.2, 1.15, 1.25, 1.5,

        1.3, 1.35, 1.14, 1.4, 1.25, 1.15,

        1.18, 1.28,
      ],
      borderColor: "red"
    }
  ]
};

export const LineGraph = () => {
  return <Line data={water_data} />;
};
