import { SET_EMPLOYEES_DATA, SET_EMPLOYEE_DETAILS, SET_COMPANY_INFO, SET_PAGE_NO, SET_MAX_RECORDS, SET_TOTAL_RECORDS } from "../actionTypes/actionTypes";

const initialState = {
  companyInfo: null,  
  employeesData: [],
  employeeDetails: null,
  pageNo: 1,
  maxRecords: 10,
  totalRecords: 10,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_COMPANY_INFO:
      return {
        ...state,
        companyInfo: action.payload,
      };

    case SET_EMPLOYEES_DATA:
      return {
        ...state,
        employeesData: action.payload,
      };

    case SET_EMPLOYEE_DETAILS:
      return {
        ...state,
        employeeDetails: action.payload,
      };

    case SET_PAGE_NO:
        return {
            ...state,
            pageNo: action.payload,
        };
        
    case SET_MAX_RECORDS:
        return {
            ...state,
            maxRecords: action.payload,
        };

    case SET_TOTAL_RECORDS:
        return {
            ...state,
            totalRecords: action.payload,
        };
    
    default:
      return state;
  }
};

export default employeeReducer;