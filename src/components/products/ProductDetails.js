import React from "react";

import classes from "./ProductDetails.module.css";
import { connect } from "react-redux";
import { CART_ADD_ITEM } from "../../constants/cartConstants";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qty: 1 };
  }

  addToCartHandler = () => {
    const { addToCart, product } = this.props;
    addToCart({ ...product, qty: this.state.qty });
  };

  decreaseQty = () => {
    this.setState({ qty: this.state.qty - 1 });
  };

  increaseQty = () => {
    this.setState({ qty: this.state.qty + 1 });
  };

  render() {
    const { product } = this.props;

    return (
      <div className={classes["product-details"]}>
        <img src={product.image} alt={product.title} />

        <div className={classes.details}>
          <h2>{product.title}</h2>
          <h3>{product.description}</h3>
          <p className={classes["price-label"]}>$ {product.price}</p>

          <div className="add-to-cart-box">
            <p className="qty-label">Quantity:</p>
            <div className="qty-updown">
              <button
                className="btn-qty"
                disabled={this.state.qty === 1}
                onClick={this.decreaseQty}
              >
                -
              </button>
              <input
                className="qty-input"
                type="number"
                value={this.state.qty}
                onChange={() => {}}
                min="1"
              />
              <button className="btn-qty" onClick={this.increaseQty}>
                +
              </button>
            </div>
            <button className="btn" onClick={this.addToCartHandler}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => {
    dispatch({ type: CART_ADD_ITEM, payload: product });
  },
});

export default connect(null, mapDispatchToProps)(ProductDetails);
