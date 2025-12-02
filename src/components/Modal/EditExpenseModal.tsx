import React from "react";
import styles from "./EditExpenseModal.module.css";
import { type ExpenseItem } from "../../context/ExpenseContext";

interface EditExpenseModalProps {
  onClose: () => void;
  onSubmit: (data: Partial<ExpenseItem>) => void;
  defaultValues: {
    title: string;
    price: number;
    category: string;
    date: string;
  };
}

const EditExpenseModal: React.FC<EditExpenseModalProps> = ({ onClose, onSubmit, defaultValues }) => {
  const [title, setTitle] = React.useState(defaultValues.title);
  const [price, setPrice] = React.useState(defaultValues.price.toString());
  const [category, setCategory] = React.useState(defaultValues.category);
  const [date, setDate] = React.useState(defaultValues.date);

  const handleSubmit = () => {
    onSubmit({
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
        <h1 className={styles.title}>Edit Expense</h1>

        <div className={styles.formModal}>
          <input
            className={styles.input}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <select className={styles.input} value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
          </select>

          <input className={styles.input} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className={styles.btnRow}>
          <button className={styles.addBtn} onClick={handleSubmit}>
            Save Changes
          </button>

          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditExpenseModal;
