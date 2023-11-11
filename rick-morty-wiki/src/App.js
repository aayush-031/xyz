// Importing necessary modules and components from external libraries and files
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Card from "./components/CardComponent/Card";
import Pagination from "./components/Pagination/Pagination";
import ChooseFilter from "./components/Filter/ChooseFilter/ChooseFilter";
import Episodes from "./Pages/EpisodePage/Episodes";
import Location from "./Pages/LocationPage/Location";
import CharacterComponent from "./components/CharacterInformationComponent/CharacterComponent";

// Main App component
function App() {
  return (
    <Router>
      {/* Wrapping the entire application with Router component */}
      <div className="App">
        {/* Navbar component */}
        <Navbar />
      </div>
      {/* Defining Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CharacterComponent />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CharacterComponent />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CharacterComponent />} />
      </Routes>
    </Router>
  );
}

// Home component for the main page
const Home = () => {
  // State variables to manage page number, filters, and fetched data
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;

  // API URL based on the state values
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  // useEffect hook to fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    };

    fetchData();
  }, [api]); // Dependency array to re-run the effect when API parameters change

  return (
    // Main content of the Home component
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-12 order-lg-2 order-1">
            <h1 className="text-center mb-3">Characters</h1>
          </div>
          <div className="col-lg-5 col-12 order-lg-3 order-2">
            {/* Search component */}
            <Search
              setSearch={setSearch}
              updatePageNumber={updatePageNumber}
              className="form-control-lg mb-2"
            />
          </div>
          <div className="col-lg-6 col-12 order-lg-1 order-3">
            {/* ChooseFilter component */}
            <ChooseFilter
              pageNumber={pageNumber}
              status={status}
              updateStatus={updateStatus}
              updateGender={updateGender}
              updateSpecies={updateSpecies}
              updatePageNumber={updatePageNumber}
              className="form-control-lg "
            />
          </div>
          <div className="col-lg-12 col-12 order-lg-4 order-4">
            <div className="row">
              {/* Card component displaying character information */}
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      {/* Pagination component */}
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

// Exporting the App component as the default export
export default App;
