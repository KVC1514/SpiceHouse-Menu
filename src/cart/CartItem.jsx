import { useSelector } from "react-redux";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import getCurrentQuantityById from "./cartSlice";

function CartItem({ item }) {
  const { FoodId, Name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(FoodId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {Name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{totalPrice}</p>
        <UpdateItemQuantity Name={FoodId} currentQuantity={currentQuantity} />
        <DeleteItem Name={FoodId} />
      </div>
    </li>
  );
}

export default CartItem;
