import Interactions from "./Interactions";
const Post = (props) => {
  const { postText, postGif } = props;
  return (
    <div className="dark:text-white w-full max-w-[615px] m-auto border-b dark:border-zinc-500 border-zinc-200  py-5 px-3">
      <div className="flex gap-1">
        <div className="rounded-full bg-zinc-300 dark:bg-zinc-700 size-[35px] mr-3"></div>
        <div>
          <p className="ml-3 text-sm">Dustin U</p>
          <p className="ml-3">{postText}</p>
        </div>
      </div>
      {/* interactions */}
      <Interactions postGif={postGif} />
    </div>
  );
};
export default Post;
