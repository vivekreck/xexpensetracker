import React from "react";
import styles from "./Dashboard.module.css";

import WalletCard from "../WalletCard/WalletCard";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import RecentTransactions from "../RecentTransactions/RecentTransactions";
import TopExpenses from "../TopExpenses/TopExpenses";
import PieChart from "../PieChart/PieChart";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <h1 className={styles.pageTitle}>Expense Tracker</h1>

      <div className={styles.cardsSection}>
        <div className={styles.cardsRow}>
          <WalletCard />
          <ExpenseCard />

          <div>
            <PieChart />

            <div className={styles.legendContainer}>
              <div className={styles.item}>
                <span className={`${styles.box} ${styles.food}`}></span>
                <span className={styles.label_food}>Food</span>
              </div>

              <div className={styles.item}>
                <span className={`${styles.box} ${styles.entertainment}`}></span>
                <span className={styles.label_entertainment}>Entertainment</span>
              </div>

              <div className={styles.item}>
                <span className={`${styles.box} ${styles.travel}`}></span>
                <span className={styles.label_travel}>Travel</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <RecentTransactions />
        <TopExpenses />
      </div>
    </div>
  );
};

export default Dashboard;
