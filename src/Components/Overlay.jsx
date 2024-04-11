import CreatePostModal from "./CreatePostModal";

const Overlay = (props) => {
  const { setCreatePost, setPosts } = props;
  return (
    <div
      onClick={() => {
        setCreatePost(false);
      }}
      className="p-10 h-screen overflow-hidden bg-black w-full absolute top-0 left-0 bg-opacity-50"
    >
      <div className="min-h-screen grid place-items-center">
        <CreatePostModal setCreatePost={setCreatePost} setPosts={setPosts} />
      </div>
    </div>
  );
};
export default Overlay;
