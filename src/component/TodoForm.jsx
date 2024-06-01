import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      const newTodo = {
        id: Date.now(),
        taskName,
        description,
        status: 'not completed',
      };
      addTodo(newTodo);
      setTaskName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className='btn btn-primary'>Add Todo</button>
    </form>
  );
};

export default TodoForm;
