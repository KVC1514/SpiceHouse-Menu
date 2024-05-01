import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { deleteItem } from "./cartSlice";

function DeleteItem({ FoodId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(FoodId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
