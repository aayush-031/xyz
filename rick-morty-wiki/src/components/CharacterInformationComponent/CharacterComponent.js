// Importing necessary modules and styles
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { charachterApi, getStatusBadgeClass } from "../../utils/utils";
import "./CharacterComponent.scss";

// Functional component to display detailed information about a character
const CharacterComponent = () => {
  // Extracting the 'id' parameter from the URL
  const { id } = useParams();

  // State variables to manage fetched data, location URL, location details,
  // featured episodes URL, and featured episodes
  const [fetchedData, setFetchedData] = useState({});
  const [locationUrl, setLocationUrl] = useState("");
  const [locationDetails, setLocationDetails] = useState({});
  const [featuredEpisodesUrl, setFeaturedEpisodesUrl] = useState([]);
  const [featuredEpisodes, setFeaturedEpisodes] = useState([]);

  // API URL for the current character based on the 'id' parameter
  const currentCharacterApi = `${charachterApi}${id}`;

  // Fetching data for the current character and related details using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(currentCharacterApi);

        // Checking if the response is successful
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        // Parsing the response data and updating state variables
        const data = await response.json();
        setFetchedData(data);
        setFeaturedEpisodesUrl(data.episode);
        setLocationUrl(data.location.url);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Calling the fetchData function when the 'currentCharacterApi' or 'id' changes
    fetchData();
  }, [currentCharacterApi, id]);

  // Fetching featured episodes details using useEffect
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        // Mapping each episode URL to a promise and resolving all promises
        const episodePromises = featuredEpisodesUrl.map((episodeUrl) =>
          fetch(episodeUrl).then((res) => res.json())
        );

        const episodes = await Promise.all(episodePromises);

        // Updating the state variable with featured episodes details
        setFeaturedEpisodes(episodes);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };

    // Calling the fetchEpisodes function when 'featuredEpisodesUrl' changes
    if (featuredEpisodesUrl.length > 0) {
      fetchEpisodes();
    }
  }, [featuredEpisodesUrl]);

  // Fetching location details using useEffect
  useEffect(() => {
    const fetchLocationDetails = async () => {
      try {
        // Fetching location details and updating the state variable
        const location = await fetch(locationUrl).then((res) => res.json());
        setLocationDetails(location);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    // Calling the fetchLocationDetails function when 'locationUrl' changes
    if (locationUrl) {
      fetchLocationDetails();
    }
  }, [locationUrl]);

  // Rendering the detailed character information
  return (
    <div className="container my-4">
      <div className="row align-items-start">
        <div className="col-md-6 mb-4 d-flex align-items-start flex-column">
          {/* Character image */}
          <img
            className="img-fluid rounded mt-4"
            src={fetchedData.image}
            alt=""
            style={{ width: "100%", maxHeight: "500px" }}
          />

          {/* Character name and status */}
          <h1 className="text-center mt-3" style={{ fontSize: "2rem" }}>
            <span style={{ marginRight: "10px", fontSize: "2.5rem" }}>
              {fetchedData.name}
            </span>
            <div
              className={`badge fs-7 align-middle ${getStatusBadgeClass(
                fetchedData.status
              )}`}
            >
              {fetchedData.status}
            </div>
          </h1>
        </div>
        <div className="col-md-6">
          {/* Additional character information */}
          <div className="content mt-3" style={{ fontSize: "1.2rem" }}>
            <table className="table">
              <tbody>
                {/* Table rows for character details */}
                <tr>
                  <td>
                    <span className="fw-bold">Gender:</span>
                  </td>
                  <td>{fetchedData.gender}</td>
                </tr>
                <tr>
                  <td>
                    <span className="fw-bold">Species:</span>
                  </td>
                  <td>{fetchedData.species}</td>
                </tr>
                {/* Additional character details */}
                {/* ... (continue for other details) ... */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the CharacterComponent as the default export
export default CharacterComponent;
