import { useEffect, useState } from "react";
import { useCompanyStore } from "../../controllers"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";





export const CompanyTableItem = ( company ) => {

    const { activeCompany, startDeleteCompany, setActiveCompany, startUpdateCompany } = useCompanyStore();
    const navigate = useNavigate();

    const [editFlag, setEditFlag] = useState(false); //bandera editar
    const [deleteFlag, setDeleteFlag] = useState(false); //bandera eliminar


    const onClickEdit = () => {
        setEditFlag(true);
        setActiveCompany( company );
    }

    const onClickDelete = () => {
        setActiveCompany( company );
        Swal.fire({
            title: "Desea Eliminar?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar"
          }).then((result) => {
            if (result.isConfirmed) {
                setDeleteFlag(true);               
            }
          });
    }

    useEffect(() => {   

        const manage = async() => {
            if ( deleteFlag && activeCompany ) {
                const result = await startDeleteCompany( activeCompany.id );
                if (result) Swal.fire({ title: "Elminado!", icon: "success", draggable: true });
                setDeleteFlag(false);
            }else if (editFlag && activeCompany) {
                navigate('/admin/company/edit');
                setEditFlag(false);
            }
        }
        manage();

    }, [activeCompany, deleteFlag, editFlag])
    

    return (

        <tr className="border-b hover:bg-gray-100">
            <td className="w-1/12 px-6 py-4 text-center"> { company.name } </td>
            <td className="w-1/12 px-6 py-4 text-center"> { company.nit } </td>
            <td className="w-2/12 px-6 py-4 text-center"> { company.address } </td>
            <td className="w-1/12 px-6 py-4 text-center"> { company.phone_number } </td>
            <td className="w-2/12 px-6 py-4 text-center"> { company.email } </td>
            <td className="w-2/12 px-6 py-4 text-center">
                <button className="px-4 py-2 stroke-c text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                    onClick={ onClickEdit }
                >
                    Editar
                </button>
                <button className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md ml-2"
                    onClick={ onClickDelete }
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )

}
