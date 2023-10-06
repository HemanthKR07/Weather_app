import React from "react";
import Nav from "./components/Nav/Nav";
import "./Faq.css";
import F1 from "./components/faq_c/F1.jsx";
import faq from "C:/Users/Hemanth KR/OneDrive/Desktop/webD/NCC_Web/src/images/faq-1.png";

function Faq() {
  return (
    <>
      <div className="d1">
        <Nav />
        <img src={faq} alt="" className="faq_img" />
      </div>
      <div className="f1_block">
        <F1 />
        <F1></F1>
      </div>
    </>
  );
}
export default Faq;
