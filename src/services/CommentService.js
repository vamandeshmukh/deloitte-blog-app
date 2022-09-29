import axios from 'axios';

const url = `http://localhost:1234/comments`;

const findAllComments = () => {
    console.log(`findAllComments`);
    return axios.get(url);
};

const findComment = (id) => {
    console.log(id);
    return axios.get(`${url}/${id}`);
};

// /posts?title=json-server&author=typicode

const findCommentsByPostiId = (postId) => {
    console.log(postId);
    return axios.get(`${url}?postId=${postId}`);
};

const createComment = (comment) => {
    console.log(comment);
    return axios.post(url, comment);
};

export { findAllComments, findComment, createComment, findCommentsByPostiId };