import products from "../data/products";
import orders from "../data/orders";

export const getAllProducts = async () => {
  return products;
};

export const getProductById = async (id) => {
  const product = products.find((product) => product.id === parseInt(id));

  return product;
};

export const getOrders = async () => {
  return orders;
};
