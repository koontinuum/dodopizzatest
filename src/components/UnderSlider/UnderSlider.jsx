import React from "react";
import css from "./UnderSlider.module.css";
import pizzaSlide from "../../assets/pizza.webp";

function UnderSlider() {
  return (
    <div className={css.underSlide}>
      <img src={pizzaSlide} alt="" />
      <div className={css.underSale}>
        <h1>Пеперони</h1>
        <h1>от 445 сом</h1>
      </div>
    </div>
  );
}

export default UnderSlider;
