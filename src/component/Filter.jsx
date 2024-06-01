import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('all')} className='btn btn-warning m-2'>All</button>
      <button onClick={() => setFilter('completed')} className='btn btn-warning m-2'>Completed</button>
      <button onClick={() => setFilter('not completed')} className='btn btn-warning m-2'>Not Completed</button>
    </div>
  );
};

export default Filter;
