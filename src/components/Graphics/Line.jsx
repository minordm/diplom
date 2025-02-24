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

const lineChartData = {
  labels: [
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
  ],
  datasets: [
    {
      label: "Наличие воды, м^2",
      data: [
        1.44, 1.45, 1.46, 1.445, 1.45, 1.445,

        1.43, 1.395, 1.41, 1.455, 1.425, 1.41,

        1.418, 1.448,
      ],
      borderColor: "rgb(86, 160, 207)",
    },
  ],
};

export const LineGraph = () => {
  return (<Line data={lineChartData} />);
};
