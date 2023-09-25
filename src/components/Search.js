// Import the 'constants' object from the '../const/const' module
import constants from "../const/const";

// Create a functional component named Search
const Search = () => {
    // Render a div with a search input field and a search button
    return (
        <div className="search-component">
            {/* Input field for user to enter search query */}
            <input className="search-input" type="text" />
            
            {/* Button for triggering the search action, using the 'searchBtn' constant from 'constants' */}
            <button className="search-btn">{constants.search.searchBtn}</button>
        </div>
    );
}

// Export the Search component for use in other parts of the application
export default Search;
