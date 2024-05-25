import React, { useState, useEffect } from 'react';
import './LoadMorePosts.css'; // Optional: for styling

function LoadMorePosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [show, setShow] = useState(false);

    const fetchPosts = async (page) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosts((prevPosts) => [...prevPosts, ...data]);
        } catch (error) {
            setError('Failed to fetch posts');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    const loadMorePosts = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div  className="load-more-posts" style={{margin:' 0'}}>
            <h1 style={{background:'lightgreen', padding:'14px', margin:'10px 0 0 20px'}}>Project 11: Load More Button</h1>
            <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} Project</button>
            
            {show && (
                <>
                    <h1 >Random Posts</h1>
                    {posts.map((post) => (
                        <div key={post.id} className="post">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))}
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {!loading && !error && (
                        <button onClick={loadMorePosts}>Load More</button>
                    )}
                </>
            )}
        </div>
    );
}

export default LoadMorePosts;
