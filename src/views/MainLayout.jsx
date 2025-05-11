import { SidebarTotal } from "./components/ui"
import { NavbarTop } from "./components/ui/NavbarTop"
import { Navbar } from "./components/ui/Navbar"



export const MainLayout = ( { children } ) => {
 
    return (
                
        <div className="flex">
            <SidebarTotal />

            <div className="bg-slate-200 w-full">
                <NavbarTop />
                <Navbar />
                <div className="h-auto">

                    { children }
                </div>
            </div>
        </div>        
    )
}
