// Import necessary dependencies from React and Redux
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import constants from "../const/const"; // Import constants for table headers
import Avatar from "../assets/user.png"; // Import an avatar image
import { setTotalRecords, setEmployeesData, setPageNo, setEmployeesDetails } from "../actions/employeeAction"; // Import Redux action creators
import data from "../sampleData"; // Import sample employee data
import Modal from "./Modal"; // Import the Modal component

// Create a functional component named Table
const Table = () => {
    // Access various pieces of state from the Redux store using useSelector
    const employeesData = useSelector((state) => state.employeesData);
    const pageNo = useSelector((state) => state.pageNo);
    const totalRecords = useSelector((state) => state.totalRecords);
    const maxRecords = useSelector((state) => state.maxRecords);
    const employeeDetails = useSelector((state) => state.employeeDetails);
    
    // Access the dispatch function from Redux
    const dispatch = useDispatch();

    // Effect to set the total number of records based on the sample data length
    useEffect(() => {
        dispatch(setTotalRecords(data.employees.length));
    }, [dispatch]);

    // Effect to set the employeesData based on the current page number and max records per page
    useEffect(() => {
        dispatch(setEmployeesData(data.employees.slice((pageNo - 1) * maxRecords, pageNo * maxRecords)));
    }, [dispatch, maxRecords, pageNo]);

    // Create an array of page numbers for pagination
    const pagenum = [...Array(Math.ceil(totalRecords / maxRecords)).keys()];

    // Function to handle page number changes
    const handlePageChange = (page) => {
        dispatch(setPageNo(page));
    }

    // Function to open the employee details modal when clicking on a table row
    const openEmployeeDetail = (id) => {
        const details = employeesData.filter((emp) => emp.id === id);
        if (details.length) {
            dispatch(setEmployeesDetails(details[0]));
        }
    }

    // Render the table component with employee data and pagination
    return (
        <div className="table-component">
            {employeeDetails ? <Modal /> : null} {/* Render the Modal component if employeeDetails is available */}
            <table className="center">
                <tbody>
                    <tr>
                        <th className="id">{constants.table.tableHeader.id}</th>
                        <th className="name">{constants.table.tableHeader.name}</th>
                        <th className="contact">{constants.table.tableHeader.contact}</th>
                        <th className="address">{constants.table.tableHeader.address}</th>
                    </tr>

                    {employeesData?.map((emp, index) => (
                        <tr data-testid="table-row" key={emp.id} className={emp.id === employeeDetails?.id ? "active-row" : ""} onClick={() => {
                            openEmployeeDetail(emp.id);
                        }}>
                            <td>{(pageNo - 1) * maxRecords + index + 1}</td>
                            <td>
                                <div className="name-container">
                                    <img className="avatar" src={Avatar} alt="avatar" />
                                    <span>{emp.firstName + " " + emp.lastName}</span>
                                </div>
                            </td>
                            <td>{emp.contactNo}</td>
                            <td>{emp.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination-container">
                <button onClick={() => {
                    if (pageNo - 1 > 0) {
                        handlePageChange(pageNo - 1);
                    }
                }}>Prev</button>
                {pagenum.map((page) => (
                    <button className={(page + 1) === pageNo ? "active-page page-no" : "page-no"} key={"pageno" + page} onClick={() => {
                        handlePageChange(page + 1);
                    }}>{page + 1}</button>
                ))}
                <button onClick={() => {
                    if (pageNo <= pagenum[pagenum.length - 1]) {
                        handlePageChange(pageNo + 1);
                    }
                }}>Next</button>
            </div>
        </div>
    );
}

export default Table;
