import React from "react";
import css from "./UnderSlider.module.css";
import pizzaSlide from "../../assets/pizza.webp";

function UnderSlider({ img, name, pay }) {
  return (
    <div className={css.underSlide}>
      <img src={img} alt="" />
      <div className={css.underSale}>
        <h1>{name}</h1>
        <h2>{pay}</h2>
      </div>
    </div>
  );
}

export default UnderSlider;
