import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useSupplierStore } from "../../controllers/supplier/useSupplierStore";
import Swal from "sweetalert2";
import { useCompanyStore } from "../../controllers/company/useCompanyStore";





export const SupplierTableItem = ( supplier ) => {

    const navigate = useNavigate();
    const { activeSupplier, setActiveSupplier, startDeleteSupplier } = useSupplierStore();
    const { startGetCompanyById } = useCompanyStore();

    const [supplierDeleteFlag, setSupplierDeleteFlag] = useState(false);
    const [supplerEditFlag, setSupplerEditFlag] = useState(false);
    const [companyName, setCompanyName] = useState(null);

    const getCompanyName = async() => {
        if ( supplier ) {
            const company = await startGetCompanyById( supplier.company_id );
            console.log(company.name)
            setCompanyName( company.name )
        }
    }

    const onClickEdit = () => {
        setActiveSupplier( supplier );
        setSupplerEditFlag(true);
    }

    const onClickDelete = () => {
        setActiveSupplier( supplier );
        Swal.fire({
            title: "Desea Eliminar?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                setSupplierDeleteFlag(true);              
            }
        });
    }

    useEffect(() => {
        getCompanyName();
    }, [])
    

    useEffect(() => {
        const manage = async() => {
            if ( activeSupplier && supplierDeleteFlag ) {
                const result = await startDeleteSupplier( activeSupplier );
                if ( result ) Swal.fire({ title: "Elminado!", icon: "success", draggable: true });
                setSupplierDeleteFlag(false);
            }else if ( activeSupplier && supplerEditFlag  ) {
                navigate('/app/supplier/edit');
                setSupplerEditFlag(false);
            }
        }
        manage();
    }, [activeSupplier, supplierDeleteFlag, supplerEditFlag])
    

    return (

        <tr className="border-b hover:bg-gray-100">
            <td className="w-1/12 px-6 py-4 text-center"> { supplier.name } </td>
            <td className="w-1/12 px-6 py-4 text-center"> { supplier.nit } </td>
            <td className="w-1/12 px-6 py-4 text-center"> { companyName || "Cargando..." } </td>
            <td className="w-2/12 px-6 py-4 text-center"> { supplier.address } </td>
            <td className="w-2/12 px-6 py-4 text-center"> { supplier.email } </td>
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
