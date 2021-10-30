import React from "react";
import { deliveryItems } from "./data";
import NextArrow from "../../common/Caraousal/nextArrow";
import PrevArrow from "../../common/Caraousal/prevArrow";
import Slider from "react-slick";

import DeliveryItem from "./DeliveryItem";
import "./deliverycollections.css";
const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
  //   console.log(deliveryItems);
  return (
    <div className="delivery-collections">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <DeliveryItem item={item} key={item.id} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
