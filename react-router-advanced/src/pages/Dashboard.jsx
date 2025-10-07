import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Overview from '../components/dashboard/Overview';
import Analytics from '../components/dashboard/Analytics';
import Settings from '../components/dashboard/Settings';
import './Pages.css';

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="page">
      <div className="page-content">
        <h1>Dashboard</h1>
        <p>This is a protected route with nested navigation</p>
        
        <div className="dashboard-layout">
          <nav className="dashboard-nav">
            <Link 
              to="/dashboard" 
              className={location.pathname === '/dashboard' ? 'nav-active' : ''}
            >
              Overview
            </Link>
            <Link 
              to="/dashboard/analytics" 
              className={location.pathname === '/dashboard/analytics' ? 'nav-active' : ''}
            >
              Analytics
            </Link>
            <Link 
              to="/dashboard/settings" 
              className={location.pathname === '/dashboard/settings' ? 'nav-active' : ''}
            >
              Settings
            </Link>
          </nav>
          
          <div className="dashboard-content">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;