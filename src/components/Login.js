import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAppUserData, setLoggedInUserId, setLoggedInUserName, setLoggedInUserRole } from '../redux/AppUserSlice';
import { userLogin } from '../services/AppUserService';
import AppUser from "../models/AppUser";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [appUserToLogin, setAppUserToLogin] = useState({});

    useEffect(() => {
        setAppUserToLogin(new AppUser());
    },
        []);

    const handleAppUserToLogin = (evt) => {
        console.log(evt.target.name + evt.target.value);
        setAppUserToLogin({
            ...appUserToLogin,
            [evt.target.name]: evt.target.value
        });
    };

    const submitLogin = (evt) => {
        userLogin(appUserToLogin)
            .then((response) => {
                const tempData = response.data[0];
                if (tempData &&
                    (tempData.password === appUserToLogin.password
                        && tempData.role === appUserToLogin.role)) {
                    console.log(tempData);
                    dispatch(setLoggedInUserId(tempData.id));
                    dispatch(setLoggedInUserName(tempData.userName));
                    dispatch(setLoggedInUserRole(tempData.role));
                    sessionStorage.setItem('currentUserId', tempData.id);
                    sessionStorage.setItem('currentUserName', tempData.userName);
                    sessionStorage.setItem('currentUserRole', tempData.role);
                    navigate(`/`);
                }
            })
            .catch((err) => {
                console.log(err.message);
                alert(err.message);
            });
        evt.preventDefault();
    }

    const cancelLogin = () => {
        navigate(-1);
    };

    return (
        <div className="modal fade" id="loginModal" tabIndex="-1">
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
                                    <div className="form-group dropdown">
                                        <select className="form-control mb-3" data-toggle="dropdown" name="role" id="role"
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
                        <button type="button" className="btn btn-outline-primary" onClick={submitLogin} data-dismiss="modal">Login</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={cancelLogin} data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;




