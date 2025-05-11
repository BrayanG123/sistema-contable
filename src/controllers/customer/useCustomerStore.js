import { useDispatch, useSelector } from "react-redux"
import { onAddNewCustomer, onDeleteCustomer, onLoadCustomers, onSetActiveCustomer, onUpdateCustomer } from "../../store";
import contabilidadApi from "../../api/contabilidadApi";



export const useCustomerStore = () => {
    const dispatch = useDispatch();
    const { customers, activeCustomer } = useSelector( state => state.customers );

    const setActiveCustomer = ( customer ) => {
        dispatch( onSetActiveCustomer( customer ) );
    }
    
    // Cargar Cliente
    const startLoadingCustomers = async() => { 
        try {
            const { data } = await contabilidadApi.get('/clients');
            dispatch( onLoadCustomers( data ) );
        } catch (error) {
            console.log('Error en la Solicitud');
            console.log(error.response)
        }
    }

    // Retornar Clientes
    const startGetAllCustomers = async() => { 
        try {
            const { data } = await contabilidadApi.get('/clients');
            return data.results;
        } catch (error) {
            console.log('Error en la Solicitud');
            console.log(error)
        }
    }

    const startGetCustomerById = async( id ) => { 
        try {
            const { data } = await contabilidadApi.get(`/clients/${id}`);
            return data;
        } catch (error) {
            console.log('Error en la solicitud');
            console.log(error)
        }
    }

    //POST - crear Cliente
    const startCreateCustomer = async( customer ) => {
        try {
            const { data } = await contabilidadApi.post( '/clients', customer ); 
            console.log(data)
            dispatch( onAddNewCustomer(data) ); 
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud')
            console.log(error);
        }
    }
    
        // PUT - actualizar Cliente
    const startUpdateCustomer = async ( id, customer ) => {    
        try {
            const { data } = await contabilidadApi.put(`/companies/${customer.company_id}/clients/${id}`, customer );
            console.log(data);
            dispatch( onUpdateCustomer( data) );
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud');
            console.log(error);    
        }
    }
    
        // Delete 
    const startDeleteCustomer = async( customer ) => {
        console.log(customer)
        try {         
            const { data } = await contabilidadApi.delete( `/companies/${customer.company_id}/clients/${ customer.id }` );
            console.log(data);
            dispatch( onDeleteCustomer() );
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud');
            console.log(error.response.data);
        }
    }

    return {
        //Propiedades
        customers, 
        activeCustomer,

        //Metodos
        setActiveCustomer,
        startLoadingCustomers,
        startGetAllCustomers,
        startGetCustomerById,
        startCreateCustomer,
        startUpdateCustomer,
        startDeleteCustomer,
    }
}