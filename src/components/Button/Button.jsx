import React from "react";
import css from "./Button.module.css";

function Button(props) {
  return (
    <button className={props.variant === "empty" ? css.empty : css.full}>
      {props.title}
    </button>
  );
}

export default Button;
