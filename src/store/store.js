import { configureStore } from "@reduxjs/toolkit";
import { authSlice, branchSlice, companySlice } from "./index";




export const store = configureStore({

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
    }),

    reducer: {

        auth: authSlice.reducer,
        branches: branchSlice.reducer,
        companies: companySlice.reducer,

    }

});