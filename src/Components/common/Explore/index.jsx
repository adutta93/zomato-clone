import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./explore.css";
import ExploreCard from "./ExploreCard";

const Explore = ({ restaurants, collectionName }) => {
  // const [restaurants, setrestaurants] = useState([].slice(0, 10));
  const [pageNumber, setPageNumber] = useState(0);

  // pagination

  const dataPerPage = 15;
  const pageVisited = pageNumber * dataPerPage;
  const displayData = restaurants
    .slice(pageVisited, pageVisited + dataPerPage)
    .map((restaurant) => {
      return (
        <ExploreCard restaurant={restaurant} key={restaurant?.info?.resId} />
      );
    });

  const pageCount = Math.ceil(restaurants.length / dataPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {/* {restaurants?.map((restaurant) => {
          return (
            <ExploreCard
              restaurant={restaurant}
              key={restaurant?.info?.resId}
            />
          );
        })} */}
        {displayData}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Explore;
