import React from "react";
import css from "./Card.module.css";
import Button from "../Button/Button";
import Api from "../../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { incremented } from "../../slices/MainSlice";

function Card({ image, id, title, description, price, isAdmin = false }) {
  const value = useSelector((state) => state.main.value);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(incremented());
  };
  console.log(value);
  const deletePizza = () => {
    const res = window.confirm(
      "Вы действительно хотите удалить " + title + "?"
    );
    if (res) {
      Api.deletePizza(id).then(() => {
        window.location.reload();
      });
    }
  };
  return (
    <div to className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={css.title}>{title}</div>
      <p className={css.description}>{description}</p>
      <div className={css.footer}>
        <div>{value}</div>
        {isAdmin ? (
          <Button onClick={deletePizza} variant="empty" title="Удалить" />
        ) : (
          <Button onClick={addToCart} variant="empty" title="В корзину" />
        )}
      </div>
    </div>
  );
}

export default Card;
