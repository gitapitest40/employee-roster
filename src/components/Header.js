// Import necessary dependencies from the React and Redux libraries.
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import the action function 'setCompanyInfo' from the 'employeeAction' module.
import { setCompanyInfo } from "../actions/employeeAction";

// Import sample data and constants from relevant files.
import data from "../sampleData";
import constants from "../const/const";

// Define a functional component called 'Header'.
const Header = () => {
    // Access the 'companyInfo' state variable from the Redux store.
    const companyInfo = useSelector((state) => state.companyInfo);

    // Create a dispatcher to dispatch actions to the Redux store.
    const dispatch = useDispatch();

    // Use the 'useEffect' hook to dispatch an action when the component is mounted.
    useEffect(() => {
        // Dispatch the 'setCompanyInfo' action with data from 'sampleData'.
        dispatch(setCompanyInfo(data.companyInfo));
    }, [dispatch]); // The effect runs when 'dispatch' changes (usually once when the component mounts).

    // Render the header component.
    return (
        <header data-testid="header-component" className="header">
            <div className="header-left">
                {/* Display the company name and motto from the Redux store. */}
                <h1 className="company-name">{companyInfo?.companyName}</h1>
                <p className="company-motto">{companyInfo?.companyMotto}</p>
            </div>

            <div className="header-right">
                {/* Display the company's establishment date using constants and data from the Redux store. */}
                <p className="comapany-since">
                    {constants.header.since} ({new Date(companyInfo?.companyEst).toLocaleDateString()})
                </p>
            </div>
        </header>
    );
};

// Export the 'Header' component as the default export of this module.
export default Header;
