import React from "react";
import Filters from "../common/Filters";
import Explore from "../common/Explore";
import TopBrands from "./TopBrands/index";
import DeliveryCollections from "./DeliveryCollections";
import "./delivery.css";
import { restaurants } from "../../data/restaurants";
const filters = [
  {
    id: 1,
    title: "Filters",
    icon: <i className="fi fi-rr-settings-sliders"></i>,
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filters={filters} />
        <DeliveryCollections />
        <TopBrands />
        <Explore
          restaurants={restaurants}
          collectionName="Delivery Restaurants in Kolkata"
        />
      </div>
    </div>
  );
};

export default Delivery;
