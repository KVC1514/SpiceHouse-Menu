import LinkButton from "../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to Order</LinkButton>
      <p className="mt-7 font-semibold">Empty Cart!! Please Order your Item</p>
    </div>
  );
}

export default EmptyCart;
