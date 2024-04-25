import axios from "axios";
import { useRef, useState } from "react";
import SearchedGifs from "./SearchedGifs";
import TrendingGifs from "./TrendingGifs";

const GifSelector = (props) => {
  const { setCreatePost, setGifSelectModal, gif, currentGif, setCurrentGif } =
    props;

  const [inputVal, setInputVal] = useState("");
  const [showTrendingGifs, setShowTrendingGifs] = useState(true);
  const [showSearchedGifs, setShowSearchedGifs] = useState(false);

  const searchQuery = useRef("");

  const [searchedGifs, setSearchedGifs] = useState("");

  async function getGif(query) {
    let searchQuery = query.replace(/ /g, "+");

    let url = `https://api.giphy.com/v1/gifs/search?api_key=${
      import.meta.env.VITE_GIPHY_API
    }&q=${searchQuery}&limit=10&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`;

    const data = await axios.get(url);
    setSearchedGifs(data.data.data);
  }
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-full max-w-[550px] scale-50 opacity-0 custom-fadein"
    >
      <div className="flex items-center text-white mb-5 relative">
        <button
          onClick={() => {
            setCreatePost(true);
            setGifSelectModal(false);
          }}
          className="ml-5"
        >
          Cancel
        </button>
        <p className=" -translate-x-1/2 -translate-y-1/2 absolute top-[10px] left-1/2">
          Choose a GIF
        </p>
      </div>
      {/* modal */}
      <div className="bg-white dark:bg-zinc-800 min-h-[100px] rounded-2xl border-[1px] border-zinc-700 max-h-[80vh] overflow-auto scrollbar-hide">
        <div className="sticky top-0 z-10 bg-white dark:bg-zinc-800 p-3">
          <input
            onChange={(e) => {
              setInputVal(e.target.value);

              searchQuery.current = e.target.value;
              getGif(searchQuery.current);
              searchQuery.current === ""
                ? setShowTrendingGifs(true)
                : searchedGifs.length > 1
                ? (setShowSearchedGifs(true), setShowTrendingGifs(false))
                : "";
            }}
            className="bg-zinc-200 w-full p-4 rounded-md dark:bg-zinc-700 outline-none text-black dark:text-zinc-300 font-lg"
            type="text"
            placeholder="Search Giphy"
            autoFocus
            value={inputVal}
          />
        </div>

        {showTrendingGifs && (
          <TrendingGifs
            gif={gif}
            currentGif={currentGif}
            setCurrentGif={setCurrentGif}
            setCreatePost={setCreatePost}
            setGifSelectModal={setGifSelectModal}
          />
        )}
        {showSearchedGifs && (
          <SearchedGifs
            gif={gif}
            currentGif={currentGif}
            setCurrentGif={setCurrentGif}
            searchedGifs={searchedGifs}
            setCreatePost={setCreatePost}
            setGifSelectModal={setGifSelectModal}
          />
        )}
      </div>
    </div>
  );
};
export default GifSelector;
