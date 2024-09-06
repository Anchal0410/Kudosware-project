import React from "react";
import girl from "../assets/girl.svg";
const HappyParents = () => {
  return (
    <div>
      <p
        style={{
          position: "relative",
          left: "80px",
          fontFamily: "Commissioner",
          fontWeight: "500",
          fontSize: "40px",
          lineHeight: "36px",
          color: "#323233",
        }}
      >
        Our Happy Parents
      </p>
      <hr
        style={{
          width: "400px",
          height: "4px",
          position: "relative",
          //   bottom: "220px",
          top: "20px",
          left: "80px",
          borderRadius: "16px",
          background: "#EBB5BB",
        }}
      />
      <div
        style={{
          background: "#F776841A",
          width: "1440px",
          height: "332px",
          position: "relative",
          top: "60px",
          display: "flex",
          gap: "40px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "white",
            width: "1109px",
            height: "283px",
            position: "relative",
            top: "25px",
            left: "40px",
            borderRadius: "16px",
            border: "1px",
          }}
        >
          <img
            src={girl}
            alt="girl1"
            style={{ position: "relative", top: "50px", left: "30px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                width: "178px",
                height: "29px",
                fontFamily: "Commissioner",
                fontWeight: "700",
                fontSize: "20px",
                textAlign: "center",
                lineHeight: "29px",
                position: "relative",
                // top: "100px",
                left: "220px",
                bottom: "150px",
                color: "#3D3D3D",
              }}
            >
              Hannah Schmitt
            </p>
            <p
              style={{
                fontFamily: "Comfortaa",
                fontWeight: "400",
                fontSize: "2px",
                width: "573px",
                fontSize: "#3D3D3D",
                position: "relative",
                bottom: "140px",
                left: "240px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse
            </p>
            <p
              style={{
                color: "#525252",
                fontFamily: "Commissioner",
                fontWeight: "600",
                fontSize: "16px",
                textAlign: "center",
                lineHeight: "19px",
                position: "relative",
                bottom: "130px",
                right: "140px",
              }}
            >
              May 8, 2020
            </p>
          </div>
        </div>
        <div
          style={{
            background: "white",
            width: "849px",
            height: "283px",
            position: "relative",
            top: "25px",
            left: "40px",
            borderRadius: "16px",
            border: "1px",
          }}
        >
          <img
            src={girl}
            alt="girl1"
            style={{ position: "relative", top: "50px", left: "30px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                width: "178px",
                height: "29px",
                fontFamily: "Commissioner",
                fontWeight: "700",
                fontSize: "20px",
                textAlign: "center",
                lineHeight: "29px",
                position: "relative",
                // top: "100px",
                left: "220px",
                bottom: "150px",
                color: "#3D3D3D",
              }}
            >
              Hannah Schmitt
            </p>
            <p
              style={{
                fontFamily: "Comfortaa",
                fontWeight: "400",
                fontSize: "2px",
                width: "573px",
                fontSize: "#3D3D3D",
                position: "relative",
                bottom: "140px",
                left: "240px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse
            </p>
            <p
              style={{
                color: "#525252",
                fontFamily: "Commissioner",
                fontWeight: "600",
                fontSize: "16px",
                textAlign: "center",
                lineHeight: "19px",
                position: "relative",
                bottom: "130px",
                right: "35px",
              }}
            >
              May 9, 2020
            </p>
          </div>
        </div>
      </div>

      <div
        class="slider"
        style={{
          position: "relative",
          width: "1440px",
          height: "100%",
          position: "relative",
          top: "150px",
        }}
      >
        <div
          class="slides"
          style={{ display: "flex", overflow: "hidden" }}
        ></div>
        <div
          class="dots"
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: "15px",
            width: "100%",
          }}
        >
          <span></span>
          <span
            class="dot"
            style={{
              height: "15px",
              width: "15px",
              margin: "0 5px",
              background: "#323233",
              borderRadius: "50%",
              display: "inline-block",
              transition: "background-color 0.3s ease",
            }}
          ></span>
          <span
            class="dot"
            style={{
              height: "15px",
              width: "15px",
              margin: "0 5px",
              background: "#bbb",
              borderRadius: "50%",
              display: "inline-block",
              transition: "background-color 0.3s ease",
            }}
          ></span>
          <span
            class="dot"
            style={{
              height: "15px",
              width: "15px",
              margin: "0 5px",
              background: "#bbb",
              borderRadius: "50%",
              display: "inline-block",
              transition: "background-color 0.3s ease",
            }}
          ></span>
          <span
            class="dot"
            style={{
              height: "15px",
              width: "15px",
              margin: "0 5px",
              background: "#bbb",
              borderRadius: "50%",
              display: "inline-block",
              transition: "background-color 0.3s ease",
            }}
          ></span>
          <span
            class="dot"
            style={{
              height: "15px",
              width: "15px",
              margin: "0 5px",
              background: "#bbb",
              borderRadius: "50%",
              display: "inline-block",
              transition: "background-color 0.3s ease",
            }}
          ></span>
          <span
            class="dot"
            style={{
              height: "15px",
              width: "15px",
              margin: "0 5px",
              background: "#bbb",
              borderRadius: "50%",
              display: "inline-block",
              transition: "background-color 0.3s ease",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default HappyParents;
