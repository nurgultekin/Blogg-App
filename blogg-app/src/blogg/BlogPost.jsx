// This is for displaying individual posts and comments on my blog.
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";
/* import { db } from "../firebase"; */
import { useUser } from "./UserContext";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { user } = useUser();

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
      }
    };

    const fetchComments = async () => {
      const querySnapshot = await getDocs(collection(db, "posts", id, "comments"));
      const commentsArray = querySnapshot.docs.map(doc => doc.data());
      setComments(commentsArray);
    };

    fetchPost();
    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      username: user.email,
      text: commentText
    };
    await addDoc(collection(db, "posts", id, "comments"), newComment);
    setComments((prevComments) => [...prevComments, newComment]);
    setCommentText("");
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>By: {post.author}</p>
      <p>{post.text}</p>
      <div>
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index}>
            <p><strong>{comment.username}:</strong> {comment.text}</p>
          </div>
        ))}
        {user && (
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment"
              required
            ></textarea>
            <button type="submit">Add Comment</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
