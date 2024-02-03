import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { useDarkMode } from '../context/DarkModeContext';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const { isDarkMode } = useDarkMode();

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      {props.name}
      <div>
        <span className={`badge ${isDarkMode ? 'badge-secondary' : 'badge-success'} badge-pill mr-3`}>£{props.cost}</span>
        <TiDelete size='1.5em' onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
