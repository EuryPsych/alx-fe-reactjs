import { Link } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1>Welcome to Advanced React Router</h1>
        <p className="page-description">
          This demo showcases advanced routing techniques including nested routes, 
          protected routes, and dynamic routing.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <h3>Nested Routes</h3>
            <p>Explore nested routing in the Profile and Dashboard sections</p>
            <Link to="/profile" className="feature-link">Try Profile →</Link>
          </div>
          
          <div className="feature-card">
            <h3>Protected Routes</h3>
            <p>Authentication-required routes that redirect unauthenticated users</p>
            <Link to="/dashboard" className="feature-link">Try Dashboard →</Link>
          </div>
          
          <div className="feature-card">
            <h3>Dynamic Routing</h3>
            <p>URL parameters for dynamic content like blog posts</p>
            <Link to="/blog" className="feature-link">Explore Blog →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;