import React from "react";
import FilterItem from "./FilterItem";

import "./filter.css";
const Filters = ({ filters }) => {
  return (
    <div className="filters">
      {filters &&
        filters.map((filter, index) => {
          return <FilterItem filter={filter} key={index} />;
        })}
    </div>
  );
};

export default Filters;
