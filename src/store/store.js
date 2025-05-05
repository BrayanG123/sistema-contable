import { configureStore } from "@reduxjs/toolkit";
import { authSlice, branchSlice, companySlice, customerSlice, supplierSlice } from "./index";




export const store = configureStore({

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
    }),

    reducer: {

        auth: authSlice.reducer,
        branches: branchSlice.reducer,
        companies: companySlice.reducer,
        suppliers: supplierSlice.reducer,
        customers: customerSlice.reducer,

    }
});