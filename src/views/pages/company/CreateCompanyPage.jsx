import { useEffect } from "react"
import { ButtonC } from "../../components/ui/ButtonC"
import { InputFC } from "../../components/ui/InputFC"
import { LabelC } from "../../components/ui/LabelC"
import { useForm } from "../../../helpers/useForm"
import { useCompanyStore } from "../../../controllers"



let registerFormFields = {
    nombre: '',
    nit: 0,
    direccion: '',
    telefono: '',
    email: '',
}


export const CreateCompanyPage = () => {

    const { startLoadingCompanies, startCreateCompany } = useCompanyStore();
    const { nombre, nit, direccion, telefono, correo, onInputChange } = useForm( registerFormFields );


    const registerSubmit = async( event ) => {
        event.preventDefault();
        const result = await startCreateCompany({ nombre, nit, direccion, telefono, correo} );
        if (result)  
            startLoadingCompanies();
    }

    useEffect(() => {
        startLoadingCompanies();
    }, []) 

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-blue-100">
        
            <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Registrar Empresa</h2>
                
                <form onSubmit={ registerSubmit }>
                    <div className="mb-4 ">
                        <LabelC> Nombre de la Empresa </LabelC>
                        <InputFC id="nombre" name="nombre" type="text" required
                            placeholder="Nombre Empresa" onChange={ onInputChange } />
                    </div>

                    <div className="mb-4 ">
                        <LabelC> NIT </LabelC>
                        <InputFC id="nit" name="nit" type="number" required
                            placeholder="Introduzca el NIT" onChange={ onInputChange } />
                    </div>

                    <div className="mb-4 ">
                        <LabelC>Direccion</LabelC>
                        <InputFC  id="direccion" name="direccion" type="text" required 
                            placeholder="Introduzca la direccion" onChange={ onInputChange }/>
                    </div>

                    <div className="row mb-4 flex">
                        <div className="w-1/2 pr-2 ">
                            <LabelC> Telefono </LabelC>
                            <InputFC id="telefono"name="telefono" type="number"
                                    placeholder="Numero de telefono" onChange={ onInputChange }/>
                        </div>
                        <div className="w-1/2 pl-2 ">
                            <LabelC> Correo </LabelC>
                            <InputFC id="correo"name="correo" type="text"// required
                                placeholder="Introduzca el correo" onChange={ onInputChange }/>
                        </div>
                    </div>

                    <div className="row mt-10 flex ">
                        <div className="w-1/2"></div> 
                        <div className="w-1/2 flex space-x-4">                        
                                {/* <button type="submit" className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                                    Registrar
                                </button> */}
                                <ButtonC type="submit"bgColor="bg-blue-600"hoverColor="hover:bg-blue-500">
                                    Registrar
                                </ButtonC>
                                <ButtonC bgColor='bg-red-600' hoverColor='hover:bg-red-500'>
                                    Atras
                                </ButtonC>                  
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )

}
