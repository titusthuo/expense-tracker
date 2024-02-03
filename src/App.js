import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';
import { DarkModeProvider } from './context/DarkModeContext';
import DarkModeToggle from './context/DarkModeToggle';

const App = () => {
  return (
    <AppProvider>
      <DarkModeProvider>
        <div className='custom-container mt-5'>
          <h1 className='text-center mb-4'>Welcome To Expense Tracker </h1>
          <DarkModeToggle /> {/* Place the DarkModeToggle component wherever you want in the structure */}
          <div className='row'>
            <div className='custom-col-md-4'>
              <Budget />
            </div>
            <div className='custom-col-md-4'>
              <RemainingBudget />
            </div>
            <div className='custom-col-md-4'>
              <ExpenseTotal />
            </div>
          </div>
          <h3 className='mt-4 custom-text'>Your Expenses</h3>
          <div className='row'>
            <div className='col'>
              <ExpenseList />
            </div>
          </div>
          <h3 className='mt-4 custom-text'>Add Expense</h3>
          <div className='row mt-3'>
            <div className='col'>
              <AddExpenseForm />
            </div>
          </div>
        </div>
      </DarkModeProvider>
    </AppProvider>
  );
};

export default App;
