import axios from "axios";
import { useEffect, useState } from "react";
import Gif from "./Gif";

const TrendingGifs = () => {
  const [trendingGifs, setTrendingGifs] = useState([]);
  useEffect(() => {
    getTrendingGifs();
  }, []);

  async function getTrendingGifs() {
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${
      import.meta.env.VITE_GIPHY_API
    }&limit=10&offset=0&rating=pg&bundle=messaging_non_clips`;

    let data = await axios.get(url);
    setTrendingGifs(data.data.data);
  }

  return (
    <div className="flex flex-wrap p-3 gif-container">
      {trendingGifs.map((gif, index) => {
        return <Gif key={index} gif={gif.images.original.url} />;
      })}
    </div>
  );
};
export default TrendingGifs;
