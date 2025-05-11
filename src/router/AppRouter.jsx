import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

//pages
import { LoginPage } from "../views/pages/auth/LoginPage";
import { SupplierPage } from "../views/pages/supplier/SupplierPage";
import { MainLayout } from "../views/MainLayout";
import { CompanyPage } from "../views/pages/company/CompanyPage";
import { CreateCompanyPage } from "../views/pages/company/CreateCompanyPage";
import { EditCompanyPage } from "../views/pages/company/EditCompanyPage";
import { CreateSupplierPage } from "../views/pages/supplier/CreateSupplierPage";
import { EditSupplierPage } from "../views/pages/supplier/EditSupplierPage";
import { CustomerPage } from "../views/pages/customer/CustomerPage";
import { CreateCustomerPage } from "../views/pages/customer/CreateCustomerPage";
import { EditCustomerPage } from "../views/pages/customer/EditCustomerPage";
import { UserPage } from "../views/pages/user/UserPage";
import { CreateUserPage } from "../views/pages/user/CreateUserPage";
import { EditUserPage } from "../views/pages/user/EditUserPage";

//stores
import { useAuthStore } from "../controllers/auth/useAuthStore";
import { RegisterPage } from "../views/pages/auth/RegisterPage";


export const AppRouter = () => {
  
    const { status, checkAuthToken } = useAuthStore();
  // const authStatus = 'not-authenticated'; //'authenticated'

    useEffect(() => {     
      checkAuthToken();
    }, []);

    if ( status === 'checking' ) {
      return (
        <h3>Cargando...</h3>
      )
    }

    return (
        <Routes>
            {            
                ( status === 'not-authenticated' || !status ) ? (                 
                    <>
                      <Route path="/auth/login" element={ <LoginPage /> }/>
                      <Route path="/auth/register" element={ <RegisterPage /> }/>
                      <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
                    </>
                ) : (
                  <>
                    <Route path="/" element={<Navigate to="/app" />} />            
                    <Route path="/*" element={ <Navigate to="/app" /> }/>
                    <Route path="/app/*" element={ 
                      <MainLayout >
                        <Routes>
                          <Route path="company" element={ <CompanyPage /> }/>
                          <Route path="company/create" element={ <CreateCompanyPage /> }/>
                          <Route path="company/edit" element={ <EditCompanyPage /> }/>
                          <Route path="supplier" element={ <SupplierPage /> }/>
                          <Route path="supplier/create" element={ <CreateSupplierPage /> }/>
                          <Route path="supplier/edit" element={ <EditSupplierPage /> }/>
                          <Route path="customer" element={ <CustomerPage /> }/>
                          <Route path="customer/create" element={ <CreateCustomerPage /> }/>
                          <Route path="customer/edit" element={ <EditCustomerPage /> }/>
                          <Route path="user" element={ <UserPage /> }/>
                          <Route path="user/create" element={ <CreateUserPage /> }/>
                          <Route path="user/edit" element={ <EditUserPage /> }/>
                        
                        </Routes>
                      </MainLayout> } />
                  </>
                ) 
            }
        </Routes>
  )

}
