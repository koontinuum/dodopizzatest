import React from "react";
import { Link } from "react-router-dom";
import css from "./Card.module.css";
import Button from "../Button/Button";

function Card(props) {
  return (
    <div to className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img src={props.image} alt="" />
      </div>
      <div className={css.title}>{props.title}</div>
      <p className={css.description}>{props.description}</p>
      <div className={css.footer}>
        <div>{props.price}</div>
        <Button variant="empty" title="Выбрать" />
      </div>
    </div>
  );
}

export default Card;
