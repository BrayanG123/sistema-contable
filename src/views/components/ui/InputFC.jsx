import PropTypes from 'prop-types';




export const InputFC = ( props ) => {
    return (
        <input className="
            mt-1 block w-full px-4 py-2 border 
            border-gray-300 rounded-md shadow-sm 
            focus:ring-indigo-500 
            focus:border-indigo-500
            "       
            { ...props }   
            type={ props.type || 'text' }
        />
    )
}

InputFC.propTypes = {

    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    
};
