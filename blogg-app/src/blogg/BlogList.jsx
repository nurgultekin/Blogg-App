import React, { useEffect } from "react";
import { useBlog } from "../blogg/BlogContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const BlogList = () => {
  const { posts, setPosts } = useBlog();

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsArray);
    };
    fetchPosts();
  }, [setPosts]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>By: {post.author}</p>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
