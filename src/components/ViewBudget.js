import React from 'react';

const ViewBudget = (props) => {
  return (
    <>
      <span>Budget Amount: ${props.budget}</span>
      <button type='button' className='btn btn-success' onClick={props.handleEditClick}>
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
