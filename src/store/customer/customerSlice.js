import { createSlice } from '@reduxjs/toolkit';



export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        isLoadingCustomers: true,
        customers: [

        ],
        activeCustomer: null,
    },
    reducers: {

        onSetActiveCustomer: (state, { payload } ) => {
            state.activeCustomer = payload;
        },

        onLoadCustomers: ( state, { payload = [] }) => {
            state.isLoadingCustomers = false;    // no cargo o está en proceso
            payload.forEach( customer => {
                const exists = state.customers.some( dbCustomer => dbCustomer.id === customer.id );
                if ( !exists ) {
                    state.customers.push( customer );
                }
            } )
        },

        onAddNewCustomer: (state, { payload } ) => {
            state.customers.push( payload );
            state.activeCustomer = null;
        },

        onUpdateCustomer: ( state, { payload }) => {
            state.customers = state.customers.map( customer => {          
                if ( customer.id === payload.id ){
                    return payload;
                } 
                return customer;
            } );
        },

        onDeleteCustomer: ( state ) => {
            if ( state.activeCustomer ) {
                state.customers = state.customers.filter( customer => customer.id !== state.activeCustomer.id  );
                state.activeCustomer = null;
            }
        },     
    }
});


// Action creators are generated for each case reducer function
export const {

    onSetActiveCustomer,
    onLoadCustomers,
    onAddNewCustomer,
    onUpdateCustomer,
    onDeleteCustomer,

 } = customerSlice.actions;