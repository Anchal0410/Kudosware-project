import React from "react";

const WhyRent = () => {
  return (
    <div>
      <p
        style={{
          position: "relative",
          top: "450px",
          left: "80px",
          fontFamily: "Commissioner",
          fontWeight: "500",
          fontSize: "40px",
          lineHeight: "36px",
          color: "#323233",
        }}
      >
        Why Rent?
      </p>
      <hr
        style={{
          width: "360px",
          height: "4px",
          position: "relative",
          top: "475px",
          left: "80px",
          borderRadius: "16px",
          background: "#EBB5BB",
        }}
      />
      <div
        style={{
          width: "727px",
          height: "61px",
          position: "relative",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          style={{
            width: "180px",
            height: "60px",
            borderRadius: "12px",
            fontFamily: "Inter",
            gap: "10px",
            backgroundColor: "#FCEBA3",
            fontFamily: "",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "29px",
            color: "#2B2B2B",
            position: "relative",
            top: "500px",
            left: "350px",
          }}
        >
          Cost Saving
        </button>
        <button
          style={{
            width: "240px",
            height: "60px",
            borderRadius: "12px",
            padding: "2px",
            fontFamily: "Inter",
            gap: "10px",
            backgroundColor: "#D9D9D9",
            fontFamily: "",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "29px",
            color: "#2B2B2B",
            position: "relative",
            top: "500px",
            left: "350px",
          }}
        >
          Environment Saving
        </button>
        <button
          style={{
            width: "180px",
            height: "60px",
            borderRadius: "12px",
            gap: "10px",
            backgroundColor: "#D9D9D9",
            fontFamily: "Inter",
            fontWeight: "400",
            fontSize: "22px",
            lineHeight: "29px",
            color: "#2B2B2B",
            position: "relative",
            top: "500px",
            left: "350px",
          }}
        >
          Space Saving
        </button>
      </div>
    </div>
  );
};

export default WhyRent;
