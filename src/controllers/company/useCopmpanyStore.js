import { useDispatch, useSelector } from "react-redux";
import { onAddNewCompany, onDeleteCompany, onLoadCompanies, onSetActiveCompany, onUpdateCompany } from "../../store";
import contabilidadApi from "../../api/contabilidadApi";




export const useCopmpanyStore = () => {

    const dispatch = useDispatch();
    const { companies, activeCompany } = useSelector( state => state.companies)

    const setActiveCompany = ( branch ) => {
        dispatch( onSetActiveCompany( branch ) );
    }
    
    // Cargar Empresas
    const startLoadingCompanies = async() => { 
        try {
            const { data } = await contabilidadApi.get('/empresa');
            // console.log(data);
            dispatch( onLoadCompanies( data ) );
        } catch (error) {
            console.log('Error cargando eventos');
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
    
    const startGetCompanyById = async( id ) => { 
        try {
            const { data } = await contabilidadApi.get(`//${id}/`);
            return data;
        } catch (error) {
            console.log('Error en la solicitud');
            console.log(error)
        }
    }

    //POST - crear Empresa
    const startCreateCompany = async( company ) => {
        try {
            console.log(company)
            const { data } = await contabilidadApi.post( '/empresa', company ); 
            dispatch( onAddNewCompany(data) ); 
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud')
            console.log(error);
        }
    }
    
        // PUT - actualizar Empresa
    const startUpdateCompany = async ( {name, location} ) => {
        const updatedCompany = {
            nombre: name,          // 'name' a 'nombre'
            direccion: location
        };
        try {
            const { data } = await contabilidadApi.put(`//${activeCompany.id}/`, updatedCompany );
            dispatch( onUpdateCompany( data) );
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud');
            console.log(error);    
        }
    }
    
        // Delete 
    const startDeleteCompany = async() => {
        try {         
            const { data } = await contabilidadApi.delete( `//${ Number(activeCompany.id) }/` );
            // console.log(data);
            dispatch( onDeleteCompany() );
            return;
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
