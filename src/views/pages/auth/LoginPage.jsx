import Swal from "sweetalert2";
import { ButtonC, InputC, LabelC } from "../../components/ui"
import { useAuthStore } from "../../../controllers";
import { useForm } from "../../../helpers/useForm";
import { useEffect } from "react";


const loginFormFields = {
    username: '',
    password: ''
}

export const LoginPage = () => {

    const { startLogin, errorMessage } = useAuthStore();
    const { username, password, onInputChange } = useForm( loginFormFields );

    const loginSubmit = ( event ) => {
        event.preventDefault();
        // console.log({ username, password });
        startLogin({ username, password });
    }

    useEffect(() => {
        if ( errorMessage !== undefined ){
            Swal.fire('Error en la autenticacion', errorMessage, 'error');
        }        
    }, [errorMessage])

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={ loginSubmit } >
                    <div>
                        <LabelC htmlFor="text"> Username </LabelC>
                        <div className="mt-2">
                            <InputC type="text" name="username" required
                                onChange={ onInputChange }
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <LabelC htmlFor="password"> Contraseña </LabelC>
                        </div>
                        <div className="mt-2">
                        <InputC  type="password"  name="password" required
                            autoComplete="current-password" onChange={ onInputChange }
                        />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <ButtonC > Sign in </ButtonC>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    No tienes cuenta? 
                    <a href="/auth/register" className="font-semibold text-indigo-600 hover:text-indigo-500"> Registrate</a>
                </p>
            </div>

        </div>  
    )
}

