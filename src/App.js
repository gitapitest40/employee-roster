import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import ErrorBoundry from "./components/ErrorBoundry"
function App() {
  return (
    <>
    <ErrorBoundry>
      <Header/>
        <div className='search-container'>
          <Search/>
        </div>
        <div className='table-container'>
          <Table/>
        </div>
    </ErrorBoundry>
    </>
  );
}

export default App;
