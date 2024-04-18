import Interactions from "./Interactions";
const Post = (props) => {
  const { post } = props;
  return (
    <div className="dark:text-white w-full max-w-[615px] m-auto border-b border-zinc-600 py-5 px-3">
      <div className="flex items-center gap-1">
        <div className="rounded-full bg-zinc-300 dark:bg-zinc-700 size-[35px] mr-3"></div>
        <div>
          <p className="ml-3 text-sm">Dustin U</p>
          <p className="ml-3">{post}</p>
        </div>
      </div>
      {/* interactions */}
      <Interactions />
    </div>
  );
};
export default Post;
