import { createSlice } from '@reduxjs/toolkit';



export const supplierSlice = createSlice({
    name: 'supplier',

    initialState: {
        isLoadingSuppliers: true,
        suppliers: [

        ],
        activeSupplier: null
    },

    reducers: {
        onSetActiveSupplier: (state, { payload } ) => {
            state.activeSupplier = payload;
        },

        onLoadSuppliers: ( state, { payload = [] }) => {
            state.isLoadingSuppliers = false;    // no cargo o está en proceso
            payload.forEach( supplier => {
                const exists = state.suppliers.some( dbSupplier => dbSupplier.id === supplier.id );
                if ( !exists ) {
                    state.suppliers.push( supplier );
                }
            } )
        },

        onAddNewSupplier: (state, { payload } ) => {
            state.suppliers.push( payload );
            state.activeSupplier = null;
        },

        onUpdateSupplier: ( state, { payload }) => {
            state.suppliers = state.suppliers.map( supplier => {          
                if ( supplier.id === payload.id ){
                    return payload;
                } 
                return supplier;
            } );
        },

        onDeleteSupplier: ( state ) => {
            if ( state.activeSupplier ) {
                state.suppliers = state.suppliers.filter( supplier => supplier.id !== state.activeSupplier.id  );
                state.activeSupplier = null;
            }
        },
    }   
});


// Action creators are generated for each case reducer function
export const {

    onSetActiveSupplier,
    onLoadSuppliers,
    onAddNewSupplier,
    onUpdateSupplier,
    onDeleteSupplier,

 } = supplierSlice.actions;