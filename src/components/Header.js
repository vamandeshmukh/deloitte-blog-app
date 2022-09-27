import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

    const currrentUser = useSelector(store => store.appUser.loggedInUser);

    return (
        <div>
            {currrentUser &&
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/"><img height="24px" src="../media/Deloitte_logo_black.png" alt="Deloitte"></img> </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            }

            {!currrentUser &&
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/"><img height="24px" src="../media/Deloitte_logo_black.png" alt="Deloitte"></img> </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            }

        </div>
    );

}
export default Header;








// import { Link } from "react-router-dom";

// const Header = () => {

//     return (
//         <div>
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                     <Link className="navbar-brand" to="/"><img height="24px" src="../media/Deloitte_logo_black.png" alt="Deloitte"></img> </Link>
//                     {/* <Link className="navbar-brand" to="/"><img height="24px" src="https://brandpalettes.com/wp-content/uploads/2020/06/deloitte-02.png" alt="Deloitte"></img> </Link> */}
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mr-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/emp">Emp</Link>
//                             </li>
//                             {(true) &&
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/parent">Parent</Link>
//                                 </li>
//                             }
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/register">Register</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/login">Login</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/profile">Profile</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/blog">Blog</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/comp1">Comp1</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/comp2">Comp2</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/link-n">Link-N</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );

// }
// export default Header;







// import { Link } from "react-router-dom";



// const Header = () => {

//     return (
//         <div>
//             <div>
//                 <Link to='/emp'>Emp</Link>
//                 <Link to='/parent'>Parent</Link>
//                 <Link to='/login'>Login</Link>
//                 <Link to='/home'>Home</Link>
//             </div>
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     <Link className="navbar-brand" to="/">Home</Link>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mr-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/emp">Emp</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/parent">Parent</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/">Register</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/login">Login</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/profile">Profile</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/link-n">Link-N</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );

// }
// export default Header;
