import PropTypes from "prop-types";

const Link = ({route}) => {
    const {component, path} = route;
    return (
        <li className="px-5 py-2 hover:bg-gray-400"><a className="px-3 py-2" href={path}>{component}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object,
}
export default Link;