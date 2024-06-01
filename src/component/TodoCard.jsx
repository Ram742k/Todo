import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoCard = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(todo.taskName);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      taskName,
      description,
      status,
    });
    setIsEditing(false);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          {isEditing ? (
            <div>
              <input
                type="text"
                className="form-control mb-2"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
              />
              <input
                type="text"
                className="form-control mb-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
              <select
                className="form-select mb-2"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="not completed">Not Completed</option>
                <option value="completed">Completed</option>
              </select>
              <button className="btn btn-primary me-2" onClick={handleUpdate}>
                Update
              </button>
            </div>
          ) : (
            <div>
              <h3 className="card-title">{todo.taskName}</h3>
              <p className="card-text">{todo.description}</p>
              <p className="card-text">
                <strong>Status:</strong> {todo.status}
              </p>
              <button
                className="btn btn-secondary me-2"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
