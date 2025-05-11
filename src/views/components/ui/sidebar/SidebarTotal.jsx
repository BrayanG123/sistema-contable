

import {
    LifeBuoy,
    Receipt,
    Boxes,
    Package,
    UserCircle,
    LayoutDashboard,
    Settings,
    Users2,
    BookUp,
} from "lucide-react"
import { Sidebar } from "./Sidebar"
import { SidebarItem } from "./SidebarItem"
import { Link } from "react-router-dom"

export const SidebarTotal = () => {
    return (
        // <h5>ProductPage</h5>
        <div className="flex min-h-screen">
            <Sidebar>
                {/* <Link> */}
                    <SidebarItem 
                        icon={<LayoutDashboard size={20} />} 
                        text="Dashboard" 
                        subItems={[ "Opcion 1", "Opcion 2" ]}                       
                    >   
                    </SidebarItem>
                {/* </Link> */}
                {/* <Link to='/app/suppliers'> */}
                    <SidebarItem 
                        icon={<Receipt size={20} />} 
                        text="Ventas"
                        subItems={ [
                            { label: "Ventas", path: "/app/company"},
                            { label: "Facturas", path: "/app/suppliers"},
                        ] } 
                    >   </SidebarItem>
                {/* </Link> */}
                <Link>
                    <SidebarItem icon={<BookUp size={20} />} text="Gastos" >   </SidebarItem>
                </Link>
                <Link to='/app/supplier'>
                    <SidebarItem icon={<Boxes size={20} />} text="Proveedores" >  </SidebarItem>
                </Link>
                {/* <Link to="/app/company">
                    <SidebarItem icon={<LayoutDashboard size={20} />} text="Empresas" >  </SidebarItem>
                </Link> */}
                <Link to="/app/user">
                    <SidebarItem icon={<Users2 size={20} />}  text="Usuarios" > </SidebarItem>
                </Link>
                <Link to='/app/customer'>
                    <SidebarItem icon={<UserCircle size={20} />} text="Clientes" >      </SidebarItem>
                </Link>
                <SidebarItem icon={<Package size={20} />}    text="En construccion" >     </SidebarItem>         
                <hr className="my-3"/>
                <SidebarItem icon={<Settings size={20} />}   text="En construccion" >   </SidebarItem>
                <SidebarItem icon={<LifeBuoy size={20} />}   text="En construccion" >       </SidebarItem>
            </Sidebar>
        </div>
    )
}
