import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import { IItem } from "@/types";
interface productProps {
  item: IItem;
  showBlackButton?: boolean;
  objectCover?: boolean;
}

const Product = ({ item, showBlackButton, objectCover }: productProps) => {
  return (
    <div className="flex-1 p-5 bg-secondary-200 shadow-lg">
      <div className="w-full h-52 relative">
        <Image
          fill
          src={item.img}
          alt="Product image"
          className={objectCover ? "object-cover" : "object-contain"}
        />
      </div>
      <div className="w-full p-5">
        <div className="flex justify-between gap-2">
          <span className="font-bold line-clamp-1 ">{item.title}</span>
          <span className="font-bold text-accent-500">${item.price}</span>
        </div>
        <span className="line-clamp-1">{item.desc}</span>
        <div className="flex justify-between gap-2">
          <Button size="small" type="primary">
            More Details
          </Button>
          {showBlackButton && (
            <Button size="small" type="neutral">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
