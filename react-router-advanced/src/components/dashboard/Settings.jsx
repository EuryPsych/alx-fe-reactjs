const Settings = () => {
  return (
    <div className="nested-content">
      <h2>Dashboard Settings</h2>
      <p>Configure your dashboard preferences and settings.</p>
      <div className="settings-form">
        <div className="form-group">
          <label>Theme:</label>
          <select>
            <option>Light</option>
            <option>Dark</option>
            <option>Auto</option>
          </select>
        </div>
        <div className="form-group">
          <label>Notifications:</label>
          <input type="checkbox" defaultChecked /> Email notifications
        </div>
      </div>
    </div>
  );
};

export default Settings;