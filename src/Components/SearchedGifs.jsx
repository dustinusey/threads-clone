import Gif from "./Gif";

const SearchedGifs = (props) => {
  const { searchedGifs } = props;

  return (
    <div className="flex flex-wrap p-3 gif-container">
      {searchedGifs.map((gif, index) => {
        return <Gif key={index} gif={gif.images.original.url} />;
      })}
    </div>
  );
};
export default SearchedGifs;
