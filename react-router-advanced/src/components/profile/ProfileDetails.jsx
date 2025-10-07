import { useAuth } from '../../context/AuthContext';

const ProfileDetails = () => {
  const { user } = useAuth();

  return (
    <div className="nested-content">
      <h2>Profile Details</h2>
      <div className="profile-info">
        <div className="info-item">
          <strong>Username:</strong> {user?.username}
        </div>
        <div className="info-item">
          <strong>Email:</strong> {user?.email}
        </div>
        <div className="info-item">
          <strong>Member since:</strong> January 2024
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;