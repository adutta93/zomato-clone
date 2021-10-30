import React from "react";
import { nightFilters, collectionList } from "./data";
import { nightLife } from "../../data/nightlife";
import Collection from "../common/Collection";
import Filters from "../common/Filters";
import Explore from "../common/Explore";
import "./nightLife.css";

const NightLife = () => {
  return (
    <div>
      <Collection collectionList={collectionList} />
      <div className="max-width">
        <Filters filters={nightFilters} />
      </div>
      <Explore
        restaurants={nightLife}
        collectionName="Nightlife Restaurants in Kolkata"
      />
    </div>
  );
};

export default NightLife;
