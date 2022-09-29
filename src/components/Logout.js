
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedInUserId, setLoggedInUserName, setLoggedInUserRole } from '../redux/AppUserSlice';

const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitLogout = () => {
        dispatch(setLoggedInUserId(''));
        dispatch(setLoggedInUserName(''));
        dispatch(setLoggedInUserRole(''));
        sessionStorage.removeItem('currentUserId');
        sessionStorage.removeItem('currentUserName');
        sessionStorage.removeItem('currentUserRole');
        navigate('/');
    };

    const cancelLogout = () => {
        navigate(-1);
    };

    return (
        <div className="modal fade" id="logoutModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Logout</h5>
                        <button type="button" className="close" onClick={cancelLogout} data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure to logout?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-primary" onClick={submitLogout} data-dismiss="modal">Logout</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={cancelLogout} data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>);
};

export default Logout;




