import { useNavigate } from "react-router-dom"
import { ButtonC } from "../../components/ui/ButtonC"
import { InputFC } from "../../components/ui/InputFC"
import { LabelC } from "../../components/ui/LabelC"
import { useSupplierStore } from "../../../controllers/supplier/useSupplierStore"
import { useCopmpanyStore } from "../../../controllers/company/useCopmpanyStore"
import { useEffect } from "react"
import { useForm } from "../../../helpers/useForm"
import Swal from "sweetalert2"


let registerFormFields = {
    nombre: '',
    nit: 0,
    empresa: 0,
    direccion: '',
    correo: '',
}


export const CreateSupplierPage = () => {

    const navigate = useNavigate();

    const { startCreateSupplier, startLoadingSuppliers } = useSupplierStore();
    const { companies, startLoadingCompanies } = useCopmpanyStore();

    const { nombre, nit, empresa, direccion, correo, onInputChange } = useForm(registerFormFields);

    const registerSubmit = async( event ) => {
        event.preventDefault();
        // console.log({ nombre, nit, empresa, direccion, correo })
        // return;
        const result = await startCreateSupplier( { nombre, nit, empresaId: empresa, direccion, correo } );
        if ( result ) {
            startLoadingSuppliers();
            Swal.fire({ title: "Creado!", icon: "success", draggable: true });
        }
    }

    const onClickBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        startLoadingCompanies();
    }, [])
    

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-blue-100">

            <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Registrar Proveedor</h2>
                
                <form onSubmit={ registerSubmit }>
                    <div className="mb-4">
                        <LabelC> Nombre del Proveedor </LabelC>
                        <InputFC id="nombre" name="nombre" value={nombre} type="text" required 
                            placeholder="Nombre Proveedor" onChange={ onInputChange }
                        />
                    </div>

                    <div className="mb-4">
                        <LabelC> NIT </LabelC>
                        <InputFC id="nit" name="nit" value={nit} type="number" required 
                            placeholder="Introduzca el NIT" onChange={ onInputChange }
                        />
                    </div>

                    <div className="mb-4">
                        <LabelC> Empresa </LabelC>
                        <select
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            name="empresa"
                            value={empresa}
                            onChange={onInputChange}
                        >
                            <option value=""> Seleccione la Empresa </option>
                            {companies.map(company => (
                                <option key={company.id} value={company.id}>
                                    {company.nombre}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <LabelC>Direccion</LabelC>
                        <InputFC  id="direccion" name="direccion" value={direccion} type="text" required
                            placeholder="Introduzca la direccion" onChange={ onInputChange }
                        />
                    </div>

                    <div className="row mb-4 flex">
    
                        <div className="w-1/2 pl-2">
                            <LabelC> Correo </LabelC>
                            <InputFC 
                                id="email"
                                name="email"
                                type="text"
                                value={correo}
                                placeholder="Introduzca el correo"
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
