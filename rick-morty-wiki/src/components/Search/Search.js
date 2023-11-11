// Importing React and styles from Search.module.scss
import React from "react";
import styles from "./Search.module.scss";

// Functional component for the search form
const Search = ({ setSearch, updatePageNumber }) => {
  // Function to handle the search button click (currently preventing default)
  let searchBtn = (e) => {
    e.preventDefault();
  };

  // Rendering the search form
  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      {/* Input field for searching characters */}
      <input
        onChange={(e) => {
          // Updating the page number and search term on input change
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />

      {/* Search button */}
      <button
        onClick={searchBtn}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

// Exporting the Search component as the default export
export default Search;
