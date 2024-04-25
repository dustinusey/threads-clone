const DeleteGifBtn = (props) => {
  const { setCurrentGif } = props;
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setCurrentGif("");
      }}
      className="absolute grid place-items-center size-[30px] rounded-full dark:bg-zinc-950 bg-zinc-200 dark:text-white -top-3 -right-3 border-[5px] dark:border-zinc-800 border-white text-black"
    >
      <p className="text-xs">x</p>
    </div>
  );
};
export default DeleteGifBtn;
