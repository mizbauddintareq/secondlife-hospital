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
  const auth = getAuth();

  //   google login
  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // user registration
  const handleUserRegistration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // user login
  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //   logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError("");
      });
  };

  // observe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setError(error);
      }
    });
    return unsubscribe;
  }, []);

  return {
    user,
    error,
    handleGoogleLogin,
    handleLogout,
    handleUserRegistration,
    handleUserLogin,
  };
};

export default useFirebase;
