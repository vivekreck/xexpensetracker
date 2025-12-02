import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  food: number;
  entertainment: number;
  travel: number;
}

const PieChart: React.FC<PieChartProps> = ({ food, entertainment, travel }) => {
  const data = {
    labels: ["Food", "Entertainment", "Travel"],
    datasets: [
      {
        data: [food, entertainment, travel],
        backgroundColor: ["#A000FF", "#FF8C00", "#FFD700"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "0%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div style={{ width: 180, textAlign: "center", marginLeft: "150px", marginRight: "100px" }}>
      <div style={{ position: "relative" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
