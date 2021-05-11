import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Cart from "../cart";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo className={classes.logo} />
        <nav className={classes.nav}>
          <ul className={classes.navItems}>
            <li className={classes.navItem}>
              <Link to="/" className={classes.navLink}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/login" className={classes.navLink}>
                SIGN IN
              </Link>
            </li>
            <li>
              <Cart />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
