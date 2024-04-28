import PropTypes from "prop-types";

const Tag = ({ title, ...rest }) => {
  return (
    <div className="text-xs py-2 px-4 bg-orange-400 mr-2 rounded-lg" {...rest}>
      {title}
    </div>
  );
};

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Tag;
