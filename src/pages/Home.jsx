import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch(" http://localhost:3000/posts")
      .then((response) => response.json())
      .then((response) => {
        setPosts(response);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="Posts">
      {posts.map((post) => {
        return <Post description={post.description} url={post.url} />;
      })}
    </div>
  );
};

export default Home;
