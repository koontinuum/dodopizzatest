import React from "react";
import css from "./Button.module.css";

function Button({ title, variant, ...props }) {
  return (
    <button {...props} className={variant === "empty" ? css.empty : css.full}>
      {title}
    </button>
  );
}

export default Button;
