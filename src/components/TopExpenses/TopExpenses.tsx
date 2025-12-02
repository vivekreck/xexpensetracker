import React from "react";
import styles from "./TopExpenses.module.css";

const TopExpenses: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Top Expenses</h2>

      <div className={styles.box}>
        <ul className={styles.list}>
          <li>
            <span className={styles.label}>Food - </span>
            <div className={styles.bar} style={{ width: "70%", background: "#a000ff" }}></div>
          </li>

          <li>
            <span className={styles.label}>Entertainment - </span>
            <div className={styles.bar} style={{ width: "40%", background: "#ff8c00" }}></div>
          </li>

          <li>
            <span className={styles.label}>Travel - </span>
            <div className={styles.bar} style={{ width: "55%", background: "#ffd700" }}></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopExpenses;
