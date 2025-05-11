import React, { useEffect } from 'react'

import { ButtonC } from '../../components/ui'
import { useUserStore } from '../../../controllers/user/useUserStore'
import { UserTableItem } from '../../components/UserTableItem'




export const UserPage = () => {

    const { users, startLoadingUsers } = useUserStore();


    const onClickCreate = () => {
        console.log('creando')
    }

    useEffect(() => {
        startLoadingUsers();
    }, [])
    

    return (
        <div className="h-auto w-full flex items-center justify-center bg-blue-100">
            <div className="w-full max-w-8xl mx-auto bg-white rounded-lg shadow-lg p-10 mt-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Lista de Usuarios</h2>
                
                <table className="min-w-full bg-white border border-gray-300 rounded-lg ">
                    <thead className="bg-indigo-400 text-white">
                        <tr>
                            <th className="w-2/12 px-5 py-3 text-center ">Nombre</th>
                            <th className="w-1/12 px-5 py-3 text-center ">Empresa</th>
                            <th className="w-1/12 px-5 py-3 text-center">Rol</th>
                            <th className="w-1/12 px-5 py-3 text-center">Correo</th>
                            <th className="w-1/12 px-5 py-3 text-center">Status</th>
                            <th className="w-2/12 px-5 py-3 text-center">Telefono</th>
                            <th className="w-2/12 px-5 py-3 text-center">Acciones</th>
                        </tr>
                    </thead>
                </table>

                <div className="overflow-y-auto max-h-96">

                    <table className="min-w-full bg-white border border-gray-300">
                        <tbody>
                          
                            {   users.map( user => (
                                    <UserTableItem 
                                        key={ user.id }
                                        { ...user }
                                    />
                                ) )
                            }
                            
                        </tbody>
                    </table>               
                </div>
                <div className='mt-5 w-1/3'>
                    <ButtonC onClick={ onClickCreate } > Crear nuevo </ButtonC>
                </div>
            </div>
        </div>
    )
    
}
