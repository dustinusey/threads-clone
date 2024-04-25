import CreatePost from "../Components/CreatePost";
import Navbar from "../Components/Navbar";
import Overlay from "../Components/Overlay";
import Posts from "../Components/Posts";

import { useState } from "react";
const Feed = (props) => {
  const [overlay, setOverlay] = useState(false);
  const {
    darkMode,
    createPost,
    setCreatePost,
    setPosts,
    posts,
    gif,
    currentGif,
    setCurrentGif,
  } = props;
  return (
    <div className="bg-white dark:bg-zinc-800 min-h-screen">
      <Navbar darkMode={darkMode} />
      <CreatePost setOverlay={setOverlay} setCreatePost={setCreatePost} />
      <Posts currentGif={currentGif} posts={posts} />

      {overlay && (
        <Overlay
          gif={gif}
          currentGif={currentGif}
          setCurrentGif={setCurrentGif}
          setPosts={setPosts}
          createPost={createPost}
          setCreatePost={setCreatePost}
          overlay={overlay}
          setOverlay={setOverlay}
        />
      )}
    </div>
  );
};
export default Feed;
