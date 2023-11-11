// Importing React, useEffect, useState, Card component, PickFilter component, and utility functions from utils
import React, { useEffect, useState } from "react";
import Card from "../../components/CardComponent/Card";
import PickFilter from "../../components/Filter/PickFilter/PickFilter";
import { getAllLocations, locationApi } from "../../utils/utils";
import "../Pages.scss"; // Import your custom CSS file

// Functional component for the Location page
const Location = () => {
  // State variables for residents, locationInfo, selectedLocationNumber, and allLocations
  const [residents, setResidents] = useState([]);
  const [locationInfo, setLocationInfo] = useState({});
  const { dimension, type, name } = locationInfo;
  const [selectedLocationNumber, setSelectedLocationNumber] = useState(1);
  const [allLocations, setAllLocations] = useState([]);

  // API endpoint for the current location
  const currentLocationApi = `${locationApi}${selectedLocationNumber}`;

  // Function to fetch data for the current location
  const fetchData = async () => {
    try {
      let data = await fetch(currentLocationApi);
      if (!data.ok) {
        throw new Error(`Failed to fetch data: ${data.status}`);
      }
      data = await data.json();
      setLocationInfo(data);
      // Fetching residents data for the current location
      const residentsData = await Promise.all(
        data.residents.map((residentUrl) =>
          fetch(residentUrl).then((res) => res.json()),
        ),
      );
      setResidents(residentsData);
    } catch (error) {
      console.error(error);
    }
  };

  // Effect to fetch all locations when the component mounts
  useEffect(() => {
    (async function () {
      setAllLocations(await getAllLocations());
    })();
  }, []);

  // Effect to fetch data for the current location when selectedLocationNumber changes
  useEffect(() => {
    fetchData();
  }, [currentLocationApi]);

  // Rendering the Location page
  return (
    <div className="container">
      <div className="row mb-3">
        {/* Displaying the location name, dimension, and type */}
        <h1 className="text-center mb-3">
          Location:
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="column-lg-3 column-12 mb-4">
          {/* PickFilter component for selecting locations */}
          <h4 className="text-center mb-4">Pick Location</h4>
          <PickFilter
            name="Location"
            changeID={setSelectedLocationNumber}
            allLocation={allLocations}
          />
        </div>
        <div className="column-lg-8 column-12">
          <div className="row">
            {/* Card component to display residents for the selected location */}
            <Card page="/location/" results={residents} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the Location component as the default export
export default Location;
