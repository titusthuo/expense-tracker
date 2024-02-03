import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import { useDarkMode } from '../context/DarkModeContext';

const ExpenseList = () => {
  const { expenses, clearAllExpenses } = useContext(AppContext);
  const { isDarkMode } = useDarkMode();

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setFilteredExpenses(searchResults);
  };

  const handleClearAll = () => {
    clearAllExpenses();
  };

  return (
    <>
      <div className={`d-flex justify-content-between ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        <input
        type='text'
         className={`form-control mb-2 mr-sm-2 ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
        placeholder='Type to search...'
        style={{ backgroundColor: isDarkMode ? '#343a40' : 'inherit', color: isDarkMode ? 'white' : 'inherit' }}
        onChange={handleChange}
        />

        <button onClick={handleClearAll} className={`btn btn-danger mb-2 ${isDarkMode ? 'btn-dark' : ''}`}>
          Clear All
        </button>
      </div>
      <ul className={`list-group mt-3 mb-3 ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
