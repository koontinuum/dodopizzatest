import React from "react";
import css from "./SliderCard.module.css";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6.png";
import card7 from "../../assets/card7.png";
import card8 from "../../assets/card8.png";
import card9 from "../../assets/card9.png";
import card10 from "../../assets/card10.png";

function SliderCard() {
  return (
    <div className={css.slide}>
      <div className={css.slidecontent}>
        <div className={css.cardimage}>
          <img src={card2} alt="" />
          <img src={card3} alt="" />
          <img src={card4} alt="" />
          <img src={card5} alt="" />
          <img src={card6} alt="" />
          <img src={card1} alt="" />
          <img src={card6} alt="" />
          <img src={card1} alt="" />
          <img src={card7} alt="" />
          <img src={card8} alt="" />
          <img src={card9} alt="" />
          <img src={card10} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
