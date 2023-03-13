import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./SliderCard.module.css";

import card1 from "../../assets/SliderCards/card1.jpg";
import card2 from "../../assets/SliderCards/card2.jpg";
import card3 from "../../assets/SliderCards/card3.jpg";
import card4 from "../../assets/SliderCards/card4.jpg";
import card5 from "../../assets/SliderCards/card5.jpg";
import card6 from "../../assets/SliderCards/card6.jpg";
import card7 from "../../assets/SliderCards/card7.jpg";
import card8 from "../../assets/SliderCards/card8.jpg";
import card9 from "../../assets/SliderCards/card9.jpg";
import card10 from "../../assets/SliderCards/card10.jpg";
import testicon from "../../assets/slider.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <img className={css.nextArrow} src={testicon} alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <img className={css.prevArrow} src={testicon} alt="" />
    </div>
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className={css.card1}>
            <img src={card1} alt="" />
          </div>
          <div className={css.card1}>
            <img src={card2} alt="" />
          </div>
          <div className={css.card1}>
            <img src={card3} alt="" />
          </div>
          <div className={css.card1}>
            <img src={card4} alt="" />
          </div>
          <div className={css.card1}>
            <img src={card5} alt="" />
          </div>
          <div className={css.card1}>
            <img src={card6} alt="" />
          </div>
          <div className={css.card1}>
            <img src={card5} alt="" />
          </div>
          <div className={css.card1}>
            <img src={card6} alt="" />
          </div>
          <div className={css.card1}>
            <img src={card7} alt="" />
          </div>
          <div className={css.card1}>
            <img src={card8} alt="" />
          </div>
          <div className={css.card1}>
            <img src={card9} alt="" />
          </div>
          <div className={css.card1}>
            <img src={card10} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
