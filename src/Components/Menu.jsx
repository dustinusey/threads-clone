import {
  faHeart,
  faHouse,
  faMagnifyingGlass,
  faPenToSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <ul className="text-[#B3B3B3] dark:text-[#4E5256] flex justify-center items-center text-2xl">
      <MenuItem icon={<FontAwesomeIcon icon={faHouse} />} active={true} />
      <MenuItem
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        active={false}
      />
      <MenuItem
        icon={<FontAwesomeIcon icon={faPenToSquare} />}
        active={false}
      />
      <MenuItem icon={<FontAwesomeIcon icon={faHeart} />} active={false} />
      <MenuItem icon={<FontAwesomeIcon icon={faUser} />} active={false} />
    </ul>
  );
};
export default Menu;
