import React, { useState } from "react";
import { useUser } from "./UserContext";
import { useBlog } from "./BlogContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const AddBlogPost = () => {
  const { user } = useUser();
  const { setPosts } = useBlog();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      text,
      author: user.email
    };
    const docRef = await addDoc(collection(db, "posts"), newPost);
    setPosts((prevPosts) => [...prevPosts, { id: docRef.id, ...newPost }]);
    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddBlogPost;
