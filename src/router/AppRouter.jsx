// import { Navigate, Route, Routes } from "react-router-dom"
import { useEffect } from "react";

//pages
import { LoginPage } from "../views/pages/auth/LoginPage";

//stores
import { useAuthStore } from "../controllers/auth/useAuthStore";
import { Route, Routes } from "react-router-dom";
import { SupplierPage } from "../views/pages/supplier/SupplierPage";
import { SistemaContablePage } from "../views/SistemaContablePage";
import { MainLayout } from "../views/MainLayout";
import { CompanyPage } from "../views/pages/company/CompanyPage";
import { CreateCompanyPage } from "../views/pages/company/CreateCompanyPage";
import { EditCompanyPage } from "../views/pages/company/EditCompanyPage";



export const AppRouter = () => {
  

    const { status } = useAuthStore();
  // const authStatus = 'not-authenticated'; //'authenticated'

    useEffect(() => {
      
    //   checkAuthToken();
    
    }, [])
    

    if ( status === 'checking' ) {
      return (
        <h3>Cargando...</h3>
      )
    }

    return (
        <Routes>
            {
                
                // ( status === 'not-authenticated' )
                //     ? (
                //       <>
                //         <Route path="/auth/*" element={ <LoginPage /> }/>
                //         <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
                //       </>
                //     )
                //     : (
                //       <>
                //         <Route path="/" element={ <ProductPage /> }/>
                //         <Route path="/*" element={ <Navigate to="/" /> }/>
                //       </>
                //     ) 
                <>
                    <Route path="/admin/*" element={ <MainLayout >
                      <Routes>
                        <Route path="/auth/*" element={ <LoginPage /> }/>
                        <Route path="company" element={ <CompanyPage /> }/>
                        <Route path="company/create" element={ <CreateCompanyPage /> }/>
                        <Route path="company/edit" element={ <EditCompanyPage /> }/>
                        <Route path="supplier" element={ <SupplierPage /> }/>
                      </Routes>
                    </MainLayout> } />
                      {/* <Route path="/" element={ <SistemaContablePage /> }/> */}
                    {/* <Route/> */}
                </>
            
            }
                    
        </Routes>
  )

}
