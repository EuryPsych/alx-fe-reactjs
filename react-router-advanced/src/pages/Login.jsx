import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Pages.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the intended destination or default to dashboard
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      login({ username, email: `${username}@example.com` });
      setIsLoading(false);
      navigate(from, { replace: true });
    }, 1000);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="login-container">
          <h1>Login</h1>
          <p>Use any credentials to simulate authentication</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter any username"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter any password"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="login-button"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          
          <div className="login-demo">
            <h3>Demo Features:</h3>
            <ul>
              <li>Protected routes will redirect here if not authenticated</li>
              <li>After login, you'll be redirected to your intended destination</li>
              <li>Authentication state persists across page refreshes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;