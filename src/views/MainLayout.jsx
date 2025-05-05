import { Outlet } from "react-router-dom"
import { SidebarTotal } from "./components/ui"
import { Navbar } from "./components/ui/NavBar"



export const MainLayout = ( { children } ) => {
 
    return (
                
        <div className="flex">
            <SidebarTotal />

            <div className="bg-slate-200 w-full">
                <Navbar />
                <div className="h-auto">

                    { children }
                </div>
            </div>
        </div>        
    )
}
