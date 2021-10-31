import React from "react";
import "./CSS/Banner.css";
import Tree from "../Assets/tree.png";
import Features from "./Features";

function Banner() {
  return (
    <div>
      <div className="bannerss my-5">
        <div className="textss">
          <h1>Green Spaces</h1>
        </div>
        <img src={Tree} />
      </div>

      <Features />
    </div>
  );
}

export default Banner;
