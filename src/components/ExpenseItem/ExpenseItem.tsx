import React, { useState } from "react";
import styles from "./ExpenseItem.module.css";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { PiPizza } from "react-icons/pi";
import { useExpenses, type ExpenseItem as ExpenseItemType } from "../../context/ExpenseContext";
import EditExpenseModal from "../Modal/EditExpenseModal";

interface Props {
  id: string;
  title: string;
  category: string;
  date: string;
  price: number;
}

const ExpenseItem: React.FC<Props> = ({ id, title, category = "", date, price }) => {
  const { deleteExpense, editExpense } = useExpenses();
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(updated: Partial<ExpenseItemType>) {
    editExpense(id, updated);
    setShowModal(false);
  }

  return (
    <div className={styles.expenseItem}>
      <div className={styles.leftSection}>
        <div className={styles.iconCircle}>
          <PiPizza size={22} />
        </div>

        <div className={styles.text}>
          <span className={styles.title}>{title}</span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>

      <div className={styles.rightSection}>
        <span className={styles.amount}>₹{price}</span>

        <button className={styles.deleteBtn} onClick={() => deleteExpense(id)}>
          <RxCrossCircled size={22} />
        </button>

        {showModal && (
          <EditExpenseModal
            onClose={() => setShowModal(false)}
            onSubmit={handleSubmit}
            defaultValues={{ title, price, category, date }}
          />
        )}

        <button className={styles.editBtn} onClick={() => setShowModal(true)}>
          <MdOutlineModeEditOutline size={22} />
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
