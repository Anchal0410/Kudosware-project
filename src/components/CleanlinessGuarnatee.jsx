import React from "react";
import img1 from "../assets/washing-machine.svg";
const CleanlinessGuarnatee = () => {
  return (
    <div>
      <p
        style={{
          position: "relative",
          bottom: "90px",
          left: "80px",
          fontFamily: "Commissioner",
          fontWeight: "500",
          fontSize: "40px",
          lineHeight: "36px",
          color: "#323233",
        }}
      >
        Cleanliness Guarantee
      </p>
      <hr
        style={{
          width: "490px",
          height: "4px",
          position: "relative",
          bottom: "70px",
          left: "80px",
          borderRadius: "16px",
          background: "#EBB5BB",
        }}
      />
      <div>
        <p
          style={{
            width: "635px",
            height: "364px",
            borderRadius: "24px",
            padding: "62px 16px 62px 16px ",
            fontFamily: "Comfortaa",
            fontWeight: "500",
            fontSize: "20px",
            textAlign: "center",
            lineHeight: "30px",
            color: "#323233",
            position: "relative",
            bottom: "70px",
            left: "40px",
          }}
        >
          After each rental, we professionally clean and safely sanitise
          clothes, sealing them with our cleanliness guarantee, ready for the
          next renting family to love.
          <br />
          <br />
           Clothes that are no longer in rentable condition are either donated
          or recycled. So you can take comfort knowing that we’ll do all we can
          to give clothes a new lease of life, with no clothes ever going to
          landfill.
        </p>
        <button
          style={{
            width: "635px",
            height: "79px",
            background: "#147AA9",
            borderRadius: "24px",
            color: "white",
            position: "absolute",
            top: "4570px",
            left: "50px",
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
      <img
        src={img1}
        alt="washing-machine"
        style={{
          width: "571px",
          height: "393px",
          position: "relative",
          bottom: "400px",
          left: "750px",
        }}
      />
    </div>
  );
};

export default CleanlinessGuarnatee;
