import React from "react";
interface BtnProp {
  children: React.ReactNode;
  type: string;
  size: string;
}

const Button = ({ children, size, type }: BtnProp) => {
  return (
    <button
      className={` text-white rounded-lg cursor-pointer duration-300 transition-all
      ${size === "big" ? "px-8 py-2" : "px-4 py-2"}
      ${type === "accent" ? "bg-accent-500 hover:bg-accent-500/80" : ""}
      ${type === "primary" ? "bg-primary-500  hover:bg-primary-500/80" : ""}
      ${type === "neutral" ? "bg-black  hover:bg-black/80" : ""}
    `}
    >
      {children}
    </button>
  );
};

export default Button;
