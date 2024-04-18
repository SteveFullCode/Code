import propTypes from 'prop-types'

function ButtonText({ title, ...rest }){
    return(
        <button className='text-orange-400 text-base'
        {...rest}
        >
            { title }
        </button>
    )
}

ButtonText.propTypes= {
    title: propTypes.string.isRequired
}

export default ButtonText;