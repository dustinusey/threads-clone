import PostBtn from "./PostBtn";

const CreatePost = (props) => {
  const { setCreatePost, setOverlay } = props;
  return (
    <div
      onClick={() => {
        setOverlay(true);
        setCreatePost(true);
      }}
      className="w-full max-w-[615px] m-auto mt-5 text-[#B3B3B3] dark:text-[#767D83] flex items-center pb-5 px-3"
    >
      <div className="rounded-full bg-zinc-300 dark:bg-zinc-700 size-[35px] mr-3"></div>
      <p>Start a thread...</p>
      <PostBtn />
    </div>
  );
};
export default CreatePost;
