// Importing React, useEffect, useState, Card component, PickFilter component, and utility functions from utils
import React, { useEffect, useState } from "react";
import Card from "../../components/CardComponent/Card";
import PickFilter from "../../components/Filter/PickFilter/PickFilter";
import { getAllEpisodes, episodeApi } from "../../utils/utils";
import "../Pages.scss"; // Import your custom CSS file

// Functional component for the Episodes page
const Episodes = () => {
  // State variables for results, info, episodeId, and allEpisodes
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const { air_date, name } = info;
  const [episodeId, setEpisodeId] = useState(1);
  const [allEpisodes, setAllEpisodes] = useState([]);

  // API endpoint for the current episode
  const currentEpisodeApi = `${episodeApi}${episodeId}`;

  // Function to fetch data for the current episode
  const fetchData = async () => {
    try {
      let data = await fetch(currentEpisodeApi);
      if (!data.ok) {
        throw new Error(`Failed to fetch data: ${data.status}`);
      }
      data = await data.json();
      setInfo(data);
      // Fetching characters data for the current episode
      const charactersData = await Promise.all(
        data.characters.map((characterUrl) =>
          fetch(characterUrl).then((res) => res.json()),
        ),
      );
      setResults(charactersData);
    } catch (error) {
      console.error(error);
    }
  };

  // Effect to fetch all episodes when the component mounts
  useEffect(() => {
    (async function () {
      setAllEpisodes(await getAllEpisodes());
    })();
  }, []);

  // Effect to fetch data for the current episode when episodeId changes
  useEffect(() => {
    fetchData();
  }, [currentEpisodeApi]);

  // Rendering the Episodes page
  return (
    <div className="container">
      <div className="row mb-3">
        {/* Displaying the episode name and air date */}
        <h1 className="text-center mb-3">
          Episode name:{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="column-lg-3 column-12 mb-4">
          {/* PickFilter component for selecting episodes */}
          <h4 className="text-center mb-4">Pick Episode</h4>
          <PickFilter
            name="Episode"
            changeID={setEpisodeId}
            allLocation={allEpisodes}
          />
        </div>
        <div className="column-lg-8 column-12">
          <div className="row">
            {/* Card component to display characters for the selected episode */}
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the Episodes component as the default export
export default Episodes;
