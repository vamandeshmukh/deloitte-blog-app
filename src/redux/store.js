
// on CMD on any location, run - 

// json-server --watch D:\VamanPro\Codes\UI_Tech\deloitte-blog-app\blog-data-server\blog-data.json --port 1234

import { configureStore } from "@reduxjs/toolkit";

import appUserReducer from './AppUserSlice';
import blogPostReducer from './BlogPostSlice';
import commentReducer from './CommentSlice';

console.log(`store initialized...`);

const store = configureStore({

    reducer: {
        appUser: appUserReducer,
        blogPost: blogPostReducer,
        comment: commentReducer
    }

});

export default store;