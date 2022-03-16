import React, { ButtonHTMLAttributes, FC } from "react";

interface InputElement extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  onClick: () => void;
}

const Button: FC<InputElement> = ({ buttonText, onClick }) => {
  return <button onClick={onClick}>{buttonText}</button>;
};

export default Button;
