import PropTypes from "prop-types";

function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <button
      className={`text-base ${
        isActive ? "text-orange-400" : "hover:text-xl text-zinc-500"
      }`}
      {...rest}>
      {title}
    </button>
  );
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default ButtonText;
