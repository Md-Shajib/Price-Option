import PropTypes from "prop-types";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const Feature = ({feature}) => {
    return (
        <li className="flex items-center leading-7">
            <IoMdCheckmarkCircleOutline />
            <span className="ml-3">{feature}</span>
        </li>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired,
}
export default Feature;