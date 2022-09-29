import { createSlice } from '@reduxjs/toolkit';

const CommentSlice = createSlice({

    name: `comment`,

    initialState: {
        currentComment: '',
        commentsList: []
    },

    reducers: {

        setCurrentComment: (state, action) => {
            console.log(action.payload);
            state.currentComment = action.payload;
        },
        setCommentsList: (state, action) => {
            console.log(action.payload);
            state.commentsList = action.payload;
        }
    }
});

export const { setCurrentComment, setCommentList } = CommentSlice.actions;


export default CommentSlice.reducer;
