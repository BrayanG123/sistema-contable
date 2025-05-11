import { useEffect, useState } from "react"
import { ButtonC } from "../../components/ui/ButtonC"
import { InputFC } from "../../components/ui/InputFC"
import { LabelC } from "../../components/ui/LabelC"
import { useForm } from "../../../helpers/useForm"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { useCompanyStore, useSupplierStore } from "../../../controllers"




export const EditSupplierPage = () => {

    const navigate = useNavigate();

    const { activeSupplier, startLoadingSuppliers, startUpdateSupplier, setActiveSupplier } = useSupplierStore();
    const { name, nit, company, address, email, onInputChange, setFormState } = useForm( activeSupplier );
    const { companies, startLoadingCompanies, startGetCompanyById } = useCompanyStore(); 

    const [nombreEmpresa, setNombreEmpresa] = useState(null);
     
    
    useEffect(() => {
        if ( activeSupplier && companies) {
            setFormState( { ...activeSupplier } );
        }
    }, [activeSupplier]); 

    const saveChangesSubmit = async( event ) => {
        event.preventDefault();
        const company_id = empresa? empresa : activeSupplier.company_id;
        // console.log({ name, nit, company_id, address, email});
        // return;
        const result = await startUpdateSupplier( activeSupplier.id, { name, nit, company_id, address, email} );
        if (result) {
            startLoadingSuppliers();
            Swal.fire({ title: "Realizado!", icon: "success", draggable: true });
        } 
    }

    const onClickBack = () => {
        console.log('atras');
        setActiveSupplier(null);
        navigate(-1);
    }

    const getNombreEmpresa = async() => {
        if ( activeSupplier ) {
            const company = await startGetCompanyById( activeSupplier.company_id );
            setNombreEmpresa( company.name );
        }
    }

    useEffect(() => {
        startLoadingCompanies();
        getNombreEmpresa();
    }, [])
    

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-blue-100">
        
            <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Registrar Proveedor</h2>
                
                <form onSubmit={ saveChangesSubmit }>
                    <div className="mb-4">
                        <LabelC> Nombre de la Proveedor </LabelC>
                        <InputFC id="name" name="name" value={ name } type="text" required
                            placeholder="Nombre Proveedor" onChange={ onInputChange } />
                    </div>

                    <div className="mb-4">
                        <LabelC> NIT </LabelC>
                        <InputFC id="nit" name="nit" type="number" value={ nit } required
                            placeholder="Introduzca el NIT" onChange={ onInputChange } />
                    </div>

                    <div className="mb-4">
                        <LabelC>Empresa</LabelC>
                        {/* <InputFC  id="empresa" name="empresa" type="text" value={ empresa } required 
                            placeholder="Introduzca la empresa" onChange={ onInputChange }/> */}
                            <select
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                name="company"
                                value={company}
                                onChange={onInputChange}
                            >
                                <option value=""> { nombreEmpresa || "Cargando..." } </option>
                                {companies.map(company => (
                                    <option key={company.id} value={company.id}>
                                        {company.nombre}
                                    </option>
                                ))}
                            </select>
                    </div>

                    <div className="mb-4">
                        <LabelC>Direccion</LabelC>
                        <InputFC name="address" type="text" value={ address } required 
                            placeholder="Introduzca la direccion" onChange={ onInputChange }/>
                    </div>

                    <div className="row mb-4 flex">
                        <div className="w-1/2 pr-2">
                            {/* <LabelC> Telefono </LabelC>
                            <InputFC id="telefono"name="telefono" value={ telefono } type="number"
                                    placeholder="Numero de telefono" onChange={ onInputChange }/> */}
                        </div>
                        <div className="w-1/2 pl-2">
                            <LabelC> Correo </LabelC>
                            <InputFC name="email" type="text" value={ email }
                                placeholder="Introduzca el email" onChange={ onInputChange }/>
                        </div>
                    </div>

                    <div className="row mt-10 flex ">
                        <div className="w-1/2"></div> 
                        <div className="w-1/2 flex space-x-4">                        
                            <ButtonC type="submit" bgColor="bg-blue-600"hoverColor="hover:bg-blue-500">
                                Guardar
                            </ButtonC>
                            <ButtonC type="button" onClick={ onClickBack } bgColor='bg-red-600' hoverColor='hover:bg-red-500'>
                                Atras
                            </ButtonC>                  
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
