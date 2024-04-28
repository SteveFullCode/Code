import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section className="h-full overflow-y-auto">
      <h2 className="border-b pt-8 pb-3 border-zinc-700 text-zinc-400 mb-9">
        {title}
      </h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
