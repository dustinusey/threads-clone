import { useRef, useState } from "react";
import Feed from "./Pages/Feed";
import Login from "./Pages/Login";
import { useContext } from "react";
import { UserContext } from "./Components/UserProvider";

const App = () => {
  // Global state from UserProvider
  const { isLoggedIn } = useContext(UserContext);
  // gifs
  const gif = useRef("");
  const [currentGif, setCurrentGif] = useState("");

  const [darkMode, setDarkMode] = useState(true);

  const [createPost, setCreatePost] = useState(false);

  const [posts, setPosts] = useState([]);

  return (
    <div className={darkMode ? "dark" : ""}>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <Feed
          gif={gif.current}
          currentGif={currentGif}
          setCurrentGif={setCurrentGif}
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
