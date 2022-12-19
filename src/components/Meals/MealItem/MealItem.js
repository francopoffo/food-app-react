import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

function MealItem(props) {
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
        <MealItemForm id={props.id}/>
      </div>
    </li>
  );
}

export default MealItem;
