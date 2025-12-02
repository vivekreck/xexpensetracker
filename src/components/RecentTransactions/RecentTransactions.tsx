import React from "react";
import styles from "./RecentTransactions.module.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { useExpenses } from "../../context/ExpenseContext";

const RecentTransactions: React.FC = () => {
  const { expenses } = useExpenses();

  return (
    <div className={styles.container}>
      <h2>Recent Transactions</h2>
      {expenses.length > 0 && (
        <div className={styles.card}>
          {expenses.map((exp) => (
            <ExpenseItem
              key={exp.id}
              id={exp.id}
              title={exp.title}
              date={exp.date}
              price={exp.price}
              category={exp.category}
            />
          ))}
        </div>
      )}
      {expenses.length === 0 && <div className={styles.box}>No transactions!</div>}
    </div>
  );
};

export default RecentTransactions;
