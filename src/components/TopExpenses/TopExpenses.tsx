import React from "react";
import styles from "./TopExpenses.module.css";

const TopExpenses: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Top Expenses</h2>

      <div className={styles.box}>
        <ul className={styles.list}>
          <li>
            Food
            <span>-</span>
          </li>
          <li>
            Entertainment
            <span>-</span>
          </li>
          <li>
            Travel
            <span>-</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default TopExpenses;
