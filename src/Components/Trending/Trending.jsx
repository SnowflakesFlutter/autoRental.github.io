import React from "react";
import "./Trending.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

import car1 from "../../images/cars-big/benz.jpg";
import car2 from "../../images/cars-big/audia1.jpg";
import car3 from "../../images/cars-big/golf6.jpg";

const Trending = () => {
  return (
    <section id="trending" className="trending section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Trending Near You</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>
        <div className="carContainer grid">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>
            <div className="price_seller flex">
              <span className="price">$41,200</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>

          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car2} alt="" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>
            <div className="price_seller flex">
              <span className="price">$41,200</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>

          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>
            <div className="price_seller flex">
              <span className="price">$41,200</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
