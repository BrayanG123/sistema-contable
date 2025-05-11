import { MoreVertical, AlignJustify } from "lucide-react"

import { createContext, useState } from "react"


export const SidebarContext = createContext();

export const Sidebar = ( { children } ) => {

    const [expanded, setExpanded] = useState(true);

    return (
        <aside className={`transition-all duration-300 ${expanded ? "w-64" : "w-16"} bg-white border-r shadow-sm flex flex-col`}>
            <nav className="h-full flex flex-col flex-1 bg-white border-r shadow-sm">

                <div className="p-4 pb-2 flex justify-between items-center">
                    {/* <img src="https://logoipsum.com/artwork/369" 
                        className={` overflow-hidden transition-all ${ expanded? "w-32" : "w-0" }`} 
                        alt="" 
                    /> */}
                    <button onClick={() => setExpanded( (curr) => !curr ) } 
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100" 
                    >
                         <AlignJustify /> 
                    </button>
                </div>

                <SidebarContext.Provider value={ { expanded } }>
                    <ul className="flex-1 px-3"> { children } </ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff" 
                        className="w-10 h-10 rounded-md"
                        alt="" 
                    />
                    <div className={`
                        flex justify-between items-center
                        overflow-hidden transition-all ${ expanded? "w-52 ml-3" : "w-0" }
                    `}>
                        <div className="leading-4">
                            <h4 className="font-semibold">Usuario</h4>
                            <span className="text-xs text-gray-600">brayan@gmail.com</span>
                        </div>
                        <MoreVertical size={20}/>
                    </div>
                </div>

            </nav>
        </aside>
    )


}
