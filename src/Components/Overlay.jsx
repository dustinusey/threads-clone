import { useState } from "react";
import CreatePostModal from "./CreatePostModal";
import GifSelector from "./GifSelector";

const Overlay = (props) => {
  const {
    overlay,
    setOverlay,
    createPost,
    setCreatePost,
    setPosts,
    gif,
    currentGif,
    setCurrentGif,
  } = props;

  const [gifSelectModal, setGifSelectModal] = useState(false);

  return (
    <div
      onClick={() => {
        setOverlay(!overlay);
        // gif.current = "";
        setCurrentGif("");
        setCreatePost(false);
      }}
      className="px-10 py-5 h-screen overflow-hidden bg-black w-full absolute top-0 left-0 bg-opacity-50"
    >
      <div className="min-h-screen grid place-items-center">
        {createPost && (
          <CreatePostModal
            gif={gif}
            currentGif={currentGif}
            setCurrentGif={setCurrentGif}
            setOverlay={setOverlay}
            setCreatePost={setCreatePost}
            setPosts={setPosts}
            gifSelectModal={gifSelectModal}
            setGifSelectModal={setGifSelectModal}
          />
        )}
        {gifSelectModal && (
          <GifSelector
            gif={gif}
            currentGif={currentGif}
            setCurrentGif={setCurrentGif}
            setCreatePost={setCreatePost}
            setGifSelectModal={setGifSelectModal}
          />
        )}
      </div>
    </div>
  );
};
export default Overlay;
