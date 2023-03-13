import React from "react";
import css from "./UnderHeader.module.css";
import Button from "../Button/Button";
import DotLive from "../../assets/dotlive.gif";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/AuthSlice";

function UnderHeader() {
  const location = useLocation();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper + " container"}>
      <div className={css.underHeader}>
        <a href="#">Пицца</a>
        <a href="#">Комбо</a>
        <a href="#">Закуски</a>
        <a href="#">Десерты</a>
        <a href="#">Напитки</a>
        <a href="#">Другие товары</a>
        <a href="#">Акции</a>
        <a href="#">Контакты</a>
        <a href="#">О нас</a>
        <a href="#">
          <img src={DotLive} alt="" /> Прямой эфир
        </a>
      </div>
      <Button title="Корзина" />
      {location?.pathname === "/admin" && (
        <Button title="Выйти" onClick={onLogout} variant={"empty"} />
      )}
    </div>
  );
}

export default UnderHeader;
