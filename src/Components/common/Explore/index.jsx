import React from "react";
import "./explore.css";
import ExploreCard from "./ExploreCard";

const Explore = ({ restaurants, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {restaurants?.map((restaurant) => {
          return (
            <ExploreCard
              restaurant={restaurant}
              key={restaurant?.info?.resId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
