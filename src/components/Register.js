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
                setAppUserToRegister({ userName: '', password: '' });
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
                    alert(`User ${response.data.userName} regisetred successfully! Navigating to Login...`);
                    navigate(`/login`);
                })
                .catch((error) => {
                    console.log(error.message);
                    alert(error.message);
                });


        } event.preventDefault();
    };

    return (
        <div className="container" >
            <p className="display-4 text-primary py-3">Register</p>
            <hr />
            <div className="col-3 mt-3 py-3 shadow bg-white" >
                <h1 className="lead text-primary pb-2">Register</h1>
                <form className="form form-group form-dark " onSubmit={submitAppUserRegister}>
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
                        <div class="form-group">
                            <select class="form-control mb-3" name="role" id="role" onChange={handleAppUserToRegister}>
                                <option value="Role">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="EMPLOYEE">BLOGGER</option>
                                <option value="MANAGER">READER</option>
                            </select>
                        </div>

                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-outline-primary"
                            value="Register"
                        />
                    </div>
                </form>
            </div>
            <div className="py-3 ">
                <Link to="/login" className="btn btn-outline-primary col-3">Already registered? Login</Link>
            </div>
        </div >
    );

}
export default Register;