import React, { useState } from "react";
import css from "./CreateProduct.module.css";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../api/Api";

function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const [isSending, setSending] = useState(false);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    Api.createProduct({ name, price, description, type, image })
      .then(() => {
        alert("Вы добавили продукт");
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
        setSending(false);
      });
  };
  return (
    <div className="container">
      <form onSubmit={submit} className={css.createProductmenu}>
        <Title title="Добавить пиццу" position="center" color="#ff690f" />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Фото"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Название"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
          placeholder="Описание"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Цена"
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value={"pizza"}>Пицца</option>
          <option value={"drink"}>Напитки</option>
        </select>
        <Button
          disabled={isSending}
          type="sumbit"
          title={isSending ? "Продукт добавляется..." : "Добавить продукт"}
        />
        <Link to="/admin" className={css.getPizza}>
          <img
            src="https://img.icons8.com/doodle/256/reply-arrow.png"
            alt="Добавить продукт"
          />
        </Link>
      </form>
    </div>
  );
}

export default CreateProduct;
