import { useDispatch, useSelector } from "react-redux";
import { onAddNewUser, onDeleteUser, onLoadUsers, onSetActiveUser, onUpdateUser } from "../../store";
import contabilidadApi from "../../api/contabilidadApi";



export const useUserStore = () => {
    
    const dispatch = useDispatch();
    const { users, activeUser } = useSelector( state => state.users );

    const setActiveUser = ( user ) => {
        dispatch( onSetActiveUser( user ) );
    }
    
    // Cargar Usuario
    const startLoadingUsers = async() => { 
        try {
            const { data } = await contabilidadApi.get('/users');
            dispatch( onLoadUsers( data ) );
        } catch (error) {
            console.log('Error en la Solicitud');
            console.log(error.response)
        }
    }

    // Retornar Usuarios
    const startGetAllUsers = async() => { 
        try {
            const { data } = await contabilidadApi.get('//');
            return data.results;
        } catch (error) {
            console.log('Error en la Solicitud');
            console.log(error)
        }
    }

    const startGetUserById = async( id ) => { 
        try {
            const { data } = await contabilidadApi.get(`/users/${id}`);
            return data;
        } catch (error) {
            console.log('Error en la solicitud');
            console.log(error)
        }
    }

    //POST - crear Usuario
    const startCreateUser = async( user ) => {
        try {
            const { data } = await contabilidadApi.post( '/users', user ); 
            console.log(data)
            dispatch( onAddNewUser(data) ); 
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud')
            console.log(error);
        }
    }
    
        // PUT - actualizar Usuario
    const startUpdateUser = async ( id, user ) => {    
        try {
            const { data } = await contabilidadApi.put(`/companies/${user.company_id}/users/${id}`, user );
            console.log(data);
            dispatch( onUpdateUser( data) );
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud');
            console.log(error);    
        }
    }
    
        // Delete 
    const startDeleteUser = async( user ) => {
        console.log(user)
        try {         
            const { data } = await contabilidadApi.delete( `/companies/${user.company_id}/users/${ user.id }` );
            console.log(data);
            dispatch( onDeleteUser() );
            return { success: true };
        } catch (error) {
            console.log('error en la solicitud');
            console.log(error.response.data);
        }
    }

    return {
        //Propiedades
        users, 
        activeUser,

        //Metodos
        setActiveUser,
        startLoadingUsers,
        startGetAllUsers,
        startGetUserById,
        startCreateUser,
        startUpdateUser,
        startDeleteUser,
    }
}