import { ButtonC, InputC, LabelC } from "../../components/ui"




export const LoginPage = () => {

    return (

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <LabelC htmlFor="email"> Email </LabelC>
                        <div className="mt-2">
                            <InputC 
                                id="email"
                                type="email"
                                name="email"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <LabelC htmlFor="password"> Password </LabelC>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                        </div>
                        <div className="mt-2">
                        <InputC 
                            id="password"                      
                            type="password" 
                            name="password" 
                            autoComplete="current-password" 
                            required
                        />
                        </div>
                    </div>

                    <div>
                        <ButtonC > Sign in </ButtonC>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member?
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                </p>
            </div>

        </div>  
    )
}

