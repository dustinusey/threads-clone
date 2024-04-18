import { faHashtag, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PostBtn from "./PostBtn";

const CreatePostModal = (props) => {
  const { setPosts, setCreatePost, gifSelectModal, setGifSelectModal } = props;
  const [postVal, setPostVal] = useState("");
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-full max-w-[650px] scale-50 opacity-0 custom-fadein"
    >
      <p className="dark:text-white mb-5 text-center">New thread</p>
      {/* modal */}
      <div className="dark:bg-zinc-800 min-h-[100px] rounded-2xl border-[1px] border-zinc-700 p-6">
        {/* header */}
        <div className="flex items-center">
          {/* userimage */}
          <div className="dark:bg-zinc-600 min-h-[50px] min-w-[50px] rounded-full mr-3"></div>

          <div className="w-full">
            <p className="text-white">username</p>
            <input
              onChange={(e) => {
                setPostVal(e.target.value);
              }}
              value={postVal}
              className="bg-transparent outline-none font-light text-white text-lg w-full"
              type="text"
              placeholder="Start a thread..."
              autoFocus
            />
          </div>
        </div>

        {/* options */}
        <ul className="my-5 py-2 border-l-[2px] border-zinc-600 pl-5 ml-[25px] flex items-center gap-4 text-[#767D83] text-[20px] cursor-pointer">
          {/* heart */}
          <li>
            <FontAwesomeIcon icon={faImages} />
          </li>
          {/* gif */}
          <li
            onClick={() => {
              setCreatePost(false);
              setGifSelectModal(true);
              console.log("generating gifs");
            }}
          >
            <svg
              className="size-[20px]"
              viewBox="0 0 113 113"
              xmlns="http://www.w3.org/2000/svg"
              fill="#767D83"
            >
              <path d="M16.1429 12.1071C13.9232 12.1071 12.1071 13.9232 12.1071 16.1429V96.8571C12.1071 99.0768 13.9232 100.893 16.1429 100.893H72.6429V80.7143C72.6429 76.2498 76.2498 72.6429 80.7143 72.6429H100.893V16.1429C100.893 13.9232 99.0768 12.1071 96.8571 12.1071H16.1429ZM72.6429 113H16.1429C7.23906 113 0 105.761 0 96.8571V16.1429C0 7.23906 7.23906 0 16.1429 0H96.8571C105.761 0 113 7.23906 113 16.1429V72.6429V74.0301C113 78.3181 111.31 82.4295 108.283 85.4562L85.4562 108.283C82.4295 111.31 78.3181 113 74.0301 113H72.6429Z" />
              <path d="M41.2905 67.8844C39.3054 67.8844 37.6003 67.6147 36.1751 67.0751C34.7499 66.5458 33.6046 65.8332 32.7393 64.9373C31.8741 64.0415 31.2734 63.049 30.9375 61.9597L35.9155 60.7534C36.1394 61.2115 36.4652 61.6645 36.8928 62.1124C37.3203 62.5705 37.8955 62.9472 38.6183 63.2424C39.3512 63.5478 40.2725 63.7005 41.3821 63.7005C42.9498 63.7005 44.2478 63.3187 45.2759 62.5552C46.3041 61.8019 46.8182 60.56 46.8182 58.8294V54.3859H46.5433C46.2583 54.9559 45.8409 55.5413 45.2912 56.1419C44.7517 56.7425 44.034 57.2464 43.1381 57.6536C42.2525 58.0608 41.1378 58.2644 39.794 58.2644C37.9922 58.2644 36.3583 57.8419 34.8924 56.997C33.4367 56.1419 32.2762 54.8694 31.4109 53.1795C30.5558 51.4795 30.1282 49.3519 30.1282 46.7967C30.1282 44.2212 30.5558 42.0478 31.4109 40.2765C32.2762 38.495 33.4418 37.1462 34.9077 36.23C36.3736 35.3036 38.0075 34.8404 39.8093 34.8404C41.1836 34.8404 42.3136 35.0745 43.1992 35.5428C44.0951 36.0009 44.8076 36.5557 45.337 37.2072C45.8664 37.8486 46.2685 38.4543 46.5433 39.0243H46.8487V35.1458H52.3001V58.9821C52.3001 60.9875 51.8216 62.6469 50.8647 63.9601C49.9078 65.2733 48.5997 66.2556 46.9403 66.9072C45.281 67.5587 43.3977 67.8844 41.2905 67.8844ZM41.3363 53.9278C42.507 53.9278 43.5046 53.6427 44.3292 53.0726C45.1538 52.5026 45.7798 51.6831 46.2074 50.6142C46.6349 49.5453 46.8487 48.2626 46.8487 46.7662C46.8487 45.2901 46.6349 43.9972 46.2074 42.8876C45.79 41.778 45.169 40.9178 44.3445 40.307C43.5301 39.686 42.5273 39.3756 41.3363 39.3756C40.1045 39.3756 39.0764 39.6962 38.2518 40.3376C37.4272 40.9789 36.8062 41.8595 36.3888 42.9792C35.9715 44.0889 35.7628 45.3512 35.7628 46.7662C35.7628 48.2015 35.9715 49.4588 36.3888 50.5378C36.8164 51.6067 37.4425 52.4415 38.267 53.0421C39.1018 53.6325 40.1249 53.9278 41.3363 53.9278ZM57.9652 58.6003V35.1458H63.4929V58.6003H57.9652ZM60.7443 31.817C59.8688 31.817 59.1155 31.5268 58.4844 30.9466C57.8532 30.3561 57.5376 29.6486 57.5376 28.8241C57.5376 27.9893 57.8532 27.2818 58.4844 26.7015C59.1155 26.1111 59.8688 25.8159 60.7443 25.8159C61.63 25.8159 62.3833 26.1111 63.0043 26.7015C63.6354 27.2818 63.951 27.9893 63.951 28.8241C63.951 29.6486 63.6354 30.3561 63.0043 30.9466C62.3833 31.5268 61.63 31.817 60.7443 31.817ZM81.0571 35.1458V39.4214H67.192V35.1458H81.0571ZM70.6583 58.6003V32.9317C70.6583 31.3538 70.984 30.0406 71.6356 28.992C72.2973 27.9435 73.1829 27.1596 74.2925 26.6405C75.4021 26.1213 76.6339 25.8617 77.9878 25.8617C78.9448 25.8617 79.7948 25.9381 80.5379 26.0908C81.281 26.2435 81.8308 26.3809 82.1871 26.503L81.0876 30.7786C80.8535 30.7073 80.5583 30.6361 80.202 30.5648C79.8457 30.4834 79.4487 30.4427 79.0109 30.4427C77.9827 30.4427 77.2549 30.6921 76.8273 31.1909C76.4099 31.6795 76.2013 32.3819 76.2013 33.2981V58.6003H70.6583Z" />
            </svg>
          </li>
          {/* repost */}
          <li>
            <FontAwesomeIcon icon={faHashtag} />
          </li>
          {/* share */}
          <li>
            <svg
              className="size-[20px]"
              viewBox="0 0 111 95"
              fill="#767D83"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="39.5829" width="110.833" height="15.8333" rx="7.91665" />
              <rect width="55.4165" height="15.8333" rx="7.91665" />
              <rect y="79.1667" width="87.0831" height="15.8333" rx="7.91665" />
            </svg>
          </li>
        </ul>

        {/* extra threads */}
        <div className="ml-3  flex items-center  disabled">
          <div className="dark:bg-zinc-600 min-h-[30px] min-w-[30px] rounded-full mr-3"></div>
          <input
            className="bg-transparent"
            type="text"
            placeholder="Add to thread"
          />
        </div>
        {/* post section */}

        <div className="flex justify-between items-center mt-10">
          <p className="text-zinc-500 ml-2">Anyone can reply</p>
          <PostBtn
            onClick={() => {
              setPosts((prevPosts) => [...prevPosts, postVal]);
              setCreatePost(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default CreatePostModal;
