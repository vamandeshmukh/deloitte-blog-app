import axios from 'axios';

const url = `http://localhost:1234/posts`;

const findAllBlogPosts = () => {
    console.log(`findAllAppUsers`);
    return axios.get(url);
};

const createBlogPost = (blogPost) => {
    console.log(`createBlogPost ${blogPost.title}`);
    return axios.post(url, blogPost);
};

const findBlogPost = (id) => {
    return axios.get(`${url}/${id}`);
};


export { findAllBlogPosts, createBlogPost, findBlogPost };