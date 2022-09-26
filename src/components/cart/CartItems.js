import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./CartItems.module.css";
import CartItem from "./CartItem";

class CartItems extends Component {
  render() {
    const cartItems = this.props.cartItems;

    return (
      <div className={classes.box}>
        <h1>Shopping Cart</h1>

        {[...cartItems].length !== 0 ? (
          <div className={classes["cart-table"]}>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>

              <tbody>
                {[...cartItems].map((item) => {
                  return <CartItem item={{ ...item }} key={item.id} />;
                })}
              </tbody>
            </table>

            <p className={classes.total}>
              Total: <span>{`$${this.props.total.toFixed(2)}`}</span>
            </p>
          </div>
        ) : (
          <div className={classes["empty-cart-msg"]}>
            <p>Cart is empty!</p>
          </div>
        )}
      </div>
    );
  }
}

// mapping cart state to props
function mapStateToProps(state) {
  const cart = state.cart;
  return {
    cartItems: cart.cartItems,
    total: cart.total,
  };
}

export default connect(mapStateToProps, null)(CartItems);
