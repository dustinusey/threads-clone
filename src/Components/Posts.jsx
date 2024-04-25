import Post from "./Post";

const Posts = (props) => {
  const { posts } = props;
  return (
    <div>
      {[...posts].reverse().map((post, index) => {
        return <Post key={index} postText={post.text} postGif={post.gif} />;
      })}
    </div>
  );
};
export default Posts;
