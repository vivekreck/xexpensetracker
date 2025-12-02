import React from "react";
import styles from "./AddExpenseModal.module.css";
import { type ExpenseItem } from "../../context/ExpenseContext";

interface AddExpenseModalProps {
  onClose: () => void;
  onSubmit: (data: ExpenseItem) => void;
}

const AddExpenseModal: React.FC<AddExpenseModalProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleSubmit = () => {
    if (!title || !price || !category || !date) return;

    onSubmit({
      id: crypto.randomUUID(),
      title,
      price: Number(price),
      category,
      date,
    });
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h1 className={styles.title}>Add Expenses</h1>

        <div className={styles.formModal}>
          <input
            className={styles.input}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            className={styles.input}
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className={styles.formModal}>
          <select className={styles.input} value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
          </select>

          <input className={styles.input} type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <div className={styles.btnRow}>
          <button className={styles.addBtn} onClick={handleSubmit}>
            Add Expense
          </button>

          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
