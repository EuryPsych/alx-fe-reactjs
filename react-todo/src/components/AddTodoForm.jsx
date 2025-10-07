import { useState } from 'react';
import './TodoList.css';

const AddTodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form" data-testid="add-todo-form">
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
          data-testid="todo-input"
        />
        <button 
          type="submit" 
          className="add-button"
          disabled={!inputValue.trim()}
          data-testid="add-button"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;