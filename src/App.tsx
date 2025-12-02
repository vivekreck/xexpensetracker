import React from "react";
import styles from "./App.module.css";
import Dashboard from "./components/Dashboard/Dashboard";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <Dashboard />
    </div>
  );
};
export default App;
