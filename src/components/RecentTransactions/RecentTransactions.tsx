import React from "react";
import styles from "./RecentTransactions.module.css";

const RecentTransactions: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Recent Transactions</h2>
      <div className={styles.box}>No transactions!</div>
    </div>
  );
};
export default RecentTransactions;
