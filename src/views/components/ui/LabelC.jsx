


export const LabelC = ( { children, ...props } ) => {

    return (
        <label 
            className="block text-sm font-medium text-gray-900"
            { ...props }
        >
            { children } 
        </label>                    
    )
}
