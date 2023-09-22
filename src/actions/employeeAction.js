import { SET_COMPANY_INFO, SET_EMPLOYEES_DATA, SET_EMPLOYEE_DETAILS, SET_PAGE_NO, SET_MAX_RECORDS, SET_TOTAL_RECORDS } from "../actionTypes/actionTypes";

const setCompanyInfo = (data) => {
    return {
      type: SET_COMPANY_INFO,
      payload: data,
    };
};

const setEmployeesData = (data) => {
  return {
    type: SET_EMPLOYEES_DATA,
    payload: data,
  };
};

const setEmployeesDetails = (data) => {
  return {
    type: SET_EMPLOYEE_DETAILS,
    payload: data,
  };
};

const setPageNo = (data) => {
    return {
      type: SET_PAGE_NO,
      payload: data,
    };
  };

const setMaxRecords = (data) => {
    return {
        type: SET_MAX_RECORDS,
        payload: data,
    };
};

const setTotalRecords = (data) => {
    return {
        type: SET_TOTAL_RECORDS,
        payload: data,
    };
};

export { setCompanyInfo, setEmployeesData, setEmployeesDetails, setPageNo, setMaxRecords, setTotalRecords };