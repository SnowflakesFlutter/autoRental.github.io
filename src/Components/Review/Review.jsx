import React from "react";
import "./Review.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import car1 from "../../images/cars-big/toyota-box.png";
import car2 from "../../images/cars-big/bmw-box.png";
import car3 from "../../images/cars-big/carforbox.jpg";
import user1 from "../../images/team/1.png";
import user2 from "../../images/team/2.png";
import user3 from "../../images/team/3.png";

const Review = () => {
  return (
    <section className="review section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Recent Reviews</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="reviewContainer grid">
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">2023 Cadiallac</h5>
            <span className="desc">
              Good cars are safe,fast,affordable to purchase,economical to
              opreate,reliable,capacious,comfortable,and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Jakline Nelson</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>

          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">2023 Cadiallac</h5>
            <span className="desc">
              Good cars are safe,fast,affordable to purchase,economical to
              opreate,reliable,capacious,comfortable,and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user2} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Jakline Nelson</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>

          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">2023 Cadiallac</h5>
            <span className="desc">
              Good cars are safe,fast,affordable to purchase,economical to
              opreate,reliable,capacious,comfortable,and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user3} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Jakline Nelson</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
