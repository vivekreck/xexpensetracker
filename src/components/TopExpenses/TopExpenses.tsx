import React from "react";
import styles from "./TopExpenses.module.css";
import { useExpenses } from "../../context/ExpenseContext";

const TopExpenses: React.FC = () => {
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

  return (
    <div className={styles.container}>
      <h2>Top Expenses</h2>

      <div className={styles.box}>
        <ul className={styles.list}>
          <li>
            <span className={styles.label}>Food - </span>
            <div className={styles.bar} style={{ width: toPercent(foodTotal) + "%", background: "#a000ff" }}></div>
          </li>

          <li>
            <span className={styles.label}>Entertainment - </span>
            <div
              className={styles.bar}
              style={{ width: toPercent(entertainmentTotal) + "%", background: "#ff8c00" }}
            ></div>
          </li>

          <li>
            <span className={styles.label}>Travel - </span>
            <div className={styles.bar} style={{ width: toPercent(travelTotal) + "%", background: "#ffd700" }}></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopExpenses;
