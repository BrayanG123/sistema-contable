import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputFC } from "../../components/ui/InputFC"
import { LabelC, ButtonC } from "../../components/ui"
import { useForm } from "../../../helpers/useForm";
import { useCompanyStore, useUserStore } from "../../../controllers";
import Swal from "sweetalert2";




export const EditUserPage = () => {

    const navigate = useNavigate();

    const { activeUser, startLoadingUsers, startUpdateUser, setActiveUser } = useUserStore();
    const { name, last_name, role, company, state, email, phone_number, onInputChange, setFormState } = useForm( activeUser );
    const { companies, startLoadingCompanies, startGetCompanyById } = useCompanyStore(); 

    const [nombreEmpresa, setNombreEmpresa] = useState(null);
    
    
    useEffect(() => {
        if ( activeUser && companies) {
            setFormState( { ...activeUser } );
        }
    }, [activeUser]); 

    const saveChangesSubmit = async( event ) => {
        event.preventDefault();
        // console.log({ name, last_name, role, company_id: company, state, email, phone_number });
        // return;
        const result = await startUpdateUser( activeUser.id, { name, last_name, role, company_id: company, state, email, phone_number } );
        if (result) {
            startLoadingUsers();
            Swal.fire({ title: "Realizado!", icon: "success", draggable: true });
        } 
    }

    const onClickBack = () => {
        setActiveUser(null);
        navigate(-1);
    }

    const getNombreEmpresa = async() => {
        if ( activeUser ) {
            const company = await startGetCompanyById( activeUser.company_id );
            setNombreEmpresa( company.nombre );
        }
    }

    useEffect(() => {
        startLoadingCompanies();
        getNombreEmpresa();
    }, [])

    return (
        <div className="min-h-full w-full flex items-center justify-center bg-indigo-100">
        
            <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10 my-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Editar datos Usuario</h2>
                
                <form onSubmit={ saveChangesSubmit }>

                    <div className="row mb-4 flex">  
                        <div className="w-1/2 ">
                            <LabelC> Nombres </LabelC>
                            <InputFC name="name" value={name} type="text" required 
                                placeholder="Nombre Cliente" onChange={ onInputChange }
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <LabelC> Apellidos </LabelC>
                                <InputFC name="last_name" value={last_name} type="text" required 
                                    placeholder="Apellidos" onChange={ onInputChange }
                                />
                        </div>
                    </div>

                    <div className="mb-4">
                        <LabelC> ROL </LabelC>
                        <select
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            name="role"
                            onChange={onInputChange}
                            required
                        >
                            <option value=""> Seleccione el Rol </option>                          
                            <option value="admin"> ADMINISTRADOR </option>
                            <option value="viewer"> SOLO LECTURA </option>
                           
                        </select>
                    </div>

                    <div className="mb-4">
                        <LabelC> Empresa </LabelC>
                        <select
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            name="company"
                            value={company}
                            onChange={onInputChange}
                            required
                        >
                            <option value=""> Seleccione la Empresa </option>
                            {companies.map(company => (
                                <option key={company.id} value={company.id}>
                                    {company.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <LabelC>Estatus</LabelC>
                        <select
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            name="state"
                            onChange={onInputChange}
                            required
                        >
                        <option value=""> Seleccione el Estado </option>                          
                        <option value="active"> ACTIVO </option>
                        <option value="inactive"> INACTIVO </option>
                        <option value="suspended"> SUSPENDIDO </option>
                        {/* <option value="blocked"> BLOCKED </option> */}
                        </select>
                    </div>

                    <div className="row mb-4 flex">
    
                        <div className="w-1/2">
                            <LabelC> Telefono </LabelC>
                            <InputFC                            
                                name="phone_number"
                                type="number"
                                value={phone_number}
                                placeholder="Introduzca el numero"
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <LabelC> Correo </LabelC>
                            <InputFC
                                name="email"
                                type="text"
                                value={email}
                                placeholder="Introduzca el email"
                                onChange={ onInputChange }
                            />
                        </div>
                    </div>

                    <div className="row mt-10 flex ">
                        <div className="w-1/2"></div> 
                        <div className="w-1/2 flex space-x-4">                                                
                            <ButtonC type="submit" bgColor="bg-blue-600" hoverColor="hover:bg-blue-500">
                                Registrar
                            </ButtonC>
                            <ButtonC
                                bgColor='bg-red-600'
                                hoverColor='hover:bg-red-500' 
                                type="button" onClick={ onClickBack }
                            >
                                Atras
                            </ButtonC>                  
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
    
}
