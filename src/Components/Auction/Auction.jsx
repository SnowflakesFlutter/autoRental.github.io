import React from "react";
import "./Auction.css";

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

import car1 from "../../images/cars-big/toyota-box.png";
import car2 from "../../images/cars-big/audia1.jpg";
import car3 from "../../images/cars-big/benz-box.png";
import car4 from "../../images/cars-big/bmw-box.png";
import car5 from "../../images/cars-big/passat-box.png";
import car6 from "../../images/cars-big/golf6-box.png";

const Auction = () => {
  return (
    <section id="auctions" className="auction section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Active Auctions</h3>
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
            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car2} alt="" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>
            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>
            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car4} alt="" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>
            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car5} alt="" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>
            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car6} alt="" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>
            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auction;
