const Gif = (props) => {
  const {
    img,
    gif,
    currentGif,
    setCurrentGif,
    setCreatePost,
    setGifSelectModal,
  } = props;
  return (
    <img
      onClick={(e) => {
        let selected = e.target.src;
        gif.current = selected;
        setCurrentGif(gif.current);
        setCreatePost(true);
        setGifSelectModal(false);
      }}
      className="gif w-1/2 p-2 rounded-xl cursor-pointer hover:border-2 hover:border-zinc-200"
      src={img}
    />
  );
};
export default Gif;
