import { Bell, LogOutIcon } from 'lucide-react';
import { useAuthStore } from '../../../controllers';


export const NavbarTop = () => {

  const { user, startLogout } = useAuthStore();

  return (
    <nav className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">

      <div className="font-bold text-indigo-600">Sistema Contable</div>
      {/* Contenedor de acciones */}
      <div className="flex items-center gap-4">
        {user && ( <span className="text-gray-700 hidden sm:inline">  {user.username} </span> )}

        <button onClick={() => console.log("Botón 2 clickeado")} 
              className="px-3 py-1  text-indigo-700 rounded-md hover:bg-indigo-200 transition" >
          <Bell/>
        </button>

        {user && (
          <button onClick={ startLogout } 
                  className="px-3 py-1 text-red-600 rounded-md hover:bg-red-200 transition" > 
            <LogOutIcon/>
          </button>
        )}
      </div>
    </nav>
  );
};