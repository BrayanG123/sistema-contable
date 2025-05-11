import { useDispatch, useSelector } from "react-redux";
import { onAddNewCompany, onDeleteCompany, onLoadCompanies, onSetActiveCompany, onUpdateCompany } from "../../store";
import contabilidadApi from "../../api/contabilidadApi";




export const useCompanyStore = () => {

    const dispatch = useDispatch();
    const { companies, activeCompany } = useSelector( state => state.companies)


    
    const setActiveCompany = ( company ) => {
        dispatch( onSetActiveCompany( company ) );
    }
    
    // Cargar Empresas
    const startLoadingCompanies = async() => { 
        try {
            const { data } = await contabilidadApi.get('/companies');
            dispatch( onLoadCompanies( data ) );
        } catch (error) {
            console.log('Error en la solicitud');
            console.log(error.response)
        }
    }

    // Retornar Empresas
    const startGetAllCompanies = async() => { 
        try {
            const { data } = await contabilidadApi.get('//');
            return data.results;
        } catch (error) {
            console.log('Error en la Solicitud');
            console.log(error)
        }
    }
    
    //Retornar Empresa por su Id
    const startGetCompanyById = async( id ) => { 
        try {
            const { data } = await contabilidadApi.get(`/companies/${id}`);
            // console.log(data)
            return data;
        } catch (error) {
            console.log('Error en la solicitud');
            console.log(error)
        }
    }

    //POST - crear Empresa
    const startCreateCompany = async( company ) => {
        try {
            const { data } = await contabilidadApi.post( '/companies', company ); 
            dispatch( onAddNewCompany(data) ); 
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud')
            console.log(error);
        }
    }
    
        // PUT - actualizar Empresa
    const startUpdateCompany = async ( id, company ) => {    
        try {
            const { data } = await contabilidadApi.put(`/companies/${ id }`, company );
            console.log(data);
            dispatch( onUpdateCompany( data) );
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud');
            console.log(error);    
        }
    }
    
        // Delete 
    const startDeleteCompany = async( id ) => {
        try {         
            const { data } = await contabilidadApi.delete( `/companies/${ id }` );
            dispatch( onDeleteCompany() );
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud');
            console.log(error.response.data);
        }
    }


    return {
        //Propiedades
        companies,
        activeCompany,


        //Metodos
        setActiveCompany,
        startLoadingCompanies,
        startGetAllCompanies,
        startGetCompanyById,
        startCreateCompany,
        startUpdateCompany,
        startDeleteCompany,
    }
}
