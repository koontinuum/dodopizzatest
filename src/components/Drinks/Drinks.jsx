import React from "react";
import css from "./Drinks.module.css";
import Button from "../Button/Button";
import Api from "../../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { incremented } from "../../slices/MainSlice";

function Drinks({
  image,
  id,
  title,
  name,
  description,
  price,
  isAdmin = false,
}) {
  const value = useSelector((state) => state.main.value);

  const dispatch = useDispatch();

  const testRedux = () => {
    dispatch(incremented());
  };

  const deleteDrinks = () => {
    const res = window.confirm(
      "Вы действительно хотите удалить " + title + "?"
    );
    if (res) {
      Api.deleteDrinks(id).then(() => {
        window.location.reload();
      });
    }
  };
  return (
    <div to className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={css.title}>{name}</div>
      <p className={css.description}>{description}</p>
      <div className={css.footer}>
        <div>{price}</div>
        {isAdmin ? (
          <Button onClick={deleteDrinks} variant="empty" title="Удалить" />
        ) : (
          <Button onClick={testRedux} variant="empty" title="В корзину" />
        )}
      </div>
    </div>
  );
}

export default Drinks;
