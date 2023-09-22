import constants from "../const/const";

const Search=()=>{
    return <div className="search-component">    
            <input className="search-input" type="text" /> 
            <button className="search-btn">{constants.search.searchBtn}</button>
           </div>
}

export default Search;