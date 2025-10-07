import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProfileDetails from '../components/profile/ProfileDetails';
import ProfileSettings from '../components/profile/ProfileSettings';
import './Pages.css';

const Profile = () => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div className="page">
      <div className="page-content">
        <h1>User Profile</h1>
        <p>Welcome back, {user?.username}! Manage your account settings.</p>
        
        <div className="profile-layout">
          <nav className="profile-nav">
            <Link 
              to="/profile" 
              className={location.pathname === '/profile' ? 'nav-active' : ''}
            >
              Details
            </Link>
            <Link 
              to="/profile/settings" 
              className={location.pathname === '/profile/settings' ? 'nav-active' : ''}
            >
              Settings
            </Link>
          </nav>
          
          <div className="profile-content">
            <Routes>
              <Route path="/" element={<ProfileDetails />} />
              <Route path="/settings" element={<ProfileSettings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;