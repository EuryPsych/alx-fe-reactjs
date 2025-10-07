import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the main app with todo list', () => {
  render(<App />);
  
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getByText('Manage your tasks efficiently')).toBeInTheDocument();
  expect(screen.getByTestId('todo-list')).toBeInTheDocument();
});