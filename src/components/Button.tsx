import React from "react";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ children, color = "primary" }: ButtonProps) => {
  return <button className={"btn btn-" + color}>{children}</button>;
};

export default Button;
