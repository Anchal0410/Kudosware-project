import React from "react";
import img1 from "../assets/news.svg";
import img2 from "../assets/hungama.svg";
import img3 from "../assets/arynews.svg";
import img4 from "../assets/urdunews.svg";
import img5 from "../assets/news24.svg";
const AsFeaturedIn = () => {
  return (
    <div>
      <p
        style={{
          position: "relative",
          bottom: "240px",
          left: "80px",
          fontFamily: "Commissioner",
          fontWeight: "500",
          fontSize: "40px",
          lineHeight: "36px",
          color: "#323233",
        }}
      >
        As featured in
      </p>
      <hr
        style={{
          width: "360px",
          height: "4px",
          position: "relative",
          bottom: "220px",
          left: "80px",
          borderRadius: "16px",
          background: "#EBB5BB",
        }}
      />
      <div
        className="image-div"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          position: "relative",
          bottom: "100px",
          width: "1440px",
        }}
      >
        <img src={img1} alt="news1" />
        <img src={img2} alt="news2" />
        <img src={img3} alt="news3" />
        <img src={img4} alt="news4" />
        <img src={img5} alt="news5" />
      </div>
      <div
        class="slider"
        style={{ position: "relative", width: "1440px", height: "100%" }}
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
        </div>
      </div>
    </div>
  );
};
export default AsFeaturedIn;
