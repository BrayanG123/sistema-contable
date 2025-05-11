import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoadingUsers: true,
        users: [

        ],
        activeUser: null,
    },
    reducers: {

        onSetActiveUser: (state, { payload } ) => {
            state.activeUser = payload;
        },

        onLoadUsers: ( state, { payload = [] }) => {
            state.isLoadingUsers = false;    // no cargo o está en proceso
            payload.forEach( user => {
                const exists = state.users.some( dbUser => dbUser.id === user.id );
                if ( !exists ) {
                    state.users.push( user );
                }
            } )
        },

        onAddNewUser: (state, { payload } ) => {
            state.users.push( payload );
            state.activeUser = null;
        },

        onUpdateUser: ( state, { payload }) => {
            state.users = state.users.map( user => {          
                if ( user.id === payload.id ){
                    return payload;
                } 
                return user;
            } );
        },

        onDeleteUser: ( state ) => {
            if ( state.activeUser ) {
                state.users = state.users.filter( user => user.id !== state.activeUser.id  );
                state.activeUser = null;
            }
        },     
    }
});

// Action creators are generated for each case reducer function
export const {

    onSetActiveUser,
    onLoadUsers,
    onAddNewUser,
    onUpdateUser,
    onDeleteUser,

 } = userSlice.actions;