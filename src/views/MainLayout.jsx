import { Outlet } from "react-router-dom"
import { SidebarTotal } from "./components/ui"



export const MainLayout = ( { children } ) => {
 
    return (
        <div className="flex">
            <SidebarTotal />

            <div className="bg-slate-200 w-full">
                { children }
            </div>
        </div>
    )
}
