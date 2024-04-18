import classNames from "classnames";

const MenuItem = (props) => {
  const { icon, active } = props;
  const menuClasses = classNames(
    {
      "text-[#474951] dark:text-zinc-200": active,
    },
    "w-[100px] h-[70px] grid place-items-center rounded-lg hover:bg-zinc-100 hover:dark:bg-zinc-900 hover:dark:text-zinc-300 hover:dark:bg-opacity-50 hover:text-[#474951] cursor-pointer duration-200"
  );
  return <li className={menuClasses}>{icon}</li>;
};
export default MenuItem;
