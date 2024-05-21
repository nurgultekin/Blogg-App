import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { v4 as uuidv4 } from 'uuid';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [signOutError, setSignOutError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User state changed:", currentUser); // To see if it is working
    });
    return () => unsubscribe();
  }, []);

  const signOut = () => {
    firebaseSignOut(auth)
      .then(() => {
        setUser(null);
        setSignOutError(null);
      })
      .catch((error) => {
        setSignOutError("Failed to sign out. Please try again.");
        console.error("Error signing out:", error);
      });
  };

  const addPost = (newPost) => {
    newPost.id = uuidv4();
    newPost.isEditing = false;
    setPosts([newPost, ...posts]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const editPost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isEditing: !post.isEditing } : post
      )
    );
  };

  const updatePost = (updatedPost) => {
    setPosts(
      posts.map((post) =>
        post.id === updatedPost.id ? { ...updatedPost, isEditing: false } : post
      )
    );
  };

  return (
    <UserContext.Provider value={{ user, signOut, signOutError, posts, addPost, deletePost, editPost, updatePost }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
