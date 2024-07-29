import Button from "@/components/button/Button";
import React from "react";

const Login = () => {
  return (
    <main className="w-full h-screen px-5 py-10 ">
      <h1 className="text-3xl font-bold">This is login</h1>
      <h1>welcome to shopcy</h1>
      <button>NELSON APPLY HERE</button>
      <div className="mb-20">
        <h1
          className="before:content-[''] before:w-[30px] before:h-[4px]   before:bg-red-600 before:absolute
         relative text-2xl  before:bottom-[15px] "
        >
          Nelson
        </h1>
      </div>

      <div className="w-[500px] h-[250px] text-3xl text-white bg-blue-500 relative ">
        <h1 className="absolute bottom-0 right-0">first child</h1>
        <h1>second child</h1>
        <h1>third child</h1>
      </div>
    </main>
  );
};

export default Login;
