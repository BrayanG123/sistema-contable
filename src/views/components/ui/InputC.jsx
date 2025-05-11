import PropTypes from 'prop-types';



export const InputC = ( props ) => {

    return (
        <input 
            className={`
                bg-white 
                outline-gray-300 
                placeholder:text-gray-400 
                 border border-gray-300 
                text-gray-900 outline-1 -outline-offset-1 
                focus:outline-indigo-600 
                block w-full rounded-md 
                px-3 py-1.5 text-base 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 
                sm:text-sm/6
                ${props.className || ''}
            `}
                
            { ...props }
            type={ props.type || 'text' }
            // value={ props.value || '' }
        />                   
    )
}

// Especificar las propiedades esperadas
InputC.propTypes = {

    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    // Puedes agregar otros props que el input necesite aquí
};