const Overview = () => {
  return (
    <div className="nested-content">
      <h2>Dashboard Overview</h2>
      <p>This is the overview section of the dashboard.</p>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>1,234</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p>$12,345</p>
        </div>
        <div className="stat-card">
          <h3>Growth</h3>
          <p>+12.5%</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;