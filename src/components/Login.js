import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedInUser, setAppUsersList } from '../redux/AppUserSlice';
import { findAllAppUsers, login } from '../services/AppUserService';

import AppUser from "../models/AppUser";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [appUserToLogin, setAppUserToLogin] = useState({});
    const usersList = useSelector(store => store.appUser.appUsersList);

    useEffect(() => {
        setAppUserToLogin(new AppUser());
        findAllAppUsers()
            .then(resp => dispatch(setAppUsersList(resp.data)))
            .catch(err => console.log(err.message));
    },
        []);

    const handleAppUserToLogin = (event) => {
        setAppUserToLogin({
            ...appUserToLogin,
            [event.target.name]: event.target.value
        });
    };

    const submitLogin = (event) => {
        let tempUser = {};
        console.log(`submitLogin`);
        usersList.forEach(element => {
            if (element.userName === appUserToLogin.userName) {
                tempUser = element;
            }
        });

        if (tempUser.userName === appUserToLogin.userName && tempUser.password === appUserToLogin.password) {
            setAppUserToLogin(tempUser);
            login(tempUser)
                .then((response) => {
                    console.log(response.data);
                    dispatch(setLoggedInUser(response.data));
                    alert(`User ${response.data.userName} logged in successfully! Navigating to Home...`);
                    navigate(`/home`);
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err.message);
                    alert(err.message);
                });
        }
        else {
            setAppUserToLogin({ userName: '', password: '' });
            alert(`Invalid credentials!`);
        }


        event.preventDefault();
    }

    return (
        <div className="container" >
            <p className="display-4 text-primary py-3">Login</p>
            <hr />
            <div className="col-3 mt-3 py-3 shadow bg-white" >
                <h1 className="lead text-primary pb-2">Login</h1>
                <form className="form form-group form-dark ">
                    <div>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={appUserToLogin.userName}
                            onChange={handleAppUserToLogin}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={appUserToLogin.password}
                            onChange={handleAppUserToLogin}
                            required
                        />
                        <div class="form-group">
                            <select class="form-control mb-3" name="role" id="role" onChange={handleAppUserToLogin}>
                                <option value="Role">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="EMPLOYEE">BLOGGER</option>
                                <option value="MANAGER">READER</option>
                            </select>
                        </div>
                        <input
                            type="button"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-outline-primary"
                            value="Login"
                            onClick={submitLogin}
                        />
                    </div>
                </form>
            </div>
            <div className="py-3 ">
                <Link to="/register" className="btn btn-outline-primary col-3">Not yet registered? Register</Link>
            </div>
        </div >
    )
}
export default Login;




