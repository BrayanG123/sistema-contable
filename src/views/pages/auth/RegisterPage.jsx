import { useAuthStore } from "../../../controllers";
import { useForm } from "../../../helpers/useForm";
import { LabelC, InputC, ButtonC } from "../../components/ui"


const registerFormFields = {
    username: '',
    password: ''
}

export const RegisterPage = () => {

    const { startRegister } = useAuthStore();
    const { name, last_name, username, email, password, onInputChange } = useForm( registerFormFields );

    const registerSubmit = (event) => {
        event.preventDefault();
        // console.log({ name, last_name, username, email, password });
        startRegister( { name, last_name, username, email, password } );
    }
    
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Resgitrarse</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={ registerSubmit } >
                    <div>
                        <LabelC htmlFor="text"> Nombres </LabelC>
                        <div className="mt-2">
                            <InputC type="text" name="name" required
                                onChange={ onInputChange }
                            />
                        </div>
                    </div>
                    <div>
                        <LabelC htmlFor="text"> Apellidos </LabelC>
                        <div className="mt-2">
                            <InputC type="text" name="last_name" required
                                onChange={ onInputChange }
                            />
                        </div>
                    </div>
                    <div>
                        <LabelC htmlFor="text"> Username </LabelC>
                        <div className="mt-2">
                            <InputC type="text" name="username" required
                                onChange={ onInputChange }
                            />
                        </div>
                    </div>
                    <div>
                        <LabelC htmlFor="text"> Email </LabelC>
                        <div className="mt-2">
                            <InputC type="text" name="email" required
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
                    Ya tienes cuenta?
                    <a href="/auth/login" className="font-semibold text-indigo-600 hover:text-indigo-500"> Sign in to your account </a>
                </p>

            </div>

        </div>  
    )
}
