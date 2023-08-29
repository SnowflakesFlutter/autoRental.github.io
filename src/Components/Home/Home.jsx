import React from "react";
import "./Home.css";
import hero from "../../images/hero/main-car.png";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="secContainer">
        <div className="homeText">
          <span className="homeSpan">Meet your new car</span>
          <h1 className="homeTitle">Honda Civic Type R</h1>
          <div className="btns flex">
            <button className="btn">More Details</button>
            <button className="btn primaryBtn">Test Drive</button>
          </div>
        </div>
        <div className="homeImage">
          <img src={hero} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
