import Gif from "./Gif";

const SearchedGifs = (props) => {
  const {
    searchedGifs,
    img,
    gif,
    currentGif,
    setCurrentGif,
    setGifSelectModal,
    setCreatePost,
  } = props;

  return (
    <div className="flex flex-wrap p-3 gif-container">
      {searchedGifs.map((gif, index) => {
        return (
          <Gif
            key={index}
            img={gif.images.original.url}
            gif={gif}
            setCurrentGif={setCurrentGif}
            setGifSelectModal={setGifSelectModal}
            setCreatePost={setCreatePost}
          />
        );
      })}
    </div>
  );
};
export default SearchedGifs;
