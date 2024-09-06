import React from "react";
import coat1 from "../assets/coat1.svg";
import shoes from "../assets/Shoes1.svg";
import tshirt from "../assets/Tshirt1.svg";
import car from "../assets/car1.svg";
import coatright from "../assets/coat-left-pic.svg";
const MembershipPlan = () => {
  return (
    <div>
      <hr
        style={{
          height: "2px",
          width: "1440px",
          position: "relative",
          top: "630px",
        }}
      />
      <p
        style={{
          position: "relative",
          top: "650px",
          left: "80px",
          fontFamily: "Commissioner",
          fontWeight: "500",
          fontSize: "40px",
          lineHeight: "36px",
          color: "#323233",
        }}
      >
        Membership Plans
      </p>
      <hr
        style={{
          width: "446px",
          height: "4px",
          position: "relative",
          top: "670px",
          left: "80px",
          borderRadius: "16px",
          background: "#EBB5BB",
        }}
      />
      <div
        style={{
          width: "587px",
          height: "141px",
          position: "relative",
          top: "975px",
          left: "100px",
          borderRadius: "16px 0px 16px 0px",
          background: "#52C0B21A",
        }}
      ></div>
      <div>
        <div className="allImagesForCoatPent" style={{ display: "flex" }}>
          <img
            src={coat1}
            alt="coat"
            style={{ position: "relative", top: "600px", left: "110px" }}
          />
          <img
            src={shoes}
            alt="shoes"
            style={{ position: "relative", top: "680px", left: "0" }}
          />
          <img
            src={tshirt}
            alt="tshirt"
            style={{ position: "relative", top: "620px", left: "-250px" }}
          />
          <img
            src={car}
            alt="car"
            style={{ position: "relative", top: "760px", left: "-400px" }}
          />
        </div>
        <div
          className="coat-right-div"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <button
            style={{
              width: "341px",
              height: "54px",
              borderRadius: "12px 0px 12px 12px",
              padding: "10px",
              gap: "10px",
              background: "#323233",
              color: "white",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "34px",
              position: "relative",
              top: "340px",
              left: "330px",
            }}
          >
            TinyClo PREMIUM PLAN
          </button>
          <p
            style={{
              width: "327px",
              height: "48px",
              position: "relative",
              top: "360px",
              left: "360px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "400",
              fontSize: "20px",
              textAlign: "right",
            }}
          >
            Apparels from top-tier sustainable brands, chosen by our experts
          </p>
          <p
            style={{
              width: "327px",
              height: "40px",
              fontFamily: "Comfortaa",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "40px",
              textAlign: "right",
              color: "#0C8877",
              position: "relative",
              top: "390px",
              left: "360px",
            }}
          >
            from $49.00
          </p>

          <button
            style={{
              background: "#1A95CF",
              width: "228px",
              height: "48px",
              position: "relative",
              top: "445px",
              left: "430px",
              gap: "10px",
              borderRadius: "24px",
              padding: "12px 20px 12px 20px",
              fontFamily: "Commissioner",
              fontSize: "20px",
              color: "white",
              lineHeight: "24px",
            }}
          >
            Choose Membership
          </button>
        </div>
        {/* wdssfasfadfadf */}
        <div
          style={{
            width: "587px",
            height: "141px",
            position: "relative",
            top: "355px",
            left: "800px",
            borderRadius: "16px 0px 16px 0px",
            background: "#EA827F1A",
          }}
        ></div>
        <div className="allImagesForCoatPentRight" style={{ display: "flex" }}>
          <img
            src={coatright}
            alt="coat"
            style={{
              position: "relative",
              left: "788px",
            }}
          />
        </div>
        <div
          className="coat-right-div"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            bottom: "630px",
            left: "700px",
          }}
        >
          <button
            style={{
              width: "341px",
              height: "54px",
              borderRadius: "12px 0px 12px 12px",
              padding: "10px",
              gap: "10px",
              background: "#FC6565",
              color: "white",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "34px",
              position: "relative",
              top: "340px",
              left: "330px",
            }}
          >
            TinyClo ESSENTIAL PLAN
          </button>
          <p
            style={{
              width: "327px",
              height: "48px",
              position: "relative",
              top: "360px",
              left: "360px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "400",
              fontSize: "20px",
              textAlign: "right",
            }}
          >
            Curated essentials, chosen by our experts
          </p>
          <p
            style={{
              width: "327px",
              height: "40px",
              fontFamily: "Comfortaa",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "40px",
              textAlign: "right",
              color: "#0C8877",
              position: "relative",
              top: "390px",
              left: "360px",
            }}
          >
            from $49.00
          </p>

          <button
            style={{
              background: "#1A95CF",
              width: "228px",
              height: "48px",
              position: "relative",
              top: "445px",
              left: "430px",
              gap: "10px",
              borderRadius: "24px",
              padding: "12px 20px 12px 20px",
              fontFamily: "Commissioner",
              fontSize: "20px",
              color: "white",
              lineHeight: "24px",
            }}
          >
            Choose Membership
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlan;
