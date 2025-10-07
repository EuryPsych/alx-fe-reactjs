import './TodoList.css';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      data-testid={`todo-item-${todo.id}`}
      role="listitem"
    >
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
          data-testid={`todo-checkbox-${todo.id}`}
        />
        <span 
          className="todo-text"
          onClick={() => onToggle(todo.id)}
          data-testid={`todo-text-${todo.id}`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        data-testid={`delete-button-${todo.id}`}
        aria-label={`Delete todo: ${todo.text}`}
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;