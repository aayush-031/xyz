// Importing React and the FilterComponent for rendering filters
import React from "react";
import FilterComponent from "./FilterComponent";

// Importing filter options from utils
import { status, species, gender } from "../../../utils/utils";

// Functional component to manage and display filters
const ChooseFilter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  // Function to clear all filters and reset page number
  const clearFilters = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    // Reloading the window to apply filter changes
    window.location.reload(false);
  };

  // Rendering the filter section
  return (
    <div className="col-lg-3 col-12 mb-5">
      {/* Row for filter title and clear button */}
      <div className="row mb-3">
        <div className="col-4 d-flex">
          <div className="text-center fw-bold fs-4">Filters</div>
        </div>
        <div className="col-8 d-flex justify-content-center">
          {/* Clear button to reset filters */}
          <button
            className="btn btn-sm btn-danger"
            onClick={clearFilters}
          >
            Clear
          </button>
        </div>
      </div>

      {/* Row for filter options */}
      <div className="row">
        <div className="accordion" id="accordionExample">
          <>
            {/* Rendering filter components for Status, Species, and Gender */}
            <FilterComponent
              key="status"
              updatePageNumber={updatePageNumber}
              updateState={updateStatus}
              values={status}
              name={"Status"}
              className="col-lg-4 col-md-6 col-sm-12"
            />
            <FilterComponent
              key="Species"
              updatePageNumber={updatePageNumber}
              updateState={updateSpecies}
              values={species}
              name={"Species"}
              className="col-lg-4 col-md-6 col-sm-12"
            />
            <FilterComponent
              key="Gender"
              updatePageNumber={updatePageNumber}
              updateState={updateGender}
              values={gender}
              name={"Gender"}
              className="col-lg-4 col-md-6 col-sm-12"
            />
          </>
        </div>
      </div>
    </div>
  );
};

// Exporting the ChooseFilter component as the default export
export default ChooseFilter;
