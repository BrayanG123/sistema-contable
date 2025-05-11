import { useNavigate } from 'react-router-dom';
import { LabelC, ButtonC } from '../../components/ui';
import { InputFC } from '../../components/ui/InputFC';
import { useCompanyStore, useCustomerStore } from '../../../controllers';
import { useForm } from '../../../helpers/useForm';
import Swal from 'sweetalert2';
import { useEffect } from 'react';



export const EditCustomerPage = () => {

    const navigate = useNavigate();

    const { activeCustomer, startUpdateCustomer, startLoadingCustomers, setActiveCustomer } = useCustomerStore();
    const { companies, startLoadingCompanies } = useCompanyStore();

    const { name, last_name, nit, company, address, phone_number, email, onInputChange, setFormState } = useForm( activeCustomer );



    useEffect(() => {
        if ( activeCustomer && companies) {
            setFormState( { ...activeCustomer } );
        }
    }, [activeCustomer]); 

    const updateSubmit = async( event ) => {
        event.preventDefault();
        // console.log({ name, last_name, nit, company_id: company, address, email, phone_number })
        // return;
        const result = await startUpdateCustomer( activeCustomer.id, { name, last_name, nit, company_id: company, address, email, phone_number } );
        if ( result ) {
            startLoadingCustomers();
            Swal.fire({ title: "Modificado!", icon: "success", draggable: true });
        }
    }

    const onClickBack = () => {
        setActiveCustomer(null);
        navigate(-1);
    }

    useEffect(() => {
        startLoadingCompanies();
    }, [])

    
    return (
        <div className="min-h-full w-full flex items-center justify-center bg-indigo-100">
        
            <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10 my-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Modificar datos del Cliente</h2>
                
                <form onSubmit={ updateSubmit }>

                    <div className="row mb-4 flex">  
                        <div className="w-1/2 ">
                            <LabelC> Nombres </LabelC>
                            <InputFC id="name" name="name" value={name} type="text" required 
                                placeholder="Nombre Cliente" onChange={ onInputChange }
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <LabelC> Apellidos </LabelC>
                                <InputFC id="last_name" name="last_name" value={last_name} type="text" required 
                                    placeholder="Apellidos" onChange={ onInputChange }
                                />
                        </div>
                    </div>

                    <div className="mb-4">
                        <LabelC> NIT </LabelC>
                        <InputFC id="nit" name="nit" value={nit} type="text" required 
                            placeholder="Introduzca el NIT" onChange={ onInputChange }
                        />
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
                        <LabelC>Direccion</LabelC>
                        <InputFC  id="address" name="address" value={address} type="text" required
                            placeholder="Introduzca la direccion" onChange={ onInputChange }
                        />
                    </div>

                    <div className="row mb-4 flex">
    
                        <div className="w-1/2">
                            <LabelC> Telefono </LabelC>
                            <InputFC 
                                id="phone_number"
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
                                id="email"
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
                                Modificar
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
