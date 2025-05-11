import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useUserStore } from "../../controllers";




export const UserTableItem = ( user ) => {
      
    const navigate = useNavigate();
    const { activeUser, setActiveUser, startDeleteUser } = useUserStore();

    const [userDeleteFlag, setUserDeleteFlag] = useState(false);
    const [userEditFlag, setUserEditFlag] = useState(false);

    const onClickEdit = () => {
        // console.log(user);
        // return;
        setActiveUser( user );
        setUserEditFlag(true);
    }

    const onClickDelete = () => {
        setActiveUser( user );
        Swal.fire({
            title: "Desea Eliminar?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                setUserDeleteFlag(true);              
            }
        });
    }

    useEffect(() => {
        const manage = async() => {
            if ( activeUser && userDeleteFlag ) {
                const result = await startDeleteUser( activeUser );
                if ( result ) Swal.fire({ title: "Elminado!", icon: "success", draggable: true });
                setUserDeleteFlag(false);
            }else if ( activeUser && userEditFlag  ) {
                navigate('/app/user/edit');
                setUserEditFlag(false);
            }
        }
        manage();
    }, [activeUser, userDeleteFlag, userEditFlag])

    return (
        <tr className="border-b hover:bg-gray-100">
            <td className="w-2/12 px-6 py-4 text-center"> { user.name + ' ' + user.last_name } </td>
            <td className="w-1/12 px-6 py-4 text-center"> { user.company_name || "Cargando..." } </td>
            <td className="w-1/12 px-6 py-4 text-center"> { user.role } </td>
            <td className="w-1/12 px-6 py-4 text-center"> { user.email } </td>
            <td className="w-1/12 px-6 py-4 text-center"> { user.status } </td>
            <td className="w-2/12 px-6 py-4 text-center"> { user.phone_number } </td>
            <td className="w-2/12 px-6 py-4 text-center">
                <button className="px-4 py-2 stroke-c text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                    onClick={ onClickEdit }
                >
                    Editar
                </button>
                <button type="button" className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md ml-2"
                    onClick={ onClickDelete }
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )

    
}
