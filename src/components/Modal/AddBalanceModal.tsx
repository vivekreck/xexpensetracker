import React from "react";
import styles from "./AddBalanceModal.module.css";

interface AddBalanceModalProps {
  onClose: () => void;
  onSubmit: (amount: number) => void;
}

const AddBalanceModal: React.FC<AddBalanceModalProps> = ({ onClose, onSubmit }) => {
  const [amount, setAmount] = React.useState("");

  const handleSubmit = () => {
    if (!amount) return;
    onSubmit(Number(amount));
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h1 className={styles.title}>Add Balance</h1>

        <div className={styles.formModal}>
          <input
            className={styles.input}
            type="number"
            placeholder="Income Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className={styles.btnRow}>
            <button className={styles.addBtn} onClick={handleSubmit}>
              Add Balance
            </button>
            <button className={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBalanceModal;
