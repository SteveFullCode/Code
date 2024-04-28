import PropTypes from "prop-types";

const Button = ({ title, loading = false, ...rest }) => {
  return (
    <button
      className={`bg-orange-400 w-full h-12 px-4 mt-4 rounded-lg font-normal cursor-pointer ${
        loading ? "disabled:opacity-70" : ""
      }`}
      disabled={loading}
      {...rest}>
      {loading ? "Carregando..." : title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default Button;
