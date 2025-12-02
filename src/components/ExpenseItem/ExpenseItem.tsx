import React from "react";
import styles from "./ExpenseItem.module.css";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { PiPizza } from "react-icons/pi";
import { useExpenses } from "../../context/ExpenseContext";

interface Props {
  id: string;
  title: string;
  category?: string;
  date: string;
  price: number;
}

const ExpenseItem: React.FC<Props> = ({ id, title, date, price }) => {
  const { deleteExpense, editExpense } = useExpenses();

  const handleEdit = () => {
    const newAmount = Number(prompt("Enter new amount:", price.toString()));
    if (!newAmount) return;

    editExpense(id, { price: newAmount });
  };

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

        <button className={styles.editBtn} onClick={handleEdit}>
          <MdOutlineModeEditOutline size={22} />
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
