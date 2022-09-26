import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import Container from "./Container";
import classes from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={classes.header}>
        <Container>
          <nav className={classes.nav}>
            <Link to="/home">
              <h1>Shop</h1>
            </Link>

            <ul className={classes["nav-links"]}>
              <li>
                <NavLink
                  to="home"
                  className={({ isActive }) => (isActive ? classes.active : "")}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="orders"
                  className={({ isActive }) => (isActive ? classes.active : "")}
                >
                  Orders
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="cart"
                  className={({ isActive }) => (isActive ? classes.active : "")}
                >
                  Cart{" "}
                  <span className={classes.qty}>
                    {this.props.totalQuantity}
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalQuantity: state.cart.totalQuantity,
  };
};

export default connect(mapStateToProps, null)(Header);
