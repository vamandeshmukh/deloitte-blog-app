import { useSelector } from "react-redux";


const Profile = () => {

    const userProfile = useSelector(store => store.appUser.loggedInUser);

    return (
        <div className="container">
            <p className="display-4 text-primary">User Profile</p>
            <hr />
            <div className="col-5 mx-3 my-3 py-3 bg-white shadow">
                <p className="text-center lead">User Profile Details</p>
                <div>
                    <p>userName: {userProfile.userName}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;