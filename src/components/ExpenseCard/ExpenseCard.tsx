import React from "react";
import styles from "./ExpenseCard.module.css";

interface Props {
  expenses: number;
  setExpenses: (v: number) => void;
}

const ExpenseCard: React.FC<Props> = ({ expenses }) => {
  return (
    <div className={styles.card}>
      <h2>
        Expenses: <span>₹{expenses}</span>
      </h2>
      <button className={styles.addBtn}>+ Add Expense</button>
    </div>
  );
};
export default ExpenseCard;
