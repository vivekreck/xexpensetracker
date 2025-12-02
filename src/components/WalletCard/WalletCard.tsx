import React, { useState } from "react";
import styles from "./WalletCard.module.css";
import AddBalanceModal from "../Modal/AddBalanceModal";
import { useExpenses } from "../../context/ExpenseContext";

const WalletCard: React.FC = () => {
  const { wallet, setWallet } = useExpenses();

  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.card}>
      <h2>
        Wallet Balance: <span>₹{wallet}</span>
      </h2>

      {showModal && (
        <AddBalanceModal
          onClose={() => setShowModal(false)}
          onSubmit={(amount) => setWallet((curr) => curr + amount)}
        />
      )}

      <button className={styles.addBtn} onClick={() => setShowModal(true)}>
        + Add Income
      </button>
    </div>
  );
};
export default WalletCard;
