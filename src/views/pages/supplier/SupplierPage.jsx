import { ButtonC } from "../../components/ui/ButtonC"
import { InputFC } from "../../components/ui/InputFC"
import { LabelC } from "../../components/ui/LabelC"





export const SupplierPage = () => {

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-blue-100">

            <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Registrar Proveedor</h2>
                
                <form action="#" method="POST">
                    <div className="mb-4">
                        <LabelC> Nombre del Proveedor </LabelC>
                        <InputFC
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Nombre Proveedor"
                        />
                    </div>

                    <div className="mb-4">
                        <LabelC> NIT </LabelC>
                        <InputFC
                            id="nit"
                            name="nit"
                            type="number"
                            required
                            placeholder="Introduzca el NIT"
                        />
                    </div>

                    <div className="mb-4">
                        <LabelC>Direccion</LabelC>
                        <InputFC 
                            id="direccion"
                            name="direccion"
                            type="text"
                            required
                            placeholder="Introduzca la direccion"
                        />
                    </div>

                    <div className="row mb-4 flex">
                        <div className="w-1/2 pr-2">
                            <LabelC> Telefono </LabelC>
                            <InputFC 
                                id="telefono"
                                name="telefono"
                                type="number"
                                // required
                                placeholder="Numero de telefono"
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <LabelC> Correo </LabelC>
                            <InputFC 
                                id="email"
                                name="email"
                                type="text"
                                // required
                                placeholder="Introduzca el correo"
                            />
                        </div>
                    </div>

                    <div className="row mt-10 flex ">
                        <div className="w-1/2"></div> 
                        <div className="w-1/2 flex space-x-4">                        
                                {/* <button type="submit" className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                                    Registrar
                                </button> */}
                                <ButtonC type="submit">
                                    Registrar
                                </ButtonC>
                                <ButtonC
                                    bgColor='bg-blue-600'
                                    hoverColor='hover:bg-blue-500'    
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
