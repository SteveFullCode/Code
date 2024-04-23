import PropTypes from 'prop-types';

const Button = ({ title, loading=false }) => {
  return (
  
    <button
      className={`bg-orange-400 w-full h-12 px-4 mt-4 rounded-lg font-normal cursor-pointer ${
        loading ? 'disabled:opacity-70' : ''
      }`}
      disabled={loading}
    >
      {loading ? "Carregando..." : title}
    </button>
 
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Button;