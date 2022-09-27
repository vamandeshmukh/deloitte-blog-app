import axios from 'axios';

const url = `http://localhost:12345/users`;

const findAllAppUsers = () => {
    console.log(`findAllAppUsers`);
    return axios.get(url);
};

const register = (appUser) => {
    console.log(`register ${appUser.userName}`);
    return axios.post(url, appUser);
};

const login = (appUser) => {
    // need to work on 
    console.log(appUser);
    return axios.get(`${url}/${appUser.id}`);
};

const logout = () => {
    // need to work on 
    console.log(`logout`)
    return /* some code */;
};


export { findAllAppUsers, register, login, logout };