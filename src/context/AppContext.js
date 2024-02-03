import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };
    case 'SET_BUDGET':
      return {
        ...state,
        budget: action.payload,
      };
    case 'CLEAR_ALL_EXPENSES':
      return {
        ...state,
        expenses: [],
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 5000,
  expenses: [
    { id: uuidv4(), name: 'Shopping', cost: 50 },
    { id: uuidv4(), name: 'HealthCare', cost: 800 },
    { id: uuidv4(), name: 'Transportation', cost: 70 },
    { id: uuidv4(), name: 'Food', cost: 400 },
    { id: uuidv4(), name: 'Rent', cost: 900 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const clearAllExpenses = () => {
    dispatch({
      type: 'CLEAR_ALL_EXPENSES',
    });
  };

  return (
    <AppContext.Provider value={{ expenses: state.expenses, budget: state.budget, dispatch, clearAllExpenses }}>
      {props.children}
    </AppContext.Provider>
  );
};
