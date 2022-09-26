import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./CartItem.module.css";

import {
  CART_REMOVE_ITEM,
  CART_DECREASE_ITEM_QTY,
  CART_INCREASE_ITEM_QTY,
} from "../../constants/cartConstants";

class CartItem extends Component {
  decreaseQtyHandler = () => {
    const { decreaseItemQuantity, item } = this.props;
    decreaseItemQuantity(item.id);
  };

  increaseQtyHandler = () => {
    const { increaseItemQuantity, item } = this.props;
    increaseItemQuantity(item.id);
  };

  removeItemHandler = () => {
    const { removeItemFromCart, item } = this.props;
    removeItemFromCart(item.id);
  };

  render() {
    const item = this.props.item;

    return (
      <tr>
        <td>
          <div className={classes["product-info"]}>
            <button
              className={classes["btn-remove"]}
              onClick={this.removeItemHandler}
            >
              Remove
            </button>
            <Link to={`/product/${item.id}`}>
              <img
                alt={item.title}
                src={item.image}
                className={classes["product-img"]}
              />
            </Link>
            <Link to={`/product/${item.id}`}>
              <p>{item.title}</p>
            </Link>
          </div>
        </td>
        <td>{`$${item.price.toFixed(2)}`}</td>
        <td>
          <div className="qty-updown">
            <button
              className="btn-qty"
              disabled={item.qty === 1}
              onClick={this.decreaseQtyHandler}
            >
              -
            </button>
            <input
              className="qty-input"
              type="number"
              value={item.qty}
              onChange={() => {}}
              min="1"
            />
            <button className="btn-qty" onClick={this.increaseQtyHandler}>
              +
            </button>
          </div>
        </td>
        <td>{`$${(item.price * item.qty).toFixed(2)}`}</td>
      </tr>
    );
  }
}

// mapping dispatch to props
const mapDispatchToProps = (dispatch) => ({
  decreaseItemQuantity: (id) => {
    dispatch({ type: CART_DECREASE_ITEM_QTY, payload: { id } });
  },
  increaseItemQuantity: (id) => {
    dispatch({ type: CART_INCREASE_ITEM_QTY, payload: { id } });
  },

  removeItemFromCart: (id) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: { id } });
  },
});

export default connect(null, mapDispatchToProps)(CartItem);
