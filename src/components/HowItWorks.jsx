import React from "react";
import img from "../assets/video1.png";
const HowItWorks = () => {
  return (
    <div>
      <p
        style={{
          position: "relative",
          top: "150px",
          left: "80px",
          fontFamily: "Commissioner",
          fontWeight: "500",
          fontSize: "40px",
          lineHeight: "36px",
          color: "#323233",
        }}
      >
        How it works?
      </p>
      <hr
        style={{
          width: "360px",
          height: "4px",
          position: "relative",
          top: "162px",
          left: "80px",
          borderRadius: "16px",
          background: "#EBB5BB",
        }}
      />
      <img
        src={img}
        alt="video1"
        style={{
          width: "1062px",
          height: "550px",
          position: "relative",
          top: "190px",
          left: "220px",
        }}
      />
    </div>
  );
};

export default HowItWorks;
