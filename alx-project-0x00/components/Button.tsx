import React from "react";

interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  text: string;
}
const Button: React.FC<ButtonProps> = ({ size, shape, text }) => {
  return <button className={`${shape}`}>{text}</button>;
};

export default Button;
