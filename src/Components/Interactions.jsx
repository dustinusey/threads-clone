import {
  faArrowsRotate,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Interaction from "./Interaction";
const Interactions = (props) => {
  const { postGif } = props;
  return (
    <div className="ml-4 my-2 py-2 border-l-[2px] border-zinc-200  pl-11 dark:border-zinc-500">
      <img className="w-[125px] rounded-md mb-3" src={postGif} />
      <ul className="flex items-center gap-3 text-zinc-400 dark:text-zinc-500 ">
        <Interaction icon={<FontAwesomeIcon icon={faHeart} />} />
        <Interaction icon={<FontAwesomeIcon icon={faComment} />} />
        <Interaction icon={<FontAwesomeIcon icon={faArrowsRotate} />} />
        <Interaction icon={<FontAwesomeIcon icon={faPaperPlane} />} />
      </ul>
    </div>
  );
};
export default Interactions;
