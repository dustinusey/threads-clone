import PostBtn from "./PostBtn";

const CreatePost = (props) => {
  const { createPost, setCreatePost } = props;
  return (
    <div
      onClick={() => {
        setCreatePost(true);
      }}
      className="w-full max-w-xl m-auto mt-10 text-[#B3B3B3] dark:text-[#767D83] flex items-center border-b border-zinc-600 pb-10"
    >
      <div className="rounded-full bg-zinc-300 dark:bg-zinc-700 size-[35px] mr-3"></div>
      <p>Start a thread...</p>
      <PostBtn />
    </div>
  );
};
export default CreatePost;
