import CreatePost from "../Components/CreatePost";
import Navbar from "../Components/Navbar";
import Overlay from "../Components/Overlay";
import Posts from "../Components/Posts";
const Feed = (props) => {
  const { darkMode, createPost, setCreatePost, setPosts, posts } = props;
  return (
    <div className="bg-white dark:bg-zinc-800 min-h-screen">
      <Navbar darkMode={darkMode} />
      <CreatePost setCreatePost={setCreatePost} />
      <Posts posts={posts} />

      {createPost && (
        <Overlay setPosts={setPosts} setCreatePost={setCreatePost} />
      )}
    </div>
  );
};
export default Feed;
