import React, { useState } from "react";
import styles from "./ExpenseCard.module.css";
import AddExpenseModal from "../Modal/AddExpenseModal";

interface Props {
  expenses: number;
  setExpenses: (v: number) => void;
}

const ExpenseCard: React.FC<Props> = ({ expenses }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.card}>
      <h2>
        Expenses: <span>₹{expenses}</span>
      </h2>
      {showModal && <AddExpenseModal onClose={() => setShowModal(false)} onSubmit={(amount) => console.log(amount)} />}
      <button className={styles.addBtn} onClick={() => setShowModal(true)}>
        + Add Expense
      </button>
    </div>
  );
};
export default ExpenseCard;
