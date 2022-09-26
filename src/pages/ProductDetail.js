import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../lib/api";
import ProductDetails from "../components/products/ProductDetails";

const ProductDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const product = await getProductById(id);
      setProduct(product);
      setIsLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (!product) {
    return <p>Product could not be fetched!</p>;
  }

  return <ProductDetails product={product} />;
};

export default ProductDetail;
