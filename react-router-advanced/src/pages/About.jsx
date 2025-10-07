import './Pages.css';

const About = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1>About This Project</h1>
        <div className="about-content">
          <p>
            This project demonstrates advanced React Router features including:
          </p>
          <ul>
            <li>Nested Routes for complex application structures</li>
            <li>Protected Routes with authentication checks</li>
            <li>Dynamic Routes with URL parameters</li>
            <li>Programmatic navigation</li>
            <li>Route-based code splitting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;