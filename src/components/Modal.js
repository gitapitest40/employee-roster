import { useSelector, useDispatch } from "react-redux";
import { setEmployeesDetails } from "../actions/employeeAction";
import Avatar from "../assets/user.png";

const Modal=()=>{
    const employeeDetails = useSelector((state) => state.employeeDetails);
    const dispatch = useDispatch();
    const closeModal=(e)=>{
        e.stopPropagation();
        if(e.target.className === "employee-detail-modal" || e.target.className === "close"){
            dispatch(setEmployeesDetails(null));
        }
    }
    return employeeDetails?<div className="employee-detail-modal" onClick={closeModal}>
                <div className="modal-content">
                <span className="close" onClick={closeModal} data-testid="close-button">&times;</span>
                    <div className="employee-detail">
                        <div className="employee-detail-left">
                            <img src={Avatar} alt="Avatar" className="avatar-detail"/>
                            <div className="employee-job-title">
                                <p>{employeeDetails.jobTitle}</p>
                                <p>{employeeDetails.age}</p>
                                <p>{new Date(employeeDetails.dateJoined).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className="employee-detail-right">
                            <p className="employee-name">{employeeDetails.firstName+" "+employeeDetails.lastName}</p>
                            <p className="employee-desc">{employeeDetails.bio}</p>
                        </div>
                    </div>
                </div>
            </div>:null
}

export default Modal;