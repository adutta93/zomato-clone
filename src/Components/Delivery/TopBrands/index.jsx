import React from "react";
import Slider from "react-slick";
import { topBrandsList } from "./data";
import NextArrow from "../../common/Caraousal/nextArrow";
import PrevArrow from "../../common/Caraousal/prevArrow";
import "./topbrands.css";

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => (
          <div key={brand.id}>
            <div className="top-brands-cover">
              <img
                className="top-brands-image"
                src={brand.cover}
                alt={brand.time}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBrands;
