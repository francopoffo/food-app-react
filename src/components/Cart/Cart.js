import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Pizza de calabresa", amount: 2, price: 12.99 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>35.31</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>Fechar</button>
        <button className={classes.button}>Pedir</button>
      </div>
    </Modal>
  );
}

export default Cart;
