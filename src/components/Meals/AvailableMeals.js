import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [FetchError, setError] = useState();

  const PIZZA_MEALS = [];

  useEffect(() => {
    const fetchPizzas = async () => {
      const response = await fetch(
        "https://food-app-react-c364f-default-rtdb.firebaseio.com/pizzas.json"
      );

      if (!response.ok) {
        throw new Error("Algo de errado aconteceu!");
      }

      const data = await response.json();

      for (const key in data) {
        PIZZA_MEALS.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setPizzas(PIZZA_MEALS);
      setIsLoading(false);
    };

    fetchPizzas().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (FetchError) {
    return (
      <section className={classes.error}>
        <p>{FetchError}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Carregando...</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {pizzas.map((pizza) => (
            <MealItem
              id={pizza.id}
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
