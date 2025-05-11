import { useDispatch, useSelector } from "react-redux"
import { onAddNewSupplier, onDeleteSupplier, onLoadSuppliers, onSetActiveSupplier, onUpdateSupplier } from "../../store";
import contabilidadApi from "../../api/contabilidadApi";



export const useSupplierStore = () => {


    const dispatch = useDispatch();
    const { suppliers, activeSupplier } = useSelector( state => state.suppliers );


    const setActiveSupplier = ( supplier ) => {
        dispatch( onSetActiveSupplier( supplier ) );
    }
    
    // Cargar Proveedor
    const startLoadingSuppliers = async() => { 
        try {
            const { data } = await contabilidadApi.get('/suppliers');
            dispatch( onLoadSuppliers( data ) );
        } catch (error) {
            console.log('Error en la Solicitud');
            console.log(error.response)
        }
    }

    // Retornar Proveedor
    const startGetAllSuppliers = async() => { 
        try {
            const { data } = await contabilidadApi.get('//');
            return data.results;
        } catch (error) {
            console.log('Error en la Solicitud');
            console.log(error)
        }
    }

    const startGetSupplierById = async( id ) => { 
        try {
            const { data } = await contabilidadApi.get(`/suppliers/${id}`);
            return data;
        } catch (error) {
            console.log('Error en la solicitud');
            console.log(error)
        }
    }

    //POST - crear Proveedor
    const startCreateSupplier = async( supplier ) => {
        try {
            const { data } = await contabilidadApi.post( '/suppliers', supplier ); 
            console.log(data)
            dispatch( onAddNewSupplier(data) ); 
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud')
            console.log(error);
        }
    }
    
        // PUT - actualizar Proveedor
    const startUpdateSupplier = async ( id, supplier ) => {    
        try {
            const { data } = await contabilidadApi.put(`/empresa/${supplier.empresaId}/suppliers/${id}`, supplier );
            console.log(data);
            dispatch( onUpdateSupplier( data) );
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud');
            console.log(error);    
        }
    }
    
        // Delete 
    const startDeleteSupplier = async( supplier ) => {
        console.log(supplier)
        try {         
            const { data } = await contabilidadApi.delete( `/empresa/${supplier.empresaId}/suppliers/${ supplier.id }` );
            console.log(data);
            dispatch( onDeleteSupplier() );
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud');
            console.log(error.response.data);
        }
    }


    return {
        //Propiedades
        suppliers,
        activeSupplier,

        //Metodos
        setActiveSupplier,
        startLoadingSuppliers,
        startGetAllSuppliers,
        startGetSupplierById,
        startCreateSupplier,
        startUpdateSupplier,
        startDeleteSupplier,
    }
}
