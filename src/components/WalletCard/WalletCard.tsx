import React from "react";
import styles from "./WalletCard.module.css";

interface Props {
  wallet: number;
  setWallet: (v: number) => void;
}

const WalletCard: React.FC<Props> = ({ wallet, setWallet }) => {
  console.log(setWallet);
  return (
    <div className={styles.card}>
      <h2>
        Wallet Balance: <span>₹{wallet}</span>
      </h2>
      <button className={styles.addBtn}>+ Add Income</button>
    </div>
  );
};
export default WalletCard;
