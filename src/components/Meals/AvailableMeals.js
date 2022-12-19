import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const PIZZA_MEALS = [
  {
    id: "m1",
    name: "Pizza de calabresa",
    description: "Molho de tomate, calabresa e cebola.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Pizza de quatro queijos",
    description: "Mussarela, parmesão, gorgonzola e catupiry.",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Pizza margherita",
    description: "Molho de tomate, mussarela de búfala e manjericão.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Pizza vegetariana",
    description:
      "Molho de tomate, tomate em cubos, abobrinha, berinjela e manjericão.",
    price: 18.99,
  },
];

function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {PIZZA_MEALS.map((pizza) => (
            <MealItem
              key={pizza.id}
              name={pizza.name}
              description={pizza.description}
              price={pizza.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
