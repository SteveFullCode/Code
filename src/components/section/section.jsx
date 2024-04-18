import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return(
    <section>
      <h2 className='border-b py-8 border-zinc-700 text-zinc-400'>{title}</h2>
      {children}
    </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Section;