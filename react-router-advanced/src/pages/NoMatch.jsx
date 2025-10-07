import { Link } from 'react-router-dom';
import './Pages.css';

const NoMatch = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="not-found">
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <Link to="/" className="home-link">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;