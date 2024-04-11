import { useState } from "react";
import Feed from "./Pages/Feed";
import Login from "./Pages/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [createPost, setCreatePost] = useState(false);

  const [posts, setPosts] = useState([]);

  return (
    <div className={darkMode ? "dark" : ""}>
      {!isLoggedIn ? (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Feed
          posts={posts}
          setPosts={setPosts}
          createPost={createPost}
          setCreatePost={setCreatePost}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
    </div>
  );
};
export default App;
