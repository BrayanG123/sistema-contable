import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../../store";
import axios from "axios"; //borrar cuando se pruebe con el backend



export const useAuthStore = () => {

    const { status, user } = useSelector( state => state.auth);
    const dispatch = useDispatch();


    const startLogin = async({ username, password }) => {
        dispatch( onChecking() );
        console.log({username, password})
        try { 
            //por el momento usaremos el auth del parcial
            const { data } = await axios.post('http://localhost:8000/api/token', { username, password }); 
            // const { data } = await contabilidadApi.post('/auth/', { username, password }); //retornara el nombre y el id de usuario
            saveData( data );
            dispatch( onLogin({ username: data.user.username, email: data.user.email }) ); //manda el nombre y el id de usuario
        } catch (error) {
            // dispatch( onLogout('Credenciales incorrectas') );
            startLogout();
            console.log(error)
            setTimeout( () => {
                dispatch( clearErrorMessage() );
            }, 1000 );
        }
    }

    const startRegister = async({ name, last_name, username, email, password }) => {
        console.log({ name, last_name, username, email, password })
        dispatch( onChecking() );
        try {
            const { data } = await axios.post('http://localhost:8000/api/register', { username, email, password, groups: [] });
            // const { data } = await contabilidadApi.post('/auth/new', { name, last_name, username, email, password });
            console.log(data);
            saveData( data );
            dispatch( onLogin({ username: data.user.username, email: data.user.email }) );

        } catch (error) {
            console.log(error);
            // dispatch( onLogout( error || '-----' ) ); //hecho por el profe para q imprima en el swal
            startLogout();
            setTimeout( () => {
                dispatch( clearErrorMessage() );
            }, 1000 );
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');
        console.log(token)
        if ( !token || !id || !username || !email ) { 
            localStorage.clear();
            await dispatch( onLogout() );
        }else{
            console.log('paso por check y va a onLogin')
            dispatch( onLogin( { id, username, email } ) );    
        } 
    }

    const saveData = ( data ) => {
        localStorage.setItem('token', data.access);
        localStorage.setItem('username', data.user.username);
        localStorage.setItem('email', data.user.email);
        const id = data.user.url.split('/').slice(-2, -1)[0];
        localStorage.setItem('id', id);
    }

    const startLogout = () => {
        
        localStorage.clear();
        dispatch( onLogout() );
    }

    return {
        //Atributos
        status,
        user,

        //Metodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    }
}
