import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ size, shape, text }) => {
  return <button className={`${shape}`}>{text}</button>;
};

export default Button;
