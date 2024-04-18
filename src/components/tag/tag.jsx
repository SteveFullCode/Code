import PropTypes from 'prop-types'

const Tag = ({ title }) => {
return(
    <div className='text-xs py-2 px-4 bg-orange-400 mr-2 rounded-lg'>{ title }</div>
)
}

Tag.propTypes = {
 title: PropTypes.string.isRequery
}

export default Tag;