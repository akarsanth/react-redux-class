import React from "react";
import { Link } from "react-router-dom";

import classes from "./ProductItem.module.css";

class ProductItem extends React.Component {
  render() {
    const product = this.props.product;

    return (
      <Link to={`/product/${product.id}`}>
        <div className={classes.item}>
          <img src={product.image} alt={product.title} />

          <div className={classes["product-content"]}>
            <h3>{product.title}</h3>

            <p>$ {product.price}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default ProductItem;
