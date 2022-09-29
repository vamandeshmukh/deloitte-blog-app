import { createSlice } from '@reduxjs/toolkit';

const BlogPostSlice = createSlice({

    name: `blogPost`,

    initialState: {
        currentBlogPost: '',
        blogPostWriterName: '',
        blogPostsList: [],
        commentsForCurrentBlogPost: []
    },

    reducers: {

        setCurrentBlogPost: (state, action) => {
            console.log(action.payload);
            state.currentBlogPost = action.payload;
        },
        setBlogPostWriterName: (state, action) => {
            console.log(action.payload);
            state.blogPostWriterName = action.payload;
        },
        setBlogPostsList: (state, action) => {
            console.log(action.payload);
            state.blogPostsList = action.payload;
        },
        setCommentsForCurrentBlogPost: (state, action) => {
            console.log(action.payload);
            state.commentsForCurrentBlogPost = action.payload;
        }
    }
});

export const { setCurrentBlogPost, setBlogPostWriterName, setBlogPostsList, setCommentsForCurrentBlogPost } = BlogPostSlice.actions;


export default BlogPostSlice.reducer;
