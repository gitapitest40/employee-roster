// Import necessary dependencies from React and Redux
import { useSelector, useDispatch } from "react-redux";
import { setEmployeesDetails } from "../actions/employeeAction";
import Avatar from "../assets/user.png";

// Create a functional component named Modal
const Modal = () => {
    // Access the employeeDetails data from the Redux store using useSelector
    const employeeDetails = useSelector((state) => state.employeeDetails);
    // Access the dispatch function from Redux
    const dispatch = useDispatch();

    // Function to close the modal when clicking outside of it
    const closeModal = (e) => {
        e.stopPropagation();
        // Check if the click target is the modal or the close button
        if (e.target.className === "employee-detail-modal" || e.target.className === "close") {
            // Dispatch an action to set the employeeDetails to null, closing the modal
            dispatch(setEmployeesDetails(null));
        }
    }

    // Render the modal if employeeDetails is not null, otherwise render nothing
    return employeeDetails ? (
        <div className="employee-detail-modal" onClick={closeModal}>
            <div className="modal-content">
                <span className="close" onClick={closeModal} data-testid="close-button">&times;</span>
                <div className="employee-detail">
                    <div className="employee-detail-left">
                        <img src={Avatar} alt="Avatar" className="avatar-detail" />
                        <div className="employee-job-title">
                            <p>{employeeDetails.jobTitle}</p>
                            <p>{employeeDetails.age}</p>
                            <p>{new Date(employeeDetails.dateJoined).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="employee-detail-right">
                        <p className="employee-name">{employeeDetails.firstName + " " + employeeDetails.lastName}</p>
                        <p className="employee-desc">{employeeDetails.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}

// Export the Modal component for use in other parts of the application
export default Modal;
