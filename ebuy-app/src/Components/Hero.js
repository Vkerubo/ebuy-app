import React from "react";
import WomanImg from "../img/woman_hero.png";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
          </div>
          <h1 className="text-1">
            *New Trends for STYLISH AUTUMN SALE... <br />
            <span className="text-2">*Hurry while stock lasts!</span>
          </h1>
          <Link
            to={"/"}
            className="text-3"
          >
            Find your style
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
