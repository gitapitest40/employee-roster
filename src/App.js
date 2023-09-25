// Import necessary components and styles
import './App.css';
import Header from "./components/Header"; // Import the Header component
import Search from "./components/Search"; // Import the Search component
import Table from "./components/Table"; // Import the Table component
import ErrorBoundary from "./components/ErrorBoundry"; // Import the ErrorBoundary component

// Create the main App component
function App() {
  return (
    <>
      {/* Wrap the entire application in an ErrorBoundary component to handle errors */}
      <ErrorBoundary>
        {/* Render the Header component */}
        <Header />
        {/* Create a container for the Search component */}
        <div className='search-container'>
          {/* Render the Search component */}
          <Search />
        </div>
        {/* Create a container for the Table component */}
        <div className='table-container'>
          {/* Render the Table component */}
          <Table />
        </div>
      </ErrorBoundary>
    </>
  );
}

// Export the App component as the main entry point of the application
export default App;
