const Gif = (props) => {
  const { gif } = props;
  return (
    <img
      className="gif w-1/2 p-2 rounded-xl cursor-pointer hover:border-2 hover:border-zinc-200"
      src={gif}
    />
  );
};
export default Gif;
