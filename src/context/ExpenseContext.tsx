import React, { createContext, useContext, useState } from "react";

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
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [wallet, setWallet] = useState(5000);

  const addExpense = (item: ExpenseItem) => {
    setExpenses((prev) => [...prev, { ...item, id: crypto.randomUUID() }]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const editExpense = (id: string | undefined, updated: Partial<ExpenseItem>) => {
    setExpenses((prev) => prev.map((e) => (e.id === id ? { ...e, ...updated } : e)));
  };

  const totalSpent = expenses.reduce((sum, item) => sum + item.price, 0);

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, totalSpent, wallet, setWallet, deleteExpense, editExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useExpenses = () => useContext(ExpenseContext)!;
