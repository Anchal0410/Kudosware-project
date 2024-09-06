import React from "react";
import kid1 from "../assets/kid1.png";
import kid2 from "../assets/kid2.png";
import kid3 from "../assets/kid3.png";
const BabyRange = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "100px",
        left: "80px",
        // marginBottom: "140px",
      }}
    >
      <div className="allCards" style={{ display: "flex", gap: "30px" }}>
        <div className="card1">
          <span
            style={{
              fontFamily: "Commissioner",
              fontWeight: "500",
              lineHeight: "20px",
              color: "#323233",
              margin: "7px",
              paddingLeft: "150px",
              position: "relative",
              bottom: "10px",
            }}
          >
            Starting from 100 INR
          </span>
          <div
            style={{
              width: "415px",
              height: "162px",
              top: "880px",
              left: "80px",
              borderRadius: "24px",
              background: "#4695CF26",
              display: "flex",
            }}
          >
            <img
              src={kid1}
              alt="kid1"
              style={{
                width: "149px",
                height: "235px",
                position: "relative",
                top: "-70px",
                left: "2px",
                gap: "0px",
                marginRight: "20px",
              }}
            />
            <div style={{ display: "" }}>
              <p
                style={{
                  width: "197px",
                  height: "48px",
                  top: "16px",
                  left: "196px",
                  fontFamily: "Commissioner",
                  fontWeight: "500",
                  fontSize: "32px",
                  lineHeight: "48px",
                }}
              >
                Kids Clothing
              </p>
              <p
                style={{
                  fontFamily: "Commissioner",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  margin: "10px",
                }}
              >
                Age (0-6)
              </p>
              <button
                style={{
                  width: "120px",
                  height: "35px",
                  background: "#FCEBA3",
                  fontFamily: "Commissioner",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  borderRadius: "6px",
                  padding: "2px 10px 10px 10px",
                  margin: "5px",
                }}
              >
                Explore >
              </button>
            </div>
          </div>
        </div>
        <div className="card2">
          <span
            style={{
              fontFamily: "Commissioner",
              fontWeight: "500",
              lineHeight: "20px",
              color: "#323233",
              position: "relative",
              left: "-121px",
              margin: "7px",
              paddingLeft: "150px",
              bottom: "10px",
            }}
          >
            Starting from 500 INR
          </span>
          <div
            style={{
              width: "415px",
              height: "162px",
              top: "880px",
              left: "80px",
              borderRadius: "24px",
              background: "#DF88929E",
              display: "flex",
            }}
          >
            <div style={{ position: "relative", left: "20px" }}>
              <p
                style={{
                  width: "197px",
                  height: "48px",
                  top: "16px",
                  left: "196px",
                  fontFamily: "Commissioner",
                  fontWeight: "500",
                  fontSize: "32px",
                  lineHeight: "48px",
                  margin: "10px",
                }}
              >
                Equipments
              </p>
              <p
                style={{
                  fontFamily: "Commissioner",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  margin: "10px",
                }}
              >
                Age (0-6)
              </p>
              <button
                style={{
                  width: "120px",
                  height: "35px",
                  background: "#FCEBA3",
                  fontFamily: "Commissioner",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  borderRadius: "6px",
                  padding: "2px 10px 10px 10px",
                  margin: "5px",
                }}
              >
                Explore >
              </button>
            </div>
            <img
              src={kid2}
              alt="kid2"
              style={{
                width: "220px",
                height: "300px",
                position: "relative",
                top: "-95px",
                left: "2px",
                rotate: "5deg",
              }}
            />
          </div>
        </div>

        {/*  */}
        <div className="card3">
          <span
            style={{
              fontFamily: "Commissioner",
              fontWeight: "500",
              lineHeight: "20px",
              color: "#323233",
              position: "relative",
              bottom: "10px",
              margin: "10px",
            }}
          >
            Starting from 100 INR
          </span>
          <div
            style={{
              width: "415px",
              height: "162px",
              borderRadius: "24px",
              background: "#2CA06E4D",
              display: "flex",
            }}
          >
            <div style={{ position: "relative", left: "16px" }}>
              <p
                style={{
                  width: "197px",
                  height: "48px",

                  fontFamily: "Commissioner",
                  fontWeight: "500",
                  fontSize: "32px",
                  lineHeight: "48px",
                }}
              >
                Toys
              </p>
              <p
                style={{
                  fontFamily: "Commissioner",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  margin: "10px",
                }}
              >
                Age (0-6)
              </p>
              <button
                style={{
                  width: "120px",
                  height: "35px",
                  background: "#FCEBA3",
                  fontFamily: "Commissioner",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  borderRadius: "6px",
                  padding: "2px 10px 10px 10px",
                  margin: "5px",
                }}
              >
                Explore >
              </button>
            </div>
            <img
              src={kid3}
              alt="kid3"
              style={{
                width: "300px",
                height: "310px",
                position: "relative",
                top: "-115px",
                right: "30px",
                gap: "0px",
                marginRight: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyRange;
// width: 149px;height: 235.26px;top: 807px;left: 92px;gap: 0px;opacity: 0px;
