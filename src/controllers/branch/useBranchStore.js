import { useDispatch, useSelector } from "react-redux";
import { onLoadBranches, onSetActiveBranch, onAddNewBranch, onUpdateBranch, onDeleteBranch } from "../../store";
import contabilidadApi from "../../api/contabilidadApi";



export const useBranchStore = () => {

    const dispatch = useDispatch();
    const { branches, activeBranch, isLoadingBranches } = useSelector( state => state.branches )


    const setActiveBranch = ( branch ) => {
        dispatch( onSetActiveBranch( branch ) );
    }

    // Cargar Sucursales
    const startLoadingBranches = async() => { 
        try {
            const { data } = await contabilidadApi.get('/sucursales/');
            dispatch( onLoadBranches( data.results ) );
        } catch (error) {
            console.log('Error cargando eventos');
            console.log(error.response)
        }
    }

    // Retornar Sucursales
    const startGetAllBranches = async() => { 
        try {
            const { data } = await contabilidadApi.get('/sucursales/');
            return data.results;
        } catch (error) {
            console.log('Error en la Solicitud');
            console.log(error)
        }
    }

    const startGetBranchById = async( id ) => { 
        try {
            const { data } = await contabilidadApi.get(`/sucursales/${id}/`);
            return data;
        } catch (error) {
            console.log('Error en la solicitud');
            console.log(error)
        }
    }

    //POST - crear sucursal
    const startCreateBranch = async( {name:nombre, location:direccion} ) => {
        try {
            const { data } = await contabilidadApi.post( '/sucursales/', {nombre, direccion} ); 
            dispatch( onAddNewBranch({ nombre, direccion, id: data.id }) ); 
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud')
            console.log(error);
        }
    }

    // PUT - actualizar sucursal
    const startUpdateBranch = async ( {name, location} ) => {
        const updatedBranch = {
            nombre: name,          // 'name' a 'nombre'
            direccion: location
        };
        try {
            console.log('startupdate activado')
            const { data } = await contabilidadApi.put(`/sucursales/${activeBranch.id}/`, updatedBranch, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            dispatch( onUpdateBranch( data) );
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud');
            console.log(error);    
        }
    }

    // Delete 
    const startDeleteBranch = async() => {
        try {         
            const { data } = await contabilidadApi.delete( `/sucursales/${ Number(activeBranch.id) }/` );
            console.log(data);
            dispatch( onDeleteBranch( ) );
            startLoadingBranches();
            return;
        } catch (error) {
            console.log('error en la solicitud');
            console.log(error.response.data);
        }
    }

    return {
        //Propiedades
        branches, 
        activeBranch, 
        isLoadingBranches,

        //Metodos
        setActiveBranch,
        startLoadingBranches,
        startCreateBranch,
        startUpdateBranch,
        startDeleteBranch,
        startGetBranchById,
        startGetAllBranches,

    }

}
