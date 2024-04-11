const Post = (props) => {
  const { post } = props;
  return (
    <div className="dark:text-white w-full max-w-xl m-auto border-b border-zinc-600 py-10">
      <p className="ml-3">{post}</p>
    </div>
  );
};
export default Post;
