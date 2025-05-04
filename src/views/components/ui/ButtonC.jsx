


export const ButtonC = ( { children, bgColor='bg-indigo-600', hoverColor='hover:bg-indigo-500', ...props } ) => {

    return (

        <button 
            className={ `
                
                flex w-1/2 justify-center rounded-md 
                px-3 py-1.5 text-sm/6 font-semibold 
                text-white shadow-xs 
                ${ bgColor }
                ${hoverColor} focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-indigo-600
            ` }
            {...props}    
        >
            { children }
        </button >
                       
    )
}
