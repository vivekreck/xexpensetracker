import React, { createContext, useContext, useState, useEffect } from "react";

export interface ExpenseItem {
  id: string;
  title: string;
  category: string;
  price: number;
  date: string;
}

interface ExpenseContextType {
  expenses: ExpenseItem[];
  addExpense: (item: ExpenseItem) => void;
  deleteExpense: (id: string) => void;
  editExpense: (id: string, updated: Partial<ExpenseItem>) => void;

  totalSpent: number;
  wallet: number;
  setWallet: React.Dispatch<React.SetStateAction<number>>;
}

const ExpenseContext = createContext<ExpenseContextType | null>(null);

export const ExpenseProvider = ({ children }: { children: React.ReactNode }) => {
  // Load from localStorage
  const [expenses, setExpenses] = useState<ExpenseItem[]>(() => {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];
  });

  const [wallet, setWallet] = useState(() => {
    const stored = localStorage.getItem("wallet");
    return stored ? Number(stored) : 5000;
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("wallet", wallet.toString());
  }, [wallet]);

  const addExpense = (item: ExpenseItem) => {
    setExpenses((prev) => [...prev, { ...item, id: crypto.randomUUID() }]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const editExpense = (id: string, updated: Partial<ExpenseItem>) => {
    let walletAdjustment = 0;

    setExpenses((prev) =>
      prev.map((e) => {
        if (e.id !== id) return e;

        const oldPrice = e.price;
        const newPrice = updated.price ?? oldPrice;
        walletAdjustment = oldPrice - newPrice;

        if (wallet + walletAdjustment < 0) {
          alert("Low wallet balance!");
          walletAdjustment = 0;
          return e;
        }

        return { ...e, ...updated, price: newPrice };
      })
    );

    if (walletAdjustment !== 0) {
      setWallet((curr) => curr + walletAdjustment);
    }
  };

  const totalSpent = expenses.reduce((sum, item) => sum + item.price, 0);

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        totalSpent,
        wallet,
        setWallet,
        deleteExpense,
        editExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useExpenses = () => useContext(ExpenseContext)!;
