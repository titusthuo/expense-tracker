// Budget.js
import React, { useState, useContext } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { AppContext } from '../context/AppContext';
import { useDarkMode } from '../context/DarkModeContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const { isDarkMode } = useDarkMode();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className={`alert ${isDarkMode ? 'text-light bg-dark' : 'text-dark bg-warning'} p-3 d-flex align-items-center justify-content-between`}>
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
