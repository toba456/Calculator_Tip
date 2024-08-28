import React from "react";
import type { MenuItem } from "../types";

type MenuItemsProps = {
  item: MenuItem;
};

export default function MenuItem({ item }: MenuItemsProps) {
  return (
    <button className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
      <p>{item.name}</p>
      <p className=" font-black">${item.price}</p>
    </button>
  );
}
