import React, { Component } from "react";

import ProductList from "../components/products/ProductList";
import { getAllProducts } from "../lib/api";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      this.setState({ products });
    };

    fetchAllProducts();
  }

  render() {
    const products = this.state.products;
    return <ProductList products={products} heading="Products" />;
  }
}

export default Home;
