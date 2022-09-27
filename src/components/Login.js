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






















// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from 'react';

// const Login = () => {

//     const [appUser, setAppUser] = useState({});

//     useEffect(() => {
//         setAppUser({
//             userName: ``,
//             password: ``
//         });
//     }, []);

//     const handleAppUser = (event) => {
//         setAppUser({
//             ...appUser,
//             [event.target.name]: event.target.value
//         });
//     };

//     const submitAppUser = (event) => {
//         console.log(appUser);
//         if (appUser.userName === `Vaman`) {
//             alert(`User ${appUser.userName} logged in successfully!`);
//             setAppUser({
//                 userName: ``,
//                 password: ``
//             });
//         }
//         else {
//             alert(`Username ${appUser.userName} is not valid!`);
//             setAppUser({
//                 userName: ``,
//                 password: ``
//             });
//         }
//         event.preventDefault();
//     }

//     return (
//         <div className="container" >
//             <p className="display-4 text-primary py-3">Login</p>
//             <hr />
//             <div className="col-3 mt-3 py-3 shadow bg-white" >
//                 <h1 className="lead text-primary pb-2">Login</h1>
//                 <form className="form form-group form-dark " onSubmit={submitAppUser}>
//                     <div>
//                         <input
//                             type="text"
//                             name="userName"
//                             id="userName"
//                             className="form-control mb-3"
//                             placeholder="Enter username"
//                             value={appUser.userName}
//                             onChange={handleAppUser}
//                             required
//                         />
//                         <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             className="form-control mb-3"
//                             placeholder="Enter password"
//                             value={appUser.password}
//                             onChange={handleAppUser}
//                             required
//                         />
//                         <input
//                             type="submit"
//                             id="submit"
//                             name="submit"
//                             className="form-control btn btn-outline-primary"
//                             value="Login"
//                         />
//                     </div>
//                 </form>
//             </div>
//             <div className="py-3 ">
//                 <Link to="/register" className="btn btn-outline-primary col-3">Not yet registered? Register</Link>
//             </div>
//         </div >
//     )
// }
// export default Login;



// import { useState } from "react";

// // state = one object for one component


// const Login = () => {

//     let [myName, setMyName] = useState(''); // string
//     // let [salary, setSalary] = useState(0); // number
//     // let [isMarried, setIsMarried] = useState(false); // boolean
//     // const [phones, setPhones] = useState([]); // array
//     // const [empData, setEmpData] = useState({}); // object
//     // const [empData, setEmpData] = useState({ eid: 0, firstName: '', salary: 0 }); // object


//     // here


//     const getMyName = (evt) => {
//         // myName = evt.target.value; // not valid
//         setMyName(evt.target.value);

//         console.log(myName);
//         console.log(evt.target.value);
//         console.log(evt.target.name);
//     }

//     return (
//         <div>
//             <p>Login Component</p>

//             <p>Please enter your name:</p>
//             <div>
//                 <input type="text" id="myName" name="myName" value={myName} onChange={getMyName} ></input>
//             </div>
//             <p>Your name: {myName}</p>


//         </div >
//     );
// };

// export default Login;




// import { Delete1, Delete2 } from "./deleteComponent";

// const Login = () => {

//     // component can declare all types of properties
//     const myName = `Vaman`;
//     const mySalary = 10.5;
//     const myData = { eid: 101, firstName: 'Sonu' };

//     // component can also declare functions
//     const fun = () => {
//         console.log(`fun function`);
//     };


//     return (
//         <div>
//             <p>Login Component</p>
//             {/* Properties can be invoked here  */}
//             {myName} {mySalary} {myData.firstName} {myData.eid}
//             <Delete1 />
//             <Delete2 />
//             {fun()}
//         </div >
//     );
// };

// export default Login;