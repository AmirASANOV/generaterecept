import React from "react";
import s from "./Input.module.scss";

const Input = () => {
  return (
    <div className={s.input_group}>
      <input type="text" required />
      <label>Рецепт</label>
    </div>
  );
};

export default Input;
