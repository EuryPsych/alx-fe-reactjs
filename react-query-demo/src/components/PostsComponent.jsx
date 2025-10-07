import { useQuery } from 'react-query';
import { useState } from 'react';
import './PostsComponent.css';

// API service functions
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const fetchPostById = async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
};

const PostsComponent = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [forceRefresh, setForceRefresh] = useState(0);

  // Query for fetching all posts
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch: refetchPosts,
    isFetching: isFetchingPosts,
  } = useQuery(
    ['posts', forceRefresh], // Query key includes forceRefresh to trigger refetch
    fetchPosts,
    {
      retry: 2,
      onSuccess: () => {
        console.log('Posts fetched successfully');
      },
      onError: (error) => {
        console.error('Error fetching posts:', error);
      },
    }
  );

  // Query for fetching a single post (only when selectedPostId is set)
  const {
    data: selectedPost,
    isLoading: isLoadingPost,
    isError: isErrorPost,
    error: errorPost,
  } = useQuery(
    ['post', selectedPostId],
    () => fetchPostById(selectedPostId),
    {
      enabled: !!selectedPostId, // Only run query if selectedPostId is truthy
      staleTime: 10 * 60 * 1000, // 10 minutes cache for individual posts
    }
  );

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  const handleBackToList = () => {
    setSelectedPostId(null);
  };

  const handleForceRefresh = () => {
    setForceRefresh(prev => prev + 1);
  };

  if (selectedPostId) {
    return (
      <div className="posts-container">
        <button onClick={handleBackToList} className="back-button">
          ← Back to Posts
        </button>
        
        {isLoadingPost && <div className="loading">Loading post...</div>}
        
        {isErrorPost && (
          <div className="error">
            Error loading post: {errorPost.message}
          </div>
        )}
        
        {selectedPost && (
          <div className="post-detail">
            <h2>{selectedPost.title}</h2>
            <p className="post-id">Post ID: {selectedPost.id}</p>
            <p className="post-user">User ID: {selectedPost.userId}</p>
            <div className="post-body">
              {selectedPost.body}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h2>Posts from JSONPlaceholder API</h2>
        <div className="posts-actions">
          <button 
            onClick={handleForceRefresh}
            disabled={isFetchingPosts}
            className="refresh-button"
          >
            {isFetchingPosts ? 'Refreshing...' : 'Force Refresh'}
          </button>
          <button 
            onClick={refetchPosts}
            disabled={isFetchingPosts}
            className="refetch-button"
          >
            {isFetchingPosts ? 'Refetching...' : 'Refetch Posts'}
          </button>
        </div>
      </div>

      {isLoading && (
        <div className="loading">
          <div className="spinner"></div>
          Loading posts...
        </div>
      )}

      {isError && (
        <div className="error">
          <h3>Error fetching posts:</h3>
          <p>{error.message}</p>
          <button onClick={refetchPosts} className="retry-button">
            Retry
          </button>
        </div>
      )}

      {posts && (
        <div className="posts-stats">
          <p>Total Posts: {posts.length} | 
            Status: {isFetchingPosts ? 'Fetching...' : 'Cached'}</p>
        </div>
      )}

      <div className="posts-list">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => handlePostClick(post.id)}
          >
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body-preview">
              {post.body.length > 100 
                ? `${post.body.substring(0, 100)}...` 
                : post.body}
            </p>
            <div className="post-meta">
              <span>Post ID: {post.id}</span>
              <span>User ID: {post.userId}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cache demonstration info */}
      <div className="cache-info">
        <h4>React Query Cache Demonstration:</h4>
        <ul>
          <li>✅ Data is automatically cached</li>
          <li>✅ Navigate between posts to see cached data</li>
          <li>✅ "Force Refresh" clears cache and refetches</li>
          <li>✅ "Refetch Posts" updates data if stale</li>
          <li>✅ Offline support (try disabling network)</li>
        </ul>
      </div>
    </div>
  );
};

export default PostsComponent;