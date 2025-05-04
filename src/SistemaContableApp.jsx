import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store"
import { AppRouter } from "./router/AppRouter"



export const SistemaContableApp = () => {

    return (
        
        <Provider store={ store }>
            {/* <BrowserRouter> */}
                <AppRouter/>
            {/* </BrowserRouter> */}
        </Provider>
      
    
    )

}
