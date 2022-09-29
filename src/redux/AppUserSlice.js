import { createSlice } from '@reduxjs/toolkit';

const AppUserSlice = createSlice({

    name: `appUser`,

    initialState: {
        appUserData: sessionStorage.getItem('appUserDataStored'),
        loggedInUserId: sessionStorage.getItem('currentUserId'),
        loggedInUserName: sessionStorage.getItem('currentUserName'),
        loggedInUserRole: sessionStorage.getItem('currentUserRole'),
        appUsersList: []
    },

    reducers: {

        setLoggedInUserId: (state, action) => {
            console.log(action.payload);
            state.loggedInUserId = action.payload;
        },
        setAppUserData: (state, action) => {
            console.log(action.payload);
            state.appUserData = action.payload;
        },
        setLoggedInUserName: (state, action) => {
            console.log(action.payload);
            state.loggedInUserName = action.payload;
        },
        setLoggedInUserRole: (state, action) => {
            console.log(action.payload);
            state.loggedInUserRole = action.payload;
        },
        setAppUsersList: (state, action) => {
            console.log(action.payload);
            state.appUsersList = action.payload;
        }
    }
});

export const { setAppUserData, setLoggedInUserId, setLoggedInUserName, setLoggedInUserRole, setAppUsersList } = AppUserSlice.actions;

export default AppUserSlice.reducer;
