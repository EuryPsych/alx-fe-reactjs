import { useParams, Link, Navigate } from 'react-router-dom';
import './Pages.css';

// Mock blog data
const blogPosts = {
  1: { id: 1, title: 'Getting Started with React Router', content: 'This is the full content of blog post 1 about React Router basics...', date: '2024-01-15' },
  2: { id: 2, title: 'Advanced Routing Patterns', content: 'This is the full content of blog post 2 about advanced routing...', date: '2024-01-20' },
  3: { id: 3, title: 'Authentication in React Apps', content: 'This is the full content of blog post 3 about authentication...', date: '2024-01-25' },
  4: { id: 4, title: 'Performance Optimization Tips', content: 'This is the full content of blog post 4 about performance...', date: '2024-02-01' },
};

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts[postId];

  // Redirect to 404 if post doesn't exist
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="page">
      <div className="page-content">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
        
        <article className="blog-post">
          <header className="post-header">
            <h1>{post.title}</h1>
            <time className="post-date">{post.date}</time>
          </header>
          
          <div className="post-content">
            <p>{post.content}</p>
            <p>This post demonstrates dynamic routing with the parameter: <code>postId = {postId}</code></p>
          </div>
          
          <div className="post-footer">
            <Link to="/blog" className="back-link">← Back to all posts</Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;