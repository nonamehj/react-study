import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";
const SingleProducts = () => {
  const { productsId } = useParams();
  const product = products.find((product) => product.id === productsId);
  const { name, image } = product;
  return (
    <section className="section products">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProducts;
