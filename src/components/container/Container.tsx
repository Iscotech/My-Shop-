import React from "react";
interface ContainerProp {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProp) => {
  return <div className="container">{children}</div>;
};

export default Container;
