import { Link } from 'react-router-dom';
import './Pages.css';

// Mock blog data
const blogPosts = [
  { id: 1, title: 'Getting Started with React Router', excerpt: 'Learn the basics of routing in React applications...', date: '2024-01-15' },
  { id: 2, title: 'Advanced Routing Patterns', excerpt: 'Explore nested routes, protected routes, and more...', date: '2024-01-20' },
  { id: 3, title: 'Authentication in React Apps', excerpt: 'Implement secure authentication flows with React...', date: '2024-01-25' },
  { id: 4, title: 'Performance Optimization Tips', excerpt: 'Make your React apps faster with these techniques...', date: '2024-02-01' },
];

const Blog = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1>Blog Posts</h1>
        <p>Dynamic routing example with URL parameters</p>
        
        <div className="blog-posts">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-post-card">
              <h3>
                <Link to={`/blog/${post.id}`} className="post-link">
                  {post.title}
                </Link>
              </h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="routing-demo">
          <h3>Dynamic Routing Demo:</h3>
          <p>Each blog post uses a dynamic route with the post ID as a URL parameter.</p>
          <p>Try navigating to:</p>
          <ul>
            <li><code>/blog/1</code> - Getting Started with React Router</li>
            <li><code>/blog/2</code> - Advanced Routing Patterns</li>
            <li><code>/blog/3</code> - Authentication in React Apps</li>
            <li><code>/blog/999</code> - Non-existent post (shows 404)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;