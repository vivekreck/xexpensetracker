import React from "react";
import styles from "./RecentTransactions.module.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const RecentTransactions: React.FC = () => {
  const date = new Date();
  const formatted = date.toISOString().split("T")[0];

  return (
    <div className={styles.container}>
      <h2>Recent Transactions</h2>
      <div className={styles.card}>
        <ExpenseItem title="food" date={formatted} amount={200} onDelete={() => {}} onEdit={() => {}} />
      </div>
    </div>
  );
};
export default RecentTransactions;
