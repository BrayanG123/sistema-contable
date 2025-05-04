import { useSelector } from "react-redux"







export const useAuthStore = () => {

    const { state, user } = useSelector( state => state.auth);


    const startLogin = async({ email, password }) => {

        dispatch( onChecking() );
        try { 
            const { data } = await calendarApi.post('/auth/', { email, password }); //retornara el nombre y el id de usuario
            localStorage.setItem('token', data.token);
            dispatch( onLogin({ name: data.name, id: data.id }) ); //manda el nombre y el id de usuario

        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout( () => {
                dispatch( clearErrorMessage() );
            }, 10 );
        }
    }

    const startRegister = async({ name, email, password }) => {

        dispatch( onChecking() );

        try {
            const { data } = await calendarApi.post('/auth/new', { name, email, password });
            localStorage.setItem('token', data.token);
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            console.log(error);
            dispatch( onLogout( error || '-----' ) ); //hecho por el profe para q imprima en el swal
            setTimeout( () => {
                dispatch( clearErrorMessage() );
            }, 10 );
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() ); 

        try {
            const { data } = await calendarApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
        } catch (error) {   
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogoutCalendar() );
        dispatch( onLogout() );
    }

    return {
        //Atributos
        state,
        user,


        //Metodos

    }
}
