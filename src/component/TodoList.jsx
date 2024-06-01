import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, filter, updateTodo, deleteTodo }) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    return todo.status === filter;
  });

  return (
    <div className="container">
      <div className="row">
        {filteredTodos.map(todo => (
          <TodoCard
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
