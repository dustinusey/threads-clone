import Post from "./Post";

const Posts = (props) => {
  const { posts } = props;
  console.log(posts);
  return (
    <div>
      {[...posts].reverse().map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
};
export default Posts;
