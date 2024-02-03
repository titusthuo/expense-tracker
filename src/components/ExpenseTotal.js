import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useDarkMode } from '../context/DarkModeContext';

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const { isDarkMode } = useDarkMode();

  const total = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className={`alert ${isDarkMode ? 'text-light bg-dark' : 'text-dark bg-light'} p-4`}>
      <span>Amount Spent so far: ${total.toFixed(2)}</span>
    </div>
  );
};

export default ExpenseTotal;
