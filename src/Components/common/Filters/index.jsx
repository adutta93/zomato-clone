import React from "react";
import FilterItem from "./FilterItem";

import "./filter.css";
const Filters = ({ filters }) => {
  return (
    <div className="filters">
      {filters &&
        filters.map((filter) => {
          return <FilterItem filter={filter} key={filters.id} />;
        })}
    </div>
  );
};

export default Filters;
