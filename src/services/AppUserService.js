import axios from 'axios';

const url = `http://localhost:1234/users`;

const findAllAppUsers = () => {
    console.log(`findAllAppUsers`);
    return axios.get(url);
};

const findAppUserById = (id) => {
    console.log(`findAppUserById ${id}`);
    return axios.get(`${url}/${id}`);
};

const register = (appUser) => {
    console.log(`register ${appUser.userName}`);
    return axios.post(url, appUser);
};

// /posts?title=json-server&author=typicode
const userLogin = (appUser) => {
    console.log(appUser);
    return axios.get(`${url}?userName=${appUser.userName}`);
};

export { findAllAppUsers, findAppUserById, register, userLogin };