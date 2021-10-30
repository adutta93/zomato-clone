import React from "react";
import { collectionList, diningFilters } from "./data";
import Collection from "../common/Collection";
import Explore from "../common/Explore";
import Filters from "../common/Filters";
import "./diningOut.css";
import { diningData } from "../../data/dining";
const DiningOut = () => {
  return (
    <div>
      <Collection collectionList={collectionList} />
      <div className="max-width">
        <Filters filters={diningFilters} />
      </div>
      {/* <Explore
        restaurants={diningData}
        collectionName="Dine-Out Restaurants in Kolkata"
      /> */}
    </div>
  );
};

export default DiningOut;
