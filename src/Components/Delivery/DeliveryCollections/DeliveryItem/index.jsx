import React from "react";

import "./deliveryitem.css";
const DeliveryItem = ({ item: { cover, id, title } }) => {
  return (
    <div key={id}>
      <div className="delivery-item-cover">
        <img src={cover} alt={title} className="delivery-item-image" />
      </div>
      <div className="delivery-item-title">{title}</div>
    </div>
  );
};

export default DeliveryItem;
