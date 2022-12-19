import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>As melhores pizzas, entregues para você</h2>
      <p>
        Escolha a sua pizza favorita de nossa vasta seleção de sabores
        disponíveis e desfrute de um delicioso almoço ou jantar em casa.
      </p>
      <p>
        Todas as nossas pizzas são feitas com ingredientes de alta qualidade,
        just-in-time e claro, por chefs experientes!
      </p>
    </section>
  );
};

export default MealsSummary;
