import PropTypes from "prop-types";

export default function TextArea({ value, placeholder, ...rest }) {
  return (
    <textarea
      {...rest}
      className="w-full h-40 bg-zinc-900 border-none resize-none mb-2 rounded-xl p-4 placeholder:text-zinc-400"
      value={value}
      placeholder={placeholder}
    />
  );
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
