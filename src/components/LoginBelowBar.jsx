import React from "react";
import img from "../assets/mumma-baby-pic.png";
import img1 from "../assets/cart.png";
const LoginBelowBar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "1281px",
        height: "430px",
        top: "209px",
        left: "80px",
        gap: "0px",
        opacity: "0px",
        marginLeft: "200px",
        marginTop: "50px",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "429px",
          height: "66px",
          top: "272px",
          left: "139px",
          gap: "0px",
        }}
      >
        <div>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Commissioner",
              fontSize: "44px",
              color: "#FC6565",
              fontWeight: "700",
              lineHeight: "66px",
            }}
          >
            BABIES GROW FAST
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              width: "331px",
              color: "#323233",
              fontFamily: "Comfortaa",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "36px",
              marginLeft: "60px",
              marginBottom: "10px",
            }}
          >
            Simplify Your Life with Our
          </span>
          <button
            style={{
              width: "200px",
              height: "42px",
              borderRadius: " 6px",
              fontFamily: "Inter",
              color: "white",
              fontWeight: "700",
              //   fontSize: "22px",
              lineHeight: "33px",
              opacity: "0px",
              background: "#FC6565",
              marginLeft: "120px",
            }}
          >
            TinyClo Subscription
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "50px",
          }}
        >
          <button
            style={{
              background: "#FCEBA3",
              boxShadow: "0px 3px 15.4px 0px #419EE217",
              borderRadius: "6px",
              padding: "14px 10px 14px 10px",
              gap: "10px",
              fontFamily: "'Inter', sans-serif",
              size: "20px",
              fontWeight: "600",
            }}
          >
            How it works?
          </button>
          <button
            style={{
              background: "#147AA9",
              boxShadow: "0px 3px 15.4px 0px #419EE217",
              borderRadius: "6px",
              color: "white",
              padding: "14px 10px 14px 10px",
              gap: "10px",
              fontFamily: "'Inter', sans-serif",
              size: "20px",
              fontWeight: "600",
            }}
          >
            Start Membership
          </button>
        </div>
      </div>
      <img
        src={img}
        alt="mma-baby"
        style={{
          scale: "crop",
          width: "558px",
          height: "462px",
          top: "-10px",
          left: "1281px",
        }}
      />
    </div>
  );
};

export default LoginBelowBar;
