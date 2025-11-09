import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updatedProfile = async (name, photo) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      try {
        await updateProfile(currentUser, {
          displayName: name,
          photoURL: photo,
        });
        const updateUser = {
          ...currentUser,
          displayName: name,
          photoURL: photo,
        };
        setUser(updateUser);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    return false;
  };
  // current user
  useEffect(() => {
    //set observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // observer realease
    return () => {
      unsubscribe();
    };
  }, []);
  const authInformation = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    updatedProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={authInformation}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
