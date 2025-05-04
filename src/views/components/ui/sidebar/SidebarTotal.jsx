

import {
    LifeBuoy,
    Receipt,
    Boxes,
    Package,
    UserCircle,
    BarChart3,
    LayoutDashboard,
    Settings,
} from "lucide-react"
import { Sidebar } from "./Sidebar"
import { SidebarItem } from "./SidebarItem"

export const SidebarTotal = () => {
    return (
        // <h5>ProductPage</h5>
        <div className="flex min-h-screen">
            <Sidebar>
                <SidebarItem icon={<LayoutDashboard size={20} />} text="En construccion" >  </SidebarItem>
                <SidebarItem icon={<BarChart3 size={20} />}  text="En construccion" > </SidebarItem>
                <SidebarItem icon={<UserCircle size={20} />} text="En construccion" >      </SidebarItem>
                <SidebarItem icon={<Boxes size={20} />}      text="En construccion" >  </SidebarItem>
                <SidebarItem icon={<Package size={20} />}    text="En construccion" >     </SidebarItem>
                <SidebarItem icon={<Receipt size={20} />}    text="En construccion" >   </SidebarItem>
                <hr className="my-3"/>
                <SidebarItem icon={<Settings size={20} />}   text="En construccion" >   </SidebarItem>
                <SidebarItem icon={<LifeBuoy size={20} />}   text="En construccion" >       </SidebarItem>
            </Sidebar>
        </div>
    )
}
