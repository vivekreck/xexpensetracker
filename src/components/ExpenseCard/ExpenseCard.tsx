import { useState } from "react";
import styles from "./ExpenseCard.module.css";
import AddExpenseModal from "../Modal/AddExpenseModal";
import { useExpenses, type ExpenseItem } from "../../context/ExpenseContext";

const ExpenseCard = () => {
  const { totalSpent, wallet, setWallet, addExpense } = useExpenses();
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(item: ExpenseItem) {
    if (wallet < item.price) {
      alert("Low wallet balance!");
      return;
    }

    addExpense(item);
    setWallet((curr) => curr - item.price);

    setShowModal(false);
  }

  return (
    <div className={styles.card}>
      <h2>
        Expenses: <span>₹{totalSpent}</span>
      </h2>

      {showModal && <AddExpenseModal onClose={() => setShowModal(false)} onSubmit={handleSubmit} />}

      <button className={styles.addBtn} onClick={() => setShowModal(true)}>
        + Add Expense
      </button>
    </div>
  );
};

export default ExpenseCard;
