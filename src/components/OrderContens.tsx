import React from "react";
import type { MenuItem, OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderContensProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContens({ order, removeItem }: OrderContensProps) {
  return (
    <div>
      <h2 className=" font-black text-4xl">Consumo</h2>

      <div className=" space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className=" flex  justify-between border-t border-gray-200 py-5 items-center last-of-type:border-b"
          >
            <div>
              <p className=" text-lg w-auto pr-3">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className=" font-black w-auto">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className=" bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
