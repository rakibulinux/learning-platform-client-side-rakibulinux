import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const createUserAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUserAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const verifyUserEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  const resetUserPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const loginWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      return setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  useEffect(() => {
    fetch("https://rakib-learning-platform-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUserAccount,
    loginUserAccount,
    verifyUserEmail,
    resetUserPassword,
    updateUserProfile,
    loginWithGoogle,
    loginWithGitHub,
    logOutUser,
    categories,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
