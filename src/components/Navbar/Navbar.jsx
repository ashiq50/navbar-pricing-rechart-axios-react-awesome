import PropTypes from "prop-types";

const Navbar = ({ route }) => {
  return (
    <li className="mr-12 hover:bg-pink-500 px-2 rounded-md">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Navbar.propTypes = {
  route: PropTypes.object.isRequired,
};
export default Navbar;
