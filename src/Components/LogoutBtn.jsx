import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../Components/UserProvider";

const LogoutBtn = () => {
  const { user, setUser, setIsLoggedIn } = useContext(UserContext);

  const googleSignout = () => {
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
      onClick={googleSignout}
      className="rounded-md mt-2 p-1 bg-white text-xs"
    >
      Logout of Google
    </button>
  );
};

export default LogoutBtn;
