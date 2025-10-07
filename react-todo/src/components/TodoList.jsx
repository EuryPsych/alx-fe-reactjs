import { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';
import './TodoList.css';

// Static array of initial todos
const initialTodos = [
  { id: 1, text: 'Learn React Testing', completed: false },
  { id: 2, text: 'Build Todo App', completed: true },
  { id: 3, text: 'Write Comprehensive Tests', completed: false }
];

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Initialize with static todos
  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
      };
      setTodos(prevTodos => [newTodo, ...prevTodos]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;
  const filteredTodos = getFilteredTodos();

  return (
    <div className="todo-list-container" data-testid="todo-list">
      <header className="todo-header">
        <h1>Todo List</h1>
        <p>Manage your tasks efficiently</p>
      </header>

      <AddTodoForm onAddTodo={addTodo} />

      {todos.length > 0 && (
        <div className="todo-controls">
          <div className="filter-buttons">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
              data-testid="filter-all"
            >
              All ({todos.length})
            </button>
            <button
              className={filter === 'active' ? 'active' : ''}
              onClick={() => setFilter('active')}
              data-testid="filter-active"
            >
              Active ({activeCount})
            </button>
            <button
              className={filter === 'completed' ? 'active' : ''}
              onClick={() => setFilter('completed')}
              data-testid="filter-completed"
            >
              Completed ({completedCount})
            </button>
          </div>

          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="clear-completed"
              data-testid="clear-completed"
            >
              Clear Completed
            </button>
          )}
        </div>
      )}

      <div className="todo-items" role="list">
        {filteredTodos.length === 0 ? (
          <div className="empty-state" data-testid="empty-state">
            {filter === 'completed' 
              ? 'No completed tasks' 
              : filter === 'active' 
              ? 'No active tasks' 
              : 'No tasks yet. Add one above!'}
          </div>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>

      {todos.length > 0 && (
        <footer className="todo-footer">
          <span data-testid="todo-count">
            {activeCount} {activeCount === 1 ? 'item' : 'items'} left
          </span>
        </footer>
      )}
    </div>
  );
};

export default TodoList;