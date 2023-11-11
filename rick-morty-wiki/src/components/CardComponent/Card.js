// Importing necessary modules and components from external libraries and files
import React from "react";
import { Link } from "react-router-dom";
import { getStatusBadgeClass, getGenderBadgeClass } from "../../utils/utils";
import styles from "./Card.module.scss";

// Function to create a status badge element with appropriate styling
const getStatusBadge = (status) => {
  // Get the badge class based on the character's status
  const badgeClass = getStatusBadgeClass(status);

  // Return a div element representing the status badge
  return (
    <div className={`${styles.badge} position-absolute ${badgeClass}`}>
      {status}
    </div>
  );
};

// Function to create a gender badge element with appropriate styling
const getGenderBadge = (gender) => {
  // Get the badge class based on the character's gender
  const badgeClass = getGenderBadgeClass(gender);

  // Return a div element representing the gender badge
  return (
    <div className={`${styles.badge2} position-absolute ${badgeClass}`}>
      {gender}
    </div>
  );
};

// Card component for displaying character information
const Card = ({ page, results }) => {
  // Generate an array of JSX elements representing character cards
  const display = results
    ? results.map((character) => {
        // Destructure character properties
        const { id, image, name, status, gender, location, species } = character;

        // Return a Link component for each character, linking to its detailed page
        return (
          <Link
            key={id}
            to={`${page}${id}`}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
            style={{ textDecoration: "none" }}
          >
            {/* Card container with flex layout */}
            <div
              className={`${styles.card} d-flex flex-column justify-content-center`}
            >
              {/* Character image */}
              <img className={`${styles.img} img-fluid`} src={image} alt="" />

              {/* Character information section */}
              <div className={`${styles.content}`}>
                <div className="fs-5 fw-bold mb-4">Name: {name}</div>
                <div className="fs-5 fw-bold mb-4">Species: {species}</div>
                <div className="">
                  <div className="fs-5 fw-bold mb-4">
                    Last Location: {location.name}
                  </div>
                </div>
              </div>

              {/* Display status badge */}
              {getStatusBadge(status)}

              {/* Display gender badge */}
              {getGenderBadge(gender)}
            </div>
          </Link>
        );
      })
    : "No Characters Found !!!";

  // Return the JSX elements representing the character cards
  return <>{display}</>;
};

// Exporting the Card component as the default export
export default Card;
