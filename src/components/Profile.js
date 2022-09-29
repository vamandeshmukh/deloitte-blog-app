import { useSelector } from "react-redux";

const Profile = () => {

    const userName = useSelector(store => store.appUser.loggedInUserName);
    const userRole = useSelector(store => store.appUser.loggedInUserRole);

    return (
        <div className="container" >
            <p className="display-4 text-primary py-3">Profile</p>
            <hr />
            <div className="col-3 mx-3 my-3 px-3 py-3 shadow bg-white" >
                <h1 className="lead text-primary pb-2">User Profile</h1>
                <div><span className="material-icons">&#xE87C;</span>
                    <p>userName: {userName}</p>
                    <p>userRole: {userRole}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;