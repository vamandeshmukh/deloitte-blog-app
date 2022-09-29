import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAppUsersList } from '../redux/AppUserSlice';
import { findAllAppUsers, register } from '../services/AppUserService';
import AppUser from "../models/AppUser";

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usersList = useSelector(store => store.appUser.appUsersList);
    const [appUserToRegister, setAppUserToRegister] = useState({});

    useEffect(() => {
        setAppUserToRegister(new AppUser());
        findAllAppUsers()
            .then(resp => dispatch(setAppUsersList(resp.data)))
            .catch(err => console.log(err.message));
    },
        []);

    const handleAppUserToRegister = (event) => {
        console.log(event.target.value);
        setAppUserToRegister({
            ...appUserToRegister,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUserRegister = (event) => {
        let tempUser = new AppUser();
        console.log(appUserToRegister);
        for (const element of usersList) {
            console.log(element);
            console.log(tempUser);
            if (element.userName.toLowerCase() === appUserToRegister.userName.toLowerCase()) {
                tempUser = element;
                console.log(element);
                console.log(tempUser);
                setAppUserToRegister({ userName: '', password: '', role: '' });
                alert(`user ${appUserToRegister.userName} already exists!`);
                break;
            }
        }
        if (!tempUser.userName) {
            console.log(tempUser);
            console.log(appUserToRegister);
            register(appUserToRegister)
                .then((response) => {
                    console.log(response.data);
                    // alert(`User ${response.data.userName} regisetred successfully!`);
                    navigate(`/`);
                })
                .catch((error) => {
                    console.log(error.message);
                    alert(error.message);
                });
        } event.preventDefault();
    };

    const cancelRegister = () => {
        navigate(-1);
    };

    return (
        <div className="modal fade" id="registerModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="lead text-primary" id="exampleModalLabel">Register</h5>
                        <button type="button" className="close" onClick={cancelRegister} data-dismiss="modal">
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
                                        value={appUserToRegister.userName}
                                        onChange={handleAppUserToRegister}
                                        required
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control mb-3"
                                        placeholder="Enter password"
                                        value={appUserToRegister.password}
                                        onChange={handleAppUserToRegister}
                                        required
                                    />
                                    <div className="form-group dropdown">
                                        <select className="form-control mb-3" data-toggle="dropdown" name="role" id="role"
                                            onChange={handleAppUserToRegister}>
                                            <option value="Role">Select a role</option>
                                            <option value={appUserToRegister.role}>ADMIN</option>
                                            <option value={appUserToRegister.role}>BLOGGER</option>
                                            <option value={appUserToRegister.role}>READER</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div >
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" onClick={cancelRegister} data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-outline-primary" onClick={submitAppUserRegister} data-dismiss="modal">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Register;