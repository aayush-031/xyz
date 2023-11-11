// Importing React and styles for PickFilter component
import React from "react";
import styles from "./PickFilter.scss";

// Functional component to render a select dropdown for picking a filter
const PickFilter = ({ name, changeID, allLocation }) => {
  return (
    <div className={styles["select-container"]}>
      {/* Dropdown select element */}
      <select
        onChange={(e) => changeID(e.target.value)}
        className={styles["select-input"]}
        id={name}
      >
        {/* Default disabled option */}
        <option value="1" disabled>
          Choose the {name} name...
        </option>

        {/* Mapping through all locations and creating options */}
        {allLocation.map((location, index) => (
          <option key={location.id} value={location.id}>
            {`${index + 1} - ${location.name}`}
          </option>
        ))}
      </select>
    </div>
  );
};

// Exporting the PickFilter component as the default export
export default PickFilter;
