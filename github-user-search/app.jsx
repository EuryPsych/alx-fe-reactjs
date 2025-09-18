import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// GitHub API Service
const githubService = {
  fetchUserData: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error('User not found');
      } else if (error.response && error.response.status === 403) {
        throw new Error('API rate limit exceeded. Please try again later.');
      } else {
        throw new Error('An error occurred while fetching user data');
      }
    }
  }
};

const GitHubUserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  
  // Apply dark/light mode to body
  useEffect(() => {
    document.body.className = darkMode ? '' : 'light-mode';
  }, [darkMode]);
  
  const searchUser = async () => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setError(null);
    setUserData(null);
    
    try {
      const data = await githubService.fetchUserData(searchTerm);
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser();
  };
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className="container">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
        {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
      </button>
      
      <header>
        <h1>GitHub User Search</h1>
        <p>Find GitHub users and explore their profiles</p>
      </header>
      
      <div className="search-container">
        <form onSubmit={handleSubmit} className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Enter a GitHub username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="GitHub username search"
          />
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i> Search
          </button>
        </form>
      </div>
      
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Searching GitHub...</p>
        </div>
      )}
      
      {error && (
        <div className="error-message">
          <i className="fas fa-exclamation-circle"></i> {error}
        </div>
      )}
      
      {userData && !loading && (
        <div className="results-container">
          <div className="user-card">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="avatar"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/120/0f2027/ffffff?text=No+Image';
              }}
            />
            <h2 className="user-name">{userData.name || userData.login}</h2>
            {userData.bio && <p className="user-bio">{userData.bio}</p>}
            
            <div className="user-stats">
              <div className="stat">
                <div className="stat-value">{userData.public_repos}</div>
                <div className="stat-label">Repositories</div>
              </div>
              <div className="stat">
                <div className="stat-value">{userData.followers}</div>
                <div className="stat-label">Followers</div>
              </div>
              <div className="stat">
                <div className="stat-value">{userData.following}</div>
                <div className="stat-label">Following</div>
              </div>
            </div>
            
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              <i className="fab fa-github"></i> View Profile
            </a>
          </div>
        </div>
      )}
      
      {!loading && !userData && !error && (
        <div className="initial-message">
          <p>Enter a GitHub username to start searching</p>
          <p className="rate-limit-message">
            <i className="fas fa-info-circle"></i> Note: GitHub API has rate limits. You might need to wait if you make too many requests.
          </p>
        </div>
      )}
      
      <footer>
        <p>Created with React and GitHub API • Deployed on Vercel</p>
      </footer>
    </div>
  );
};

export default GitHubUserSearch;