import React, { Fragment} from "react";
import classes from "./Header.module.css";
import banner from '../../assets/img/banner.jpg'
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>PizzaApp</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={banner} alt="Fatias de pizza de calabresa"/>
        </div>
    </Fragment>
  )
}

export default Header;
