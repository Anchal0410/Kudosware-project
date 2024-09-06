import React from "react";
import pic1 from "../assets/ct1.svg";
import pic2 from "../assets/ct2.svg";
import pic3 from "../assets/ct1png.png";
const CardDiv2 = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        className="card1"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: "600px",
          left: "180px",
          width: "343px",
          height: "463px",
          borderRadius: "24px",
          border: "2px solid #3232330D",
          boxShadow: "0px 4px 15.5px 0px #5D96CF0D",
        }}
      >
        <img
          src={pic1}
          alt="pic1"
          style={{
            width: "120px",
            height: "120px",
            position: "relative",
            top: "30px",
            left: "110px",
          }}
        />
        <p
          style={{
            fontFamily: "Commissioner",
            fontWeight: "700",
            fontSize: "32px",
            color: "#147AA9",
            position: "relative",
            top: "50px",
            left: "50px",
            color: "#E1B828",
          }}
        >
          SWAP ANYTIME
        </p>
        <p
          style={{
            width: "277px",
            height: "180px",
            fontFamily: "League Spartan",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "30px",
            textAlign: "center",
            position: "relative",
            fontSize: "20px",
            top: "70px",
            left: "40px",
            color: "#000000",
          }}
        >
          When you're ready to swap, we'll send new looks right away. When they
          arrive, pack and return your previous looks using our pre-paid,
          reusable shipping kit. It’s that easy!
        </p>
      </div>
      <div
        className="card2"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: "600px",
          left: "210px",
          width: "343px",
          height: "463px",
          borderRadius: "24px",
          border: "2px solid #3232330D",
          boxShadow: "0px 4px 15.5px 0px #5D96CF0D",
        }}
      >
        <img
          src={pic2}
          alt="pic2"
          style={{
            width: "120px",
            height: "120px",
            position: "relative",
            top: "30px",
            left: "110px",
          }}
        />
        <p
          style={{
            fontFamily: "Commissioner",
            fontWeight: "700",
            fontSize: "32px",
            color: "#147AA9",
            position: "relative",
            top: "50px",
            left: "50px",
            color: "#23887A",
          }}
        >
          CURATE & SHIP
        </p>
        <p
          style={{
            width: "277px",
            height: "180px",
            fontFamily: "League Spartan",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "30px",
            textAlign: "center",
            position: "relative",
            fontSize: "20px",
            top: "70px",
            left: "40px",
            color: "#000000",
          }}
        >
          Pick a plan and share your style preferences. We’ll customize and ship
          your little’s capsule within 7 business days.
        </p>
      </div>
      <div
        className="card3"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: "600px",
          left: "240px",
          width: "343px",
          height: "463px",
          borderRadius: "24px",
          border: "2px solid #3232330D",
          boxShadow: "0px 4px 15.5px 0px #5D96CF0D",
        }}
      >
        <img
          src={pic3}
          alt="pic3"
          style={{
            width: "120px",
            height: "120px",
            position: "relative",
            top: "30px",
            left: "110px",
          }}
        />
        <p
          style={{
            fontFamily: "Commissioner",
            fontWeight: "700",
            fontSize: "32px",
            color: "#147AA9",
            position: "relative",
            top: "50px",
            left: "50px",
            color: "#E5635F",
          }}
        >
          GROW IN STYLE
        </p>
        <p
          style={{
            width: "277px",
            height: "180px",
            fontFamily: "League Spartan",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "30px",
            textAlign: "center",
            position: "relative",
            fontSize: "20px",
            top: "70px",
            left: "40px",
            color: "#000000",
          }}
        >
          Dress your little in their mix-and-match wardrobe as long as you'd
          like. When you're ready to swap, switch one item or everything. It's
          up to you!
        </p>
      </div>
    </div>
  );
};

export default CardDiv2;
