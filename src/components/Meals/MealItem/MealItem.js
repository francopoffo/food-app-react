import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }

  return (
    <li className={classes.meal}>
      <div className={classes.pizza}>
        <div>
          <h3>{props.name}</h3>
          <p className={classes.description}>{props.description}</p>
        </div>
        <span className={classes.price}>R$ {props.price.toFixed(2)}</span>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
