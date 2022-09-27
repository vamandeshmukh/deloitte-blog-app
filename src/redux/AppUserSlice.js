import { createSlice } from '@reduxjs/toolkit';


const AppUserSlice = createSlice({

    name: `appUser`,

    initialState: {
        appUserData: '',
        loggedInUser: '',
        appUsersList: []
    },

    reducers: {

        setAppUserData: (state, action) => {
            console.log(action.payload);
            state.appUserData = action.payload;
        },
        setLoggedInUser: (state, action) => {
            console.log(action.payload);
            state.loggedInUser = action.payload;
        },
        setAppUsersList: (state, action) => {
            console.log(action.payload);
            state.appUsersList = action.payload;
        }
    }
});

export const { setAppUserData, setLoggedInUser, setAppUsersList } = AppUserSlice.actions;


export default AppUserSlice.reducer;
