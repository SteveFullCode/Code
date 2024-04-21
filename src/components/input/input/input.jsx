import PropTypes from 'prop-types';

export default function Input({ icon: Icon, ...rest }) {
    return (
        <div className='relative flex items-center'>
            {Icon && <Icon className='absolute left-3 text-zinc-400' size={20}/>} 
            <input {...rest} className='w-full h-14 rounded-xl bg-zinc-900 p-3 pl-10 border-none text-white'/> 
        </div>
    );
}

Input.propTypes = {
    icon: PropTypes.elementType
};

