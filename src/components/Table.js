import { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import constants from "../const/const";
import Avatar from "../assets/user.png";
import { setTotalRecords, setEmployeesData, setPageNo, setEmployeesDetails } from "../actions/employeeAction";
import data from "../sampleData";
import Modal from "./Modal";

const Table=()=>{
    const employeesData = useSelector((state)=>state.employeesData);
    const pageNo = useSelector((state)=>state.pageNo);
    const totalRecords = useSelector((state)=>state.totalRecords);
    const maxRecords = useSelector((state)=>state.maxRecords);
    const employeeDetails = useSelector((state)=>state.employeeDetails);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setTotalRecords(data.employees.length));
    },[dispatch])

    useEffect(()=>{
        dispatch(setEmployeesData(data.employees.slice((pageNo-1)*maxRecords,pageNo*maxRecords)));
      },[dispatch,maxRecords,pageNo])
    
    const pagenum = [...Array(Math.ceil(totalRecords/maxRecords)).keys()];

    const handlePageChange=(page)=>{
        dispatch(setPageNo(page));
    }

    const openEmployeeDetail=(id)=>{
       const details = employeesData.filter((emp)=>{
            return emp.id === id;
        })
        if(details.length){
            dispatch(setEmployeesDetails(details[0]));
        }   
    }

    return <div className="table-component">
        {employeeDetails ? <Modal/>: null}
        <table className="center">
        <tbody>
            <tr>
                <th className="id">{constants.table.tableHeader.id}</th>
                <th className="name">{constants.table.tableHeader.name}</th>
                <th className="contact">{constants.table.tableHeader.contact}</th>
                <th className="address">{constants.table.tableHeader.address}</th>
            </tr>
            
            {employeesData?.map((emp,index)=>{
                return <tr data-testid="table-row" key={emp.id} className={emp.id === employeeDetails?.id?"active-row":""} onClick={()=>{
                    openEmployeeDetail(emp.id)
                }}>
                <td>{(pageNo-1)*maxRecords+index+1}</td>
                <td><div className="name-container"><img className="avatar" src={Avatar} alt="avatar"/><span>{emp.firstName+" "+emp.lastName}</span></div></td>
                <td>{emp.contactNo}</td>
                <td>{emp.address}</td>
            </tr>
            })}
            </tbody>
            
        </table>
        <div className="pagination-container">
            <button onClick={()=>{
                    if(pageNo - 1 > 0){
                        handlePageChange(pageNo-1)
                    }
                }}>Prev</button>
            {pagenum.map((page)=>{
                return <button className={(page+1)===pageNo?"active-page page-no":"page-no"} key={"pageno"+page} onClick={()=>{
                    handlePageChange(page+1)
                }}>{page+1}</button>
            })}            
            <button onClick={()=>{
                    if(pageNo <= pagenum[pagenum.length-1]){
                        handlePageChange(pageNo+1)
                    }
                }}>Next</button>
        </div>
    </div>
}

export default memo(Table);