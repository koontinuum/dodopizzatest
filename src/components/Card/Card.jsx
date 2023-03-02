import React from "react";
import css from "./Card.module.css";
import Button from "../Button/Button";
import Api from "../../api/Api";

function Card({ image, id, title, description, price, isAdmin = false }) {
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
        <div>{price}</div>
        {isAdmin ? (
          <Button onClick={deletePizza} variant="empty" title="Удалить" />
        ) : (
          <Button variant="empty" title="В корзину" />
        )}
      </div>
    </div>
  );
}

export default Card;
