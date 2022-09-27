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
        console.log(event.target.value);
        setAppUserToLogin({
            ...appUserToLogin,
            [event.target.name]: event.target.value
        });
    };

    const submitLogin = (event) => {
        console.log(appUserToLogin);
        let tempUser = {};
        console.log(`submitLogin`);
        usersList.forEach(element => {
            if (element.userName === appUserToLogin.userName) {
                tempUser = element;
            }
        });

        if (tempUser.userName === appUserToLogin.userName
            && tempUser.password === appUserToLogin.password
            && tempUser.role === appUserToLogin.role) {
            setAppUserToLogin(tempUser);
            login(tempUser)
                .then((response) => {
                    console.log(response.data);
                    dispatch(setLoggedInUser(response.data));
                    alert(`User ${response.data.userName} logged in successfully!`);
                    navigate(`/`);
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err.message);
                    alert(err.message);
                });
        }
        else {
            setAppUserToLogin({ userName: '', password: '', role: '' });
            alert(`Invalid credentials!`);
        }
        event.preventDefault();
    }

    const cancelLogin = () => {
        navigate(-1);
    };

    return (
        <div className="modal fade" id="loginModal" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="lead text-primary" id="exampleModalLabel">Login</h5>
                        <button type="button" className="close" onClick={cancelLogin} data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>
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
                                    <div className="form-group">
                                        <select className="form-control mb-3" name="role" id="role"
                                            onChange={handleAppUserToLogin}>
                                            <option value="Role">Select a role</option>
                                            <option value={appUserToLogin.role}>ADMIN</option>
                                            <option value={appUserToLogin.role}>BLOGGER</option>
                                            <option value={appUserToLogin.role}>READER</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div >
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" onClick={cancelLogin} data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-outline-primary" onClick={submitLogin} data-dismiss="modal">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;




