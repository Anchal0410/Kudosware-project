import React from "react";
import logo from "../assets/logo1.svg";
import f1 from "../assets/f1.svg";
import f2 from "../assets/f2.svg";
import f3 from "../assets/f3.svg";
import f4 from "../assets/f4.svg";
import f5 from "../assets/f5.svg";
import f6 from "../assets/f6.svg";
import f7 from "../assets/f7.svg";
import f8 from "../assets/f8.svg";
const Footer = () => {
  return (
    <div
      style={{
        width: "1440px",
        height: "446px",
        position: "relative",
        top: "300px",
        background: "#1A95CF40",
      }}
    >
      <div className="flowerDiv">
        <img
          src={logo}
          alt="logo1"
          style={{
            width: "110px",
            height: "109px",
            position: "relative",
            top: "100px",
            left: "210px",
          }}
        />
        <img src={f1} alt="logo1" />
        <img
          src={f2}
          alt="logo1"
          style={{ position: "relative", bottom: "50px" }}
        />
        <img
          src={f8}
          alt="logo1"
          style={{ position: "relative", bottom: "80px" }}
        />
        <img
          src={f3}
          alt="logo1"
          style={{ position: "relative", bottom: "180px", left: "70px" }}
        />
        <img
          src={f4}
          alt="logo1"
          style={{ position: "relative", bottom: "320px", left: "130px" }}
        />
        <img
          src={f5}
          alt="logo1"
          style={{ position: "relative", bottom: "483px", left: "180px" }}
        />
        <img
          src={f6}
          alt="logo1"
          style={{ position: "relative", bottom: "623px", left: "290px" }}
        />
        <img
          src={f7}
          alt="logo1"
          style={{ position: "relative", bottom: "710px", left: "370px" }}
        />
      </div>
      <div style={{ position: "relative", bottom: "1040px", left: "700px" }}>
        <p
          style={{
            fontFamily: "League Spartan",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "20px",
            width: "200px",
          }}
        >
          Our Company
        </p>
        <p
          style={{
            fontFamily: "League Spartan",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "16px",
            color: "#212421",
            margin: "20px 10px 20px 0px",
            width: "200px",
          }}
        >
          Blog
        </p>
        <p
          style={{
            fontFamily: "League Spartan",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "16px",
            color: "#212421",
            margin: "20px 10px 20px 0px",
            width: "200px",
          }}
        >
          About Us
        </p>
        <p
          style={{
            fontFamily: "League Spartan",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "16px",
            color: "#212421",
            margin: "20px 10px 20px 0px",
            width: "200px",
          }}
        >
          Careers
        </p>
      </div>
      <div style={{ position: "relative", bottom: "1190px", left: "1000px" }}>
        <p
          style={{
            fontFamily: "League Spartan",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "20px",
            width: "200px",
          }}
        >
          Products
        </p>
        <p
          style={{
            fontFamily: "League Spartan",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "16px",
            color: "#212421",
            margin: "20px 10px 20px 0px",
            width: "200px",
          }}
        >
          Subscription Plans
        </p>
        <p
          style={{
            fontFamily: "League Spartan",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "16px",
            color: "#212421",
            margin: "20px 10px 20px 0px",
            width: "200px",
          }}
        >
          Clothing
        </p>
        <p
          style={{
            fontFamily: "League Spartan",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "16px",
            color: "#212421",
            margin: "20px 10px 20px 0px",
            width: "200px",
          }}
        >
          Equipments
        </p>
        <p
          style={{
            fontFamily: "League Spartan",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "16px",
            color: "#212421",
            margin: "20px 10px 20px 0px",
            width: "200px",
          }}
        >
          Toys
        </p>
        <p
          style={{
            fontFamily: "League Spartan",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "16px",
            color: "#212421",
            margin: "20px 10px 20px 0px",
            width: "200px",
          }}
        >
          Clean out Closet
        </p>
      </div>
    </div>
  );
};

export default Footer;
