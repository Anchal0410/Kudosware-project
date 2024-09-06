import React from "react";
import toy from "../assets/toy.svg";
import vector from "../assets/Vector1.svg";

const ContactUs = () => {
  return (
    <div>
      <p
        style={{
          width: "245px",
          height: "59px",
          fontFamily: "Commissioner",
          fontWeight: "700",
          fontSize: "48px",
          lineHeight: "58px",
          color: "#323233",
          position: "relative",
          top: "180px",
          left: "650px",
        }}
      >
        Contact Us{" "}
        <img
          src={vector}
          style={{ position: "relative", left: "250px", bottom: "60px" }}
          alt=""
        />
      </p>

      {/* // input div  */}
      <div
        style={{
          display: "flex",
          width: "1440px",
          height: "704px",
          background: "#7FBCB40F",
          position: "relative",
          top: "230px",
        }}
      >
        <div>
          <p
            style={{
              width: "111px",
              height: "22px",
              fontFamily: "Comfortaa",
              fontWeight: "400",
              position: "relative",
              left: "100px",
              top: "80px",
            }}
          >
            First Name
          </p>
          <input
            type="text"
            style={{
              border: "1px",
              borderRadius: "4px ppx 0px 0px",
              border: "1px solid #0000005C",
              position: "relative",
              top: "100px",
              left: "100px",
              width: "327px",
              height: "47px",
              gap: "0px",
            }}
          />
        </div>
        <div>
          <p
            style={{
              width: "111px",
              height: "22px",
              fontFamily: "Comfortaa",
              fontWeight: "400",
              position: "relative",
              left: "210px",
              top: "80px",
            }}
          >
            Last Name
          </p>
          <input
            type="text"
            style={{
              border: "1px",
              borderRadius: "4px",
              border: "1px solid #0000005C",
              position: "relative",
              top: "100px",
              left: "200px",
              width: "327px",
              height: "47px",
              gap: "0px",
            }}
          />
        </div>
        <div>
          <p
            style={{
              width: "211px",
              height: "22px",
              fontFamily: "Comfortaa",
              fontWeight: "400",
              position: "relative",
              right: "550px",
              top: "220px",
            }}
          >
            Email Address
          </p>
          <input
            type="text"
            style={{
              border: "1px",
              borderRadius: "4px",
              border: "1px solid #0000005C",
              position: "relative",
              top: "250px",
              right: "550px",
              width: "327px",
              height: "47px",
              gap: "0px",
            }}
          />
        </div>
        <div>
          <p
            style={{
              width: "211px",
              height: "22px",
              fontFamily: "Comfortaa",
              fontWeight: "400",
              position: "relative",
              right: "450px",
              top: "220px",
            }}
          >
            Phone Number
          </p>
          <input
            type="text"
            style={{
              border: "1px",
              borderRadius: "4px ",
              border: "1px solid #0000005C",
              position: "relative",
              top: "250px",
              right: "460px",
              width: "327px",
              height: "47px",
              gap: "0px",
            }}
          />
        </div>
        <div>
          <p
            style={{
              width: "211px",
              height: "22px",
              fontFamily: "Comfortaa",
              fontWeight: "400",
              position: "relative",
              right: "1200px",
              top: "360px",
            }}
          >
            Message
          </p>
          <input
            type="text"
            style={{
              border: "1px",
              borderRadius: "4px",
              border: "1px solid #0000005C",
              position: "relative",
              top: "370px",
              right: "1200px",
              width: "738px",
              height: "172px",
              gap: "0px",
            }}
          />
        </div>
        <div>
          <img
            src={toy}
            alt="toy"
            style={{ position: "relative", right: "800px", top: "100px" }}
          />
        </div>
        <button
          style={{
            background: "#FCEBA3",
            width: "714px",
            height: "69px",
            borderRadius: "24px",
            padding: "20px 272px 20px 272px",
            gap: "7px",
            position: "relative",
            fontFamily: "Inter",
            top: "600px",
            right: "1850px",
            fontSize: "14px",
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
