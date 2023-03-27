import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import cartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const cartCtx = useContext(cartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          onAddToCart={addToCartHandler}
          id={props.id}
        ></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
