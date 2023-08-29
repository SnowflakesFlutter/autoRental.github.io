import React from "react";
import "./Sellers.css";

import sellerImage1 from "../../images/chooseUs/icon1.png";
import sellerImage2 from "../../images/chooseUs/icon2.png";
import sellerImage3 from "../../images/chooseUs/icon3.png";

const Sellers = () => {
  return (
    <section className="sellers">
      <div className="secContainer container">
        <div className="secHeading grid">
          <h3 className="secTitle">Explore top sellers in town</h3>
          <p>
            Joseph Samuel Girard holds the Guinness World Record for being the
            greatest salesman in the world
          </p>

          <div className="sellerContainer grid">
            <div className="singleSeller flex">
              <div className="imgDiv flex">
                <img
                  src={sellerImage1}
                  alt="The best sellers"
                  className="img"
                />
              </div>
              <span className="info">
                <h4 className="name">Toyota</h4>
                <p>From $40k</p>
              </span>
            </div>
            <div className="singleSeller flex">
              <div className="imgDiv flex">
                <img
                  src={sellerImage2}
                  alt="The best sellers"
                  className="img"
                />
              </div>
              <span className="info">
                <h4 className="name">Mercedez</h4>
                <p>From $60k</p>
              </span>
            </div>

            <div className="singleSeller flex">
              <div className="imgDiv flex">
                <img
                  src={sellerImage3}
                  alt="The best sellers"
                  className="img"
                />
              </div>
              <span className="info">
                <h4 className="name">Hyundai</h4>
                <p>From $23k</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sellers;
