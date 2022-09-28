
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedInUser } from '../redux/AppUserSlice';

const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitLogout = async () => {
        dispatch(setLoggedInUser(''));
        navigate('/');
        window.location.reload();
    };

    const cancelLogout = () => {
        navigate(-1);
    };


    return (
        <div className="modal fade" id="logoutModal" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Logout</h5>
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

}
export default Logout;




