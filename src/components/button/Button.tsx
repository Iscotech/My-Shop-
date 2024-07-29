import React from "react";
interface BtnProp {
  content: string;
}

const Button = ({ content }: BtnProp) => {
  return (
    <div className="w-[70px] bg-green-900 text-white">
      <button>{content}</button>
    </div>
  );
};

export default Button;
