"use client";

import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import Product from "@/components/product/Product";
import { products } from "@/data";
import Link from "next/link";
import { title } from "process";
import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HotProducts = () => {
  const buttons = [
    {
      id: 1,
      title: "All",
      active: "all",
    },

    {
      id: 2,
      title: "Watch",
      active: "watch",
    },
    {
      id: 3,
      title: "Phone",
      active: "phone",
    },
    {
      id: 4,
      title: "Laptop",
      active: "laptop",
    },
    {
      id: 5,
      title: "Headphone",
      active: "headphone",
    },
  ];
  const [active, setActive] = useState("all");
  const [price, setPrice] = useState("10");
  return (
    <section className="py-5">
      <Container>
        <div className="flex justify-between">
          <h2 className="mb-2 capitalize text-3xl"> our hot products</h2>
          <Link href="/products">
            <span className="underline text-accent-500 flex font-bold items-center">
              All Products
              <MdKeyboardDoubleArrowRight fontSize={30} />
            </span>
          </Link>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="flex-1 py-7 px-5 bg-white shadow">
            <h2 className="text-2xl font-bold opacity-80"> Categories</h2>
            <ul>
              {buttons.map((button) => (
                <li key={button.id}>
                  <button
                    className={` ${
                      active === button.active
                        ? " px-2 text-white bg-orange-300"
                        : ""
                    } w-4/5 mt-3 border-b-2 text-left cursor-pointer`}
                    onClick={() => setActive(button.active)}
                  >
                    {button.title}
                  </button>
                </li>
              ))}
            </ul>
            <h2 className="mt-[15px] text-2xl font-bold opacity-80">Brand</h2>
            <select className="border-2">
              <option value="all">All</option>
              <option value="hp">HP</option>
              <option value="dell">Dell</option>
              <option value="apple">Apple</option>
              <option value="techno">Techno</option>
              <option value="infinix">Infinix</option>
              <option value="samsung">Samsung</option>
            </select>
            <h2 className="mt-[15px] text-2xl font-bold opacity-80">Price</h2>
            <input
              type="range"
              min={10}
              max={20000}
              value={price}
              className="w-4/5"
              onChange={(event) => setPrice(event.target.value)}
            />
            <div className="flex justify-between w-4/5">
              <span>${price}</span>
              <span>$20,000</span>
            </div>
            <Button size="big" type="accent">
              Clear Filter
            </Button>
          </div>
          <div className="flex-[5]">
            <div>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {products.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Product item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* <div className="flex justify-center gap-5 mt-5">
              <div className="p-2 cursor-pointer bg-secondary-400">
                <MdOutlineKeyboardArrowLeft size={20} />
              </div>
              <div className="p-2 cursor-pointer bg-secondary-400">
                <MdOutlineKeyboardArrowRight size={20} />
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HotProducts;
