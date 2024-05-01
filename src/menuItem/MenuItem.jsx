import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";

function MenuItem({ Food }) {
  const dispatch = useDispatch();
  const { id, Name, unitPrice, img } = Food;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      FoodId: id,
      Name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={item.img} alt={Name} />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{Name}</p>
        <p>(unitPrice)</p>
      </div>

      {isInCart && (
        <div className="flex items-center gap-3 sm:gap-8">
          <UpdateItemQuantity FoodId={id} currentQuantity={currentQuantity} />
          <DeleteItem FoodId={id} />
        </div>
      )}
      <Button type="small" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </li>
  );
}

export default MenuItem;
