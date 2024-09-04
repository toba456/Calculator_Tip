import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const initialOrder = (): OrderItem[] => {
    const localStorageOrder = localStorage.getItem("order");
    return localStorageOrder ? JSON.parse(localStorageOrder) : [];
  };

  const [order, setOrder] = useState<OrderItem[]>(initialOrder);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
      localStorage.setItem("order", JSON.stringify(updatedOrder));
    } else {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
      localStorage.setItem("order", JSON.stringify([...order, newItem]));
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    const updatedOrder = order.filter((orderItem) => orderItem.id !== id);
    setOrder(updatedOrder);
    localStorage.setItem("order", JSON.stringify(updatedOrder));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };
  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  };
}
