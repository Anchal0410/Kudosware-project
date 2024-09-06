import React from "react";
import prod from "../assets/logo1.svg";

const LoginBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "30px",
        width: "1440px",
      }}
    >
      <img src={prod} alt="logo" style={{ width: "100px", height: "97px" }} />
      <div
        style={{
          width: "744px",
          height: "44px",
          gap: "50px",
          padding: "30px 20px 10px 20px",
        }}
      >
        <button
          style={{
            width: "97px",
            height: "30px",
            background: "#FCEBA3",
            borderRadius: "24px",
            gap: "10px",
            fontWeight: "600",
            fontFamily: "'Inter', sans-serif",
            size: "20px",
            lineHeight: "24.2px",
          }}
        >
          Home
        </button>
        <button
          style={{
            width: "101px",
            height: "24px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "400",
            size: "20px",
            lineHeight: "24.2px",
            color: "#0000007A",
          }}
        >
          Why Rent?
        </button>
        <button
          style={{
            width: "160px",
            height: "24px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "400",
            size: "20px",
            lineHeight: "24.2px",
            color: "#0000007A",
          }}
        >
          Clean Out Closet
        </button>
        <button
          style={{
            width: "88px",
            height: "24px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "400",
            size: "20px",
            lineHeight: "24.2px",
            color: "#0000007A",
          }}
        >
          About Us
        </button>
        <button
          style={{
            width: "51px",
            height: "24px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "400",
            size: "20px",
            lineHeight: "24.2px",
            color: "#0000007A",
          }}
        >
          Store
        </button>
        <button
          style={{
            width: "107px",
            height: "24px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "400",
            size: "20px",
            lineHeight: "24.2px",
            color: "#0000007A",
          }}
        >
          Contact Us
        </button>
      </div>
      <button
        style={{
          width: "136px",
          height: "55px",
          fontFamily: "'Inter', sans-serif",
          borderRadius: "6px",
          color: "#282C2F",
          fontWeight: "600",
          size: "20px",
          lineHeight: "24.2px",
          border: "1px",
          padding: "16px 10px 16px 10px",
          gap: "10px",
          background: "#FCEBA3",
        }}
      >
        Login/SignUp
      </button>
    </div>
  );
};
export default LoginBar;
