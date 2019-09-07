import React from "react";
import classNames from "classnames";

import "./button.style.scss";

const Button = ({ confirm, danger, onClick, disabled, children }) => {
  const buttonClass = classNames("button", {
    "button--confirm": confirm,
    "button--danger": danger
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
