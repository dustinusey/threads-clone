import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../Components/UserProvider";

const LogoutBtn = () => {
  const { user, setUser, setIsLoggedIn } = useContext(UserContext);

  // Signs out the user from all Firebase Authentication services
  const firebaseAuthSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        setUser(null);
        console.log("User logged out.");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <button
      onClick={firebaseAuthSignOut}
      className="rounded-md mt-2 p-1 bg-white text-xs"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
