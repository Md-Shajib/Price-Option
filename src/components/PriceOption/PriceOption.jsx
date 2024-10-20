import PropTypes from "prop-types";
import Feature from "./Feature";

const PriceOption = ({ option }) => {
  const { name, features, price } = option;
  return (
    <div className="bg-blue-300 p-6 rounded-2xl flex flex-col">
      <div className="text-center">
        <h2 className="mb-3">
          <span className="text-5xl">{price}$</span>
          <span className="text-2xl"> /m</span>
        </h2>
        <h4 className="text-3xl font-bold">{name}</h4>
      </div>

      <hr className="color-white my-3" />

      <ul className="flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </ul>
      <button className="bg-green-600 w-full py-3 rounded-2xl mt-12 hover:bg-green-700">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};
export default PriceOption;
