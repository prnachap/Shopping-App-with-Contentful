import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Cart from "../cart";

const Navigation = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/">
          <Logo className={classes.logo} />
        </Link>
        <nav className={classes.nav}>
          <ul className={classes.navItems}>
            <li className={classes.navItem}>
              <Link to="/" className={classes.navLink}>
                Shop
              </Link>
            </li>
            <li>
              {loggedIn ? (
                <Link to="/logout" className={classes.navLink}>
                  SIGN OUT
                </Link>
              ) : (
                <Link to="/login" className={classes.navLink}>
                  SIGN IN
                </Link>
              )}
            </li>
            <li>
              <Link to="/checkout">
                <Cart />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
