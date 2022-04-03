import React from "react";
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

const data = {
  labels: [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.01,
      backgroundColor: "#00ff1a",
      borderColor: "#00ff1a",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#00ff1a",
      pointBackgroundColor: "#00ff1a",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#00ff1a",
      pointHoverBorderColor: "#00ff1a",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [40, 45, 40, 50, 70, 72, 50, 50, 55, 70],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const PortfolioChart = () => {
  return <Line data={data} options={options} height={150} width={400} />;
};

export default PortfolioChart;
