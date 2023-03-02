import React from "react";
import css from "./Header.module.css";
import { Link } from "react-router-dom";
import mainlogo from "../../assets/dodopizzamainlogo.svg";
import coinicon from "../../assets/coinicon.png";
import gradestar from "../../assets/gradestar.png";

function Header() {
  return (
    <div className={css.wrapper + " container"}>
      <div className={css.main}>
        <Link to="/">
          <img className={css.mainlogo} src={mainlogo} alt="" />
        </Link>
        <div className={css.delivery}>
          <h4>Доставка пиццы Бишкек</h4>
          <p>
            34 мин · 4.75 <img src={gradestar} alt="" />
          </p>
        </div>
        <div className={css.call}>
          <a href="#">0 (551) 550-550</a>
          <p>Звонок по телефону</p>
        </div>
      </div>
      <div className={css.coins}>
        <div className={css.btncoin}>
          <img src={coinicon} alt="" />
          <h4>Додокоины</h4>
        </div>
        <button className={css.comein}>Войти</button>
      </div>
      {/* <Button title="Корзина" /> */}
    </div>
  );
}

export default Header;
