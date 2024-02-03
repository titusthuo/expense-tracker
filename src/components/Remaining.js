import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useDarkMode } from '../context/DarkModeContext';

const RemainingBudget = () => {
  const { expenses, budget } = useContext(AppContext);
  const { isDarkMode } = useDarkMode();

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const remainingBudget = budget - totalExpenses;

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${isDarkMode ? 'text-light bg-dark' : 'text-dark bg-light'} p-4 ${alertType}`}>
      <span>Remaining Amount: ${remainingBudget.toFixed(2)}</span>
    </div>
  );
};

export default RemainingBudget;
