import React from "react";
import Hero from "./(home)/hero/Hero";
import HotProducts from "./(home)/hot product/HotProducts";
import Categories from "./(home)/categories/Categories";
import LatestProducts from "./(home)/latest products/LatestProducts";
import Phones from "./(home)/phones/Phones";

const Home = () => {
  return (
    <main>
      <Hero />
      <HotProducts />
      <Categories />
      <LatestProducts />
      <Phones />
    </main>
  );
};

export default Home;
