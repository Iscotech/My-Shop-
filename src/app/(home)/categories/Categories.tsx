"use client";
import React from "react";

import Category from "../category/Category";
import Container from "@/components/container/Container";

import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";

const categories = [
  {
    id: 1,
    category: "Wrist watches",
    img: "/assets/cat-watch.jpg",
  },
  {
    id: 2,
    category: "Phones",
    img: "/assets/cat-phone.png",
  },
  {
    id: 3,
    category: "Laptop",
    img: "/assets/cat-laptop.jpg",
  },
  {
    id: 4,
    category: "Headphones",
    img: "/assets/cat-headphone.jpg",
  },
];
const Categories = () => {
  return (
    <section className="py-50 bg-secondary-100">
      <Container>
        <div>
          <h2 className="mb-2 text-3xl capitalize">Categories</h2>
          <div>
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-cat",
                  prevEl: ".swiper-button-prev-cat",
                }}
                pagination={{
                  el: ".swiper-pagination-cat",
                  type: "bullets",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
              >
                {categories.map((cat) => (
                  <SwiperSlide key={cat.id}>
                    <Category category={cat.category} img={cat.img} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex justify-center">
                <div className="swiper-pagination-cat"></div>
              </div>
              <div className=" absolute top-0 left-0 z-20 w-full h-full flex justify-between items-center">
                <div className="swiper-button-prev-cat">
                  <IoIosArrowBack size={25} />
                </div>

                <div className="swiper-button-next-cat">
                  <GrFormNext size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
