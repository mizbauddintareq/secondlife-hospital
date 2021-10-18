import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import initializeAuthentication from "../Login/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  //   google login
  const handleGoogleLogin = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // user registration
  const handleUserRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login
  const handleUserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   logout
  const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError("");
      })
      .finally(() => setIsLoading(false));
  };

  // observe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setError(error);
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return {
    user,
    error,
    setError,
    handleGoogleLogin,
    handleLogout,
    handleUserRegistration,
    handleUserLogin,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
