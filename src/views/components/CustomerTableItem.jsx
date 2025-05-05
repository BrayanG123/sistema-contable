import { useNavigate } from "react-router-dom";
import { useCustomerStore } from "../../controllers";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";




export const CustomerTableItem = ( customer ) => {

    const navigate = useNavigate();
    const { activeCustomer, setActiveCustomer, startLoadingCustomers, startDeleteCustomer } = useCustomerStore();

    const [customerDeleteFlag, setCustomerDeleteFlag] = useState(false);
    const [customerEditFlag, setCustomerEditFlag] = useState(false);

    const onClickEdit = () => {
        setActiveCustomer( customer );
        setCustomerEditFlag(true);
    }

    const onClickDelete = () => {
        setActiveCustomer( customer );
        Swal.fire({
            title: "Desea Eliminar?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                setCustomerDeleteFlag(true);              
            }
        });
    }

    useEffect(() => {
        // getCompanyName();
    }, [])
    

    useEffect(() => {
        const manage = async() => {
            if ( activeCustomer && customerDeleteFlag ) {
                const result = await startDeleteCustomer( activeCustomer );
                if ( result ) Swal.fire({ title: "Elminado!", icon: "success", draggable: true });
                // startLoadingCustomers();
                setCustomerDeleteFlag(false);
            }else if ( activeCustomer && customerEditFlag  ) {
                navigate('/app/customer/edit');
                setCustomerEditFlag(false);
            }
        }
        manage();
    }, [activeCustomer, customerDeleteFlag, customerEditFlag])

    return (
        <tr className="border-b hover:bg-gray-100">
            <td className="w-1/12 px-6 py-4 text-center"> { customer.name + ' ' + customer.last_name } </td>
            <td className="w-1/12 px-6 py-4 text-center"> { customer.nit } </td>
            <td className="w-1/12 px-6 py-4 text-center"> { customer.company_name || "Cargando..." } </td>
            <td className="w-2/12 px-6 py-4 text-center"> { customer.email } </td>
            <td className="w-2/12 px-6 py-4 text-center"> { customer.phone_number } </td>
            <td className="w-2/12 px-6 py-4 text-center"> { customer.address } </td>
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
