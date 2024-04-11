const MenuItem = (props) => {
  const { icon, active } = props;
  return <li className={active ? "text-white" : ""}>{icon}</li>;
};
export default MenuItem;
