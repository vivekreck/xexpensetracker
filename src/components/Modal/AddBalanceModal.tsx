import React from "react";
import styles from "./AddBalanceModal.module.css";

interface AddBalanceModalProps {
  onClose: () => void;
  onSubmit: (amount: number) => void;
}

const AddBalanceModal: React.FC<AddBalanceModalProps> = ({ onClose, onSubmit }) => {
  const [amount, setAmount] = React.useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!amount) return;
    onSubmit(Number(amount));
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h1 className={styles.title}>Add Balance</h1>

        <form className={styles.formModal} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="number"
            placeholder="Income Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            name="amount"
          />

          <div className={styles.btnRow}>
            <button className={styles.addBtn} type="submit">
              Add Balance
            </button>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBalanceModal;
