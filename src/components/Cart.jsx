import React from "react";
import img1 from "../assets/cart.png";

const Cart = () => {
  return (
    <div>
      <img
        src={img1}
        alt="logo"
        style={{
          display: "block",
          position: "relative",
          left: "1300px",
          top: "70px  ",
        }}
      />
    </div>
  );
};

export default Cart;
