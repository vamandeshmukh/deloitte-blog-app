
// on CMD on any location, run - 
// D:\VamanPro\Codes\UI_Tech\deloitte-blog-app\blog-data-server\blog-data.json
// json-server --watch db.json --port 12345
// json-server --watch D:\VamanPro\Codes\UI_Tech\deloitte-blog-app\blog-data-server\blog-data.json --port 12345

import { configureStore } from "@reduxjs/toolkit";

import appUserReducer from './AppUserSlice';

console.log(`store initialized...`);

const store = configureStore({

    reducer: {
        appUser: appUserReducer,
    }

});

export default store;