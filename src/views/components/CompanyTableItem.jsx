




export const CompanyTableItem = ( company ) => {




    return (

        <tr className="border-b hover:bg-gray-100">
            <td className="w-1/12 px-6 py-4 text-center"> { company.nombre } </td>
            <td className="w-1/12 px-6 py-4 text-center"> { company.nit } </td>
            <td className="w-2/12 px-6 py-4 text-center"> { company.direccion } </td>
            <td className="w-1/12 px-6 py-4 text-center"> { company.telefono } </td>
            <td className="w-2/12 px-6 py-4 text-center"> { company.correo } </td>
            <td className="w-2/12 px-6 py-4 text-center">
                <button className="px-4 py-2 stroke-c text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                    Ver
                </button>
                <button className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md ml-2">
                    Eliminar
                </button>
            </td>
        </tr>
    )

}
