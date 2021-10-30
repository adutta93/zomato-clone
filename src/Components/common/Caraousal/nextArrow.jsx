import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        height: "32px",
        width: "32px",
        boxShadow: "rgb(0 0 0 / 20%) 0px 3px 5px -1px",
        zIndex: "2",
      }}
      onClick={onClick}
    ></div>
  );
};

export default NextArrow;
