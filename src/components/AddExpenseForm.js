import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import { useDarkMode } from '../context/DarkModeContext';

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const { isDarkMode } = useDarkMode();

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || isNaN(cost) || +cost <= 0) {
      setError('Please provide a valid name and cost.');
      return;
    }

    const expense = {
      id: uuidv4(),
      name: name.trim(),
      cost: parseFloat(cost),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });

    setSuccess('Expense added successfully!');
    setName('');
    setCost('');
    setError('');
  };

  return (
    <form onSubmit={onSubmit} className={`mt-3 ${isDarkMode ? 'text-light' : 'text-dark'}`}>
      {error && <div className={`alert alert-danger ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>{error}</div>}
      {success && <div className={`alert alert-success ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>{success}</div>}
      <div className='row'>
        <div className='col-sm col-lg-4'>
          <label htmlFor='name' className={`label ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
            Name
          </label>
          <input
            required
            type='text'
            className={`form-control ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className='col-sm col-lg-4'>
          <label htmlFor='cost' className={`label ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
            Cost
          </label>
          <div className={`input-group ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
            <div className='input-group-prepend'>
              <span className={`input-group-text ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} id='basic-addon1'>
                $
              </span>
            </div>
            <input
              required
              type='number'
              className={`form-control ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
              id='cost'
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-sm'>
          <button type='submit' className={`btn ${isDarkMode ? 'btn-light' : 'btn-success'}`}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
