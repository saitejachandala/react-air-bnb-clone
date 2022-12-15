import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-div">
      <img
        src="https://topnine.co/gatsby/static/b8fdef4f5a9be1c21f26f1a1e8776edb/30329/grid.png"
        className="hero-img"
        alt=""
      ></img>
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
