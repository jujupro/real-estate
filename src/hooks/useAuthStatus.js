import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });

    return unsub; //run before component unmount to unsubscribe from onAuthStateChanged event listenter
  }, []);

  return { loggedIn, checkingStatus };
};

// Protected routes in v6
// https://stackoverflow.com/questions/65505665/protected-route-with-firebase

// onAuthStateChanged function signature
//https://firebase.google.com/docs/reference/js/auth.auth.md#authonauthstatechanged
