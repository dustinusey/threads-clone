import DeleteGifBtn from "./DeleteGifBtn";

const SelectedGif = (props) => {
  const { img, setGifSelectModal, setCreatePost, setCurrentGif } = props;
  return (
    <div
      onClick={() => {
        setCreatePost(false);
        setGifSelectModal(true);
      }}
      className="w-[75px] cursor-pointer relative"
    >
      <img className="mb-3 w-full rounded-md" src={img} />
      <DeleteGifBtn setCurrentGif={setCurrentGif} />
    </div>
  );
};
export default SelectedGif;
