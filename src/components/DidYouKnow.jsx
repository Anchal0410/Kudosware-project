import React from "react";
import img1 from "../assets/diduknow1.svg";
const DidYouKnow = () => {
  return (
    <div
      style={{
        width: "1280px",
        height: "553px",
        position: "relative",
        top: "550px",
        left: "80px",
        borderRadius: "24px",
        border: "1px solid #0000001A",
        boxShadow: "0px 4px 12px 0px #329EEC1A",
        display: "flex",
        flexDirection: "column",
        padding: "",
      }}
    >
      <p
        style={{
          width: "262px",
          height: "45px",
          position: "relative",
          top: "54px",
          left: "509px",
          fontFamily: "Commissioner",
          fontWeight: "700",
          fontSize: "32px",
          lineHeight: "48px",
          color: "#27B09E",
          //   alignSelf: "center",
        }}
      >
        DID YOU KNOW?
      </p>
      <p
        style={{
          width: "1139px",
          height: "72px",
          position: "relative",
          top: "90px",
          left: "70px",
          fontFamily: "Commissioner",
          fontWeight: "400",
          fontSize: "24px",
          lineHeight: "36px",
          textAlign: "center",
          color: "#323233",
        }}
      >
        Babies typically outgrow 6 or more sizes in their first year! Add in 3
        different seasons, special occasions, and several outfit changes daily,
        now that's a LOT of clothes!
      </p>
      <div
        className="div-in-flex"
        style={{
          width: "",
          display: "flex",
          justifyContent: "space-evenly",
          position: "relative",
          top: "250px",
        }}
      >
        <hr
          style={{
            width: "780px",
            height: "1px",
            background: "#27B09E40",
            position: "relative",
            top: "-50px",
            left: "260px",
            border: "1px",
            border: "1px solid #27B09E40",
          }}
        />
        {/* <img
          src={img1}
          alt="img"
          style={{ position: "relative", top: "-80px", right: "500px" }}
        /> */}
        <p
          style={{
            width: "97px",
            height: "36px",
            borderRadius: "12px",
            padding: "10px 8px 10px 8px",
            gap: "10px",
            boxShadow: "0px 2px 10px 0px #39C0EB1A",
            fontSize: "14px",
            position: "relative",
            right: "400px",
          }}
        >
          0-3 months
        </p>
        <p
          style={{
            width: "97px",
            height: "36px",
            borderRadius: "12px",
            padding: "10px 8px 10px 8px",
            gap: "10px",
            boxShadow: "0px 2px 10px 0px #39C0EB1A",
            fontSize: "14px",
            position: "relative",
            right: "350px",
          }}
        >
          3-6 months
        </p>
        <p
          style={{
            width: "97px",
            height: "36px",
            borderRadius: "12px",
            padding: "10px 8px 10px 8px",
            gap: "10px",
            boxShadow: "0px 2px 10px 0px #39C0EB1A",
            fontSize: "14px",
            position: "relative",
            right: "300px",
          }}
        >
          6-9 months
        </p>
        <p
          style={{
            width: "110px",
            height: "36px",
            borderRadius: "12px",
            padding: "10px 8px 10px 8px",
            gap: "10px",
            boxShadow: "0px 2px 10px 0px #39C0EB1A",
            fontSize: "14px",
            position: "relative",
            right: "250px",
          }}
        >
          9-12 months
        </p>
        <p
          style={{
            width: "120px",
            height: "36px",
            borderRadius: "12px",
            padding: "10px 8px 10px 8px",
            gap: "10px",
            boxShadow: "0px 2px 10px 0px #39C0EB1A",
            fontSize: "14px",
            position: "relative",
            right: "200px",
          }}
        >
          12-18 months
        </p>
        <p
          style={{
            width: "120px",
            height: "36px",
            borderRadius: "12px",
            padding: "10px 8px 10px 8px",
            gap: "10px",
            boxShadow: "0px 2px 10px 0px #39C0EB1A",
            fontSize: "14px",
            position: "relative",
            right: "150px",
          }}
        >
          18-24 months
        </p>
      </div>
      <div
        style={{
          width: "673px",
          height: "64px",
          position: "relative",
          top: "260px",
          left: "330px",
          gap: "24px",
          display: "flex",
          alignContent: "center",
          justifyContent: "space-evenly",
        }}
      >
        <button
          style={{
            width: "325px",
            height: "64px",
            borderRadius: "4px",
            gap: "10px",
            background: "#27B09ECC",
            fontFamily: "Commissioner",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "24px",
            color: "white",
          }}
        >
          AVERAGE SPENT : $250
        </button>
        <button
          style={{
            width: "325px",
            height: "64px",
            borderRadius: "4px",
            gap: "10px",
            background: "#E5635FCC",
            fontFamily: "Commissioner",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "24px",
            color: "white",
          }}
        >
          TINYCLO: $32
        </button>
      </div>
    </div>
  );
};

export default DidYouKnow;
