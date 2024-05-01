import CartItem from "../cart/CartItem";
import EmptyCart from "../cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../cart/cartSlice";
import LinkButton from "../ui/LinkButton";
import { Button } from "semantic-ui-react";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your Cart, {username}</h2>
      <ul className="mt-3 divide-y dibide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.FoodId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" typr="primary">
          Order Now
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
