import React from "react";
import styles from "./ExpenseItem.module.css";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { PiPizza } from "react-icons/pi";

interface ExpenseItemProps {
  title: string;
  date: string;
  amount: number;
  onDelete: () => void;
  onEdit: () => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ title, date, amount, onDelete, onEdit }) => {
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
        <span className={styles.amount}>₹{amount}</span>

        <button className={styles.deleteBtn} onClick={onDelete}>
          <RxCrossCircled size={22} />
        </button>

        <button className={styles.editBtn} onClick={onEdit}>
          <MdOutlineModeEditOutline size={22} />
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
