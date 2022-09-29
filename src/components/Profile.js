import { useSelector } from "react-redux";

const Profile = () => {

    const userProfile = useSelector(store => store.appUser.appUserData);

    return (
        <div className="container" >
            <p className="display-4 text-primary py-3">Profile</p>
            <hr />
            <span className="material-icons">&#xE87C;</span>
            <div className="col-3 mt-3 py-3 shadow bg-white" >
                <h1 className="lead text-primary pb-2">User Profile</h1>
                <div>
                    <p>userName: {userProfile.userName}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;