import React from "react";

import "./filteritem.css";
const FilterItem = ({ filter: { title, icon } }) => {
  return (
    <div className="filter-item">
      {icon && icon}
      <div className="filter-name">{title}</div>
    </div>
  );
};

export default FilterItem;
