import type { MenuItem } from "../types";

type MenuItemsProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemsProps) {
  return (
    <button
      className=" border-2 border-teal-500 bg-teal-100 hover:bg-teal-300 w-full p-3 flex justify-between rounded-lg"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className=" font-black">${item.price}</p>
    </button>
  );
}
