import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

    const currrentUser = useSelector(store => store.appUser.loggedInUser);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                <Link className="navbar-brand" to="/"><img height="24px" src="../assets/img/Deloitte_logo_black.png" alt="Deloitte"></img> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/write" data-toggle="modal" data-target="#createNewBlogPost">Write</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/logout" data-toggle="modal" data-target="#logoutModal">Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register" data-toggle="modal" data-target="#registerModal">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" data-toggle="modal" data-target="#loginModal">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Header;

