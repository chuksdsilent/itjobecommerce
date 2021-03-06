import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom"; //imp routing library

import styled from "styled-components";

const Wrapper = styled.div`
  .carousel-inner {
    font-family: "Poppins";
    position: initial;
  }
  .carousel-item {
    background-size: cover;
    position: relative;
    height: 500px;
    background-repeat: no-repeat;
    background-position: center;
  }
  .carousel4 {
    background-image: url("https://res.cloudinary.com/dsqnyciqg/image/upload/v1626602014/personal/slide4_aa3ho8.jpg");
  }
  .carousel2 {
    background-image: url("https://res.cloudinary.com/dsqnyciqg/image/upload/v1626602008/personal/slide1_zkj1fg.jpg");
  }
  .carousel1 {
    background-image: url("https://res.cloudinary.com/dsqnyciqg/image/upload/v1626601987/personal/slide3_ijfxjn.jpg");
  }
  .carousel3 {
    background-image: url("https://res.cloudinary.com/dsqnyciqg/image/upload/v1626602011/personal/slide2_zsdmoj.jpg");
  }
  .hero {
    position: absolute;
    text-align: center;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 65%;
    }
    @media screen and (max-width: 425px) {
      width: 80%;
    }
  }
  .hero .title1 {
    font-family: poppins;
    color: #fff;
    font-size: 50px;
    text-transform: capitalize;
    font-weight: bolder;
    line-height: 52px;
    margin: 12px 0;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      font-size: 40px;
    }
    @media screen and (max-width: 425px) {
      font-size: 30px;
    }
  }
  .sub-title {
    font-family: Zedaya;
    font-size: 44px;
    color: ${(props) => props.theme.color.ui_01};
  }

  .hero .sub-text {
    font-size: 18px;
    margin-bottom: 20px;
    color: #fff;
  }
  .carousel4 .hero .sub-text {
    color: ${(props) => props.theme.color.ui_01};
  }
  .hero {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .carousel3 .hero {
    right: -18%;
    left: auto;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
      left: 50%;
      right: auto;
    }
  }
  .hero-btn {
    text-transform: uppercase;
    color: #fff;
    line-height: 40px;
    letter-spacing: 1px;
    font-size: 13px;
    border: 1px solid #fff;
    padding: 13px 25px;
    border-radius: 3px;
    font-family: "Poppins";
  }
  .carousel3 .hero .hero-btn {
    color: ${(props) => props.theme.color.ui_01};
    border: 2px solid ${(props) => props.theme.color.ui_01};
  }
  .carousel4 .hero .hero-btn {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.ui_01};
    border: 2px solid ${(props) => props.theme.color.ui_01};
  }
  .hero-btn:hover {
    transition: 0.3s;
    background-color: #805949;
    border: 2px solid #805949;
  }
  .carousel3 .hero .hero-btn:hover {
    color: #fff;
    background-color: #d5764c;
    border: 2px solid #d5764c;
  }
  .carousel4 .hero .hero-btn:hover {
    color: #000;
    background-color: ${(props) => props.theme.color.white};
    border: 2px solid ${(props) => props.theme.color.white};
  }
  .carousel1 .hero .hero-btn:hover {
    color: #fff;
    background-color: #1e313f;
    border: 2px solid #1e313f;
  }
`;

export default function HomeCarousel() {
  return (
    <Wrapper>
      <Carousel fade controls={false}>
        <Carousel.Item interval={666666} className="carousel3">
          <div className="hero">
            <p className="sub-title">-Mega Sales-</p>
            <h1 className="title1">Get Luxury for a Token</h1>
            <p className="sub-text">Best Luxury Collections money can buy!</p>
            <Link to="/register" className="bold hero-btn">
              Get started
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={666666} className="carousel2">
          <div className="hero">
            <p className="sub-title">-Best Sellers-</p>

            <h1 className="title1">Your one stop Online Shop</h1>
            <p className="sub-text">Shop on a friendly budget</p>
            <Link to="/register" className="bold hero-btn">
              Get started
            </Link>
          </div>
        </Carousel.Item>

        {/* <Carousel.Item interval={666666} className="carousel1">
          <div className="hero">
            <h1 className="title1">SAVE AS YOU GO!</h1>
            <p className="sub-text">
              Shop for our discounted and quality products
            </p>
            <Link to="/register" className="bold hero-btn">
              Get started
            </Link>
          </div>
        </Carousel.Item> */}
        <Carousel.Item interval={666666} className="carousel4">
          <div className="hero">
            <p className="sub-title">-New Arrivals-</p>

            <h1 className="title1">Quality Utensils for less</h1>
            <p className="sub-text">Get the best of Etsea products</p>
            <Link to="/register" className="bold hero-btn">
              Get started
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
}
