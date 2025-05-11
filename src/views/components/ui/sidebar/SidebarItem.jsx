import { useContext, useEffect, useRef, useState } from "react"

import { SidebarContext } from './Sidebar' 
import { Link } from "react-router-dom";


export const SidebarItem = ( { icon, text, active, alert, subItems } ) => {

    const { expanded } = useContext(SidebarContext);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const timeoutRef = useRef(null);
    const menuRef = useRef(null);

    // Cierra el submenú con retraso
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
        setShowSubmenu(false);
        }, 200); // 300ms de tolerancia
    };

    // Cancela el cierre si el mouse entra al submenú
    const handleMouseEnterSubmenu = () => {
        clearTimeout(timeoutRef.current);
    };

    // Limpia el timeout al desmontar
    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);


    return (
       
        <div className="relative"
                ref={ menuRef }
                onMouseEnter={ () => {
                    clearTimeout( timeoutRef.current );
                    setShowSubmenu(true);
                } }
                onMouseLeave={ handleMouseLeave }
        >
            
            <li className={`relative flex items-center py-2 px-3 my-1
                            font-medium rounded-md cursor-pointer
                            transition-colors group 
                            ${  active
                                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                                : "hover:bg-indigo-300 hover:text-white text-gray-600"  } `}              
            >

                { icon }    
                <span className={`overflow-hidden transition-all ${ expanded? "w-52 ml-3" : "w-0" }`}> { text } </span>
                
                { alert && (<div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded? "": "top-2"}`}/>) }
                
                { !expanded && (<div className={`absolute left-full rounded-md px-2 py-1 ml-6 
                                                bg-indigo-100 text-indigo-800 text-sm
                                                invisible opacity-20 -translate-x-3 transition-all
                                                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                                                `}> { text }   </div> )
                }
            </li>
                {/* Submenu lateral (aparece a la derecha) */}
                {showSubmenu && subItems && (
                    <div className=" absolute left-full top-0 ml-1
                                    bg-white shadow-lg rounded-md border border-gray-200
                                    z-50 min-w-[120px] "
                        onMouseEnter={ handleMouseEnterSubmenu }
                        onMouseLeave={ handleMouseLeave } 
                    >
                        {subItems.map((item, index) => (
                            
                            <div key={index}
                                className=" p-2 hover:bg-indigo-100 text-gray-700 whitespace-nowrap"

                            > <Link to="/app/user">{item.label}</Link>  </div> )
                            )
                        }
                    </div> )
                }
                
            {/* </li> */}
        </div>
    )
}
