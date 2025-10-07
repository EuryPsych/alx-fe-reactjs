import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

// Helper function to add a todo
const addTodo = async (user, todoText) => {
  const input = screen.getByTestId('todo-input');
  const addButton = screen.getByTestId('add-button');
  
  await user.clear(input);
  await user.type(input, todoText);
  await user.click(addButton);
};

describe('TodoList Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(<TodoList />);
  });

  test('renders initial todo list with static data', () => {
    // Check if the component renders
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
    
    // Check for initial todos
    expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Comprehensive Tests')).toBeInTheDocument();
    
    // Check todo count
    expect(screen.getByTestId('todo-count')).toHaveTextContent('2 items left');
  });

  test('adds a new todo', async () => {
    // Add a new todo
    await addTodo(user, 'New Test Todo');
    
    // Check if new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    // Check if input is cleared after adding
    expect(screen.getByTestId('todo-input')).toHaveValue('');
    
    // Check if todo count updated
    expect(screen.getByTestId('todo-count')).toHaveTextContent('3 items left');
  });

  test('does not add empty todo', async () => {
    const initialTodosCount = screen.getAllByRole('listitem').length;
    
    // Try to add empty todo
    await addTodo(user, '   ');
    
    // Check that no new todo was added
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodosCount);
  });

  test('toggles todo completion status', async () => {
    // Find the first todo
    const firstTodo = screen.getByTestId('todo-text-1');
    const firstCheckbox = screen.getByTestId('todo-checkbox-1');
    
    // Initially should not be completed
    expect(firstCheckbox).not.toBeChecked();
    expect(firstTodo).not.toHaveStyle('text-decoration: line-through');
    
    // Toggle completion
    await user.click(firstTodo);
    
    // Should be completed now
    expect(firstCheckbox).toBeChecked();
    expect(firstTodo).toHaveStyle('text-decoration: line-through');
    
    // Check todo count updated
    expect(screen.getByTestId('todo-count')).toHaveTextContent('1 item left');
  });

  test('deletes a todo', async () => {
    const initialTodosCount = screen.getAllByRole('listitem').length;
    const deleteButton = screen.getByTestId('delete-button-1');
    
    // Delete the first todo
    await user.click(deleteButton);
    
    // Check that todo was deleted
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodosCount - 1);
    expect(screen.queryByText('Learn React Testing')).not.toBeInTheDocument();
  });

  test('filters todos correctly', async () => {
    // Check initial filter (all)
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    
    // Filter active todos
    await user.click(screen.getByTestId('filter-active'));
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    
    // Filter completed todos
    await user.click(screen.getByTestId('filter-completed'));
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
    
    // Back to all
    await user.click(screen.getByTestId('filter-all'));
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clears completed todos', async () => {
    // Initially should have 1 completed todo
    expect(screen.getByTestId('filter-completed')).toHaveTextContent('Completed (1)');
    
    // Clear completed
    await user.click(screen.getByTestId('clear-completed'));
    
    // Should have no completed todos
    expect(screen.getByTestId('filter-completed')).toHaveTextContent('Completed (0)');
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.queryByText('Build Todo App')).not.toBeInTheDocument();
  });

  test('shows empty state messages', async () => {
    // Clear all todos
    const deleteButtons = screen.getAllByLabelText(/Delete todo:/);
    for (const button of deleteButtons) {
      await user.click(button);
    }
    
    // Should show empty state
    expect(screen.getByTestId('empty-state')).toHaveTextContent('No tasks yet. Add one above!');
    
    // Add a todo and complete it
    await addTodo(user, 'Test Todo');
    await user.click(screen.getByText('Test Todo'));
    
    // Filter completed - should show completed empty state
    await user.click(screen.getByTestId('filter-completed'));
    expect(screen.getByTestId('empty-state')).toHaveTextContent('No completed tasks');
    
    // Filter active - should show active empty state
    await user.click(screen.getByTestId('filter-active'));
    expect(screen.getByTestId('empty-state')).toHaveTextContent('No active tasks');
  });

  test('handles keyboard events', async () => {
    const input = screen.getByTestId('todo-input');
    
    // Type and submit with Enter
    await user.type(input, 'Keyboard Test Todo{enter}');
    
    // Should add the todo
    expect(screen.getByText('Keyboard Test Todo')).toBeInTheDocument();
  });

  test('maintains correct todo counts', async () => {
    // Initial state
    expect(screen.getByTestId('todo-count')).toHaveTextContent('2 items left');
    expect(screen.getByTestId('filter-all')).toHaveTextContent('All (3)');
    expect(screen.getByTestId('filter-active')).toHaveTextContent('Active (2)');
    expect(screen.getByTestId('filter-completed')).toHaveTextContent('Completed (1)');
    
    // Add a todo
    await addTodo(user, 'Fourth Todo');
    expect(screen.getByTestId('todo-count')).toHaveTextContent('3 items left');
    expect(screen.getByTestId('filter-all')).toHaveTextContent('All (4)');
    expect(screen.getByTestId('filter-active')).toHaveTextContent('Active (3)');
    
    // Complete a todo
    await user.click(screen.getByText('Fourth Todo'));
    expect(screen.getByTestId('todo-count')).toHaveTextContent('2 items left');
    expect(screen.getByTestId('filter-completed')).toHaveTextContent('Completed (2)');
  });
});

describe('AddTodoForm Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(<TodoList />);
  });

  test('add button is disabled when input is empty', () => {
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    expect(addButton).toBeDisabled();
    
    // Type something
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(addButton).not.toBeDisabled();
    
    // Clear input
    fireEvent.change(input, { target: { value: '' } });
    expect(addButton).toBeDisabled();
  });

  test('trims whitespace from todo text', async () => {
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    await user.type(input, '   Todo with spaces   ');
    await user.click(addButton);
    
    // Should trim whitespace
    expect(screen.getByText('Todo with spaces')).toBeInTheDocument();
    expect(screen.getByText('Todo with spaces')).not.toHaveTextContent('   ');
  });
});

describe('TodoItem Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(<TodoList />);
  });

  test('applies completed styles correctly', async () => {
    const todoItem = screen.getByTestId('todo-item-2'); // This is the completed one initially
    const todoText = screen.getByTestId('todo-text-2');
    const checkbox = screen.getByTestId('todo-checkbox-2');
    
    // Should have completed styles
    expect(todoItem).toHaveClass('completed');
    expect(todoText).toHaveStyle('text-decoration: line-through');
    expect(checkbox).toBeChecked();
    
    // Toggle to incomplete
    await user.click(todoText);
    
    // Should not have completed styles
    expect(todoItem).not.toHaveClass('completed');
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    expect(checkbox).not.toBeChecked();
  });

  test('has proper ARIA labels and roles', () => {
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);
    
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    
    const deleteButtons = screen.getAllByLabelText(/Delete todo:/);
    expect(deleteButtons).toHaveLength(3);
  });
});