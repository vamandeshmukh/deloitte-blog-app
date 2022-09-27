
// json-server --watch blog-data.json --port 12345

import { configureStore } from "@reduxjs/toolkit";

import appUserReducer from './AppUserSlice';

console.log(`store initialized...`);

const store = configureStore({

    reducer: {
        appUser: appUserReducer,
    }

});

export default store;