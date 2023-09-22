import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCompanyInfo } from "../actions/employeeAction";
import data from "../sampleData";
import constants from "../const/const";

const Header=()=>{
    const companyInfo = useSelector((state) => state.companyInfo);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setCompanyInfo(data.companyInfo));
      },[dispatch])

    return <header data-testid="header-component" className="header">
                <div className="header-left">
                    <h1 className="company-name">{companyInfo?.companyName}</h1>
                    <p className="company-motto">{companyInfo?.companyMotto}</p>
                </div>
                
                <div className="header-right">
                    <p className="comapany-since">{constants.header.since} ({new Date(companyInfo?.companyEst).toLocaleDateString()})</p>
                </div>
            </header>
}

export default Header;