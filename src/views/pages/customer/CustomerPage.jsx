



import React, { useEffect } from 'react'
import { useCustomerStore } from '../../../controllers'
import { CustomerTableItem } from '../../components/CustomerTableItem';

export const CustomerPage = () => {

    const { customers, startLoadingCustomers } = useCustomerStore();



    useEffect(() => {
        startLoadingCustomers();
    }, [])  

    return (
        <div className="h-auto w-full flex items-center justify-center bg-blue-100">
            <div className="w-full max-w-8xl mx-auto bg-white rounded-lg shadow-lg p-10 mt-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Lista de Clientes</h2>
                
                <table className="min-w-full bg-white border border-gray-300 rounded-lg ">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="w-1/12 px-5 py-3 text-cente">Nombre</th>
                            <th className="w-1/12 px-5 py-3 text-center">NIT</th>
                            <th className="w-1/12 px-5 py-3 text-center">Empresa</th>
                            <th className="w-2/12 px-5 py-3 text-center">Correo</th>
                            <th className="w-2/12 px-5 py-3 text-center">Telefono</th>
                            <th className="w-2/12 px-5 py-3 text-center">Direccion</th>
                            <th className="w-2/12 px-5 py-3 text-center">Acciones</th>
                        </tr>
                    </thead>
                </table>

                <div className="overflow-y-auto max-h-96">

                    <table className="min-w-full bg-white border border-gray-300">
                        <tbody>

                            {   customers.map( customer => (
                                    <CustomerTableItem 
                                        key={ customer.id }
                                        { ...customer }
                                    />
                                ) )
                            }
                            
                        </tbody>
                    </table>               
                </div>
            </div>
        </div>
    )

}
