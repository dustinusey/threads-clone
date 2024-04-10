import { useState } from "react";
import Feed from "./Pages/Feed";
import Login from "./Pages/Login";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="">
      {!isLoggedIn ? (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Feed />
      )}
    </div>
  );
};
export default App;
