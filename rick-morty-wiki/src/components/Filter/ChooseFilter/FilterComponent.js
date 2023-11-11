// Importing React for creating functional components
import React from "react";

// Functional component to render a filter section
const FilterComponent = ({ updateState, updatePageNumber, values, name }) => {
  // Generating unique IDs for the collapse and heading elements
  const collapseId = `collapse-${name.toLowerCase()}`;
  const headingId = `heading-${name.toLowerCase()}`;

  // Rendering the filter component
  return (
    <div className="accordion-item">
      {/* Filter heading button */}
      <h2 className="accordion-header" id={headingId}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls={collapseId}
        >
          {name}
        </button>
      </h2>
      
      {/* Filter content section */}
      <div
        id={collapseId}
        className="accordion-collapse collapse"
        aria-labelledby={headingId}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="form-check">
            {/* Mapping through filter values and creating radio buttons */}
            {values.map((item, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`${name}-${index}`}
                  className="form-check-input"
                  name={name}
                  value={item}
                  // Updating state and page number on radio button change
                  onChange={(e) => {
                    updateState(e.target.value);
                    updatePageNumber(1);
                  }}
                />
                <label
                  htmlFor={`${name}-${index}`}
                  className="form-check-label"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the FilterComponent as the default export
export default FilterComponent;
