// Importing React, useState, useEffect, and ReactPaginate
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

// Importing the SCSS file for styling
import "./Pagination.scss";

// Functional component for pagination
const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  // Function to handle page change
  const pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  // State to track the width of the window
  const [width, setWidth] = useState(window.innerWidth);

  // Function to update dimensions on window resize
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  // Effect to add and remove event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Rendering the ReactPaginate component
  return (
    <ReactPaginate
      className="pagination justify-content-center my-4"
      nextLabel="Next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      previousClassName="btn btn-primary fs-5 prev"
      nextClassName="btn btn-primary fs-5 next"
      activeClassName="active"
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={width < 576 ? 1 : 2}
      pageCount={info?.pages}
      onPageChange={pageChange}
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  );
};

// Exporting the Pagination component as the default export
export default Pagination;
