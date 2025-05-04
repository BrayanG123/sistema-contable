



import { createSlice } from '@reduxjs/toolkit';

export const companySlice = createSlice({
    name: 'company',

    initialState: {
        isLoadingCompanies: true,
        companies: [

        ],
        activeCompany: null
    },

    reducers: {
        onSetActiveCompany: (state, { payload } ) => {
            state.activeCompany = payload;
        },

        onLoadCompanies: ( state, { payload = [] }) => {
            state.isLoadingCompanies = false;    // no cargo o está en proceso
            payload.forEach( company => {
                const exists = state.companies.some( dbCompany => dbCompany.id === company.id );
                if ( !exists ) {
                    state.companies.push( company );
                }
            } )
        },

        onAddNewCompany: (state, { payload } ) => {
            state.companies.push( payload );
            state.activeCompany = null;
        },

        onUpdateCompany: ( state, { payload }) => {
            state.companies = state.companies.map( company => {          
                if ( company.id === payload.id ){
                    return payload;
                } 
                return company;
            } );
        },

        onDeleteCompany: ( state ) => {
            if ( state.activeCompany ) {
                state.companies = state.companies.filter( company => company.id !== state.activeCompany.id  );
                state.activeCompany = null;
            }
        },

    }
});


// Action creators are generated for each case reducer function
export const { 

    onSetActiveCompany,
    onLoadCompanies,
    onAddNewCompany,
    onUpdateCompany,
    onDeleteCompany, 

} = companySlice.actions;