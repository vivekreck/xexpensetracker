import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useExpenses } from "../../context/ExpenseContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { expenses } = useExpenses();

  const total = expenses.reduce((sum, e) => sum + e.price, 0);

  const foodTotal = expenses.filter((e) => e.category.toLowerCase() === "food").reduce((sum, e) => sum + e.price, 0);

  const entertainmentTotal = expenses
    .filter((e) => e.category.toLowerCase() === "entertainment")
    .reduce((sum, e) => sum + e.price, 0);

  const travelTotal = expenses
    .filter((e) => e.category.toLowerCase() === "travel")
    .reduce((sum, e) => sum + e.price, 0);

  // Convert into % (if total 0, avoid NaN)
  const toPercent = (val: number) => (total === 0 ? 0 : (val / total) * 100);

  const data = {
    labels: ["Food", "Entertainment", "Travel"],
    datasets: [
      {
        data: [toPercent(foodTotal), toPercent(entertainmentTotal), toPercent(travelTotal)],
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
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.label}: ${context.raw.toFixed(1)}%`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: 180, textAlign: "center", marginLeft: "150px", marginRight: "100px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
