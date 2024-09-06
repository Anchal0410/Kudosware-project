import React from "react";
import pic1 from "../assets/pic1.svg";
import pic2 from "../assets/pic2.svg";
import pic3 from "../assets/pic3.svg";
const CardsDiv = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        className="card1"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img
          src={pic1}
          alt="pic1"
          style={{
            width: "100px",
            height: "100px",
            position: "relative",
            top: "210px",
            left: "330px",
          }}
        />
        <p
          style={{
            fontFamily: "Commissioner",
            fontWeight: "700",
            fontSize: "32px",
            color: "#147AA9",
            position: "relative",
            top: "220px",
            left: "333px",
          }}
        >
          RENT
        </p>
        <p
          style={{
            width: "270px",
            height: "150px",
            fontFamily: "Comfortaa",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "30px",
            textAlign: "center",
            position: "relative",
            top: "230px",
            color: "#000000",
            left: "250px",
          }}
        >
          Pick one of our plans. Choose from our curated everyday essentials, or
          handpick outfits from our premium brands.
        </p>
      </div>
      <div
        className="card2"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img
          src={pic2}
          alt="pic2"
          style={{
            width: "100px",
            height: "100px",
            position: "relative",
            top: "210px",
            left: "415px",
          }}
        />
        <p
          style={{
            fontFamily: "Commissioner",
            fontWeight: "700",
            fontSize: "32px",
            color: "#FC6565",
            position: "relative",
            top: "220px",
            left: "400px",
          }}
        >
          RETURN
        </p>
        <p
          style={{
            width: "270px",
            height: "150px",
            fontFamily: "Comfortaa",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "30px",
            textAlign: "center",
            position: "relative",
            top: "230px",
            color: "#000000",
            left: "330px",
          }}
        >
          When your little one outgrows their clothes, simply pop them back to
          us in the reusable bag. For FREE, of course
        </p>
      </div>
      <div
        className="card3"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img
          src={pic3}
          alt="pic3"
          style={{
            width: "100px",
            height: "100px",
            position: "relative",
            top: "210px",
            left: "510px",
          }}
        />
        <p
          style={{
            fontFamily: "Commissioner",
            fontWeight: "700",
            fontSize: "32px",
            color: "#52C0B2",
            position: "relative",
            top: "220px",
            left: "480px",
          }}
        >
          SWAP SIZES
        </p>
        <p
          style={{
            width: "277px",
            height: "200px",
            fontFamily: "Comfortaa",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "30px",
            textAlign: "center",
            position: "relative",
            top: "230px",
            color: "#000000",
            left: "430px",
          }}
        >
          Easily pick your next bundle of clothes in your account. They will
          arrive super quickly, and always with our Cleanliness Guarantee!
        </p>
      </div>
      <button
        style={{
          width: "635px",
          height: "79px",
          background: "#147AA9",
          borderRadius: "24px",
          color: "white",
          position: "relative",
          top: "650px",
          right: "350px",
          gap: "10px",
          padding: "14px 10px 14px 10px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "26px",
          fontWeight: "600",
          lineHeight: "38px",
        }}
      >
        Start Membership
      </button>
    </div>
  );
};

export default CardsDiv;
