import { createSlice } from '@reduxjs/toolkit';

const BlogPostSlice = createSlice({

    name: `blogPost`,

    initialState: {
        currentBlogPost: '',
        blogPostsList: []
    },

    reducers: {

        setCurrentBlogPost: (state, action) => {
            console.log(action.payload);
            state.currentBlogPost = action.payload;
        },
        setBlogPostsList: (state, action) => {
            console.log(action.payload);
            state.blogPostsList = action.payload;
        }
    }
});

export const { setCurrentBlogPost, setBlogPostsList } = BlogPostSlice.actions;


export default BlogPostSlice.reducer;
